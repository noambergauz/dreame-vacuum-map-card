import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowLeft, MoreVertical, Pencil, Play, Trash2 } from 'lucide-react';
import { Modal } from '@/components/common';
import { useTranslation } from '@/hooks/useTranslation';
import { getEntityState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import { parseShortcuts, type ShortcutData } from './shortcutUtils';
import './ShortcutsModal.scss';

interface ShortcutsModalProps {
  opened: boolean;
  onClose: () => void;
}

type ShortcutView = 'list' | 'rename' | 'delete';

export function ShortcutsModal({ opened, onClose }: ShortcutsModalProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const shortcuts = parseShortcuts(entity.attributes.shortcuts);
  const [view, setView] = useState<ShortcutView>('list');
  const [selectedShortcut, setSelectedShortcut] = useState<ShortcutData | null>(null);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [shortcutName, setShortcutName] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDisabled = getEntityState(hass, entity.entity_id).disabled;

  useEffect(() => {
    if (activeMenuId === null) return;

    const closeOnOutsideClick = (event: MouseEvent): void => {
      if (!menuRef.current || !event.composedPath().includes(menuRef.current)) {
        setActiveMenuId(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setActiveMenuId(null);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeMenuId]);

  const closeModal = (): void => {
    setView('list');
    setSelectedShortcut(null);
    setActiveMenuId(null);
    setShortcutName('');
    setPending(false);
    setError(null);
    onClose();
  };

  const returnToList = (): void => {
    if (pending) return;
    setView('list');
    setSelectedShortcut(null);
    setShortcutName('');
    setError(null);
  };

  const handleStart = async (shortcut: ShortcutData): Promise<void> => {
    if (isDisabled || pending) return;
    setSelectedShortcut(shortcut);
    setPending(true);
    setError(null);
    try {
      await hass.callService('dreame_vacuum', 'vacuum_start_shortcut', {
        entity_id: entity.entity_id,
        shortcut_id: shortcut.id,
      });
      closeModal();
    } catch {
      setError(t('shortcuts.action_failed'));
      setPending(false);
    }
  };

  const openRename = (shortcut: ShortcutData): void => {
    setSelectedShortcut(shortcut);
    setShortcutName(shortcut.name);
    setActiveMenuId(null);
    setError(null);
    setView('rename');
  };

  const openDelete = (shortcut: ShortcutData): void => {
    setSelectedShortcut(shortcut);
    setActiveMenuId(null);
    setError(null);
    setView('delete');
  };

  const handleRename = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const trimmedName = shortcutName.trim();
    if (!selectedShortcut || !trimmedName || trimmedName === selectedShortcut.name || pending) return;

    setPending(true);
    setError(null);
    try {
      await hass.callService('dreame_vacuum', 'vacuum_rename_shortcut', {
        entity_id: entity.entity_id,
        shortcut_id: selectedShortcut.id,
        shortcut_name: trimmedName,
      });
      setPending(false);
      returnToList();
    } catch {
      setError(t('shortcuts.action_failed'));
      setPending(false);
    }
  };

  const handleDelete = async (): Promise<void> => {
    if (!selectedShortcut || pending) return;

    setPending(true);
    setError(null);
    try {
      await hass.callService('dreame_vacuum', 'vacuum_delete_shortcut', {
        entity_id: entity.entity_id,
        shortcut_id: selectedShortcut.id,
      });
      setPending(false);
      returnToList();
    } catch {
      setError(t('shortcuts.action_failed'));
      setPending(false);
    }
  };

  const title = view === 'list' ? t('shortcuts.title') : t(`shortcuts.${view}`);
  const trimmedName = shortcutName.trim();
  const renameDisabled =
    pending || !trimmedName || !selectedShortcut || trimmedName === selectedShortcut.name || isDisabled;

  return (
    <Modal opened={opened} onClose={pending ? () => undefined : closeModal} className="shortcuts-modal-sheet">
      <div className="shortcuts-modal">
        <header className="shortcuts-modal__header">
          {view !== 'list' && (
            <button
              type="button"
              className="shortcuts-modal__back"
              onClick={returnToList}
              disabled={pending}
              aria-label={t('shortcuts.cancel')}
            >
              <ArrowLeft />
            </button>
          )}
          <div>
            <h2 className="shortcuts-modal__title">{title}</h2>
            {view === 'list' && shortcuts.length > 0 && (
              <p className="shortcuts-modal__count">{t('shortcuts.count', { count: shortcuts.length })}</p>
            )}
          </div>
        </header>

        {view === 'list' && shortcuts.length === 0 ? (
          <div className="shortcuts-modal__empty">
            <p>{t('shortcuts.no_shortcuts')}</p>
            <p className="shortcuts-modal__empty-hint">{t('shortcuts.create_hint')}</p>
          </div>
        ) : view === 'list' ? (
          <div className="shortcuts-modal__grid">
            {shortcuts.map((shortcut) => (
              <article className="shortcuts-modal__card" key={shortcut.id}>
                <div className="shortcuts-modal__menu-wrapper" ref={activeMenuId === shortcut.id ? menuRef : undefined}>
                  <button
                    type="button"
                    className="shortcuts-modal__menu-toggle"
                    onClick={() => setActiveMenuId((id) => (id === shortcut.id ? null : shortcut.id))}
                    disabled={isDisabled || pending}
                    aria-label={t('shortcuts.manage', { name: shortcut.name })}
                    aria-expanded={activeMenuId === shortcut.id}
                  >
                    <MoreVertical />
                  </button>
                  {activeMenuId === shortcut.id && (
                    <div className="shortcuts-modal__menu" role="menu">
                      <button type="button" role="menuitem" onClick={() => openRename(shortcut)}>
                        <Pencil />
                        {t('shortcuts.rename')}
                      </button>
                      <button
                        type="button"
                        role="menuitem"
                        className="shortcuts-modal__menu-delete"
                        onClick={() => openDelete(shortcut)}
                      >
                        <Trash2 />
                        {t('shortcuts.delete')}
                      </button>
                    </div>
                  )}
                </div>

                <span className="shortcuts-modal__card-icon">
                  <Play />
                </span>
                <h3 className="shortcuts-modal__card-name">{shortcut.name}</h3>
                <button
                  type="button"
                  className="shortcuts-modal__start"
                  onClick={() => void handleStart(shortcut)}
                  disabled={isDisabled || pending}
                >
                  <Play />
                  {pending && selectedShortcut?.id === shortcut.id ? t('shortcuts.working') : t('shortcuts.start')}
                </button>
              </article>
            ))}
          </div>
        ) : view === 'rename' && selectedShortcut ? (
          <form className="shortcuts-modal__form" onSubmit={(event) => void handleRename(event)}>
            <label htmlFor="shortcut-name">{t('shortcuts.name')}</label>
            <input
              id="shortcut-name"
              value={shortcutName}
              onChange={(event) => setShortcutName(event.target.value)}
              disabled={pending}
              autoFocus
              maxLength={100}
            />
            {error && <p className="shortcuts-modal__error">{error}</p>}
            <div className="shortcuts-modal__form-actions">
              <button type="button" onClick={returnToList} disabled={pending}>
                {t('shortcuts.cancel')}
              </button>
              <button type="submit" className="shortcuts-modal__primary" disabled={renameDisabled}>
                {pending ? t('shortcuts.working') : t('shortcuts.save')}
              </button>
            </div>
          </form>
        ) : selectedShortcut ? (
          <div className="shortcuts-modal__confirmation">
            <span className="shortcuts-modal__confirmation-icon">
              <Trash2 />
            </span>
            <p>{t('shortcuts.delete_confirmation', { name: selectedShortcut.name })}</p>
            {error && <p className="shortcuts-modal__error">{error}</p>}
            <div className="shortcuts-modal__form-actions">
              <button type="button" onClick={returnToList} disabled={pending}>
                {t('shortcuts.cancel')}
              </button>
              <button
                type="button"
                className="shortcuts-modal__danger"
                onClick={() => void handleDelete()}
                disabled={pending || isDisabled}
              >
                {pending ? t('shortcuts.working') : t('shortcuts.delete')}
              </button>
            </div>
          </div>
        ) : null}

        {view === 'list' && error && <p className="shortcuts-modal__error">{error}</p>}
        {view === 'list' && isDisabled && <p className="shortcuts-modal__disabled">{t('shortcuts.unavailable')}</p>}
      </div>
    </Modal>
  );
}
