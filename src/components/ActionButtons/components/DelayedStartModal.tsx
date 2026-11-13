import { useState } from 'react';
import { Clock, Hourglass } from 'lucide-react';
import { Modal } from '@/components/common';
import { useTranslation } from '@/hooks';
import type { DelayedStartTrigger } from '@/types/homeassistant';
import { nextOccurrence, type DelayedStartRequest } from '@/utils/delayedStart';

interface DelayedStartModalProps {
  opened: boolean;
  onClose: () => void;
  triggers: DelayedStartTrigger[];
  allowTime: boolean;
  script: string | null;
  scriptAvailable: boolean;
  onSchedule: (request: DelayedStartRequest) => Promise<boolean>;
}

export function DelayedStartModal({
  opened,
  onClose,
  triggers,
  allowTime,
  script,
  scriptAvailable,
  onSchedule,
}: DelayedStartModalProps) {
  const { t } = useTranslation();
  const [time, setTime] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (request: DelayedStartRequest): Promise<void> => {
    setBusy(true);
    try {
      if (await onSchedule(request)) onClose();
    } finally {
      setBusy(false);
    }
  };

  const notBefore = time ? nextOccurrence(time) : null;
  const disabled = busy || !scriptAvailable;

  return (
    <Modal opened={opened} onClose={onClose} className="delayed-start-modal">
      <section className="delayed-start">
        <h2 className="delayed-start__title">{t('delayed_start.title')}</h2>
        <p className="delayed-start__description">{t('delayed_start.description')}</p>

        {!scriptAvailable && script && (
          <p className="delayed-start__warning">{t('delayed_start.script_missing', { script })}</p>
        )}

        {triggers.length === 0 && !allowTime && (
          <p className="delayed-start__description">{t('delayed_start.no_triggers')}</p>
        )}

        <div className="delayed-start__options">
          {triggers.map((trigger) => (
            <button
              type="button"
              key={`${trigger.entity}:${trigger.state}:${trigger.label}`}
              className="delayed-start__option"
              disabled={disabled}
              onClick={() => void submit({ label: trigger.label, trigger })}
            >
              <Hourglass className="delayed-start__option-icon" aria-hidden="true" />
              <span>{trigger.label}</span>
            </button>
          ))}
        </div>

        {allowTime && (
          <div className="delayed-start__time">
            <Clock className="delayed-start__option-icon" aria-hidden="true" />
            <label className="delayed-start__time-label">
              <span>{t('delayed_start.at_time')}</span>
              <input
                type="time"
                className="delayed-start__time-input"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </label>
            <button
              type="button"
              className="delayed-start__schedule"
              disabled={disabled || !notBefore}
              onClick={() => notBefore && void submit({ label: time, notBefore })}
            >
              {t('delayed_start.schedule')}
            </button>
          </div>
        )}
      </section>
    </Modal>
  );
}
