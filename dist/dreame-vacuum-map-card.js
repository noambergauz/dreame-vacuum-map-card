
(function() {
  const style = document.createElement('style');
  style.textContent = ".header{padding:1.25rem 1.25rem .625rem;text-align:center;padding-bottom:unset}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center;padding-left:2rem}[dir=rtl] .header__title-wrapper{padding-left:0;padding-right:2rem}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon{display:flex;color:var(--accent-color)}.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500;unicode-bidi:plaintext}.header__stat-value--cleaning-time{unicode-bidi:unset}.map-selector{position:relative;display:flex;justify-content:center}.map-selector__button{display:inline-flex;align-items:center;gap:.375rem;padding:.375rem .75rem;background:var(--surface-bg, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:1.25rem;color:var(--text-primary, #1a1a1a);font-size:.8125rem;font-weight:500;cursor:pointer;transition:all .2s ease}.map-selector__button:hover{background:var(--surface-bg-hover, #ebebeb)}.map-selector__button--open{background:var(--surface-bg-hover, #ebebeb);border-color:var(--accent-color, #007aff)}.map-selector__button--disabled,.map-selector__button:disabled{opacity:.5;cursor:not-allowed}.map-selector__icon{display:flex;align-items:center;color:var(--text-secondary, #666)}.map-selector__icon svg{width:1rem;height:1rem}.map-selector__label{max-width:8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.map-selector__chevron{width:1rem;height:1rem;color:var(--text-secondary, #666);transition:transform .2s ease}.map-selector__chevron--open{transform:rotate(180deg)}.map-selector__dropdown{position:absolute;top:calc(100% + .25rem);left:50%;transform:translate(-50%);min-width:10rem;max-width:14rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);border-radius:.75rem;box-shadow:var(--card-shadow, 0 4px 12px rgba(0, 0, 0, .1));overflow:hidden;z-index:100;animation:map-selector-dropdown-fade-in .15s ease}.map-selector__option{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.625rem .875rem;background:transparent;border:none;color:var(--text-primary, #1a1a1a);font-size:.875rem;text-align:start;cursor:pointer;transition:background .15s ease}.map-selector__option:hover{background:var(--surface-bg-hover, #f5f5f5)}.map-selector__option--selected{color:var(--accent-color, #007aff);font-weight:500}.map-selector__option:not(:last-child){border-bottom:1px solid var(--border-color, #e8e8e8)}.map-selector__option-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:.5rem}[dir=rtl] .map-selector__option-name{padding-right:0;padding-left:.5rem}.map-selector__option-check{width:1rem;height:1rem;color:var(--accent-color, #007aff);flex-shrink:0}@keyframes map-selector-dropdown-fade-in{0%{opacity:0;transform:translate(-50%) translateY(-.25rem)}to{opacity:1;transform:translate(-50%) translateY(0)}}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem;margin-bottom:unset}.cleaning-mode-button-wrapper__repeats{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.9rem;font-weight:600;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__repeats:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__repeats:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__repeats:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem .75rem .5rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.map-controls{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .map-controls{right:auto;left:.75rem}.map-controls{display:flex;flex-direction:column;gap:.25rem;z-index:10}.map-controls__button{width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.map-controls__button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.map-controls__button:active{transform:scale(.95)}.map-controls__button svg{transition:transform .2s ease}.map-controls__button--lock{margin-top:.25rem}.map-controls__button--locked{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.map-controls__button--locked:hover{background:var(--accent-hover, #0066d6);border-color:var(--accent-hover, #0066d6)}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem}[dir=rtl] .room-list-view__header{padding-right:0;padding-left:3.5rem}.room-list-view__header{padding-left:1rem}[dir=rtl] .room-list-view__header{padding-left:0;padding-right:1rem}.room-list-view__header{font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}[dir=rtl] .room-list-view__item{text-align:right}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.vacuum-position-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.vacuum-position-marker__bg{fill:var(--vacuum-marker-bg, rgba(255, 255, 255, .9));stroke:var(--vacuum-marker-stroke, #4caf50);stroke-width:2;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}.vacuum-position-marker__icon{fill:var(--vacuum-marker-color, #4caf50)}.vacuum-position-marker--cleaning .vacuum-position-marker__bg{animation:vacuum-pulse 1.5s ease-in-out infinite}.charger-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:5}.charger-marker__bg{fill:var(--charger-marker-bg, rgba(255, 255, 255, .9));stroke:var(--charger-marker-stroke, #ffc107);stroke-width:2;filter:drop-shadow(0 1px 3px rgba(0,0,0,.25))}.charger-marker__icon{fill:var(--charger-marker-color, #ffc107)}@keyframes vacuum-pulse{0%{opacity:1}50%{opacity:.7}to{opacity:1}}.room-labels{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:8}.room-labels__bg{fill:var(--room-label-bg, rgba(0, 0, 0, .7))}.room-labels__text{fill:var(--room-label-color, #fff);font-weight:500;font-family:inherit}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}@media(orientation:landscape){.vacuum-map{max-height:calc(100vh - 280px);max-height:calc(100dvh - 280px);min-height:min(18.75rem,100vh - 280px)}}.vacuum-map--locked .react-transform-wrapper{touch-action:pan-y}.vacuum-map__content{position:relative;display:inline-block;width:100%;height:100%}.vacuum-map__image{display:block;width:100%;height:auto;border-radius:.9375rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem}[dir=rtl] .vacuum-map__cycles{right:auto;left:1rem}.vacuum-map__cycles{bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__zone-handle{position:absolute;background:#007aff;border:.125rem solid white;border-radius:.25rem;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:background .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:\"\";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5}.vacuum-map__zone-handle:active{background:#003d99}.vacuum-map__zone-handle--top,.vacuum-map__zone-handle--bottom{width:2.5rem;height:.5rem;left:50%;cursor:ns-resize}.vacuum-map__zone-handle--top{top:-.25rem}.vacuum-map__zone-handle--bottom{bottom:-.25rem}.vacuum-map__zone-handle--left,.vacuum-map__zone-handle--right{width:.5rem;height:2.5rem;top:50%;cursor:ew-resize}.vacuum-map__zone-handle--left{left:-.25rem}[dir=rtl] .vacuum-map__zone-handle--left{left:auto;right:-.25rem}.vacuum-map__zone-handle--right{right:-.25rem}[dir=rtl] .vacuum-map__zone-handle--right{right:auto;left:-.25rem}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem}[dir=rtl] .vacuum-map__zone-clear{right:auto;left:-.75rem}.vacuum-map__zone-clear{width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:background .2s ease;line-height:1;padding:0;z-index:11}.vacuum-map__zone-clear:hover{background:#ff1f0f}.vacuum-map__zone-clear:active{background:#c00}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room-segments path{pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover:not(.vacuum-map__room-segment--selected){fill:#ffffff26;stroke:#ffffffe6;stroke-width:3;filter:drop-shadow(0 0 8px rgba(255,255,255,.6))}.vacuum-map__room-segment--selected{fill:var(--accent-bg, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-hover, rgba(212, 175, 55, .45));filter:drop-shadow(0 0 6px var(--accent-color-shadow-color, rgba(212, 175, 55, .5)))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.575rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:#fff;background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left}[dir=rtl] .accordion__header{text-align:right}.accordion__header{transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:1000px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem}[dir=rtl] .toggle__knob{left:auto;right:.125rem}.toggle__knob{bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}[dir=rtl] .toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(-1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover:not(.circular-button--disabled){transform:translateY(-.125rem)}.circular-button--disabled{opacity:.5;pointer-events:none}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}[dir=rtl] .circular-button__circle>:nth-child(2):not(:last-child){rotate:180deg}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:hidden;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control--disabled{opacity:.5;pointer-events:none}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:absolute;top:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-down .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-down{0%{transform:translate(-50%) translateY(-1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.error-boundary{display:flex;align-items:center;justify-content:center;min-height:200px;padding:1.5rem;background:var(--surface-bg, #f5f5f5);border-radius:.75rem}.error-boundary__content{text-align:center;max-width:300px}.error-boundary__icon{width:48px;height:48px;margin:0 auto 1rem;background:var(--error-color, #ff3b30);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700}.error-boundary__title{margin:0 0 .5rem;font-size:1.125rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.error-boundary__message{margin:0 0 1rem;font-size:.875rem;color:var(--text-secondary, #666);line-height:1.4}.error-boundary__retry{padding:.5rem 1rem;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background .2s ease}.error-boundary__retry:hover{background:var(--accent-color-hover, #0056b3)}.customize-mode{display:flex;flex-direction:column;gap:.5rem}.customize-mode__empty{display:flex;align-items:center;justify-content:center;padding:2rem;color:var(--text-secondary);font-size:.875rem}.customize-mode__empty p{margin:0}.customize-mode__room-accordions{display:flex;flex-direction:column;gap:.25rem}.customize-mode__badges{display:flex;gap:.25rem}.customize-mode__badge{display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;padding:.125rem .25rem;border-radius:.25rem;background:var(--accent-bg);font-size:.8rem;font-weight:600;color:var(--accent-color);text-transform:uppercase}.customize-mode__badge:nth-child(3){text-transform:unset}.customize-mode__room-settings-content{display:flex;flex-direction:column;gap:1rem}.customize-mode__setting-group{display:flex;flex-direction:column;gap:.5rem}.customize-mode__setting-label{font-size:.75rem;font-weight:500;color:var(--text-secondary)}.customize-mode__options{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.customize-mode__options--pills{gap:1rem}.customize-mode__option{display:flex;flex-direction:column;align-items:center;gap:2rem}.customize-mode__option-label{font-size:.8rem;color:var(--text-secondary);text-align:center}.customize-mode__pill{padding:.375rem .75rem;border:1.5px solid var(--surface-border);border-radius:1.25rem;background:var(--surface-bg);color:var(--text-secondary);font-size:1rem;font-weight:500;cursor:pointer;transition:all .15s ease;min-width:3.5rem}.customize-mode__pill:hover{border-color:var(--accent-color);background:var(--accent-bg-secondary)}.customize-mode__pill--selected{border-color:var(--accent-color);background:var(--accent-color);color:var(--accent-bg-secondary);color:#fff}.customize-mode__pill--cycle{font-weight:600}.customize-mode__wetness-slider{display:flex;flex-direction:column;gap:.25rem}.cleaning-mode-modal{height:100%}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{height:calc(100% - 4rem);overflow-y:auto;width:100%;overflow-x:hidden}.cleaning-mode-modal__content-wrapper::-webkit-scrollbar{display:none}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--disabled{cursor:not-allowed;opacity:.5}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}[dir=rtl] .cleaning-mode-modal__mode-icon--mop-after>:nth-child(2),[dir=rtl] .cleaning-mode-modal__mode-icon--vac-mop>:nth-child(2){rotate:180deg}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .cleaning-mode-modal__mode-checkmark{right:auto;left:.75rem}.cleaning-mode-modal__mode-checkmark{width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:flex;justify-content:flex-start;gap:2rem;overflow-x:auto;padding:.5rem 0}.cleaning-mode-modal__power-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__power-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-container--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}[dir=rtl] .cleaning-mode-modal__slider-tooltip{transform:translate(50%)}.cleaning-mode-modal__slider-tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__route-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__route-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.entity-item{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .1));gap:16px}.entity-item:last-child{border-bottom:none}.entity-item--child{padding-left:16px;opacity:.9}.entity-item__info{display:flex;flex-direction:column;flex:1;min-width:0}.entity-item__label{font-size:14px;font-weight:500;color:var(--text-primary, #000)}.entity-item__description{font-size:12px;color:var(--text-secondary, #666);margin-top:2px}.entity-item--select{flex-direction:column;align-items:stretch;gap:8px}.entity-item--select .entity-item__info{flex:none}.entity-item--segmented{flex-direction:column;align-items:stretch;gap:8px}.entity-item--segmented .entity-item__info{flex:none}.entity-item--slider{flex-direction:column;align-items:stretch;gap:8px}.entity-item--slider .entity-item__info{flex:none}.entity-item__select{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;cursor:pointer;min-width:120px}.entity-item__select:disabled{opacity:.5;cursor:not-allowed}.entity-item__button{padding:8px 16px;border-radius:8px;border:none;background:var(--accent-color, #007aff);color:#fff;font-size:14px;font-weight:500;cursor:pointer;transition:opacity .2s ease}.entity-item__button:hover:not(:disabled){opacity:.9}.entity-item__button:active:not(:disabled){opacity:.8}.entity-item__button:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider-container{display:flex;align-items:center;gap:12px}.entity-item__slider{flex:1;height:6px;border-radius:3px;appearance:none;background:var(--divider-color, rgba(0, 0, 0, .2));cursor:pointer}.entity-item__slider::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer}.entity-item__slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);border:none;cursor:pointer}.entity-item__slider:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider:disabled::-webkit-slider-thumb{cursor:not-allowed}.entity-item__slider:disabled::-moz-range-thumb{cursor:not-allowed}.entity-item__slider-value{font-size:14px;font-weight:500;color:var(--text-primary, #000);min-width:40px;text-align:right}.entity-item__slider--volume .entity-item__slider::-webkit-slider-thumb,.entity-item__slider--brightness .entity-item__slider::-webkit-slider-thumb{background:var(--accent-color, #007aff)}.entity-item__time-input{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;font-family:inherit;cursor:pointer;min-width:100px}.entity-item__time-input:disabled{opacity:.5;cursor:not-allowed}.entity-item__time-input::-webkit-calendar-picker-indicator{cursor:pointer;filter:var(--time-picker-filter, none)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__item--slider{flex-direction:column;align-items:stretch;gap:.5rem}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.ai-detection-section__slider-container{display:flex;align-items:center;gap:.75rem}.ai-detection-section__slider{flex:1;height:4px;appearance:none;background:var(--surface-secondary, #e0e0e0);border-radius:2px;cursor:pointer}.ai-detection-section__slider::-webkit-slider-thumb{appearance:none;width:16px;height:16px;background:var(--accent-color, #007aff);border-radius:50%;cursor:pointer}.ai-detection-section__slider:disabled{opacity:.5;cursor:not-allowed}.ai-detection-section__slider-value{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);min-width:36px;text-align:right}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__mode-selector{display:flex;flex-direction:column;gap:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--border-color, #e0e0e0);margin-bottom:.25rem}.carpet-settings-section__sub-options{display:flex;flex-direction:column;gap:.5rem;padding-left:.25rem}.carpet-settings-section__sub-label{font-size:.75rem;color:var(--text-secondary, #666);font-weight:500}.carpet-settings-section__sub-buttons{display:flex;gap:.5rem}.carpet-settings-section__sub-button{flex:1;padding:.5rem .75rem;font-size:.8125rem;font-weight:500;border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;background:var(--surface-secondary, #f5f5f5);color:var(--text-primary, #333);cursor:pointer;transition:all .2s ease}.carpet-settings-section__sub-button:hover:not(.carpet-settings-section__sub-button--active){background:var(--surface-tertiary, #eee)}.carpet-settings-section__sub-button--active{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.carpet-settings-section__sub-button:disabled{opacity:.5;cursor:not-allowed}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.carpet-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000);unicode-bidi:plaintext}.dock-settings-section{display:flex;flex-direction:column;gap:.75rem}.dock-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.dock-settings-section__item--select,.dock-settings-section__item--segmented{flex-direction:column;align-items:stretch;gap:.5rem}.dock-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.dock-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.dock-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.dock-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.dock-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.dock-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.dock-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.dock-settings-section__button{padding:.5rem 1rem;font-size:.8125rem;font-weight:500;border:1px solid var(--accent-color, #007aff);border-radius:.5rem;background:var(--accent-color, #007aff);color:#fff;cursor:pointer;transition:all .2s ease;white-space:nowrap}.dock-settings-section__button:hover:not(:disabled){background:var(--accent-color-hover, #0056b3)}.dock-settings-section__button:disabled{opacity:.5;cursor:not-allowed}.edge-corner-section{display:flex;flex-direction:column;gap:.75rem}.edge-corner-section__sub-settings{display:flex;flex-direction:column;gap:.5rem;margin-top:-.25rem}.edge-corner-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.edge-corner-section__item--indented{padding-left:1rem;border-left:2px solid var(--border-color, #e0e0e0);margin-left:.5rem}.edge-corner-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.edge-corner-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.edge-corner-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.edge-corner-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.edge-corner-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.edge-corner-section__select:focus{border-color:var(--accent-color, #007aff)}.edge-corner-section__select:hover{background:var(--surface-tertiary, #eee)}.edge-corner-section__select:disabled{opacity:.5;cursor:not-allowed}.floor-settings-section{display:flex;flex-direction:column;gap:.75rem}.floor-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.floor-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.floor-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.floor-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.floor-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.floor-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.floor-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.floor-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.floor-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.map-settings-section{display:flex;flex-direction:column;gap:.75rem}.map-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.map-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.map-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.map-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.map-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.map-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.map-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.map-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.map-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.map-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.map-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:.5rem}.map-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.map-settings-section__action-button:active{transform:scale(.98)}.map-settings-section__action-button:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.map-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.quick-settings-section{display:flex;flex-direction:column;gap:.75rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.quick-settings-section__item--child{margin-left:1rem;padding-left:.75rem;border-left:2px solid var(--accent-color, #007aff)}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.quick-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.quick-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.quick-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:.5rem}.quick-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.quick-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.quick-settings-section__action-button:active{transform:scale(.98)}.quick-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.quick-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.volume-section{display:flex;flex-direction:column;gap:.75rem}.volume-section__row{display:flex;flex-direction:row;gap:1rem}.volume-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.volume-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.volume-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.volume-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.volume-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section__select{width:100%;padding:.5rem 2.5rem .5rem .75rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;appearance:none;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:1rem}.volume-section__select:hover{border-color:var(--accent-color, #007aff)}.volume-section__select:focus{outline:none;border-color:var(--accent-color, #007aff);box-shadow:0 0 0 2px #007aff33}.volume-section__select:disabled{opacity:.5;cursor:not-allowed}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}[dir=rtl] .volume-section__tooltip{transform:translate(50%)}.volume-section__tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}[dir=rtl] .settings-panel__sections{padding-right:0;padding-left:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem}[dir=rtl] .room-selection-display__label{margin-right:0;margin-left:.5rem}.room-selection-display__label{color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}\n";
  document.head.appendChild(style);
})();
function yg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var _u = { exports: {} }, $o = {};
var up;
function mb() {
  if (up) return $o;
  up = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(l, c, d) {
    var _ = null;
    if (d !== void 0 && (_ = "" + d), c.key !== void 0 && (_ = "" + c.key), "key" in c) {
      d = {};
      for (var m in c)
        m !== "key" && (d[m] = c[m]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: l,
      key: _,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return $o.Fragment = i, $o.jsx = o, $o.jsxs = o, $o;
}
var dp;
function fb() {
  return dp || (dp = 1, _u.exports = mb()), _u.exports;
}
var h = fb(), mu = { exports: {} }, ge = {};
var _p;
function pb() {
  if (_p) return ge;
  _p = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function E(z) {
    return z === null || typeof z != "object" ? null : (z = w && z[w] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var T = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, L = {};
  function R(z, q, X) {
    this.props = z, this.context = q, this.refs = L, this.updater = X || T;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(z, q) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, q, "setState");
  }, R.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function U() {
  }
  U.prototype = R.prototype;
  function Y(z, q, X) {
    this.props = z, this.context = q, this.refs = L, this.updater = X || T;
  }
  var P = Y.prototype = new U();
  P.constructor = Y, N(P, R.prototype), P.isPureReactComponent = !0;
  var H = Array.isArray;
  function F() {
  }
  var Z = { H: null, A: null, T: null, S: null }, W = Object.prototype.hasOwnProperty;
  function ae(z, q, X) {
    var $ = X.ref;
    return {
      $$typeof: a,
      type: z,
      key: q,
      ref: $ !== void 0 ? $ : null,
      props: X
    };
  }
  function re(z, q) {
    return ae(z.type, q, z.props);
  }
  function fe(z) {
    return typeof z == "object" && z !== null && z.$$typeof === a;
  }
  function ie(z) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(X) {
      return q[X];
    });
  }
  var Ce = /\/+/g;
  function we(z, q) {
    return typeof z == "object" && z !== null && z.key != null ? ie("" + z.key) : q.toString(36);
  }
  function xe(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(F, F) : (z.status = "pending", z.then(
          function(q) {
            z.status === "pending" && (z.status = "fulfilled", z.value = q);
          },
          function(q) {
            z.status === "pending" && (z.status = "rejected", z.reason = q);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function M(z, q, X, $, ee) {
    var le = typeof z;
    (le === "undefined" || le === "boolean") && (z = null);
    var ve = !1;
    if (z === null) ve = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case a:
            case i:
              ve = !0;
              break;
            case v:
              return ve = z._init, M(
                ve(z._payload),
                q,
                X,
                $,
                ee
              );
          }
      }
    if (ve)
      return ee = ee(z), ve = $ === "" ? "." + we(z, 0) : $, H(ee) ? (X = "", ve != null && (X = ve.replace(Ce, "$&/") + "/"), M(ee, q, X, "", function(kt) {
        return kt;
      })) : ee != null && (fe(ee) && (ee = re(
        ee,
        X + (ee.key == null || z && z.key === ee.key ? "" : ("" + ee.key).replace(
          Ce,
          "$&/"
        ) + "/") + ve
      )), q.push(ee)), 1;
    ve = 0;
    var Ze = $ === "" ? "." : $ + ":";
    if (H(z))
      for (var Le = 0; Le < z.length; Le++)
        $ = z[Le], le = Ze + we($, Le), ve += M(
          $,
          q,
          X,
          le,
          ee
        );
    else if (Le = E(z), typeof Le == "function")
      for (z = Le.call(z), Le = 0; !($ = z.next()).done; )
        $ = $.value, le = Ze + we($, Le++), ve += M(
          $,
          q,
          X,
          le,
          ee
        );
    else if (le === "object") {
      if (typeof z.then == "function")
        return M(
          xe(z),
          q,
          X,
          $,
          ee
        );
      throw q = String(z), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function K(z, q, X) {
    if (z == null) return z;
    var $ = [], ee = 0;
    return M(z, $, "", "", function(le) {
      return q.call(X, le, ee++);
    }), $;
  }
  function Q(z) {
    if (z._status === -1) {
      var q = z._result;
      q = q(), q.then(
        function(X) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = X);
        },
        function(X) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = X);
        }
      ), z._status === -1 && (z._status = 0, z._result = q);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var _e = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, pe = {
    map: K,
    forEach: function(z, q, X) {
      K(
        z,
        function() {
          q.apply(this, arguments);
        },
        X
      );
    },
    count: function(z) {
      var q = 0;
      return K(z, function() {
        q++;
      }), q;
    },
    toArray: function(z) {
      return K(z, function(q) {
        return q;
      }) || [];
    },
    only: function(z) {
      if (!fe(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return ge.Activity = y, ge.Children = pe, ge.Component = R, ge.Fragment = o, ge.Profiler = c, ge.PureComponent = Y, ge.StrictMode = l, ge.Suspense = g, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, ge.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return Z.H.useMemoCache(z);
    }
  }, ge.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, ge.cacheSignal = function() {
    return null;
  }, ge.cloneElement = function(z, q, X) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var $ = N({}, z.props), ee = z.key;
    if (q != null)
      for (le in q.key !== void 0 && (ee = "" + q.key), q)
        !W.call(q, le) || le === "key" || le === "__self" || le === "__source" || le === "ref" && q.ref === void 0 || ($[le] = q[le]);
    var le = arguments.length - 2;
    if (le === 1) $.children = X;
    else if (1 < le) {
      for (var ve = Array(le), Ze = 0; Ze < le; Ze++)
        ve[Ze] = arguments[Ze + 2];
      $.children = ve;
    }
    return ae(z.type, ee, $);
  }, ge.createContext = function(z) {
    return z = {
      $$typeof: _,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: d,
      _context: z
    }, z;
  }, ge.createElement = function(z, q, X) {
    var $, ee = {}, le = null;
    if (q != null)
      for ($ in q.key !== void 0 && (le = "" + q.key), q)
        W.call(q, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ee[$] = q[$]);
    var ve = arguments.length - 2;
    if (ve === 1) ee.children = X;
    else if (1 < ve) {
      for (var Ze = Array(ve), Le = 0; Le < ve; Le++)
        Ze[Le] = arguments[Le + 2];
      ee.children = Ze;
    }
    if (z && z.defaultProps)
      for ($ in ve = z.defaultProps, ve)
        ee[$] === void 0 && (ee[$] = ve[$]);
    return ae(z, le, ee);
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(z) {
    return { $$typeof: m, render: z };
  }, ge.isValidElement = fe, ge.lazy = function(z) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: z },
      _init: Q
    };
  }, ge.memo = function(z, q) {
    return {
      $$typeof: f,
      type: z,
      compare: q === void 0 ? null : q
    };
  }, ge.startTransition = function(z) {
    var q = Z.T, X = {};
    Z.T = X;
    try {
      var $ = z(), ee = Z.S;
      ee !== null && ee(X, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(F, _e);
    } catch (le) {
      _e(le);
    } finally {
      q !== null && X.types !== null && (q.types = X.types), Z.T = q;
    }
  }, ge.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, ge.use = function(z) {
    return Z.H.use(z);
  }, ge.useActionState = function(z, q, X) {
    return Z.H.useActionState(z, q, X);
  }, ge.useCallback = function(z, q) {
    return Z.H.useCallback(z, q);
  }, ge.useContext = function(z) {
    return Z.H.useContext(z);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(z, q) {
    return Z.H.useDeferredValue(z, q);
  }, ge.useEffect = function(z, q) {
    return Z.H.useEffect(z, q);
  }, ge.useEffectEvent = function(z) {
    return Z.H.useEffectEvent(z);
  }, ge.useId = function() {
    return Z.H.useId();
  }, ge.useImperativeHandle = function(z, q, X) {
    return Z.H.useImperativeHandle(z, q, X);
  }, ge.useInsertionEffect = function(z, q) {
    return Z.H.useInsertionEffect(z, q);
  }, ge.useLayoutEffect = function(z, q) {
    return Z.H.useLayoutEffect(z, q);
  }, ge.useMemo = function(z, q) {
    return Z.H.useMemo(z, q);
  }, ge.useOptimistic = function(z, q) {
    return Z.H.useOptimistic(z, q);
  }, ge.useReducer = function(z, q, X) {
    return Z.H.useReducer(z, q, X);
  }, ge.useRef = function(z) {
    return Z.H.useRef(z);
  }, ge.useState = function(z) {
    return Z.H.useState(z);
  }, ge.useSyncExternalStore = function(z, q, X) {
    return Z.H.useSyncExternalStore(
      z,
      q,
      X
    );
  }, ge.useTransition = function() {
    return Z.H.useTransition();
  }, ge.version = "19.2.3", ge;
}
var mp;
function ju() {
  return mp || (mp = 1, mu.exports = pb()), mu.exports;
}
var D = ju();
const xn = /* @__PURE__ */ yg(D);
var fu = { exports: {} }, Qo = {}, pu = { exports: {} }, gu = {};
var fp;
function gb() {
  return fp || (fp = 1, (function(a) {
    function i(M, K) {
      var Q = M.length;
      M.push(K);
      e: for (; 0 < Q; ) {
        var _e = Q - 1 >>> 1, pe = M[_e];
        if (0 < c(pe, K))
          M[_e] = K, M[Q] = pe, Q = _e;
        else break e;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function l(M) {
      if (M.length === 0) return null;
      var K = M[0], Q = M.pop();
      if (Q !== K) {
        M[0] = Q;
        e: for (var _e = 0, pe = M.length, z = pe >>> 1; _e < z; ) {
          var q = 2 * (_e + 1) - 1, X = M[q], $ = q + 1, ee = M[$];
          if (0 > c(X, Q))
            $ < pe && 0 > c(ee, X) ? (M[_e] = ee, M[$] = Q, _e = $) : (M[_e] = X, M[q] = Q, _e = q);
          else if ($ < pe && 0 > c(ee, Q))
            M[_e] = ee, M[$] = Q, _e = $;
          else break e;
        }
      }
      return K;
    }
    function c(M, K) {
      var Q = M.sortIndex - K.sortIndex;
      return Q !== 0 ? Q : M.id - K.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var _ = Date, m = _.now();
      a.unstable_now = function() {
        return _.now() - m;
      };
    }
    var g = [], f = [], v = 1, y = null, w = 3, E = !1, T = !1, N = !1, L = !1, R = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
    function P(M) {
      for (var K = o(f); K !== null; ) {
        if (K.callback === null) l(f);
        else if (K.startTime <= M)
          l(f), K.sortIndex = K.expirationTime, i(g, K);
        else break;
        K = o(f);
      }
    }
    function H(M) {
      if (N = !1, P(M), !T)
        if (o(g) !== null)
          T = !0, F || (F = !0, ie());
        else {
          var K = o(f);
          K !== null && xe(H, K.startTime - M);
        }
    }
    var F = !1, Z = -1, W = 5, ae = -1;
    function re() {
      return L ? !0 : !(a.unstable_now() - ae < W);
    }
    function fe() {
      if (L = !1, F) {
        var M = a.unstable_now();
        ae = M;
        var K = !0;
        try {
          e: {
            T = !1, N && (N = !1, U(Z), Z = -1), E = !0;
            var Q = w;
            try {
              t: {
                for (P(M), y = o(g); y !== null && !(y.expirationTime > M && re()); ) {
                  var _e = y.callback;
                  if (typeof _e == "function") {
                    y.callback = null, w = y.priorityLevel;
                    var pe = _e(
                      y.expirationTime <= M
                    );
                    if (M = a.unstable_now(), typeof pe == "function") {
                      y.callback = pe, P(M), K = !0;
                      break t;
                    }
                    y === o(g) && l(g), P(M);
                  } else l(g);
                  y = o(g);
                }
                if (y !== null) K = !0;
                else {
                  var z = o(f);
                  z !== null && xe(
                    H,
                    z.startTime - M
                  ), K = !1;
                }
              }
              break e;
            } finally {
              y = null, w = Q, E = !1;
            }
            K = void 0;
          }
        } finally {
          K ? ie() : F = !1;
        }
      }
    }
    var ie;
    if (typeof Y == "function")
      ie = function() {
        Y(fe);
      };
    else if (typeof MessageChannel < "u") {
      var Ce = new MessageChannel(), we = Ce.port2;
      Ce.port1.onmessage = fe, ie = function() {
        we.postMessage(null);
      };
    } else
      ie = function() {
        R(fe, 0);
      };
    function xe(M, K) {
      Z = R(function() {
        M(a.unstable_now());
      }, K);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, a.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : W = 0 < M ? Math.floor(1e3 / M) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, a.unstable_next = function(M) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = w;
      }
      var Q = w;
      w = K;
      try {
        return M();
      } finally {
        w = Q;
      }
    }, a.unstable_requestPaint = function() {
      L = !0;
    }, a.unstable_runWithPriority = function(M, K) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Q = w;
      w = M;
      try {
        return K();
      } finally {
        w = Q;
      }
    }, a.unstable_scheduleCallback = function(M, K, Q) {
      var _e = a.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? _e + Q : _e) : Q = _e, M) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = Q + pe, M = {
        id: v++,
        callback: K,
        priorityLevel: M,
        startTime: Q,
        expirationTime: pe,
        sortIndex: -1
      }, Q > _e ? (M.sortIndex = Q, i(f, M), o(g) === null && M === o(f) && (N ? (U(Z), Z = -1) : N = !0, xe(H, Q - _e))) : (M.sortIndex = pe, i(g, M), T || E || (T = !0, F || (F = !0, ie()))), M;
    }, a.unstable_shouldYield = re, a.unstable_wrapCallback = function(M) {
      var K = w;
      return function() {
        var Q = w;
        w = K;
        try {
          return M.apply(this, arguments);
        } finally {
          w = Q;
        }
      };
    };
  })(gu)), gu;
}
var pp;
function hb() {
  return pp || (pp = 1, pu.exports = gb()), pu.exports;
}
var hu = { exports: {} }, St = {};
var gp;
function vb() {
  if (gp) return St;
  gp = 1;
  var a = ju();
  function i(g) {
    var f = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      f += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        f += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + g + "; visit " + f + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var l = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(g, f, v) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: g,
      containerInfo: f,
      implementation: v
    };
  }
  var _ = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, f) {
    if (g === "font") return "";
    if (typeof f == "string")
      return f === "use-credentials" ? f : "";
  }
  return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, St.createPortal = function(g, f) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!f || f.nodeType !== 1 && f.nodeType !== 9 && f.nodeType !== 11)
      throw Error(i(299));
    return d(g, f, null, v);
  }, St.flushSync = function(g) {
    var f = _.T, v = l.p;
    try {
      if (_.T = null, l.p = 2, g) return g();
    } finally {
      _.T = f, l.p = v, l.d.f();
    }
  }, St.preconnect = function(g, f) {
    typeof g == "string" && (f ? (f = f.crossOrigin, f = typeof f == "string" ? f === "use-credentials" ? f : "" : void 0) : f = null, l.d.C(g, f));
  }, St.prefetchDNS = function(g) {
    typeof g == "string" && l.d.D(g);
  }, St.preinit = function(g, f) {
    if (typeof g == "string" && f && typeof f.as == "string") {
      var v = f.as, y = m(v, f.crossOrigin), w = typeof f.integrity == "string" ? f.integrity : void 0, E = typeof f.fetchPriority == "string" ? f.fetchPriority : void 0;
      v === "style" ? l.d.S(
        g,
        typeof f.precedence == "string" ? f.precedence : void 0,
        {
          crossOrigin: y,
          integrity: w,
          fetchPriority: E
        }
      ) : v === "script" && l.d.X(g, {
        crossOrigin: y,
        integrity: w,
        fetchPriority: E,
        nonce: typeof f.nonce == "string" ? f.nonce : void 0
      });
    }
  }, St.preinitModule = function(g, f) {
    if (typeof g == "string")
      if (typeof f == "object" && f !== null) {
        if (f.as == null || f.as === "script") {
          var v = m(
            f.as,
            f.crossOrigin
          );
          l.d.M(g, {
            crossOrigin: v,
            integrity: typeof f.integrity == "string" ? f.integrity : void 0,
            nonce: typeof f.nonce == "string" ? f.nonce : void 0
          });
        }
      } else f == null && l.d.M(g);
  }, St.preload = function(g, f) {
    if (typeof g == "string" && typeof f == "object" && f !== null && typeof f.as == "string") {
      var v = f.as, y = m(v, f.crossOrigin);
      l.d.L(g, v, {
        crossOrigin: y,
        integrity: typeof f.integrity == "string" ? f.integrity : void 0,
        nonce: typeof f.nonce == "string" ? f.nonce : void 0,
        type: typeof f.type == "string" ? f.type : void 0,
        fetchPriority: typeof f.fetchPriority == "string" ? f.fetchPriority : void 0,
        referrerPolicy: typeof f.referrerPolicy == "string" ? f.referrerPolicy : void 0,
        imageSrcSet: typeof f.imageSrcSet == "string" ? f.imageSrcSet : void 0,
        imageSizes: typeof f.imageSizes == "string" ? f.imageSizes : void 0,
        media: typeof f.media == "string" ? f.media : void 0
      });
    }
  }, St.preloadModule = function(g, f) {
    if (typeof g == "string")
      if (f) {
        var v = m(f.as, f.crossOrigin);
        l.d.m(g, {
          as: typeof f.as == "string" && f.as !== "script" ? f.as : void 0,
          crossOrigin: v,
          integrity: typeof f.integrity == "string" ? f.integrity : void 0
        });
      } else l.d.m(g);
  }, St.requestFormReset = function(g) {
    l.d.r(g);
  }, St.unstable_batchedUpdates = function(g, f) {
    return g(f);
  }, St.useFormState = function(g, f, v) {
    return _.H.useFormState(g, f, v);
  }, St.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, St.version = "19.2.3", St;
}
var hp;
function yb() {
  if (hp) return hu.exports;
  hp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), hu.exports = vb(), hu.exports;
}
var vp;
function bb() {
  if (vp) return Qo;
  vp = 1;
  var a = hb(), i = ju(), o = yb();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function _(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (d(e) !== e)
      throw Error(l(188));
  }
  function f(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return g(s), e;
          if (u === r) return g(s), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = s, r = u;
      else {
        for (var p = !1, b = s.child; b; ) {
          if (b === n) {
            p = !0, n = s, r = u;
            break;
          }
          if (b === r) {
            p = !0, r = s, n = u;
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = u.child; b; ) {
            if (b === n) {
              p = !0, n = u, r = s;
              break;
            }
            if (b === r) {
              p = !0, r = u, n = s;
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), P = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), W = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), fe = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object" ? null : (e = fe && e[fe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ce = /* @__PURE__ */ Symbol.for("react.client.reference");
  function we(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case R:
        return "Profiler";
      case L:
        return "StrictMode";
      case H:
        return "Suspense";
      case F:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case U:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : we(e.type) || "Memo";
        case W:
          t = e._payload, e = e._init;
          try {
            return we(e(t));
          } catch {
          }
      }
    return null;
  }
  var xe = Array.isArray, M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, _e = [], pe = -1;
  function z(e) {
    return { current: e };
  }
  function q(e) {
    0 > pe || (e.current = _e[pe], _e[pe] = null, pe--);
  }
  function X(e, t) {
    pe++, _e[pe] = e.current, e.current = t;
  }
  var $ = z(null), ee = z(null), le = z(null), ve = z(null);
  function Ze(e, t) {
    switch (X(le, t), X(ee, e), X($, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rf(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rf(t), e = Df(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    q($), X($, e);
  }
  function Le() {
    q($), q(ee), q(le);
  }
  function kt(e) {
    e.memoizedState !== null && X(ve, e);
    var t = $.current, n = Df(t, e.type);
    t !== n && (X(ee, e), X($, n));
  }
  function ea(e) {
    ee.current === e && (q($), q(ee)), ve.current === e && (q(ve), Ko._currentValue = Q);
  }
  var Dt, ga;
  function Tt(e) {
    if (Dt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Dt = t && t[1] || "", ga = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Dt + e + ga;
  }
  var jn = !1;
  function Ln(e, t) {
    if (!e || jn) return "";
    jn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (j) {
                  var O = j;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (j) {
                  O = j;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                O = j;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (j) {
            if (j && O && typeof j.stack == "string")
              return [j.stack, O.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = r.DetermineComponentFrameRoot(), p = u[0], b = u[1];
      if (p && b) {
        var S = p.split(`
`), x = b.split(`
`);
        for (s = r = 0; r < S.length && !S[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; s < x.length && !x[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (r === S.length || s === x.length)
          for (r = S.length - 1, s = x.length - 1; 1 <= r && 0 <= s && S[r] !== x[s]; )
            s--;
        for (; 1 <= r && 0 <= s; r--, s--)
          if (S[r] !== x[s]) {
            if (r !== 1 || s !== 1)
              do
                if (r--, s--, 0 > s || S[r] !== x[s]) {
                  var G = `
` + S[r].replace(" at new ", " at ");
                  return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                }
              while (1 <= r && 0 <= s);
            break;
          }
      }
    } finally {
      jn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Tt(n) : "";
  }
  function Un(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(e.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Tt("Suspense Fallback") : Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 15:
        return Ln(e.type, !1);
      case 11:
        return Ln(e.type.render, !1);
      case 1:
        return Ln(e.type, !0);
      case 31:
        return Tt("Activity");
      default:
        return "";
    }
  }
  function di(e) {
    try {
      var t = "", n = null;
      do
        t += Un(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var bt = Object.prototype.hasOwnProperty, At = a.unstable_scheduleCallback, wt = a.unstable_cancelCallback, ha = a.unstable_shouldYield, Ja = a.unstable_requestPaint, Nt = a.unstable_now, Kh = a.unstable_getCurrentPriorityLevel, ud = a.unstable_ImmediatePriority, dd = a.unstable_UserBlockingPriority, fr = a.unstable_NormalPriority, Xh = a.unstable_LowPriority, _d = a.unstable_IdlePriority, Fh = a.log, Wh = a.unstable_setDisableYieldValue, io = null, Yt = null;
  function en(e) {
    if (typeof Fh == "function" && Wh(e), Yt && typeof Yt.setStrictMode == "function")
      try {
        Yt.setStrictMode(io, e);
      } catch {
      }
  }
  var Zt = Math.clz32 ? Math.clz32 : Jh, $h = Math.log, Qh = Math.LN2;
  function Jh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - ($h(e) / Qh | 0) | 0;
  }
  var pr = 256, gr = 262144, hr = 4194304;
  function qn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function vr(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, u = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var b = r & 134217727;
    return b !== 0 ? (r = b & ~u, r !== 0 ? s = qn(r) : (p &= b, p !== 0 ? s = qn(p) : n || (n = b & ~e, n !== 0 && (s = qn(n))))) : (b = r & ~u, b !== 0 ? s = qn(b) : p !== 0 ? s = qn(p) : n || (n = r & ~e, n !== 0 && (s = qn(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : s;
  }
  function oo(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ev(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function md() {
    var e = hr;
    return hr <<= 1, (hr & 62914560) === 0 && (hr = 4194304), e;
  }
  function es(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ro(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function tv(e, t, n, r, s, u) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, S = e.expirationTimes, x = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var G = 31 - Zt(n), B = 1 << G;
      b[G] = 0, S[G] = -1;
      var O = x[G];
      if (O !== null)
        for (x[G] = null, G = 0; G < O.length; G++) {
          var j = O[G];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~B;
    }
    r !== 0 && fd(e, r, 0), u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t));
  }
  function fd(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - Zt(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
  }
  function pd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Zt(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  function gd(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : ts(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function ts(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function as(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hd() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : np(e.type));
  }
  function vd(e, t) {
    var n = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = n;
    }
  }
  var tn = Math.random().toString(36).slice(2), _t = "__reactFiber$" + tn, jt = "__reactProps$" + tn, _i = "__reactContainer$" + tn, ns = "__reactEvents$" + tn, av = "__reactListeners$" + tn, nv = "__reactHandles$" + tn, yd = "__reactResources$" + tn, lo = "__reactMarker$" + tn;
  function is(e) {
    delete e[_t], delete e[jt], delete e[ns], delete e[av], delete e[nv];
  }
  function mi(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_i] || n[_t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = If(e); e !== null; ) {
            if (n = e[_t]) return n;
            e = If(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function fi(e) {
    if (e = e[_t] || e[_i]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function so(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function pi(e) {
    var t = e[yd];
    return t || (t = e[yd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[lo] = !0;
  }
  var bd = /* @__PURE__ */ new Set(), wd = {};
  function Gn(e, t) {
    gi(e, t), gi(e + "Capture", t);
  }
  function gi(e, t) {
    for (wd[e] = t, e = 0; e < t.length; e++)
      bd.add(t[e]);
  }
  var iv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sd = {}, Ed = {};
  function ov(e) {
    return bt.call(Ed, e) ? !0 : bt.call(Sd, e) ? !1 : iv.test(e) ? Ed[e] = !0 : (Sd[e] = !0, !1);
  }
  function yr(e, t, n) {
    if (ov(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function br(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Oa(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  function ta(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function zd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function rv(e, t, n) {
    var r = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var s = r.get, u = r.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(p) {
          n = "" + p, u.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: r.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(p) {
          n = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function os(e) {
    if (!e._valueTracker) {
      var t = zd(e) ? "checked" : "value";
      e._valueTracker = rv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function kd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = zd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var lv = /[\n"\\]/g;
  function aa(e) {
    return e.replace(
      lv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function rs(e, t, n, r, s, u, p, b) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ta(t)) : e.value !== "" + ta(t) && (e.value = "" + ta(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? ls(e, p, ta(t)) : n != null ? ls(e, p, ta(n)) : r != null && e.removeAttribute("value"), s == null && u != null && (e.defaultChecked = !!u), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + ta(b) : e.removeAttribute("name");
  }
  function Td(e, t, n, r, s, u, p, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        os(e);
        return;
      }
      n = n != null ? "" + ta(n) : "", t = t != null ? "" + ta(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? s, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = b ? e.checked : !!r, e.defaultChecked = !!r, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), os(e);
  }
  function ls(e, t, n) {
    t === "number" && wr(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function hi(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++)
        t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ta(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ad(e, t, n) {
    if (t != null && (t = "" + ta(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + ta(n) : "";
  }
  function Nd(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(l(92));
        if (xe(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        n = r;
      }
      n == null && (n = ""), t = n;
    }
    n = ta(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), os(e);
  }
  function vi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var sv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cd(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || sv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function xd(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, n != null) {
      for (var r in n)
        !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var s in t)
        r = t[s], t.hasOwnProperty(s) && n[s] !== r && Cd(e, s, r);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Cd(e, u, t[u]);
  }
  function ss(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), uv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sr(e) {
    return uv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ra() {
  }
  var cs = null;
  function us(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var yi = null, bi = null;
  function Md(e) {
    var t = fi(e);
    if (t && (e = t.stateNode)) {
      var n = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (rs(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + aa(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var s = r[jt] || null;
                if (!s) throw Error(l(90));
                rs(
                  r,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              r = n[t], r.form === e.form && kd(r);
          }
          break e;
        case "textarea":
          Ad(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && hi(e, !!n.multiple, t, !1);
      }
    }
  }
  var ds = !1;
  function Od(e, t, n) {
    if (ds) return e(t, n);
    ds = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (ds = !1, (yi !== null || bi !== null) && (cl(), yi && (t = yi, e = bi, bi = yi = null, Md(t), e)))
        for (t = 0; t < e.length; t++) Md(e[t]);
    }
  }
  function co(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[jt] || null;
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        l(231, t, typeof n)
      );
    return n;
  }
  var Da = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _s = !1;
  if (Da)
    try {
      var uo = {};
      Object.defineProperty(uo, "passive", {
        get: function() {
          _s = !0;
        }
      }), window.addEventListener("test", uo, uo), window.removeEventListener("test", uo, uo);
    } catch {
      _s = !1;
    }
  var an = null, ms = null, Er = null;
  function Rd() {
    if (Er) return Er;
    var e, t = ms, n = t.length, r, s = "value" in an ? an.value : an.textContent, u = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var p = n - e;
    for (r = 1; r <= p && t[n - r] === s[u - r]; r++) ;
    return Er = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function kr() {
    return !0;
  }
  function Dd() {
    return !1;
  }
  function Lt(e) {
    function t(n, r, s, u, p) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var b in e)
        e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? kr : Dd, this.isPropagationStopped = Dd, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kr);
      },
      persist: function() {
      },
      isPersistent: kr
    }), t;
  }
  var Hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Tr = Lt(Hn), _o = y({}, Hn, { view: 0, detail: 0 }), dv = Lt(_o), fs, ps, mo, Ar = y({}, _o, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== mo && (mo && e.type === "mousemove" ? (fs = e.screenX - mo.screenX, ps = e.screenY - mo.screenY) : ps = fs = 0, mo = e), fs);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ps;
    }
  }), jd = Lt(Ar), _v = y({}, Ar, { dataTransfer: 0 }), mv = Lt(_v), fv = y({}, _o, { relatedTarget: 0 }), gs = Lt(fv), pv = y({}, Hn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gv = Lt(pv), hv = y({}, Hn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), vv = Lt(hv), yv = y({}, Hn, { data: 0 }), Ld = Lt(yv), bv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, wv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Sv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ev(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Sv[e]) ? !!t[e] : !1;
  }
  function hs() {
    return Ev;
  }
  var zv = y({}, _o, {
    key: function(e) {
      if (e.key) {
        var t = bv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hs,
    charCode: function(e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), kv = Lt(zv), Tv = y({}, Ar, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ud = Lt(Tv), Av = y({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hs
  }), Nv = Lt(Av), Cv = y({}, Hn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xv = Lt(Cv), Mv = y({}, Ar, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ov = Lt(Mv), Rv = y({}, Hn, {
    newState: 0,
    oldState: 0
  }), Dv = Lt(Rv), jv = [9, 13, 27, 32], vs = Da && "CompositionEvent" in window, fo = null;
  Da && "documentMode" in document && (fo = document.documentMode);
  var Lv = Da && "TextEvent" in window && !fo, qd = Da && (!vs || fo && 8 < fo && 11 >= fo), Gd = " ", Hd = !1;
  function Id(e, t) {
    switch (e) {
      case "keyup":
        return jv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Pd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var wi = !1;
  function Uv(e, t) {
    switch (e) {
      case "compositionend":
        return Pd(t);
      case "keypress":
        return t.which !== 32 ? null : (Hd = !0, Gd);
      case "textInput":
        return e = t.data, e === Gd && Hd ? null : e;
      default:
        return null;
    }
  }
  function qv(e, t) {
    if (wi)
      return e === "compositionend" || !vs && Id(e, t) ? (e = Rd(), Er = ms = an = null, wi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Bd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gv[e.type] : t === "textarea";
  }
  function Yd(e, t, n, r) {
    yi ? bi ? bi.push(r) : bi = [r] : yi = r, t = gl(t, "onChange"), 0 < t.length && (n = new Tr(
      "onChange",
      "change",
      null,
      n,
      r
    ), e.push({ event: n, listeners: t }));
  }
  var po = null, go = null;
  function Hv(e) {
    Af(e, 0);
  }
  function Nr(e) {
    var t = so(e);
    if (kd(t)) return e;
  }
  function Zd(e, t) {
    if (e === "change") return t;
  }
  var Vd = !1;
  if (Da) {
    var ys;
    if (Da) {
      var bs = "oninput" in document;
      if (!bs) {
        var Kd = document.createElement("div");
        Kd.setAttribute("oninput", "return;"), bs = typeof Kd.oninput == "function";
      }
      ys = bs;
    } else ys = !1;
    Vd = ys && (!document.documentMode || 9 < document.documentMode);
  }
  function Xd() {
    po && (po.detachEvent("onpropertychange", Fd), go = po = null);
  }
  function Fd(e) {
    if (e.propertyName === "value" && Nr(go)) {
      var t = [];
      Yd(
        t,
        go,
        e,
        us(e)
      ), Od(Hv, t);
    }
  }
  function Iv(e, t, n) {
    e === "focusin" ? (Xd(), po = t, go = n, po.attachEvent("onpropertychange", Fd)) : e === "focusout" && Xd();
  }
  function Pv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Nr(go);
  }
  function Bv(e, t) {
    if (e === "click") return Nr(t);
  }
  function Yv(e, t) {
    if (e === "input" || e === "change")
      return Nr(t);
  }
  function Zv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Vt = typeof Object.is == "function" ? Object.is : Zv;
  function ho(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!bt.call(t, s) || !Vt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Wd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $d(e, t) {
    var n = Wd(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Wd(n);
    }
  }
  function Qd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Jd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = wr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wr(e.document);
    }
    return t;
  }
  function ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Vv = Da && "documentMode" in document && 11 >= document.documentMode, Si = null, Ss = null, vo = null, Es = !1;
  function e_(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Es || Si == null || Si !== wr(r) || (r = Si, "selectionStart" in r && ws(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), vo && ho(vo, r) || (vo = r, r = gl(Ss, "onSelect"), 0 < r.length && (t = new Tr(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: r }), t.target = Si)));
  }
  function In(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ei = {
    animationend: In("Animation", "AnimationEnd"),
    animationiteration: In("Animation", "AnimationIteration"),
    animationstart: In("Animation", "AnimationStart"),
    transitionrun: In("Transition", "TransitionRun"),
    transitionstart: In("Transition", "TransitionStart"),
    transitioncancel: In("Transition", "TransitionCancel"),
    transitionend: In("Transition", "TransitionEnd")
  }, zs = {}, t_ = {};
  Da && (t_ = document.createElement("div").style, "AnimationEvent" in window || (delete Ei.animationend.animation, delete Ei.animationiteration.animation, delete Ei.animationstart.animation), "TransitionEvent" in window || delete Ei.transitionend.transition);
  function Pn(e) {
    if (zs[e]) return zs[e];
    if (!Ei[e]) return e;
    var t = Ei[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in t_)
        return zs[e] = t[n];
    return e;
  }
  var a_ = Pn("animationend"), n_ = Pn("animationiteration"), i_ = Pn("animationstart"), Kv = Pn("transitionrun"), Xv = Pn("transitionstart"), Fv = Pn("transitioncancel"), o_ = Pn("transitionend"), r_ = /* @__PURE__ */ new Map(), ks = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ks.push("scrollEnd");
  function va(e, t) {
    r_.set(e, t), Gn(t, [e]);
  }
  var Cr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, na = [], zi = 0, Ts = 0;
  function xr() {
    for (var e = zi, t = Ts = zi = 0; t < e; ) {
      var n = na[t];
      na[t++] = null;
      var r = na[t];
      na[t++] = null;
      var s = na[t];
      na[t++] = null;
      var u = na[t];
      if (na[t++] = null, r !== null && s !== null) {
        var p = r.pending;
        p === null ? s.next = s : (s.next = p.next, p.next = s), r.pending = s;
      }
      u !== 0 && l_(n, s, u);
    }
  }
  function Mr(e, t, n, r) {
    na[zi++] = e, na[zi++] = t, na[zi++] = n, na[zi++] = r, Ts |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function As(e, t, n, r) {
    return Mr(e, t, n, r), Or(e);
  }
  function Bn(e, t) {
    return Mr(e, null, null, t), Or(e);
  }
  function l_(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var s = !1, u = e.return; u !== null; )
      u.childLanes |= n, r = u.alternate, r !== null && (r.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (s = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, s && t !== null && (s = 31 - Zt(n), e = u.hiddenUpdates, r = e[s], r === null ? e[s] = [t] : r.push(t), t.lane = n | 536870912), u) : null;
  }
  function Or(e) {
    if (50 < Ho)
      throw Ho = 0, Lc = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ki = {};
  function Wv(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, n, r) {
    return new Wv(e, t, n, r);
  }
  function Ns(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ja(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function s_(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Rr(e, t, n, r, s, u) {
    var p = 0;
    if (r = e, typeof e == "function") Ns(e) && (p = 1);
    else if (typeof e == "string")
      p = tb(
        e,
        n,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ae:
          return e = Kt(31, n, t, s), e.elementType = ae, e.lanes = u, e;
        case N:
          return Yn(n.children, s, u, t);
        case L:
          p = 8, s |= 24;
          break;
        case R:
          return e = Kt(12, n, t, s | 2), e.elementType = R, e.lanes = u, e;
        case H:
          return e = Kt(13, n, t, s), e.elementType = H, e.lanes = u, e;
        case F:
          return e = Kt(19, n, t, s), e.elementType = F, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                p = 10;
                break e;
              case U:
                p = 9;
                break e;
              case P:
                p = 11;
                break e;
              case Z:
                p = 14;
                break e;
              case W:
                p = 16, r = null;
                break e;
            }
          p = 29, n = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Kt(p, n, t, s), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function Yn(e, t, n, r) {
    return e = Kt(7, e, r, t), e.lanes = n, e;
  }
  function Cs(e, t, n) {
    return e = Kt(6, e, null, t), e.lanes = n, e;
  }
  function c_(e) {
    var t = Kt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function xs(e, t, n) {
    return t = Kt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var u_ = /* @__PURE__ */ new WeakMap();
  function ia(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = u_.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: di(t)
      }, u_.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: di(t)
    };
  }
  var Ti = [], Ai = 0, Dr = null, yo = 0, oa = [], ra = 0, nn = null, za = 1, ka = "";
  function La(e, t) {
    Ti[Ai++] = yo, Ti[Ai++] = Dr, Dr = e, yo = t;
  }
  function d_(e, t, n) {
    oa[ra++] = za, oa[ra++] = ka, oa[ra++] = nn, nn = e;
    var r = za;
    e = ka;
    var s = 32 - Zt(r) - 1;
    r &= ~(1 << s), n += 1;
    var u = 32 - Zt(t) + s;
    if (30 < u) {
      var p = s - s % 5;
      u = (r & (1 << p) - 1).toString(32), r >>= p, s -= p, za = 1 << 32 - Zt(t) + s | n << s | r, ka = u + e;
    } else
      za = 1 << u | n << s | r, ka = e;
  }
  function Ms(e) {
    e.return !== null && (La(e, 1), d_(e, 1, 0));
  }
  function Os(e) {
    for (; e === Dr; )
      Dr = Ti[--Ai], Ti[Ai] = null, yo = Ti[--Ai], Ti[Ai] = null;
    for (; e === nn; )
      nn = oa[--ra], oa[ra] = null, ka = oa[--ra], oa[ra] = null, za = oa[--ra], oa[ra] = null;
  }
  function __(e, t) {
    oa[ra++] = za, oa[ra++] = ka, oa[ra++] = nn, za = t.id, ka = t.overflow, nn = e;
  }
  var mt = null, Ve = null, Ae = !1, on = null, la = !1, Rs = Error(l(519));
  function rn(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw bo(ia(t, e)), Rs;
  }
  function m_(e) {
    var t = e.stateNode, n = e.type, r = e.memoizedProps;
    switch (t[_t] = e, t[jt] = r, n) {
      case "dialog":
        Ee("cancel", t), Ee("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ee("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Po.length; n++)
          Ee(Po[n], t);
        break;
      case "source":
        Ee("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ee("error", t), Ee("load", t);
        break;
      case "details":
        Ee("toggle", t);
        break;
      case "input":
        Ee("invalid", t), Td(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        );
        break;
      case "select":
        Ee("invalid", t);
        break;
      case "textarea":
        Ee("invalid", t), Nd(t, r.value, r.defaultValue, r.children);
    }
    n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || r.suppressHydrationWarning === !0 || Mf(t.textContent, n) ? (r.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)), r.onScroll != null && Ee("scroll", t), r.onScrollEnd != null && Ee("scrollend", t), r.onClick != null && (t.onclick = Ra), t = !0) : t = !1, t || rn(e, !0);
  }
  function f_(e) {
    for (mt = e.return; mt; )
      switch (mt.tag) {
        case 5:
        case 31:
        case 13:
          la = !1;
          return;
        case 27:
        case 3:
          la = !0;
          return;
        default:
          mt = mt.return;
      }
  }
  function Ni(e) {
    if (e !== mt) return !1;
    if (!Ae) return f_(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || $c(e.type, e.memoizedProps)), n = !n), n && Ve && rn(e), f_(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ve = Hf(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ve = Hf(e);
    } else
      t === 27 ? (t = Ve, bn(e.type) ? (e = au, au = null, Ve = e) : Ve = t) : Ve = mt ? ca(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zn() {
    Ve = mt = null, Ae = !1;
  }
  function Ds() {
    var e = on;
    return e !== null && (Ht === null ? Ht = e : Ht.push.apply(
      Ht,
      e
    ), on = null), e;
  }
  function bo(e) {
    on === null ? on = [e] : on.push(e);
  }
  var js = z(null), Vn = null, Ua = null;
  function ln(e, t, n) {
    X(js, t._currentValue), t._currentValue = n;
  }
  function qa(e) {
    e._currentValue = js.current, q(js);
  }
  function Ls(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Us(e, t, n, r) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var p = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var b = u;
          u = s;
          for (var S = 0; S < t.length; S++)
            if (b.context === t[S]) {
              u.lanes |= n, b = u.alternate, b !== null && (b.lanes |= n), Ls(
                u.return,
                n,
                e
              ), r || (p = null);
              break e;
            }
          u = b.next;
        }
      } else if (s.tag === 18) {
        if (p = s.return, p === null) throw Error(l(341));
        p.lanes |= n, u = p.alternate, u !== null && (u.lanes |= n), Ls(p, n, e), p = null;
      } else p = s.child;
      if (p !== null) p.return = s;
      else
        for (p = s; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (s = p.sibling, s !== null) {
            s.return = p.return, p = s;
            break;
          }
          p = p.return;
        }
      s = p;
    }
  }
  function Ci(e, t, n, r) {
    e = null;
    for (var s = t, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var p = s.alternate;
        if (p === null) throw Error(l(387));
        if (p = p.memoizedProps, p !== null) {
          var b = s.type;
          Vt(s.pendingProps.value, p.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (s === ve.current) {
        if (p = s.alternate, p === null) throw Error(l(387));
        p.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Ko) : e = [Ko]);
      }
      s = s.return;
    }
    e !== null && Us(
      t,
      e,
      n,
      r
    ), t.flags |= 262144;
  }
  function jr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Vt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Kn(e) {
    Vn = e, Ua = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return p_(Vn, e);
  }
  function Lr(e, t) {
    return Vn === null && Kn(e), p_(e, t);
  }
  function p_(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Ua === null) {
      if (e === null) throw Error(l(308));
      Ua = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ua = Ua.next = t;
    return n;
  }
  var $v = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Qv = a.unstable_scheduleCallback, Jv = a.unstable_NormalPriority, nt = {
    $$typeof: Y,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function qs() {
    return {
      controller: new $v(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function wo(e) {
    e.refCount--, e.refCount === 0 && Qv(Jv, function() {
      e.controller.abort();
    });
  }
  var So = null, Gs = 0, xi = 0, Mi = null;
  function ey(e, t) {
    if (So === null) {
      var n = So = [];
      Gs = 0, xi = Pc(), Mi = {
        status: "pending",
        value: void 0,
        then: function(r) {
          n.push(r);
        }
      };
    }
    return Gs++, t.then(g_, g_), t;
  }
  function g_() {
    if (--Gs === 0 && So !== null) {
      Mi !== null && (Mi.status = "fulfilled");
      var e = So;
      So = null, xi = 0, Mi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ty(e, t) {
    var n = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var s = 0; s < n.length; s++) (0, n[s])(t);
      },
      function(s) {
        for (r.status = "rejected", r.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), r;
  }
  var h_ = M.S;
  M.S = function(e, t) {
    ef = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && ey(e, t), h_ !== null && h_(e, t);
  };
  var Xn = z(null);
  function Hs() {
    var e = Xn.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Ur(e, t) {
    t === null ? X(Xn, Xn.current) : X(Xn, t.pool);
  }
  function v_() {
    var e = Hs();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Oi = Error(l(460)), Is = Error(l(474)), qr = Error(l(542)), Gr = { then: function() {
  } };
  function y_(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function b_(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Ra, Ra), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, S_(e), e;
      default:
        if (typeof t.status == "string") t.then(Ra, Ra);
        else {
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = r;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, S_(e), e;
        }
        throw Wn = t, Oi;
    }
  }
  function Fn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Wn = n, Oi) : n;
    }
  }
  var Wn = null;
  function w_() {
    if (Wn === null) throw Error(l(459));
    var e = Wn;
    return Wn = null, e;
  }
  function S_(e) {
    if (e === Oi || e === qr)
      throw Error(l(483));
  }
  var Ri = null, Eo = 0;
  function Hr(e) {
    var t = Eo;
    return Eo += 1, Ri === null && (Ri = []), b_(Ri, e, t);
  }
  function zo(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ir(e, t) {
    throw t.$$typeof === w ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function E_(e) {
    function t(A, k) {
      if (e) {
        var C = A.deletions;
        C === null ? (A.deletions = [k], A.flags |= 16) : C.push(k);
      }
    }
    function n(A, k) {
      if (!e) return null;
      for (; k !== null; )
        t(A, k), k = k.sibling;
      return null;
    }
    function r(A) {
      for (var k = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? k.set(A.key, A) : k.set(A.index, A), A = A.sibling;
      return k;
    }
    function s(A, k) {
      return A = ja(A, k), A.index = 0, A.sibling = null, A;
    }
    function u(A, k, C) {
      return A.index = C, e ? (C = A.alternate, C !== null ? (C = C.index, C < k ? (A.flags |= 67108866, k) : C) : (A.flags |= 67108866, k)) : (A.flags |= 1048576, k);
    }
    function p(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function b(A, k, C, I) {
      return k === null || k.tag !== 6 ? (k = Cs(C, A.mode, I), k.return = A, k) : (k = s(k, C), k.return = A, k);
    }
    function S(A, k, C, I) {
      var oe = C.type;
      return oe === N ? G(
        A,
        k,
        C.props.children,
        I,
        C.key
      ) : k !== null && (k.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === W && Fn(oe) === k.type) ? (k = s(k, C.props), zo(k, C), k.return = A, k) : (k = Rr(
        C.type,
        C.key,
        C.props,
        null,
        A.mode,
        I
      ), zo(k, C), k.return = A, k);
    }
    function x(A, k, C, I) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== C.containerInfo || k.stateNode.implementation !== C.implementation ? (k = xs(C, A.mode, I), k.return = A, k) : (k = s(k, C.children || []), k.return = A, k);
    }
    function G(A, k, C, I, oe) {
      return k === null || k.tag !== 7 ? (k = Yn(
        C,
        A.mode,
        I,
        oe
      ), k.return = A, k) : (k = s(k, C), k.return = A, k);
    }
    function B(A, k, C) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return k = Cs(
          "" + k,
          A.mode,
          C
        ), k.return = A, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case E:
            return C = Rr(
              k.type,
              k.key,
              k.props,
              null,
              A.mode,
              C
            ), zo(C, k), C.return = A, C;
          case T:
            return k = xs(
              k,
              A.mode,
              C
            ), k.return = A, k;
          case W:
            return k = Fn(k), B(A, k, C);
        }
        if (xe(k) || ie(k))
          return k = Yn(
            k,
            A.mode,
            C,
            null
          ), k.return = A, k;
        if (typeof k.then == "function")
          return B(A, Hr(k), C);
        if (k.$$typeof === Y)
          return B(
            A,
            Lr(A, k),
            C
          );
        Ir(A, k);
      }
      return null;
    }
    function O(A, k, C, I) {
      var oe = k !== null ? k.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return oe !== null ? null : b(A, k, "" + C, I);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case E:
            return C.key === oe ? S(A, k, C, I) : null;
          case T:
            return C.key === oe ? x(A, k, C, I) : null;
          case W:
            return C = Fn(C), O(A, k, C, I);
        }
        if (xe(C) || ie(C))
          return oe !== null ? null : G(A, k, C, I, null);
        if (typeof C.then == "function")
          return O(
            A,
            k,
            Hr(C),
            I
          );
        if (C.$$typeof === Y)
          return O(
            A,
            k,
            Lr(A, C),
            I
          );
        Ir(A, C);
      }
      return null;
    }
    function j(A, k, C, I, oe) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return A = A.get(C) || null, b(k, A, "" + I, oe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case E:
            return A = A.get(
              I.key === null ? C : I.key
            ) || null, S(k, A, I, oe);
          case T:
            return A = A.get(
              I.key === null ? C : I.key
            ) || null, x(k, A, I, oe);
          case W:
            return I = Fn(I), j(
              A,
              k,
              C,
              I,
              oe
            );
        }
        if (xe(I) || ie(I))
          return A = A.get(C) || null, G(k, A, I, oe, null);
        if (typeof I.then == "function")
          return j(
            A,
            k,
            C,
            Hr(I),
            oe
          );
        if (I.$$typeof === Y)
          return j(
            A,
            k,
            C,
            Lr(k, I),
            oe
          );
        Ir(k, I);
      }
      return null;
    }
    function J(A, k, C, I) {
      for (var oe = null, Me = null, ne = k, be = k = 0, ke = null; ne !== null && be < C.length; be++) {
        ne.index > be ? (ke = ne, ne = null) : ke = ne.sibling;
        var Oe = O(
          A,
          ne,
          C[be],
          I
        );
        if (Oe === null) {
          ne === null && (ne = ke);
          break;
        }
        e && ne && Oe.alternate === null && t(A, ne), k = u(Oe, k, be), Me === null ? oe = Oe : Me.sibling = Oe, Me = Oe, ne = ke;
      }
      if (be === C.length)
        return n(A, ne), Ae && La(A, be), oe;
      if (ne === null) {
        for (; be < C.length; be++)
          ne = B(A, C[be], I), ne !== null && (k = u(
            ne,
            k,
            be
          ), Me === null ? oe = ne : Me.sibling = ne, Me = ne);
        return Ae && La(A, be), oe;
      }
      for (ne = r(ne); be < C.length; be++)
        ke = j(
          ne,
          A,
          be,
          C[be],
          I
        ), ke !== null && (e && ke.alternate !== null && ne.delete(
          ke.key === null ? be : ke.key
        ), k = u(
          ke,
          k,
          be
        ), Me === null ? oe = ke : Me.sibling = ke, Me = ke);
      return e && ne.forEach(function(kn) {
        return t(A, kn);
      }), Ae && La(A, be), oe;
    }
    function ce(A, k, C, I) {
      if (C == null) throw Error(l(151));
      for (var oe = null, Me = null, ne = k, be = k = 0, ke = null, Oe = C.next(); ne !== null && !Oe.done; be++, Oe = C.next()) {
        ne.index > be ? (ke = ne, ne = null) : ke = ne.sibling;
        var kn = O(A, ne, Oe.value, I);
        if (kn === null) {
          ne === null && (ne = ke);
          break;
        }
        e && ne && kn.alternate === null && t(A, ne), k = u(kn, k, be), Me === null ? oe = kn : Me.sibling = kn, Me = kn, ne = ke;
      }
      if (Oe.done)
        return n(A, ne), Ae && La(A, be), oe;
      if (ne === null) {
        for (; !Oe.done; be++, Oe = C.next())
          Oe = B(A, Oe.value, I), Oe !== null && (k = u(Oe, k, be), Me === null ? oe = Oe : Me.sibling = Oe, Me = Oe);
        return Ae && La(A, be), oe;
      }
      for (ne = r(ne); !Oe.done; be++, Oe = C.next())
        Oe = j(ne, A, be, Oe.value, I), Oe !== null && (e && Oe.alternate !== null && ne.delete(Oe.key === null ? be : Oe.key), k = u(Oe, k, be), Me === null ? oe = Oe : Me.sibling = Oe, Me = Oe);
      return e && ne.forEach(function(_b) {
        return t(A, _b);
      }), Ae && La(A, be), oe;
    }
    function Be(A, k, C, I) {
      if (typeof C == "object" && C !== null && C.type === N && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case E:
            e: {
              for (var oe = C.key; k !== null; ) {
                if (k.key === oe) {
                  if (oe = C.type, oe === N) {
                    if (k.tag === 7) {
                      n(
                        A,
                        k.sibling
                      ), I = s(
                        k,
                        C.props.children
                      ), I.return = A, A = I;
                      break e;
                    }
                  } else if (k.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === W && Fn(oe) === k.type) {
                    n(
                      A,
                      k.sibling
                    ), I = s(k, C.props), zo(I, C), I.return = A, A = I;
                    break e;
                  }
                  n(A, k);
                  break;
                } else t(A, k);
                k = k.sibling;
              }
              C.type === N ? (I = Yn(
                C.props.children,
                A.mode,
                I,
                C.key
              ), I.return = A, A = I) : (I = Rr(
                C.type,
                C.key,
                C.props,
                null,
                A.mode,
                I
              ), zo(I, C), I.return = A, A = I);
            }
            return p(A);
          case T:
            e: {
              for (oe = C.key; k !== null; ) {
                if (k.key === oe)
                  if (k.tag === 4 && k.stateNode.containerInfo === C.containerInfo && k.stateNode.implementation === C.implementation) {
                    n(
                      A,
                      k.sibling
                    ), I = s(k, C.children || []), I.return = A, A = I;
                    break e;
                  } else {
                    n(A, k);
                    break;
                  }
                else t(A, k);
                k = k.sibling;
              }
              I = xs(C, A.mode, I), I.return = A, A = I;
            }
            return p(A);
          case W:
            return C = Fn(C), Be(
              A,
              k,
              C,
              I
            );
        }
        if (xe(C))
          return J(
            A,
            k,
            C,
            I
          );
        if (ie(C)) {
          if (oe = ie(C), typeof oe != "function") throw Error(l(150));
          return C = oe.call(C), ce(
            A,
            k,
            C,
            I
          );
        }
        if (typeof C.then == "function")
          return Be(
            A,
            k,
            Hr(C),
            I
          );
        if (C.$$typeof === Y)
          return Be(
            A,
            k,
            Lr(A, C),
            I
          );
        Ir(A, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, k !== null && k.tag === 6 ? (n(A, k.sibling), I = s(k, C), I.return = A, A = I) : (n(A, k), I = Cs(C, A.mode, I), I.return = A, A = I), p(A)) : n(A, k);
    }
    return function(A, k, C, I) {
      try {
        Eo = 0;
        var oe = Be(
          A,
          k,
          C,
          I
        );
        return Ri = null, oe;
      } catch (ne) {
        if (ne === Oi || ne === qr) throw ne;
        var Me = Kt(29, ne, null, A.mode);
        return Me.lanes = I, Me.return = A, Me;
      }
    };
  }
  var $n = E_(!0), z_ = E_(!1), sn = !1;
  function Ps(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function cn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function un(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, t = Or(e), l_(e, null, n), t;
    }
    return Mr(e, r, t, n), Or(e);
  }
  function ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, pd(e, n);
    }
  }
  function Ys(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? s = u = t : u = u.next = t;
      } else s = u = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Zs = !1;
  function To() {
    if (Zs) {
      var e = Mi;
      if (e !== null) throw e;
    }
  }
  function Ao(e, t, n, r) {
    Zs = !1;
    var s = e.updateQueue;
    sn = !1;
    var u = s.firstBaseUpdate, p = s.lastBaseUpdate, b = s.shared.pending;
    if (b !== null) {
      s.shared.pending = null;
      var S = b, x = S.next;
      S.next = null, p === null ? u = x : p.next = x, p = S;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, b = G.lastBaseUpdate, b !== p && (b === null ? G.firstBaseUpdate = x : b.next = x, G.lastBaseUpdate = S));
    }
    if (u !== null) {
      var B = s.baseState;
      p = 0, G = x = S = null, b = u;
      do {
        var O = b.lane & -536870913, j = O !== b.lane;
        if (j ? (ze & O) === O : (r & O) === O) {
          O !== 0 && O === xi && (Zs = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ce = b;
            O = t;
            var Be = n;
            switch (ce.tag) {
              case 1:
                if (J = ce.payload, typeof J == "function") {
                  B = J.call(Be, B, O);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ce.payload, O = typeof J == "function" ? J.call(Be, B, O) : J, O == null) break e;
                B = y({}, B, O);
                break e;
              case 2:
                sn = !0;
            }
          }
          O = b.callback, O !== null && (e.flags |= 64, j && (e.flags |= 8192), j = s.callbacks, j === null ? s.callbacks = [O] : j.push(O));
        } else
          j = {
            lane: O,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, G === null ? (x = G = j, S = B) : G = G.next = j, p |= O;
        if (b = b.next, b === null) {
          if (b = s.shared.pending, b === null)
            break;
          j = b, b = j.next, j.next = null, s.lastBaseUpdate = j, s.shared.pending = null;
        }
      } while (!0);
      G === null && (S = B), s.baseState = S, s.firstBaseUpdate = x, s.lastBaseUpdate = G, u === null && (s.shared.lanes = 0), pn |= p, e.lanes = p, e.memoizedState = B;
    }
  }
  function k_(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function T_(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        k_(n[e], t);
  }
  var Di = z(null), Pr = z(0);
  function A_(e, t) {
    e = Ka, X(Pr, e), X(Di, t), Ka = e | t.baseLanes;
  }
  function Vs() {
    X(Pr, Ka), X(Di, Di.current);
  }
  function Ks() {
    Ka = Pr.current, q(Di), q(Pr);
  }
  var Xt = z(null), sa = null;
  function dn(e) {
    var t = e.alternate;
    X(et, et.current & 1), X(Xt, e), sa === null && (t === null || Di.current !== null || t.memoizedState !== null) && (sa = e);
  }
  function Xs(e) {
    X(et, et.current), X(Xt, e), sa === null && (sa = e);
  }
  function N_(e) {
    e.tag === 22 ? (X(et, et.current), X(Xt, e), sa === null && (sa = e)) : _n();
  }
  function _n() {
    X(et, et.current), X(Xt, Xt.current);
  }
  function Ft(e) {
    q(Xt), sa === e && (sa = null), q(et);
  }
  var et = z(0);
  function Br(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || eu(n) || tu(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ga = 0, ye = null, Ie = null, it = null, Yr = !1, ji = !1, Qn = !1, Zr = 0, No = 0, Li = null, ay = 0;
  function Qe() {
    throw Error(l(321));
  }
  function Fs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function Ws(e, t, n, r, s, u) {
    return Ga = u, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? dm : dc, Qn = !1, u = n(r, s), Qn = !1, ji && (u = x_(
      t,
      n,
      r,
      s
    )), C_(e), u;
  }
  function C_(e) {
    M.H = Mo;
    var t = Ie !== null && Ie.next !== null;
    if (Ga = 0, it = Ie = ye = null, Yr = !1, No = 0, Li = null, t) throw Error(l(300));
    e === null || ot || (e = e.dependencies, e !== null && jr(e) && (ot = !0));
  }
  function x_(e, t, n, r) {
    ye = e;
    var s = 0;
    do {
      if (ji && (Li = null), No = 0, ji = !1, 25 <= s) throw Error(l(301));
      if (s += 1, it = Ie = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = _m, u = t(n, r);
    } while (ji);
    return u;
  }
  function ny() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Co(t) : t, e = e.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== e && (ye.flags |= 1024), t;
  }
  function $s() {
    var e = Zr !== 0;
    return Zr = 0, e;
  }
  function Qs(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Js(e) {
    if (Yr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Yr = !1;
    }
    Ga = 0, it = Ie = ye = null, ji = !1, No = Zr = 0, Li = null;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? ye.memoizedState = it = e : it = it.next = e, it;
  }
  function tt() {
    if (Ie === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = it === null ? ye.memoizedState : it.next;
    if (t !== null)
      it = t, Ie = e;
    else {
      if (e === null)
        throw ye.alternate === null ? Error(l(467)) : Error(l(310));
      Ie = e, e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null
      }, it === null ? ye.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Vr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Co(e) {
    var t = No;
    return No += 1, Li === null && (Li = []), e = b_(Li, e, t), t = ye, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? dm : dc), e;
  }
  function Kr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Co(e);
      if (e.$$typeof === Y) return ft(e);
    }
    throw Error(l(438, String(e)));
  }
  function ec(e) {
    var t = null, n = ye.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var r = ye.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Vr(), ye.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
        n[r] = re;
    return t.index++, n;
  }
  function Ha(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xr(e) {
    var t = tt();
    return tc(t, Ie, e);
  }
  function tc(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = n;
    var s = e.baseQueue, u = r.pending;
    if (u !== null) {
      if (s !== null) {
        var p = s.next;
        s.next = u.next, u.next = p;
      }
      t.baseQueue = s = u, r.pending = null;
    }
    if (u = e.baseState, s === null) e.memoizedState = u;
    else {
      t = s.next;
      var b = p = null, S = null, x = t, G = !1;
      do {
        var B = x.lane & -536870913;
        if (B !== x.lane ? (ze & B) === B : (Ga & B) === B) {
          var O = x.revertLane;
          if (O === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), B === xi && (G = !0);
          else if ((Ga & O) === O) {
            x = x.next, O === xi && (G = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, S === null ? (b = S = B, p = u) : S = S.next = B, ye.lanes |= O, pn |= O;
          B = x.action, Qn && n(u, B), u = x.hasEagerState ? x.eagerState : n(u, B);
        } else
          O = {
            lane: B,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, S === null ? (b = S = O, p = u) : S = S.next = O, ye.lanes |= B, pn |= B;
        x = x.next;
      } while (x !== null && x !== t);
      if (S === null ? p = u : S.next = b, !Vt(u, e.memoizedState) && (ot = !0, G && (n = Mi, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = p, e.baseQueue = S, r.lastRenderedState = u;
    }
    return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function ac(e) {
    var t = tt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, u = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var p = s = s.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== s);
      Vt(u, t.memoizedState) || (ot = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function M_(e, t, n) {
    var r = ye, s = tt(), u = Ae;
    if (u) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else n = t();
    var p = !Vt(
      (Ie || s).memoizedState,
      n
    );
    if (p && (s.memoizedState = n, ot = !0), s = s.queue, oc(D_.bind(null, r, s, e), [
      e
    ]), s.getSnapshot !== t || p || it !== null && it.memoizedState.tag & 1) {
      if (r.flags |= 2048, Ui(
        9,
        { destroy: void 0 },
        R_.bind(
          null,
          r,
          s,
          n,
          t
        ),
        null
      ), Ye === null) throw Error(l(349));
      u || (Ga & 127) !== 0 || O_(r, t, n);
    }
    return n;
  }
  function O_(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = Vr(), ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function R_(e, t, n, r) {
    t.value = n, t.getSnapshot = r, j_(t) && L_(e);
  }
  function D_(e, t, n) {
    return n(function() {
      j_(t) && L_(e);
    });
  }
  function j_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function L_(e) {
    var t = Bn(e, 2);
    t !== null && It(t, e, 2);
  }
  function nc(e) {
    var t = Ct();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Qn) {
        en(!0);
        try {
          n();
        } finally {
          en(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ha,
      lastRenderedState: e
    }, t;
  }
  function U_(e, t, n, r) {
    return e.baseState = n, tc(
      e,
      Ie,
      typeof r == "function" ? r : Ha
    );
  }
  function iy(e, t, n, r, s) {
    if ($r(e)) throw Error(l(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          u.listeners.push(p);
        }
      };
      M.T !== null ? n(!0) : u.isTransition = !1, r(u), n = t.pending, n === null ? (u.next = t.pending = u, q_(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function q_(e, t) {
    var n = t.action, r = t.payload, s = e.state;
    if (t.isTransition) {
      var u = M.T, p = {};
      M.T = p;
      try {
        var b = n(s, r), S = M.S;
        S !== null && S(p, b), G_(e, t, b);
      } catch (x) {
        ic(e, t, x);
      } finally {
        u !== null && p.types !== null && (u.types = p.types), M.T = u;
      }
    } else
      try {
        u = n(s, r), G_(e, t, u);
      } catch (x) {
        ic(e, t, x);
      }
  }
  function G_(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(r) {
        H_(e, t, r);
      },
      function(r) {
        return ic(e, t, r);
      }
    ) : H_(e, t, n);
  }
  function H_(e, t, n) {
    t.status = "fulfilled", t.value = n, I_(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, q_(e, n)));
  }
  function ic(e, t, n) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = n, I_(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function I_(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function P_(e, t) {
    return t;
  }
  function B_(e, t) {
    if (Ae) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var r = ye;
          if (Ae) {
            if (Ve) {
              t: {
                for (var s = Ve, u = la; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (s = ca(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Ve = ca(
                  s.nextSibling
                ), r = s.data === "F!";
                break e;
              }
            }
            rn(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return n = Ct(), n.memoizedState = n.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: P_,
      lastRenderedState: t
    }, n.queue = r, n = sm.bind(
      null,
      ye,
      r
    ), r.dispatch = n, r = nc(!1), u = uc.bind(
      null,
      ye,
      !1,
      r.queue
    ), r = Ct(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = s, n = iy.bind(
      null,
      ye,
      s,
      u,
      n
    ), s.dispatch = n, r.memoizedState = e, [t, n, !1];
  }
  function Y_(e) {
    var t = tt();
    return Z_(t, Ie, e);
  }
  function Z_(e, t, n) {
    if (t = tc(
      e,
      t,
      P_
    )[0], e = Xr(Ha)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = Co(t);
      } catch (p) {
        throw p === Oi ? qr : p;
      }
    else r = t;
    t = tt();
    var s = t.queue, u = s.dispatch;
    return n !== t.memoizedState && (ye.flags |= 2048, Ui(
      9,
      { destroy: void 0 },
      oy.bind(null, s, n),
      null
    )), [r, u, e];
  }
  function oy(e, t) {
    e.action = t;
  }
  function V_(e) {
    var t = tt(), n = Ie;
    if (n !== null)
      return Z_(t, n, e);
    tt(), t = t.memoizedState, n = tt();
    var r = n.queue.dispatch;
    return n.memoizedState = e, [t, r, !1];
  }
  function Ui(e, t, n, r) {
    return e = { tag: e, create: n, deps: r, inst: t, next: null }, t = ye.updateQueue, t === null && (t = Vr(), ye.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
  }
  function K_() {
    return tt().memoizedState;
  }
  function Fr(e, t, n, r) {
    var s = Ct();
    ye.flags |= e, s.memoizedState = Ui(
      1 | t,
      { destroy: void 0 },
      n,
      r === void 0 ? null : r
    );
  }
  function Wr(e, t, n, r) {
    var s = tt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState.inst;
    Ie !== null && r !== null && Fs(r, Ie.memoizedState.deps) ? s.memoizedState = Ui(t, u, n, r) : (ye.flags |= e, s.memoizedState = Ui(
      1 | t,
      u,
      n,
      r
    ));
  }
  function X_(e, t) {
    Fr(8390656, 8, e, t);
  }
  function oc(e, t) {
    Wr(2048, 8, e, t);
  }
  function ry(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null)
      t = Vr(), ye.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function F_(e) {
    var t = tt().memoizedState;
    return ry({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function W_(e, t) {
    return Wr(4, 2, e, t);
  }
  function $_(e, t) {
    return Wr(4, 4, e, t);
  }
  function Q_(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function J_(e, t, n) {
    n = n != null ? n.concat([e]) : null, Wr(4, 4, Q_.bind(null, t, e), n);
  }
  function rc() {
  }
  function em(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && Fs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function tm(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && Fs(t, r[1]))
      return r[0];
    if (r = e(), Qn) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return n.memoizedState = [r, t], r;
  }
  function lc(e, t, n) {
    return n === void 0 || (Ga & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = af(), ye.lanes |= e, pn |= e, n);
  }
  function am(e, t, n, r) {
    return Vt(n, t) ? n : Di.current !== null ? (e = lc(e, n, r), Vt(e, t) || (ot = !0), e) : (Ga & 42) === 0 || (Ga & 1073741824) !== 0 && (ze & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = af(), ye.lanes |= e, pn |= e, t);
  }
  function nm(e, t, n, r, s) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var p = M.T, b = {};
    M.T = b, uc(e, !1, t, n);
    try {
      var S = s(), x = M.S;
      if (x !== null && x(b, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var G = ty(
          S,
          r
        );
        xo(
          e,
          t,
          G,
          Qt(e)
        );
      } else
        xo(
          e,
          t,
          r,
          Qt(e)
        );
    } catch (B) {
      xo(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Qt()
      );
    } finally {
      K.p = u, p !== null && b.types !== null && (p.types = b.types), M.T = p;
    }
  }
  function ly() {
  }
  function sc(e, t, n, r) {
    if (e.tag !== 5) throw Error(l(476));
    var s = im(e).queue;
    nm(
      e,
      s,
      t,
      Q,
      n === null ? ly : function() {
        return om(e), n(r);
      }
    );
  }
  function im(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ha,
        lastRenderedState: Q
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ha,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function om(e) {
    var t = im(e);
    t.next === null && (t = e.alternate.memoizedState), xo(
      e,
      t.next.queue,
      {},
      Qt()
    );
  }
  function cc() {
    return ft(Ko);
  }
  function rm() {
    return tt().memoizedState;
  }
  function lm() {
    return tt().memoizedState;
  }
  function sy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Qt();
          e = cn(n);
          var r = un(t, e, n);
          r !== null && (It(r, t, n), ko(r, t, n)), t = { cache: qs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function cy(e, t, n) {
    var r = Qt();
    n = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $r(e) ? cm(t, n) : (n = As(e, t, n, r), n !== null && (It(n, e, r), um(n, t, r)));
  }
  function sm(e, t, n) {
    var r = Qt();
    xo(e, t, n, r);
  }
  function xo(e, t, n, r) {
    var s = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($r(e)) cm(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var p = t.lastRenderedState, b = u(p, n);
          if (s.hasEagerState = !0, s.eagerState = b, Vt(b, p))
            return Mr(e, t, s, 0), Ye === null && xr(), !1;
        } catch {
        }
      if (n = As(e, t, s, r), n !== null)
        return It(n, e, r), um(n, t, r), !0;
    }
    return !1;
  }
  function uc(e, t, n, r) {
    if (r = {
      lane: 2,
      revertLane: Pc(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $r(e)) {
      if (t) throw Error(l(479));
    } else
      t = As(
        e,
        n,
        r,
        2
      ), t !== null && It(t, e, 2);
  }
  function $r(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye;
  }
  function cm(e, t) {
    ji = Yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function um(e, t, n) {
    if ((n & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, pd(e, n);
    }
  }
  var Mo = {
    readContext: ft,
    use: Kr,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useLayoutEffect: Qe,
    useInsertionEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    useHostTransitionStatus: Qe,
    useFormState: Qe,
    useActionState: Qe,
    useOptimistic: Qe,
    useMemoCache: Qe,
    useCacheRefresh: Qe
  };
  Mo.useEffectEvent = Qe;
  var dm = {
    readContext: ft,
    use: Kr,
    useCallback: function(e, t) {
      return Ct().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: X_,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Fr(
        4194308,
        4,
        Q_.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Fr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ct();
      t = t === void 0 ? null : t;
      var r = e();
      if (Qn) {
        en(!0);
        try {
          e();
        } finally {
          en(!1);
        }
      }
      return n.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, n) {
      var r = Ct();
      if (n !== void 0) {
        var s = n(t);
        if (Qn) {
          en(!0);
          try {
            n(t);
          } finally {
            en(!1);
          }
        }
      } else s = t;
      return r.memoizedState = r.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, r.queue = e, e = e.dispatch = cy.bind(
        null,
        ye,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ct();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = nc(e);
      var t = e.queue, n = sm.bind(null, ye, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = Ct();
      return lc(n, e, t);
    },
    useTransition: function() {
      var e = nc(!1);
      return e = nm.bind(
        null,
        ye,
        e.queue,
        !0,
        !1
      ), Ct().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var r = ye, s = Ct();
      if (Ae) {
        if (n === void 0)
          throw Error(l(407));
        n = n();
      } else {
        if (n = t(), Ye === null)
          throw Error(l(349));
        (ze & 127) !== 0 || O_(r, t, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return s.queue = u, X_(D_.bind(null, r, u, e), [
        e
      ]), r.flags |= 2048, Ui(
        9,
        { destroy: void 0 },
        R_.bind(
          null,
          r,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ct(), t = Ye.identifierPrefix;
      if (Ae) {
        var n = ka, r = za;
        n = (r & ~(1 << 32 - Zt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Zr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = ay++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: cc,
    useFormState: B_,
    useActionState: B_,
    useOptimistic: function(e) {
      var t = Ct();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = uc.bind(
        null,
        ye,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: ec,
    useCacheRefresh: function() {
      return Ct().memoizedState = sy.bind(
        null,
        ye
      );
    },
    useEffectEvent: function(e) {
      var t = Ct(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((De & 2) !== 0)
          throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, dc = {
    readContext: ft,
    use: Kr,
    useCallback: em,
    useContext: ft,
    useEffect: oc,
    useImperativeHandle: J_,
    useInsertionEffect: W_,
    useLayoutEffect: $_,
    useMemo: tm,
    useReducer: Xr,
    useRef: K_,
    useState: function() {
      return Xr(Ha);
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = tt();
      return am(
        n,
        Ie.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xr(Ha)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Co(e),
        t
      ];
    },
    useSyncExternalStore: M_,
    useId: rm,
    useHostTransitionStatus: cc,
    useFormState: Y_,
    useActionState: Y_,
    useOptimistic: function(e, t) {
      var n = tt();
      return U_(n, Ie, e, t);
    },
    useMemoCache: ec,
    useCacheRefresh: lm
  };
  dc.useEffectEvent = F_;
  var _m = {
    readContext: ft,
    use: Kr,
    useCallback: em,
    useContext: ft,
    useEffect: oc,
    useImperativeHandle: J_,
    useInsertionEffect: W_,
    useLayoutEffect: $_,
    useMemo: tm,
    useReducer: ac,
    useRef: K_,
    useState: function() {
      return ac(Ha);
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = tt();
      return Ie === null ? lc(n, e, t) : am(
        n,
        Ie.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ac(Ha)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Co(e),
        t
      ];
    },
    useSyncExternalStore: M_,
    useId: rm,
    useHostTransitionStatus: cc,
    useFormState: V_,
    useActionState: V_,
    useOptimistic: function(e, t) {
      var n = tt();
      return Ie !== null ? U_(n, Ie, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: lm
  };
  _m.useEffectEvent = F_;
  function _c(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var mc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = Qt(), s = cn(r);
      s.payload = t, n != null && (s.callback = n), t = un(e, s, r), t !== null && (It(t, e, r), ko(t, e, r));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = Qt(), s = cn(r);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = un(e, s, r), t !== null && (It(t, e, r), ko(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Qt(), r = cn(n);
      r.tag = 2, t != null && (r.callback = t), t = un(e, r, n), t !== null && (It(t, e, n), ko(t, e, n));
    }
  };
  function mm(e, t, n, r, s, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, p) : t.prototype && t.prototype.isPureReactComponent ? !ho(n, r) || !ho(s, u) : !0;
  }
  function fm(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mc.enqueueReplaceState(t, t.state, null);
  }
  function Jn(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var r in t)
        r !== "ref" && (n[r] = t[r]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
      for (var s in e)
        n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function pm(e) {
    Cr(e);
  }
  function gm(e) {
    console.error(e);
  }
  function hm(e) {
    Cr(e);
  }
  function Qr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function vm(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function fc(e, t, n) {
    return n = cn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Qr(e, t);
    }, n;
  }
  function ym(e) {
    return e = cn(e), e.tag = 3, e;
  }
  function bm(e, t, n, r) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = r.value;
      e.payload = function() {
        return s(u);
      }, e.callback = function() {
        vm(t, n, r);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      vm(t, n, r), typeof s != "function" && (gn === null ? gn = /* @__PURE__ */ new Set([this]) : gn.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function uy(e, t, n, r, s) {
    if (n.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = n.alternate, t !== null && Ci(
        t,
        n,
        s,
        !0
      ), n = Xt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return sa === null ? ul() : n.alternate === null && Je === 0 && (Je = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, r === Gr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Gc(e, r, s)), !1;
          case 22:
            return n.flags |= 65536, r === Gr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Gc(e, r, s)), !1;
        }
        throw Error(l(435, n.tag));
      }
      return Gc(e, r, s), ul(), !1;
    }
    if (Ae)
      return t = Xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, r !== Rs && (e = Error(l(422), { cause: r }), bo(ia(e, n)))) : (r !== Rs && (t = Error(l(423), {
        cause: r
      }), bo(
        ia(t, n)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, r = ia(r, n), s = fc(
        e.stateNode,
        r,
        s
      ), Ys(e, s), Je !== 4 && (Je = 2)), !1;
    var u = Error(l(520), { cause: r });
    if (u = ia(u, n), Go === null ? Go = [u] : Go.push(u), Je !== 4 && (Je = 2), t === null) return !0;
    r = ia(r, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = s & -s, n.lanes |= e, e = fc(n.stateNode, r, e), Ys(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (gn === null || !gn.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = ym(s), bm(
              s,
              e,
              n,
              r
            ), Ys(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var pc = Error(l(461)), ot = !1;
  function pt(e, t, n, r) {
    t.child = e === null ? z_(t, null, n, r) : $n(
      t,
      e.child,
      n,
      r
    );
  }
  function wm(e, t, n, r, s) {
    n = n.render;
    var u = t.ref;
    if ("ref" in r) {
      var p = {};
      for (var b in r)
        b !== "ref" && (p[b] = r[b]);
    } else p = r;
    return Kn(t), r = Ws(
      e,
      t,
      n,
      p,
      u,
      s
    ), b = $s(), e !== null && !ot ? (Qs(e, t, s), Ia(e, t, s)) : (Ae && b && Ms(t), t.flags |= 1, pt(e, t, r, s), t.child);
  }
  function Sm(e, t, n, r, s) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Ns(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Em(
        e,
        t,
        u,
        r,
        s
      )) : (e = Rr(
        n.type,
        null,
        r,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ec(e, s)) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ho, n(p, r) && e.ref === t.ref)
        return Ia(e, t, s);
    }
    return t.flags |= 1, e = ja(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Em(e, t, n, r, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ho(u, r) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = r = u, Ec(e, s))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, Ia(e, t, s);
    }
    return gc(
      e,
      t,
      n,
      r,
      s
    );
  }
  function zm(e, t, n, r) {
    var s = r.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (r = t.child = e.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          r = s & ~u;
        } else r = 0, t.child = null;
        return km(
          e,
          t,
          u,
          n,
          r
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ur(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? A_(t, u) : Vs(), N_(t);
      else
        return r = t.lanes = 536870912, km(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          r
        );
    } else
      u !== null ? (Ur(t, u.cachePool), A_(t, u), _n(), t.memoizedState = null) : (e !== null && Ur(t, null), Vs(), _n());
    return pt(e, t, s, n), t.child;
  }
  function Oo(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function km(e, t, n, r, s) {
    var u = Hs();
    return u = u === null ? null : { parent: nt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && Ur(t, null), Vs(), N_(t), e !== null && Ci(e, t, r, !0), t.childLanes = s, null;
  }
  function Jr(e, t) {
    return t = tl(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Tm(e, t, n) {
    return $n(t, e.child, null, n), e = Jr(t, t.pendingProps), e.flags |= 2, Ft(t), t.memoizedState = null, e;
  }
  function dy(e, t, n) {
    var r = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (r.mode === "hidden")
          return e = Jr(t, r), t.lanes = 536870912, Oo(null, e);
        if (Xs(t), (e = Ve) ? (e = Gf(
          e,
          la
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: nn !== null ? { id: za, overflow: ka } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = c_(e), n.return = t, t.child = n, mt = t, Ve = null)) : e = null, e === null) throw rn(t);
        return t.lanes = 536870912, null;
      }
      return Jr(t, r);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
      if (Xs(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = Tm(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(l(558));
      else if (ot || Ci(e, t, n, !1), s = (n & e.childLanes) !== 0, ot || s) {
        if (r = Ye, r !== null && (p = gd(r, n), p !== 0 && p !== u.retryLane))
          throw u.retryLane = p, Bn(e, p), It(r, e, p), pc;
        ul(), t = Tm(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Ve = ca(p.nextSibling), mt = t, Ae = !0, on = null, la = !1, e !== null && __(t, e), t = Jr(t, r), t.flags |= 4096;
      return t;
    }
    return e = ja(e.child, {
      mode: r.mode,
      children: r.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function el(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(l(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function gc(e, t, n, r, s) {
    return Kn(t), n = Ws(
      e,
      t,
      n,
      r,
      void 0,
      s
    ), r = $s(), e !== null && !ot ? (Qs(e, t, s), Ia(e, t, s)) : (Ae && r && Ms(t), t.flags |= 1, pt(e, t, n, s), t.child);
  }
  function Am(e, t, n, r, s, u) {
    return Kn(t), t.updateQueue = null, n = x_(
      t,
      r,
      n,
      s
    ), C_(e), r = $s(), e !== null && !ot ? (Qs(e, t, u), Ia(e, t, u)) : (Ae && r && Ms(t), t.flags |= 1, pt(e, t, n, u), t.child);
  }
  function Nm(e, t, n, r, s) {
    if (Kn(t), t.stateNode === null) {
      var u = ki, p = n.contextType;
      typeof p == "object" && p !== null && (u = ft(p)), u = new n(r, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = mc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = r, u.state = t.memoizedState, u.refs = {}, Ps(t), p = n.contextType, u.context = typeof p == "object" && p !== null ? ft(p) : ki, u.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (_c(
        t,
        n,
        p,
        r
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (p = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), p !== u.state && mc.enqueueReplaceState(u, u.state, null), Ao(t, r, u, s), To(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      u = t.stateNode;
      var b = t.memoizedProps, S = Jn(n, b);
      u.props = S;
      var x = u.context, G = n.contextType;
      p = ki, typeof G == "object" && G !== null && (p = ft(G));
      var B = n.getDerivedStateFromProps;
      G = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, G || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || x !== p) && fm(
        t,
        u,
        r,
        p
      ), sn = !1;
      var O = t.memoizedState;
      u.state = O, Ao(t, r, u, s), To(), x = t.memoizedState, b || O !== x || sn ? (typeof B == "function" && (_c(
        t,
        n,
        B,
        r
      ), x = t.memoizedState), (S = sn || mm(
        t,
        n,
        S,
        r,
        O,
        x,
        p
      )) ? (G || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = x), u.props = r, u.state = x, u.context = p, r = S) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, Bs(e, t), p = t.memoizedProps, G = Jn(n, p), u.props = G, B = t.pendingProps, O = u.context, x = n.contextType, S = ki, typeof x == "object" && x !== null && (S = ft(x)), b = n.getDerivedStateFromProps, (x = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== B || O !== S) && fm(
        t,
        u,
        r,
        S
      ), sn = !1, O = t.memoizedState, u.state = O, Ao(t, r, u, s), To();
      var j = t.memoizedState;
      p !== B || O !== j || sn || e !== null && e.dependencies !== null && jr(e.dependencies) ? (typeof b == "function" && (_c(
        t,
        n,
        b,
        r
      ), j = t.memoizedState), (G = sn || mm(
        t,
        n,
        G,
        r,
        O,
        j,
        S
      ) || e !== null && e.dependencies !== null && jr(e.dependencies)) ? (x || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, j, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        r,
        j,
        S
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), u.props = r, u.state = j, u.context = S, r = G) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return u = r, el(e, t), r = (t.flags & 128) !== 0, u || r ? (u = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && r ? (t.child = $n(
      t,
      e.child,
      null,
      s
    ), t.child = $n(
      t,
      null,
      n,
      s
    )) : pt(e, t, n, s), t.memoizedState = u.state, e = t.child) : e = Ia(
      e,
      t,
      s
    ), e;
  }
  function Cm(e, t, n, r) {
    return Zn(), t.flags |= 256, pt(e, t, n, r), t.child;
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vc(e) {
    return { baseLanes: e, cachePool: v_() };
  }
  function yc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= $t), e;
  }
  function xm(e, t, n) {
    var r = t.pendingProps, s = !1, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), p && (s = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (s ? dn(t) : _n(), (e = Ve) ? (e = Gf(
          e,
          la
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: nn !== null ? { id: za, overflow: ka } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = c_(e), n.return = t, t.child = n, mt = t, Ve = null)) : e = null, e === null) throw rn(t);
        return tu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var b = r.children;
      return r = r.fallback, s ? (_n(), s = t.mode, b = tl(
        { mode: "hidden", children: b },
        s
      ), r = Yn(
        r,
        s,
        n,
        null
      ), b.return = t, r.return = t, b.sibling = r, t.child = b, r = t.child, r.memoizedState = vc(n), r.childLanes = yc(
        e,
        p,
        n
      ), t.memoizedState = hc, Oo(null, r)) : (dn(t), bc(t, b));
    }
    var S = e.memoizedState;
    if (S !== null && (b = S.dehydrated, b !== null)) {
      if (u)
        t.flags & 256 ? (dn(t), t.flags &= -257, t = wc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (_n(), t.child = e.child, t.flags |= 128, t = null) : (_n(), b = r.fallback, s = t.mode, r = tl(
          { mode: "visible", children: r.children },
          s
        ), b = Yn(
          b,
          s,
          n,
          null
        ), b.flags |= 2, r.return = t, b.return = t, r.sibling = b, t.child = r, $n(
          t,
          e.child,
          null,
          n
        ), r = t.child, r.memoizedState = vc(n), r.childLanes = yc(
          e,
          p,
          n
        ), t.memoizedState = hc, t = Oo(null, r));
      else if (dn(t), tu(b)) {
        if (p = b.nextSibling && b.nextSibling.dataset, p) var x = p.dgst;
        p = x, r = Error(l(419)), r.stack = "", r.digest = p, bo({ value: r, source: null, stack: null }), t = wc(
          e,
          t,
          n
        );
      } else if (ot || Ci(e, t, n, !1), p = (n & e.childLanes) !== 0, ot || p) {
        if (p = Ye, p !== null && (r = gd(p, n), r !== 0 && r !== S.retryLane))
          throw S.retryLane = r, Bn(e, r), It(p, e, r), pc;
        eu(b) || ul(), t = wc(
          e,
          t,
          n
        );
      } else
        eu(b) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ve = ca(
          b.nextSibling
        ), mt = t, Ae = !0, on = null, la = !1, e !== null && __(t, e), t = bc(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (_n(), b = r.fallback, s = t.mode, S = e.child, x = S.sibling, r = ja(S, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = S.subtreeFlags & 65011712, x !== null ? b = ja(
      x,
      b
    ) : (b = Yn(
      b,
      s,
      n,
      null
    ), b.flags |= 2), b.return = t, r.return = t, r.sibling = b, t.child = r, Oo(null, r), r = t.child, b = e.child.memoizedState, b === null ? b = vc(n) : (s = b.cachePool, s !== null ? (S = nt._currentValue, s = s.parent !== S ? { parent: S, pool: S } : s) : s = v_(), b = {
      baseLanes: b.baseLanes | n,
      cachePool: s
    }), r.memoizedState = b, r.childLanes = yc(
      e,
      p,
      n
    ), t.memoizedState = hc, Oo(e.child, r)) : (dn(t), n = e.child, e = n.sibling, n = ja(n, {
      mode: "visible",
      children: r.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function bc(e, t) {
    return t = tl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function tl(e, t) {
    return e = Kt(22, e, null, t), e.lanes = 0, e;
  }
  function wc(e, t, n) {
    return $n(t, e.child, null, n), e = bc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Mm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ls(e.return, t, n);
  }
  function Sc(e, t, n, r, s, u) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = r, p.tail = n, p.tailMode = s, p.treeForkCount = u);
  }
  function Om(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, u = r.tail;
    r = r.children;
    var p = et.current, b = (p & 2) !== 0;
    if (b ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, X(et, p), pt(e, t, r, n), r = Ae ? yo : 0, !b && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Mm(e, n, t);
        else if (e.tag === 19)
          Mm(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          e = n.alternate, e !== null && Br(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Sc(
          t,
          !1,
          s,
          n,
          u,
          r
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Br(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Sc(
          t,
          !0,
          n,
          null,
          u,
          r
        );
        break;
      case "together":
        Sc(
          t,
          !1,
          null,
          null,
          void 0,
          r
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ia(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ci(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = ja(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ja(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ec(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && jr(e)));
  }
  function _y(e, t, n) {
    switch (t.tag) {
      case 3:
        Ze(t, t.stateNode.containerInfo), ln(t, nt, e.memoizedState.cache), Zn();
        break;
      case 27:
      case 5:
        kt(t);
        break;
      case 4:
        Ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        ln(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Xs(t), null;
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (dn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xm(e, t, n) : (dn(t), e = Ia(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        dn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (r = (n & t.childLanes) !== 0, r || (Ci(
          e,
          t,
          n,
          !1
        ), r = (n & t.childLanes) !== 0), s) {
          if (r)
            return Om(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), X(et, et.current), r) break;
        return null;
      case 22:
        return t.lanes = 0, zm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ln(t, nt, e.memoizedState.cache);
    }
    return Ia(e, t, n);
  }
  function Rm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!Ec(e, n) && (t.flags & 128) === 0)
          return ot = !1, _y(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ae && (t.flags & 1048576) !== 0 && d_(t, yo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var r = t.pendingProps;
          if (e = Fn(t.elementType), t.type = e, typeof e == "function")
            Ns(e) ? (r = Jn(e, r), t.tag = 1, t = Nm(
              null,
              t,
              e,
              r,
              n
            )) : (t.tag = 0, t = gc(
              null,
              t,
              e,
              r,
              n
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === P) {
                t.tag = 11, t = wm(
                  null,
                  t,
                  e,
                  r,
                  n
                );
                break e;
              } else if (s === Z) {
                t.tag = 14, t = Sm(
                  null,
                  t,
                  e,
                  r,
                  n
                );
                break e;
              }
            }
            throw t = we(e) || e, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return gc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return r = t.type, s = Jn(
          r,
          t.pendingProps
        ), Nm(
          e,
          t,
          r,
          s,
          n
        );
      case 3:
        e: {
          if (Ze(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          r = t.pendingProps;
          var u = t.memoizedState;
          s = u.element, Bs(e, t), Ao(t, r, null, n);
          var p = t.memoizedState;
          if (r = p.cache, ln(t, nt, r), r !== u.cache && Us(
            t,
            [nt],
            n,
            !0
          ), To(), r = p.element, u.isDehydrated)
            if (u = {
              element: r,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Cm(
                e,
                t,
                r,
                n
              );
              break e;
            } else if (r !== s) {
              s = ia(
                Error(l(424)),
                t
              ), bo(s), t = Cm(
                e,
                t,
                r,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = ca(e.firstChild), mt = t, Ae = !0, on = null, la = !0, n = z_(
                t,
                null,
                r,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Zn(), r === s) {
              t = Ia(
                e,
                t,
                n
              );
              break e;
            }
            pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return el(e, t), e === null ? (n = Zf(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (n = t.type, e = t.pendingProps, r = hl(
          le.current
        ).createElement(n), r[_t] = t, r[jt] = e, gt(r, n, e), ut(r), t.stateNode = r) : t.memoizedState = Zf(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return kt(t), e === null && Ae && (r = t.stateNode = Pf(
          t.type,
          t.pendingProps,
          le.current
        ), mt = t, la = !0, s = Ve, bn(t.type) ? (au = s, Ve = ca(r.firstChild)) : Ve = s), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), el(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((s = r = Ve) && (r = Py(
          r,
          t.type,
          t.pendingProps,
          la
        ), r !== null ? (t.stateNode = r, mt = t, Ve = ca(r.firstChild), la = !1, s = !0) : s = !1), s || rn(t)), kt(t), s = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, r = u.children, $c(s, u) ? r = null : p !== null && $c(s, p) && (t.flags |= 32), t.memoizedState !== null && (s = Ws(
          e,
          t,
          ny,
          null,
          null,
          n
        ), Ko._currentValue = s), el(e, t), pt(e, t, r, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = Ve) && (n = By(
          n,
          t.pendingProps,
          la
        ), n !== null ? (t.stateNode = n, mt = t, Ve = null, e = !0) : e = !1), e || rn(t)), null;
      case 13:
        return xm(e, t, n);
      case 4:
        return Ze(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = $n(
          t,
          null,
          r,
          n
        ) : pt(e, t, r, n), t.child;
      case 11:
        return wm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return pt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return r = t.pendingProps, ln(t, t.type, r.value), pt(e, t, r.children, n), t.child;
      case 9:
        return s = t.type._context, r = t.pendingProps.children, Kn(t), s = ft(s), r = r(s), t.flags |= 1, pt(e, t, r, n), t.child;
      case 14:
        return Sm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Em(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Om(e, t, n);
      case 31:
        return dy(e, t, n);
      case 22:
        return zm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Kn(t), r = ft(nt), e === null ? (s = Hs(), s === null && (s = Ye, u = qs(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), t.memoizedState = { parent: r, cache: s }, Ps(t), ln(t, nt, s)) : ((e.lanes & n) !== 0 && (Bs(e, t), Ao(t, null, null, n), To()), s = e.memoizedState, u = t.memoizedState, s.parent !== r ? (s = { parent: r, cache: r }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), ln(t, nt, r)) : (r = u.cache, ln(t, nt, r), r !== s.cache && Us(
          t,
          [nt],
          n,
          !0
        ))), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  function Pa(e) {
    e.flags |= 4;
  }
  function zc(e, t, n, r, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lf()) e.flags |= 8192;
        else
          throw Wn = Gr, Is;
    } else e.flags &= -16777217;
  }
  function Dm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wf(t))
      if (lf()) e.flags |= 8192;
      else
        throw Wn = Gr, Is;
  }
  function al(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? md() : 536870912, e.lanes |= t, Ii |= t);
  }
  function Ro(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 65011712, r |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function my(e, t, n) {
    var r = t.pendingProps;
    switch (Os(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), qa(nt), Le(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ni(t) ? Pa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ds())), Ke(t), null;
      case 26:
        var s = t.type, u = t.memoizedState;
        return e === null ? (Pa(t), u !== null ? (Ke(t), Dm(t, u)) : (Ke(t), zc(
          t,
          s,
          null,
          r,
          n
        ))) : u ? u !== e.memoizedState ? (Pa(t), Ke(t), Dm(t, u)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== r && Pa(t), Ke(t), zc(
          t,
          s,
          e,
          r,
          n
        )), null;
      case 27:
        if (ea(t), n = le.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Pa(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ke(t), null;
          }
          e = $.current, Ni(t) ? m_(t) : (e = Pf(s, r, n), t.stateNode = e, Pa(t));
        }
        return Ke(t), null;
      case 5:
        if (ea(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Pa(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ke(t), null;
          }
          if (u = $.current, Ni(t))
            m_(t);
          else {
            var p = hl(
              le.current
            );
            switch (u) {
              case 1:
                u = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = p.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof r.is == "string" ? p.createElement("select", {
                      is: r.is
                    }) : p.createElement("select"), r.multiple ? u.multiple = !0 : r.size && (u.size = r.size);
                    break;
                  default:
                    u = typeof r.is == "string" ? p.createElement(s, { is: r.is }) : p.createElement(s);
                }
            }
            u[_t] = t, u[jt] = r;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                u.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = u;
            e: switch (gt(u, s, r), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && Pa(t);
          }
        }
        return Ke(t), zc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && Pa(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = le.current, Ni(t)) {
            if (e = t.stateNode, n = t.memoizedProps, r = null, s = mt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  r = s.memoizedProps;
              }
            e[_t] = t, e = !!(e.nodeValue === n || r !== null && r.suppressHydrationWarning === !0 || Mf(e.nodeValue, n)), e || rn(t, !0);
          } else
            e = hl(e).createTextNode(
              r
            ), e[_t] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (r = Ni(t), n !== null) {
            if (e === null) {
              if (!r) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[_t] = t;
            } else
              Zn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), e = !1;
          } else
            n = Ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Ke(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = Ni(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(l(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(l(317));
              s[_t] = t;
            } else
              Zn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), s = !1;
          } else
            s = Ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
        }
        return Ft(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, s = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool), u = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (u = r.memoizedState.cachePool.pool), u !== s && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), al(t, t.updateQueue), Ke(t), null);
      case 4:
        return Le(), e === null && Vc(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return qa(t.type), Ke(t), null;
      case 19:
        if (q(et), r = t.memoizedState, r === null) return Ke(t), null;
        if (s = (t.flags & 128) !== 0, u = r.rendering, u === null)
          if (s) Ro(r, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Br(e), u !== null) {
                  for (t.flags |= 128, Ro(r, !1), e = u.updateQueue, t.updateQueue = e, al(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    s_(n, e), n = n.sibling;
                  return X(
                    et,
                    et.current & 1 | 2
                  ), Ae && La(t, r.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null && Nt() > ll && (t.flags |= 128, s = !0, Ro(r, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = Br(u), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, al(t, e), Ro(r, !0), r.tail === null && r.tailMode === "hidden" && !u.alternate && !Ae)
                return Ke(t), null;
            } else
              2 * Nt() - r.renderingStartTime > ll && n !== 536870912 && (t.flags |= 128, s = !0, Ro(r, !1), t.lanes = 4194304);
          r.isBackwards ? (u.sibling = t.child, t.child = u) : (e = r.last, e !== null ? e.sibling = u : t.child = u, r.last = u);
        }
        return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Nt(), e.sibling = null, n = et.current, X(
          et,
          s ? n & 1 | 2 : n & 1
        ), Ae && La(t, r.treeForkCount), e) : (Ke(t), null);
      case 22:
      case 23:
        return Ft(t), Ks(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && al(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && q(Xn), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), qa(nt), Ke(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function fy(e, t) {
    switch (Os(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return qa(nt), Le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ea(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ft(t), t.alternate === null)
            throw Error(l(340));
          Zn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ft(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          Zn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return q(et), null;
      case 4:
        return Le(), null;
      case 10:
        return qa(t.type), null;
      case 22:
      case 23:
        return Ft(t), Ks(), e !== null && q(Xn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return qa(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jm(e, t) {
    switch (Os(t), t.tag) {
      case 3:
        qa(nt), Le();
        break;
      case 26:
      case 27:
      case 5:
        ea(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && Ft(t);
        break;
      case 13:
        Ft(t);
        break;
      case 19:
        q(et);
        break;
      case 10:
        qa(t.type);
        break;
      case 22:
      case 23:
        Ft(t), Ks(), e !== null && q(Xn);
        break;
      case 24:
        qa(nt);
    }
  }
  function Do(e, t) {
    try {
      var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var u = n.create, p = n.inst;
            r = u(), p.destroy = r;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (b) {
      qe(t, t.return, b);
    }
  }
  function mn(e, t, n) {
    try {
      var r = t.updateQueue, s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            var p = r.inst, b = p.destroy;
            if (b !== void 0) {
              p.destroy = void 0, s = t;
              var S = n, x = b;
              try {
                x();
              } catch (G) {
                qe(
                  s,
                  S,
                  G
                );
              }
            }
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (G) {
      qe(t, t.return, G);
    }
  }
  function Lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        T_(t, n);
      } catch (r) {
        qe(e, e.return, r);
      }
    }
  }
  function Um(e, t, n) {
    n.props = Jn(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (r) {
      qe(e, t, r);
    }
  }
  function jo(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
      }
    } catch (s) {
      qe(e, t, s);
    }
  }
  function Ta(e, t) {
    var n = e.ref, r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (s) {
          qe(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          qe(e, t, s);
        }
      else n.current = null;
  }
  function qm(e) {
    var t = e.type, n = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (s) {
      qe(e, e.return, s);
    }
  }
  function kc(e, t, n) {
    try {
      var r = e.stateNode;
      Ly(r, e.type, n, t), r[jt] = t;
    } catch (s) {
      qe(e, e.return, s);
    }
  }
  function Gm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && bn(e.type) || e.tag === 4;
  }
  function Tc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && bn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ac(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ra));
    else if (r !== 4 && (r === 27 && bn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Ac(e, t, n), e = e.sibling; e !== null; )
        Ac(e, t, n), e = e.sibling;
  }
  function nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (r === 27 && bn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (nl(e, t, n), e = e.sibling; e !== null; )
        nl(e, t, n), e = e.sibling;
  }
  function Hm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var r = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      gt(t, r, n), t[_t] = e, t[jt] = n;
    } catch (u) {
      qe(e, e.return, u);
    }
  }
  var Ba = !1, rt = !1, Nc = !1, Im = typeof WeakSet == "function" ? WeakSet : Set, dt = null;
  function py(e, t) {
    if (e = e.containerInfo, Fc = zl, e = Jd(e), ws(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset, u = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0, b = -1, S = -1, x = 0, G = 0, B = e, O = null;
            t: for (; ; ) {
              for (var j; B !== n || s !== 0 && B.nodeType !== 3 || (b = p + s), B !== u || r !== 0 && B.nodeType !== 3 || (S = p + r), B.nodeType === 3 && (p += B.nodeValue.length), (j = B.firstChild) !== null; )
                O = B, B = j;
              for (; ; ) {
                if (B === e) break t;
                if (O === n && ++x === s && (b = p), O === u && ++G === r && (S = p), (j = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = j;
            }
            n = b === -1 || S === -1 ? null : { start: b, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Wc = { focusedElem: e, selectionRange: n }, zl = !1, dt = t; dt !== null; )
      if (t = dt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, dt = e;
      else
        for (; dt !== null; ) {
          switch (t = dt, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  s = e[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, s = u.memoizedProps, u = u.memoizedState, r = n.stateNode;
                try {
                  var J = Jn(
                    n.type,
                    s
                  );
                  e = r.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ce) {
                  qe(
                    n,
                    n.return,
                    ce
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Jc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, dt = e;
            break;
          }
          dt = t.return;
        }
  }
  function Pm(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Za(e, n), r & 4 && Do(5, n);
        break;
      case 1:
        if (Za(e, n), r & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              qe(n, n.return, p);
            }
          else {
            var s = Jn(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              qe(
                n,
                n.return,
                p
              );
            }
          }
        r & 64 && Lm(n), r & 512 && jo(n, n.return);
        break;
      case 3:
        if (Za(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            T_(e, t);
          } catch (p) {
            qe(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Hm(n);
      case 26:
      case 5:
        Za(e, n), t === null && r & 4 && qm(n), r & 512 && jo(n, n.return);
        break;
      case 12:
        Za(e, n);
        break;
      case 31:
        Za(e, n), r & 4 && Zm(e, n);
        break;
      case 13:
        Za(e, n), r & 4 && Vm(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = zy.bind(
          null,
          n
        ), Yy(e, n))));
        break;
      case 22:
        if (r = n.memoizedState !== null || Ba, !r) {
          t = t !== null && t.memoizedState !== null || rt, s = Ba;
          var u = rt;
          Ba = r, (rt = t) && !u ? Va(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Za(e, n), Ba = s, rt = u;
        }
        break;
      case 30:
        break;
      default:
        Za(e, n);
    }
  }
  function Bm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Bm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && is(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, Ut = !1;
  function Ya(e, t, n) {
    for (n = n.child; n !== null; )
      Ym(e, t, n), n = n.sibling;
  }
  function Ym(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
      try {
        Yt.onCommitFiberUnmount(io, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        rt || Ta(n, t), Ya(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        rt || Ta(n, t);
        var r = Xe, s = Ut;
        bn(n.type) && (Xe = n.stateNode, Ut = !1), Ya(
          e,
          t,
          n
        ), Yo(n.stateNode), Xe = r, Ut = s;
        break;
      case 5:
        rt || Ta(n, t);
      case 6:
        if (r = Xe, s = Ut, Xe = null, Ya(
          e,
          t,
          n
        ), Xe = r, Ut = s, Xe !== null)
          if (Ut)
            try {
              (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
            } catch (u) {
              qe(
                n,
                t,
                u
              );
            }
          else
            try {
              Xe.removeChild(n.stateNode);
            } catch (u) {
              qe(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Xe !== null && (Ut ? (e = Xe, Uf(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Fi(e)) : Uf(Xe, n.stateNode));
        break;
      case 4:
        r = Xe, s = Ut, Xe = n.stateNode.containerInfo, Ut = !0, Ya(
          e,
          t,
          n
        ), Xe = r, Ut = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        mn(2, n, t), rt || mn(4, n, t), Ya(
          e,
          t,
          n
        );
        break;
      case 1:
        rt || (Ta(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Um(
          n,
          t,
          r
        )), Ya(
          e,
          t,
          n
        );
        break;
      case 21:
        Ya(
          e,
          t,
          n
        );
        break;
      case 22:
        rt = (r = rt) || n.memoizedState !== null, Ya(
          e,
          t,
          n
        ), rt = r;
        break;
      default:
        Ya(
          e,
          t,
          n
        );
    }
  }
  function Zm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Fi(e);
      } catch (n) {
        qe(t, t.return, n);
      }
    }
  }
  function Vm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Fi(e);
      } catch (n) {
        qe(t, t.return, n);
      }
  }
  function gy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Im()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Im()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function il(e, t) {
    var n = gy(e);
    t.forEach(function(r) {
      if (!n.has(r)) {
        n.add(r);
        var s = ky.bind(null, e, r);
        r.then(s, s);
      }
    });
  }
  function qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r], u = e, p = t, b = p;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (bn(b.type)) {
                Xe = b.stateNode, Ut = !1;
                break e;
              }
              break;
            case 5:
              Xe = b.stateNode, Ut = !1;
              break e;
            case 3:
            case 4:
              Xe = b.stateNode.containerInfo, Ut = !0;
              break e;
          }
          b = b.return;
        }
        if (Xe === null) throw Error(l(160));
        Ym(u, p, s), Xe = null, Ut = !1, u = s.alternate, u !== null && (u.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Km(t, e), t = t.sibling;
  }
  var ya = null;
  function Km(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        qt(t, e), Gt(e), r & 4 && (mn(3, e, e.return), Do(3, e), mn(5, e, e.return));
        break;
      case 1:
        qt(t, e), Gt(e), r & 512 && (rt || n === null || Ta(n, n.return)), r & 64 && Ba && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
        break;
      case 26:
        var s = ya;
        if (qt(t, e), Gt(e), r & 512 && (rt || n === null || Ta(n, n.return)), r & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (r = e.memoizedState, n === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, n = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (r) {
                    case "title":
                      u = s.getElementsByTagName("title")[0], (!u || u[lo] || u[_t] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(r), s.head.insertBefore(
                        u,
                        s.querySelector("head > title")
                      )), gt(u, r, n), u[_t] = e, ut(u), r = u;
                      break e;
                    case "link":
                      var p = Xf(
                        "link",
                        "href",
                        s
                      ).get(r + (n.href || ""));
                      if (p) {
                        for (var b = 0; b < p.length; b++)
                          if (u = p[b], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      u = s.createElement(r), gt(u, r, n), s.head.appendChild(u);
                      break;
                    case "meta":
                      if (p = Xf(
                        "meta",
                        "content",
                        s
                      ).get(r + (n.content || ""))) {
                        for (b = 0; b < p.length; b++)
                          if (u = p[b], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      u = s.createElement(r), gt(u, r, n), s.head.appendChild(u);
                      break;
                    default:
                      throw Error(l(468, r));
                  }
                  u[_t] = e, ut(u), r = u;
                }
                e.stateNode = r;
              } else
                Ff(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Kf(
                s,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, r === null ? Ff(
              s,
              e.type,
              e.stateNode
            ) : Kf(
              s,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && kc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        qt(t, e), Gt(e), r & 512 && (rt || n === null || Ta(n, n.return)), n !== null && r & 4 && kc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (qt(t, e), Gt(e), r & 512 && (rt || n === null || Ta(n, n.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            vi(s, "");
          } catch (J) {
            qe(e, e.return, J);
          }
        }
        r & 4 && e.stateNode != null && (s = e.memoizedProps, kc(
          e,
          s,
          n !== null ? n.memoizedProps : s
        )), r & 1024 && (Nc = !0);
        break;
      case 6:
        if (qt(t, e), Gt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          r = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = r;
          } catch (J) {
            qe(e, e.return, J);
          }
        }
        break;
      case 3:
        if (bl = null, s = ya, ya = vl(t.containerInfo), qt(t, e), ya = s, Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Fi(t.containerInfo);
          } catch (J) {
            qe(e, e.return, J);
          }
        Nc && (Nc = !1, Xm(e));
        break;
      case 4:
        r = ya, ya = vl(
          e.stateNode.containerInfo
        ), qt(t, e), Gt(e), ya = r;
        break;
      case 12:
        qt(t, e), Gt(e);
        break;
      case 31:
        qt(t, e), Gt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, il(e, r)));
        break;
      case 13:
        qt(t, e), Gt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (rl = Nt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, il(e, r)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null, x = Ba, G = rt;
        if (Ba = x || s, rt = G || S, qt(t, e), rt = G, Ba = x, Gt(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || S || Ba || rt || ei(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (u = S.stateNode, s)
                    p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    b = S.stateNode;
                    var B = S.memoizedProps.style, O = B != null && B.hasOwnProperty("display") ? B.display : null;
                    b.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (J) {
                  qe(S, S.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (J) {
                  qe(S, S.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var j = S.stateNode;
                  s ? qf(j, !0) : qf(S.stateNode, !1);
                } catch (J) {
                  qe(S, S.return, J);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, il(e, n))));
        break;
      case 19:
        qt(t, e), Gt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, il(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        qt(t, e), Gt(e);
    }
  }
  function Gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, r = e.return; r !== null; ) {
          if (Gm(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        if (n == null) throw Error(l(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, u = Tc(e);
            nl(e, u, s);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (vi(p, ""), n.flags &= -33);
            var b = Tc(e);
            nl(e, b, p);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo, x = Tc(e);
            Ac(
              e,
              x,
              S
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (G) {
        qe(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Xm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Za(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Pm(e, t.alternate, t), t = t.sibling;
  }
  function ei(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          mn(4, t, t.return), ei(t);
          break;
        case 1:
          Ta(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Um(
            t,
            t.return,
            n
          ), ei(t);
          break;
        case 27:
          Yo(t.stateNode);
        case 26:
        case 5:
          Ta(t, t.return), ei(t);
          break;
        case 22:
          t.memoizedState === null && ei(t);
          break;
        case 30:
          ei(t);
          break;
        default:
          ei(t);
      }
      e = e.sibling;
    }
  }
  function Va(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, s = e, u = t, p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Va(
            s,
            u,
            n
          ), Do(4, u);
          break;
        case 1:
          if (Va(
            s,
            u,
            n
          ), r = u, s = r.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (x) {
              qe(r, r.return, x);
            }
          if (r = u, s = r.updateQueue, s !== null) {
            var b = r.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  k_(S[s], b);
            } catch (x) {
              qe(r, r.return, x);
            }
          }
          n && p & 64 && Lm(u), jo(u, u.return);
          break;
        case 27:
          Hm(u);
        case 26:
        case 5:
          Va(
            s,
            u,
            n
          ), n && r === null && p & 4 && qm(u), jo(u, u.return);
          break;
        case 12:
          Va(
            s,
            u,
            n
          );
          break;
        case 31:
          Va(
            s,
            u,
            n
          ), n && p & 4 && Zm(s, u);
          break;
        case 13:
          Va(
            s,
            u,
            n
          ), n && p & 4 && Vm(s, u);
          break;
        case 22:
          u.memoizedState === null && Va(
            s,
            u,
            n
          ), jo(u, u.return);
          break;
        case 30:
          break;
        default:
          Va(
            s,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Cc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && wo(n));
  }
  function xc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wo(e));
  }
  function ba(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Fm(
          e,
          t,
          n,
          r
        ), t = t.sibling;
  }
  function Fm(e, t, n, r) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ba(
          e,
          t,
          n,
          r
        ), s & 2048 && Do(9, t);
        break;
      case 1:
        ba(
          e,
          t,
          n,
          r
        );
        break;
      case 3:
        ba(
          e,
          t,
          n,
          r
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wo(e)));
        break;
      case 12:
        if (s & 2048) {
          ba(
            e,
            t,
            n,
            r
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, p = u.id, b = u.onPostCommit;
            typeof b == "function" && b(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            qe(t, t.return, S);
          }
        } else
          ba(
            e,
            t,
            n,
            r
          );
        break;
      case 31:
        ba(
          e,
          t,
          n,
          r
        );
        break;
      case 13:
        ba(
          e,
          t,
          n,
          r
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, p = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? ba(
          e,
          t,
          n,
          r
        ) : Lo(e, t) : u._visibility & 2 ? ba(
          e,
          t,
          n,
          r
        ) : (u._visibility |= 2, qi(
          e,
          t,
          n,
          r,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Cc(p, t);
        break;
      case 24:
        ba(
          e,
          t,
          n,
          r
        ), s & 2048 && xc(t.alternate, t);
        break;
      default:
        ba(
          e,
          t,
          n,
          r
        );
    }
  }
  function qi(e, t, n, r, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, p = t, b = n, S = r, x = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          qi(
            u,
            p,
            b,
            S,
            s
          ), Do(8, p);
          break;
        case 23:
          break;
        case 22:
          var G = p.stateNode;
          p.memoizedState !== null ? G._visibility & 2 ? qi(
            u,
            p,
            b,
            S,
            s
          ) : Lo(
            u,
            p
          ) : (G._visibility |= 2, qi(
            u,
            p,
            b,
            S,
            s
          )), s && x & 2048 && Cc(
            p.alternate,
            p
          );
          break;
        case 24:
          qi(
            u,
            p,
            b,
            S,
            s
          ), s && x & 2048 && xc(p.alternate, p);
          break;
        default:
          qi(
            u,
            p,
            b,
            S,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Lo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, r = t, s = r.flags;
        switch (r.tag) {
          case 22:
            Lo(n, r), s & 2048 && Cc(
              r.alternate,
              r
            );
            break;
          case 24:
            Lo(n, r), s & 2048 && xc(r.alternate, r);
            break;
          default:
            Lo(n, r);
        }
        t = t.sibling;
      }
  }
  var Uo = 8192;
  function Gi(e, t, n) {
    if (e.subtreeFlags & Uo)
      for (e = e.child; e !== null; )
        Wm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Wm(e, t, n) {
    switch (e.tag) {
      case 26:
        Gi(
          e,
          t,
          n
        ), e.flags & Uo && e.memoizedState !== null && ab(
          n,
          ya,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Gi(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var r = ya;
        ya = vl(e.stateNode.containerInfo), Gi(
          e,
          t,
          n
        ), ya = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Uo, Uo = 16777216, Gi(
          e,
          t,
          n
        ), Uo = r) : Gi(
          e,
          t,
          n
        ));
        break;
      default:
        Gi(
          e,
          t,
          n
        );
    }
  }
  function $m(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function qo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          dt = r, Jm(
            r,
            e
          );
        }
      $m(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qm(e), e = e.sibling;
  }
  function Qm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qo(e), e.flags & 2048 && mn(9, e, e.return);
        break;
      case 3:
        qo(e);
        break;
      case 12:
        qo(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ol(e)) : qo(e);
        break;
      default:
        qo(e);
    }
  }
  function ol(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          dt = r, Jm(
            r,
            e
          );
        }
      $m(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          mn(8, t, t.return), ol(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, ol(t));
          break;
        default:
          ol(t);
      }
      e = e.sibling;
    }
  }
  function Jm(e, t) {
    for (; dt !== null; ) {
      var n = dt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          mn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          wo(n.memoizedState.cache);
      }
      if (r = n.child, r !== null) r.return = n, dt = r;
      else
        e: for (n = e; dt !== null; ) {
          r = dt;
          var s = r.sibling, u = r.return;
          if (Bm(r), r === n) {
            dt = null;
            break e;
          }
          if (s !== null) {
            s.return = u, dt = s;
            break e;
          }
          dt = u;
        }
    }
  }
  var hy = {
    getCacheForType: function(e) {
      var t = ft(nt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ft(nt).controller.signal;
    }
  }, vy = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Ye = null, Se = null, ze = 0, Ue = 0, Wt = null, fn = !1, Hi = !1, Mc = !1, Ka = 0, Je = 0, pn = 0, ti = 0, Oc = 0, $t = 0, Ii = 0, Go = null, Ht = null, Rc = !1, rl = 0, ef = 0, ll = 1 / 0, sl = null, gn = null, ct = 0, hn = null, Pi = null, Xa = 0, Dc = 0, jc = null, tf = null, Ho = 0, Lc = null;
  function Qt() {
    return (De & 2) !== 0 && ze !== 0 ? ze & -ze : M.T !== null ? Pc() : hd();
  }
  function af() {
    if ($t === 0)
      if ((ze & 536870912) === 0 || Ae) {
        var e = gr;
        gr <<= 1, (gr & 3932160) === 0 && (gr = 262144), $t = e;
      } else $t = 536870912;
    return e = Xt.current, e !== null && (e.flags |= 32), $t;
  }
  function It(e, t, n) {
    (e === Ye && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (Bi(e, 0), vn(
      e,
      ze,
      $t,
      !1
    )), ro(e, n), ((De & 2) === 0 || e !== Ye) && (e === Ye && ((De & 2) === 0 && (ti |= n), Je === 4 && vn(
      e,
      ze,
      $t,
      !1
    )), Aa(e));
  }
  function nf(e, t, n) {
    if ((De & 6) !== 0) throw Error(l(327));
    var r = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || oo(e, t), s = r ? wy(e, t) : qc(e, t, !0), u = r;
    do {
      if (s === 0) {
        Hi && !r && vn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !yy(n)) {
          s = qc(e, t, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var b = e;
              s = Go;
              var S = b.current.memoizedState.isDehydrated;
              if (S && (Bi(b, p).flags |= 256), p = qc(
                b,
                p,
                !1
              ), p !== 2) {
                if (Mc && !S) {
                  b.errorRecoveryDisabledLanes |= u, ti |= u, s = 4;
                  break e;
                }
                u = Ht, Ht = s, u !== null && (Ht === null ? Ht = u : Ht.push.apply(
                  Ht,
                  u
                ));
              }
              s = p;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Bi(e, 0), vn(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, u = s, u) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              vn(
                r,
                t,
                $t,
                !fn
              );
              break e;
            case 2:
              Ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (s = rl + 300 - Nt(), 10 < s)) {
            if (vn(
              r,
              t,
              $t,
              !fn
            ), vr(r, 0, !0) !== 0) break e;
            Xa = t, r.timeoutHandle = jf(
              of.bind(
                null,
                r,
                n,
                Ht,
                sl,
                Rc,
                t,
                $t,
                ti,
                Ii,
                fn,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          of(
            r,
            n,
            Ht,
            sl,
            Rc,
            t,
            $t,
            ti,
            Ii,
            fn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Aa(e);
  }
  function of(e, t, n, r, s, u, p, b, S, x, G, B, O, j) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ra
      }, Wm(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? rl - Nt() : (u & 4194048) === u ? ef - Nt() : 0;
      if (J = nb(
        B,
        J
      ), J !== null) {
        Xa = u, e.cancelPendingCommit = J(
          mf.bind(
            null,
            e,
            t,
            u,
            n,
            r,
            s,
            p,
            b,
            S,
            G,
            B,
            null,
            O,
            j
          )
        ), vn(e, u, p, !x);
        return;
      }
    }
    mf(
      e,
      t,
      u,
      n,
      r,
      s,
      p,
      b,
      S
    );
  }
  function yy(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var r = 0; r < n.length; r++) {
          var s = n[r], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Vt(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function vn(e, t, n, r) {
    t &= ~Oc, t &= ~ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var u = 31 - Zt(s), p = 1 << u;
      r[u] = -1, s &= ~p;
    }
    n !== 0 && fd(e, n, t);
  }
  function cl() {
    return (De & 6) === 0 ? (Io(0), !1) : !0;
  }
  function Uc() {
    if (Se !== null) {
      if (Ue === 0)
        var e = Se.return;
      else
        e = Se, Ua = Vn = null, Js(e), Ri = null, Eo = 0, e = Se;
      for (; e !== null; )
        jm(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function Bi(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Xa = 0, Uc(), Ye = e, Se = n = ja(e.current, null), ze = t, Ue = 0, Wt = null, fn = !1, Hi = oo(e, t), Mc = !1, Ii = $t = Oc = ti = pn = Je = 0, Ht = Go = null, Rc = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var s = 31 - Zt(r), u = 1 << s;
        t |= e[s], r &= ~u;
      }
    return Ka = t, xr(), n;
  }
  function rf(e, t) {
    ye = null, M.H = Mo, t === Oi || t === qr ? (t = w_(), Ue = 3) : t === Is ? (t = w_(), Ue = 4) : Ue = t === pc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Wt = t, Se === null && (Je = 1, Qr(
      e,
      ia(t, e.current)
    ));
  }
  function lf() {
    var e = Xt.current;
    return e === null ? !0 : (ze & 4194048) === ze ? sa === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === sa : !1;
  }
  function sf() {
    var e = M.H;
    return M.H = Mo, e === null ? Mo : e;
  }
  function cf() {
    var e = M.A;
    return M.A = hy, e;
  }
  function ul() {
    Je = 4, fn || (ze & 4194048) !== ze && Xt.current !== null || (Hi = !0), (pn & 134217727) === 0 && (ti & 134217727) === 0 || Ye === null || vn(
      Ye,
      ze,
      $t,
      !1
    );
  }
  function qc(e, t, n) {
    var r = De;
    De |= 2;
    var s = sf(), u = cf();
    (Ye !== e || ze !== t) && (sl = null, Bi(e, t)), t = !1;
    var p = Je;
    e: do
      try {
        if (Ue !== 0 && Se !== null) {
          var b = Se, S = Wt;
          switch (Ue) {
            case 8:
              Uc(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xt.current === null && (t = !0);
              var x = Ue;
              if (Ue = 0, Wt = null, Yi(e, b, S, x), n && Hi) {
                p = 0;
                break e;
              }
              break;
            default:
              x = Ue, Ue = 0, Wt = null, Yi(e, b, S, x);
          }
        }
        by(), p = Je;
        break;
      } catch (G) {
        rf(e, G);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ua = Vn = null, De = r, M.H = s, M.A = u, Se === null && (Ye = null, ze = 0, xr()), p;
  }
  function by() {
    for (; Se !== null; ) uf(Se);
  }
  function wy(e, t) {
    var n = De;
    De |= 2;
    var r = sf(), s = cf();
    Ye !== e || ze !== t ? (sl = null, ll = Nt() + 500, Bi(e, t)) : Hi = oo(
      e,
      t
    );
    e: do
      try {
        if (Ue !== 0 && Se !== null) {
          t = Se;
          var u = Wt;
          t: switch (Ue) {
            case 1:
              Ue = 0, Wt = null, Yi(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (y_(u)) {
                Ue = 0, Wt = null, df(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || Ye !== e || (Ue = 7), Aa(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              y_(u) ? (Ue = 0, Wt = null, df(t)) : (Ue = 0, Wt = null, Yi(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (Se.tag) {
                case 26:
                  p = Se.memoizedState;
                case 5:
                case 27:
                  var b = Se;
                  if (p ? Wf(p) : b.stateNode.complete) {
                    Ue = 0, Wt = null;
                    var S = b.sibling;
                    if (S !== null) Se = S;
                    else {
                      var x = b.return;
                      x !== null ? (Se = x, dl(x)) : Se = null;
                    }
                    break t;
                  }
              }
              Ue = 0, Wt = null, Yi(e, t, u, 5);
              break;
            case 6:
              Ue = 0, Wt = null, Yi(e, t, u, 6);
              break;
            case 8:
              Uc(), Je = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        Sy();
        break;
      } catch (G) {
        rf(e, G);
      }
    while (!0);
    return Ua = Vn = null, M.H = r, M.A = s, De = n, Se !== null ? 0 : (Ye = null, ze = 0, xr(), Je);
  }
  function Sy() {
    for (; Se !== null && !ha(); )
      uf(Se);
  }
  function uf(e) {
    var t = Rm(e.alternate, e, Ka);
    e.memoizedProps = e.pendingProps, t === null ? dl(e) : Se = t;
  }
  function df(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Am(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ze
        );
        break;
      case 11:
        t = Am(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        Js(t);
      default:
        jm(n, t), t = Se = s_(t, Ka), t = Rm(n, t, Ka);
    }
    e.memoizedProps = e.pendingProps, t === null ? dl(e) : Se = t;
  }
  function Yi(e, t, n, r) {
    Ua = Vn = null, Js(t), Ri = null, Eo = 0;
    var s = t.return;
    try {
      if (uy(
        e,
        s,
        t,
        n,
        ze
      )) {
        Je = 1, Qr(
          e,
          ia(n, e.current)
        ), Se = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw Se = s, u;
      Je = 1, Qr(
        e,
        ia(n, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Ae || r === 1 ? e = !0 : Hi || (ze & 536870912) !== 0 ? e = !1 : (fn = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Xt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), _f(t, e)) : dl(t);
  }
  function dl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _f(
          t,
          fn
        );
        return;
      }
      e = t.return;
      var n = my(
        t.alternate,
        t,
        Ka
      );
      if (n !== null) {
        Se = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function _f(e, t) {
    do {
      var n = fy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Se = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Se = e;
        return;
      }
      Se = e = n;
    } while (e !== null);
    Je = 6, Se = null;
  }
  function mf(e, t, n, r, s, u, p, b, S) {
    e.cancelPendingCommit = null;
    do
      _l();
    while (ct !== 0);
    if ((De & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (u = t.lanes | t.childLanes, u |= Ts, tv(
        e,
        n,
        u,
        p,
        b,
        S
      ), e === Ye && (Se = Ye = null, ze = 0), Pi = t, hn = e, Xa = n, Dc = u, jc = s, tf = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ty(fr, function() {
        return vf(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = M.T, M.T = null, s = K.p, K.p = 2, p = De, De |= 4;
        try {
          py(e, t, n);
        } finally {
          De = p, K.p = s, M.T = r;
        }
      }
      ct = 1, ff(), pf(), gf();
    }
  }
  function ff() {
    if (ct === 1) {
      ct = 0;
      var e = hn, t = Pi, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var r = K.p;
        K.p = 2;
        var s = De;
        De |= 4;
        try {
          Km(t, e);
          var u = Wc, p = Jd(e.containerInfo), b = u.focusedElem, S = u.selectionRange;
          if (p !== b && b && b.ownerDocument && Qd(
            b.ownerDocument.documentElement,
            b
          )) {
            if (S !== null && ws(b)) {
              var x = S.start, G = S.end;
              if (G === void 0 && (G = x), "selectionStart" in b)
                b.selectionStart = x, b.selectionEnd = Math.min(
                  G,
                  b.value.length
                );
              else {
                var B = b.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var j = O.getSelection(), J = b.textContent.length, ce = Math.min(S.start, J), Be = S.end === void 0 ? ce : Math.min(S.end, J);
                  !j.extend && ce > Be && (p = Be, Be = ce, ce = p);
                  var A = $d(
                    b,
                    ce
                  ), k = $d(
                    b,
                    Be
                  );
                  if (A && k && (j.rangeCount !== 1 || j.anchorNode !== A.node || j.anchorOffset !== A.offset || j.focusNode !== k.node || j.focusOffset !== k.offset)) {
                    var C = B.createRange();
                    C.setStart(A.node, A.offset), j.removeAllRanges(), ce > Be ? (j.addRange(C), j.extend(k.node, k.offset)) : (C.setEnd(k.node, k.offset), j.addRange(C));
                  }
                }
              }
            }
            for (B = [], j = b; j = j.parentNode; )
              j.nodeType === 1 && B.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < B.length; b++) {
              var I = B[b];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          zl = !!Fc, Wc = Fc = null;
        } finally {
          De = s, K.p = r, M.T = n;
        }
      }
      e.current = t, ct = 2;
    }
  }
  function pf() {
    if (ct === 2) {
      ct = 0;
      var e = hn, t = Pi, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var r = K.p;
        K.p = 2;
        var s = De;
        De |= 4;
        try {
          Pm(e, t.alternate, t);
        } finally {
          De = s, K.p = r, M.T = n;
        }
      }
      ct = 3;
    }
  }
  function gf() {
    if (ct === 4 || ct === 3) {
      ct = 0, Ja();
      var e = hn, t = Pi, n = Xa, r = tf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ct = 5 : (ct = 0, Pi = hn = null, hf(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (gn = null), as(n), t = t.stateNode, Yt && typeof Yt.onCommitFiberRoot == "function")
        try {
          Yt.onCommitFiberRoot(
            io,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = M.T, s = K.p, K.p = 2, M.T = null;
        try {
          for (var u = e.onRecoverableError, p = 0; p < r.length; p++) {
            var b = r[p];
            u(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          M.T = t, K.p = s;
        }
      }
      (Xa & 3) !== 0 && _l(), Aa(e), s = e.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? e === Lc ? Ho++ : (Ho = 0, Lc = e) : Ho = 0, Io(0);
    }
  }
  function hf(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, wo(t)));
  }
  function _l() {
    return ff(), pf(), gf(), vf();
  }
  function vf() {
    if (ct !== 5) return !1;
    var e = hn, t = Dc;
    Dc = 0;
    var n = as(Xa), r = M.T, s = K.p;
    try {
      K.p = 32 > n ? 32 : n, M.T = null, n = jc, jc = null;
      var u = hn, p = Xa;
      if (ct = 0, Pi = hn = null, Xa = 0, (De & 6) !== 0) throw Error(l(331));
      var b = De;
      if (De |= 4, Qm(u.current), Fm(
        u,
        u.current,
        p,
        n
      ), De = b, Io(0, !1), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        try {
          Yt.onPostCommitFiberRoot(io, u);
        } catch {
        }
      return !0;
    } finally {
      K.p = s, M.T = r, hf(e, t);
    }
  }
  function yf(e, t, n) {
    t = ia(n, t), t = fc(e.stateNode, t, 2), e = un(e, t, 2), e !== null && (ro(e, 2), Aa(e));
  }
  function qe(e, t, n) {
    if (e.tag === 3)
      yf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yf(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r))) {
            e = ia(n, e), n = ym(2), r = un(t, n, 2), r !== null && (bm(
              n,
              r,
              t,
              e
            ), ro(r, 2), Aa(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new vy();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else
      s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (Mc = !0, s.add(n), e = Ey.bind(null, e, t, n), t.then(e, e));
  }
  function Ey(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (ze & n) === n && (Je === 4 || Je === 3 && (ze & 62914560) === ze && 300 > Nt() - rl ? (De & 2) === 0 && Bi(e, 0) : Oc |= n, Ii === ze && (Ii = 0)), Aa(e);
  }
  function bf(e, t) {
    t === 0 && (t = md()), e = Bn(e, t), e !== null && (ro(e, t), Aa(e));
  }
  function zy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bf(e, n);
  }
  function ky(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), bf(e, n);
  }
  function Ty(e, t) {
    return At(e, t);
  }
  var ml = null, Zi = null, Hc = !1, fl = !1, Ic = !1, yn = 0;
  function Aa(e) {
    e !== Zi && e.next === null && (Zi === null ? ml = Zi = e : Zi = Zi.next = e), fl = !0, Hc || (Hc = !0, Ny());
  }
  function Io(e, t) {
    if (!Ic && fl) {
      Ic = !0;
      do
        for (var n = !1, r = ml; r !== null; ) {
          if (e !== 0) {
            var s = r.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var p = r.suspendedLanes, b = r.pingedLanes;
              u = (1 << 31 - Zt(42 | e) + 1) - 1, u &= s & ~(p & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, zf(r, u));
          } else
            u = ze, u = vr(
              r,
              r === Ye ? u : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (u & 3) === 0 || oo(r, u) || (n = !0, zf(r, u));
          r = r.next;
        }
      while (n);
      Ic = !1;
    }
  }
  function Ay() {
    wf();
  }
  function wf() {
    fl = Hc = !1;
    var e = 0;
    yn !== 0 && qy() && (e = yn);
    for (var t = Nt(), n = null, r = ml; r !== null; ) {
      var s = r.next, u = Sf(r, t);
      u === 0 ? (r.next = null, n === null ? ml = s : n.next = s, s === null && (Zi = n)) : (n = r, (e !== 0 || (u & 3) !== 0) && (fl = !0)), r = s;
    }
    ct !== 0 && ct !== 5 || Io(e), yn !== 0 && (yn = 0);
  }
  function Sf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var p = 31 - Zt(u), b = 1 << p, S = s[p];
      S === -1 ? ((b & n) === 0 || (b & r) !== 0) && (s[p] = ev(b, t)) : S <= t && (e.expiredLanes |= b), u &= ~b;
    }
    if (t = Ye, n = ze, n = vr(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && wt(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || oo(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (r !== null && wt(r), as(n)) {
        case 2:
        case 8:
          n = dd;
          break;
        case 32:
          n = fr;
          break;
        case 268435456:
          n = _d;
          break;
        default:
          n = fr;
      }
      return r = Ef.bind(null, e), n = At(n, r), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return r !== null && r !== null && wt(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ef(e, t) {
    if (ct !== 0 && ct !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (_l() && e.callbackNode !== n)
      return null;
    var r = ze;
    return r = vr(
      e,
      e === Ye ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (nf(e, r, t), Sf(e, Nt()), e.callbackNode != null && e.callbackNode === n ? Ef.bind(null, e) : null);
  }
  function zf(e, t) {
    if (_l()) return null;
    nf(e, t, !0);
  }
  function Ny() {
    Hy(function() {
      (De & 6) !== 0 ? At(
        ud,
        Ay
      ) : wf();
    });
  }
  function Pc() {
    if (yn === 0) {
      var e = xi;
      e === 0 && (e = pr, pr <<= 1, (pr & 261888) === 0 && (pr = 256)), yn = e;
    }
    return yn;
  }
  function kf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Sr("" + e);
  }
  function Tf(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Cy(e, t, n, r, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var u = kf(
        (s[jt] || null).action
      ), p = r.submitter;
      p && (t = (t = p[jt] || null) ? kf(t.formAction) : p.getAttribute("formAction"), t !== null && (u = t, p = null));
      var b = new Tr(
        "action",
        "action",
        null,
        r,
        s
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (yn !== 0) {
                  var S = p ? Tf(s, p) : new FormData(s);
                  sc(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (b.preventDefault(), S = p ? Tf(s, p) : new FormData(s), sc(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Bc = 0; Bc < ks.length; Bc++) {
    var Yc = ks[Bc], xy = Yc.toLowerCase(), My = Yc[0].toUpperCase() + Yc.slice(1);
    va(
      xy,
      "on" + My
    );
  }
  va(a_, "onAnimationEnd"), va(n_, "onAnimationIteration"), va(i_, "onAnimationStart"), va("dblclick", "onDoubleClick"), va("focusin", "onFocus"), va("focusout", "onBlur"), va(Kv, "onTransitionRun"), va(Xv, "onTransitionStart"), va(Fv, "onTransitionCancel"), va(o_, "onTransitionEnd"), gi("onMouseEnter", ["mouseout", "mouseover"]), gi("onMouseLeave", ["mouseout", "mouseover"]), gi("onPointerEnter", ["pointerout", "pointerover"]), gi("onPointerLeave", ["pointerout", "pointerover"]), Gn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Gn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Gn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Gn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Gn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Gn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Po = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Oy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po)
  );
  function Af(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = r.length - 1; 0 <= p; p--) {
            var b = r[p], S = b.instance, x = b.currentTarget;
            if (b = b.listener, S !== u && s.isPropagationStopped())
              break e;
            u = b, s.currentTarget = x;
            try {
              u(s);
            } catch (G) {
              Cr(G);
            }
            s.currentTarget = null, u = S;
          }
        else
          for (p = 0; p < r.length; p++) {
            if (b = r[p], S = b.instance, x = b.currentTarget, b = b.listener, S !== u && s.isPropagationStopped())
              break e;
            u = b, s.currentTarget = x;
            try {
              u(s);
            } catch (G) {
              Cr(G);
            }
            s.currentTarget = null, u = S;
          }
      }
    }
  }
  function Ee(e, t) {
    var n = t[ns];
    n === void 0 && (n = t[ns] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Nf(t, e, 2, !1), n.add(r));
  }
  function Zc(e, t, n) {
    var r = 0;
    t && (r |= 4), Nf(
      n,
      e,
      r,
      t
    );
  }
  var pl = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(e) {
    if (!e[pl]) {
      e[pl] = !0, bd.forEach(function(n) {
        n !== "selectionchange" && (Oy.has(n) || Zc(n, !1, e), Zc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pl] || (t[pl] = !0, Zc("selectionchange", !1, t));
    }
  }
  function Nf(e, t, n, r) {
    switch (np(t)) {
      case 2:
        var s = rb;
        break;
      case 8:
        s = lb;
        break;
      default:
        s = lu;
    }
    n = s.bind(
      null,
      t,
      n,
      e
    ), s = void 0, !_s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
      passive: s
    }) : e.addEventListener(t, n, !1);
  }
  function Kc(e, t, n, r, s) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var p = r.tag;
        if (p === 3 || p === 4) {
          var b = r.stateNode.containerInfo;
          if (b === s) break;
          if (p === 4)
            for (p = r.return; p !== null; ) {
              var S = p.tag;
              if ((S === 3 || S === 4) && p.stateNode.containerInfo === s)
                return;
              p = p.return;
            }
          for (; b !== null; ) {
            if (p = mi(b), p === null) return;
            if (S = p.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              r = u = p;
              continue e;
            }
            b = b.parentNode;
          }
        }
        r = r.return;
      }
    Od(function() {
      var x = u, G = us(n), B = [];
      e: {
        var O = r_.get(e);
        if (O !== void 0) {
          var j = Tr, J = e;
          switch (e) {
            case "keypress":
              if (zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = kv;
              break;
            case "focusin":
              J = "focus", j = gs;
              break;
            case "focusout":
              J = "blur", j = gs;
              break;
            case "beforeblur":
            case "afterblur":
              j = gs;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = jd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = mv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Nv;
              break;
            case a_:
            case n_:
            case i_:
              j = gv;
              break;
            case o_:
              j = xv;
              break;
            case "scroll":
            case "scrollend":
              j = dv;
              break;
            case "wheel":
              j = Ov;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = vv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Ud;
              break;
            case "toggle":
            case "beforetoggle":
              j = Dv;
          }
          var ce = (t & 4) !== 0, Be = !ce && (e === "scroll" || e === "scrollend"), A = ce ? O !== null ? O + "Capture" : null : O;
          ce = [];
          for (var k = x, C; k !== null; ) {
            var I = k;
            if (C = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || C === null || A === null || (I = co(k, A), I != null && ce.push(
              Bo(k, I, C)
            )), Be) break;
            k = k.return;
          }
          0 < ce.length && (O = new j(
            O,
            J,
            null,
            n,
            G
          ), B.push({ event: O, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", O && n !== cs && (J = n.relatedTarget || n.fromElement) && (mi(J) || J[_i]))
            break e;
          if ((j || O) && (O = G.window === G ? G : (O = G.ownerDocument) ? O.defaultView || O.parentWindow : window, j ? (J = n.relatedTarget || n.toElement, j = x, J = J ? mi(J) : null, J !== null && (Be = d(J), ce = J.tag, J !== Be || ce !== 5 && ce !== 27 && ce !== 6) && (J = null)) : (j = null, J = x), j !== J)) {
            if (ce = jd, I = "onMouseLeave", A = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (ce = Ud, I = "onPointerLeave", A = "onPointerEnter", k = "pointer"), Be = j == null ? O : so(j), C = J == null ? O : so(J), O = new ce(
              I,
              k + "leave",
              j,
              n,
              G
            ), O.target = Be, O.relatedTarget = C, I = null, mi(G) === x && (ce = new ce(
              A,
              k + "enter",
              J,
              n,
              G
            ), ce.target = C, ce.relatedTarget = Be, I = ce), Be = I, j && J)
              t: {
                for (ce = Ry, A = j, k = J, C = 0, I = A; I; I = ce(I))
                  C++;
                I = 0;
                for (var oe = k; oe; oe = ce(oe))
                  I++;
                for (; 0 < C - I; )
                  A = ce(A), C--;
                for (; 0 < I - C; )
                  k = ce(k), I--;
                for (; C--; ) {
                  if (A === k || k !== null && A === k.alternate) {
                    ce = A;
                    break t;
                  }
                  A = ce(A), k = ce(k);
                }
                ce = null;
              }
            else ce = null;
            j !== null && Cf(
              B,
              O,
              j,
              ce,
              !1
            ), J !== null && Be !== null && Cf(
              B,
              Be,
              J,
              ce,
              !0
            );
          }
        }
        e: {
          if (O = x ? so(x) : window, j = O.nodeName && O.nodeName.toLowerCase(), j === "select" || j === "input" && O.type === "file")
            var Me = Zd;
          else if (Bd(O))
            if (Vd)
              Me = Yv;
            else {
              Me = Pv;
              var ne = Iv;
            }
          else
            j = O.nodeName, !j || j.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? x && ss(x.elementType) && (Me = Zd) : Me = Bv;
          if (Me && (Me = Me(e, x))) {
            Yd(
              B,
              Me,
              n,
              G
            );
            break e;
          }
          ne && ne(e, O, x), e === "focusout" && x && O.type === "number" && x.memoizedProps.value != null && ls(O, "number", O.value);
        }
        switch (ne = x ? so(x) : window, e) {
          case "focusin":
            (Bd(ne) || ne.contentEditable === "true") && (Si = ne, Ss = x, vo = null);
            break;
          case "focusout":
            vo = Ss = Si = null;
            break;
          case "mousedown":
            Es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Es = !1, e_(B, n, G);
            break;
          case "selectionchange":
            if (Vv) break;
          case "keydown":
          case "keyup":
            e_(B, n, G);
        }
        var be;
        if (vs)
          e: {
            switch (e) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          wi ? Id(e, n) && (ke = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ke = "onCompositionStart");
        ke && (qd && n.locale !== "ko" && (wi || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && wi && (be = Rd()) : (an = G, ms = "value" in an ? an.value : an.textContent, wi = !0)), ne = gl(x, ke), 0 < ne.length && (ke = new Ld(
          ke,
          e,
          null,
          n,
          G
        ), B.push({ event: ke, listeners: ne }), be ? ke.data = be : (be = Pd(n), be !== null && (ke.data = be)))), (be = Lv ? Uv(e, n) : qv(e, n)) && (ke = gl(x, "onBeforeInput"), 0 < ke.length && (ne = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          G
        ), B.push({
          event: ne,
          listeners: ke
        }), ne.data = be)), Cy(
          B,
          e,
          x,
          n,
          G
        );
      }
      Af(B, t);
    });
  }
  function Bo(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function gl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = co(e, n), s != null && r.unshift(
        Bo(e, s, u)
      ), s = co(e, t), s != null && r.push(
        Bo(e, s, u)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function Ry(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Cf(e, t, n, r, s) {
    for (var u = t._reactName, p = []; n !== null && n !== r; ) {
      var b = n, S = b.alternate, x = b.stateNode;
      if (b = b.tag, S !== null && S === r) break;
      b !== 5 && b !== 26 && b !== 27 || x === null || (S = x, s ? (x = co(n, u), x != null && p.unshift(
        Bo(n, x, S)
      )) : s || (x = co(n, u), x != null && p.push(
        Bo(n, x, S)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Dy = /\r\n?/g, jy = /\u0000|\uFFFD/g;
  function xf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dy, `
`).replace(jy, "");
  }
  function Mf(e, t) {
    return t = xf(t), xf(e) === t;
  }
  function Pe(e, t, n, r, s, u) {
    switch (n) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || vi(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && vi(e, "" + r);
        break;
      case "className":
        br(e, "class", r);
        break;
      case "tabIndex":
        br(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        br(e, n, r);
        break;
      case "style":
        xd(e, r, u);
        break;
      case "data":
        if (t !== "object") {
          br(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = Sr("" + r), e.setAttribute(n, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Pe(e, t, "name", s.name, s, null), Pe(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Pe(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Pe(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Pe(e, t, "encType", s.encType, s, null), Pe(e, t, "method", s.method, s, null), Pe(e, t, "target", s.target, s, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = Sr("" + r), e.setAttribute(n, r);
        break;
      case "onClick":
        r != null && (e.onclick = Ra);
        break;
      case "onScroll":
        r != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ee("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (n = r.__html, n != null) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Sr("" + r), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(n, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
        break;
      case "popover":
        Ee("beforetoggle", e), Ee("toggle", e), yr(e, "popover", r);
        break;
      case "xlinkActuate":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        Oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        Oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        Oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        yr(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = cv.get(n) || n, yr(e, n, r));
    }
  }
  function Xc(e, t, n, r, s, u) {
    switch (n) {
      case "style":
        xd(e, r, u);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (n = r.__html, n != null) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof r == "string" ? vi(e, r) : (typeof r == "number" || typeof r == "bigint") && vi(e, "" + r);
        break;
      case "onScroll":
        r != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ee("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Ra);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!wd.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), t = n.slice(2, s ? n.length - 7 : void 0), u = e[jt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, s), typeof r == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, s);
              break e;
            }
            n in e ? e[n] = r : r === !0 ? e.setAttribute(n, "") : yr(e, n, r);
          }
    }
  }
  function gt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ee("error", e), Ee("load", e);
        var r = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var p = n[u];
            if (p != null)
              switch (u) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  Pe(e, t, u, p, n, null);
              }
          }
        s && Pe(e, t, "srcSet", n.srcSet, n, null), r && Pe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ee("invalid", e);
        var b = u = p = s = null, S = null, x = null;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var G = n[r];
            if (G != null)
              switch (r) {
                case "name":
                  s = G;
                  break;
                case "type":
                  p = G;
                  break;
                case "checked":
                  S = G;
                  break;
                case "defaultChecked":
                  x = G;
                  break;
                case "value":
                  u = G;
                  break;
                case "defaultValue":
                  b = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(l(137, t));
                  break;
                default:
                  Pe(e, t, r, G, n, null);
              }
          }
        Td(
          e,
          u,
          b,
          S,
          x,
          p,
          s,
          !1
        );
        return;
      case "select":
        Ee("invalid", e), r = p = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (b = n[s], b != null))
            switch (s) {
              case "value":
                u = b;
                break;
              case "defaultValue":
                p = b;
                break;
              case "multiple":
                r = b;
              default:
                Pe(e, t, s, b, n, null);
            }
        t = u, n = p, e.multiple = !!r, t != null ? hi(e, !!r, t, !1) : n != null && hi(e, !!r, n, !0);
        return;
      case "textarea":
        Ee("invalid", e), u = s = r = null;
        for (p in n)
          if (n.hasOwnProperty(p) && (b = n[p], b != null))
            switch (p) {
              case "value":
                r = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
                u = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(l(91));
                break;
              default:
                Pe(e, t, p, b, n, null);
            }
        Nd(e, r, s, u);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) && (r = n[S], r != null) && (S === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : Pe(e, t, S, r, n, null));
        return;
      case "dialog":
        Ee("beforetoggle", e), Ee("toggle", e), Ee("cancel", e), Ee("close", e);
        break;
      case "iframe":
      case "object":
        Ee("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Po.length; r++)
          Ee(Po[r], e);
        break;
      case "image":
        Ee("error", e), Ee("load", e);
        break;
      case "details":
        Ee("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ee("error", e), Ee("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in n)
          if (n.hasOwnProperty(x) && (r = n[x], r != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                Pe(e, t, x, r, n, null);
            }
        return;
      default:
        if (ss(t)) {
          for (G in n)
            n.hasOwnProperty(G) && (r = n[G], r !== void 0 && Xc(
              e,
              t,
              G,
              r,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (r = n[b], r != null && Pe(e, t, b, r, n, null));
  }
  function Ly(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, p = null, b = null, S = null, x = null, G = null;
        for (j in n) {
          var B = n[j];
          if (n.hasOwnProperty(j) && B != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = B;
              default:
                r.hasOwnProperty(j) || Pe(e, t, j, null, r, B);
            }
        }
        for (var O in r) {
          var j = r[O];
          if (B = n[O], r.hasOwnProperty(O) && (j != null || B != null))
            switch (O) {
              case "type":
                u = j;
                break;
              case "name":
                s = j;
                break;
              case "checked":
                x = j;
                break;
              case "defaultChecked":
                G = j;
                break;
              case "value":
                p = j;
                break;
              case "defaultValue":
                b = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(l(137, t));
                break;
              default:
                j !== B && Pe(
                  e,
                  t,
                  O,
                  j,
                  r,
                  B
                );
            }
        }
        rs(
          e,
          p,
          b,
          S,
          x,
          G,
          u,
          s
        );
        return;
      case "select":
        j = p = b = O = null;
        for (u in n)
          if (S = n[u], n.hasOwnProperty(u) && S != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                r.hasOwnProperty(u) || Pe(
                  e,
                  t,
                  u,
                  null,
                  r,
                  S
                );
            }
        for (s in r)
          if (u = r[s], S = n[s], r.hasOwnProperty(s) && (u != null || S != null))
            switch (s) {
              case "value":
                O = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "multiple":
                p = u;
              default:
                u !== S && Pe(
                  e,
                  t,
                  s,
                  u,
                  r,
                  S
                );
            }
        t = b, n = p, r = j, O != null ? hi(e, !!n, O, !1) : !!r != !!n && (t != null ? hi(e, !!n, t, !0) : hi(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        j = O = null;
        for (b in n)
          if (s = n[b], n.hasOwnProperty(b) && s != null && !r.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Pe(e, t, b, null, r, s);
            }
        for (p in r)
          if (s = r[p], u = n[p], r.hasOwnProperty(p) && (s != null || u != null))
            switch (p) {
              case "value":
                O = s;
                break;
              case "defaultValue":
                j = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(l(91));
                break;
              default:
                s !== u && Pe(e, t, p, s, r, u);
            }
        Ad(e, O, j);
        return;
      case "option":
        for (var J in n)
          O = n[J], n.hasOwnProperty(J) && O != null && !r.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Pe(
            e,
            t,
            J,
            null,
            r,
            O
          ));
        for (S in r)
          O = r[S], j = n[S], r.hasOwnProperty(S) && O !== j && (O != null || j != null) && (S === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Pe(
            e,
            t,
            S,
            O,
            r,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ce in n)
          O = n[ce], n.hasOwnProperty(ce) && O != null && !r.hasOwnProperty(ce) && Pe(e, t, ce, null, r, O);
        for (x in r)
          if (O = r[x], j = n[x], r.hasOwnProperty(x) && O !== j && (O != null || j != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(l(137, t));
                break;
              default:
                Pe(
                  e,
                  t,
                  x,
                  O,
                  r,
                  j
                );
            }
        return;
      default:
        if (ss(t)) {
          for (var Be in n)
            O = n[Be], n.hasOwnProperty(Be) && O !== void 0 && !r.hasOwnProperty(Be) && Xc(
              e,
              t,
              Be,
              void 0,
              r,
              O
            );
          for (G in r)
            O = r[G], j = n[G], !r.hasOwnProperty(G) || O === j || O === void 0 && j === void 0 || Xc(
              e,
              t,
              G,
              O,
              r,
              j
            );
          return;
        }
    }
    for (var A in n)
      O = n[A], n.hasOwnProperty(A) && O != null && !r.hasOwnProperty(A) && Pe(e, t, A, null, r, O);
    for (B in r)
      O = r[B], j = n[B], !r.hasOwnProperty(B) || O === j || O == null && j == null || Pe(e, t, B, O, r, j);
  }
  function Of(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Uy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
        var s = n[r], u = s.transferSize, p = s.initiatorType, b = s.duration;
        if (u && b && Of(p)) {
          for (p = 0, b = s.responseEnd, r += 1; r < n.length; r++) {
            var S = n[r], x = S.startTime;
            if (x > b) break;
            var G = S.transferSize, B = S.initiatorType;
            G && Of(B) && (S = S.responseEnd, p += G * (S < b ? 1 : (b - x) / (S - x)));
          }
          if (--r, t += 8 * (u + p) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Fc = null, Wc = null;
  function hl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Df(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $c(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function qy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Qc ? !1 : (Qc = e, !0) : (Qc = null, !1);
  }
  var jf = typeof setTimeout == "function" ? setTimeout : void 0, Gy = typeof clearTimeout == "function" ? clearTimeout : void 0, Lf = typeof Promise == "function" ? Promise : void 0, Hy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lf < "u" ? function(e) {
    return Lf.resolve(null).then(e).catch(Iy);
  } : jf;
  function Iy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function bn(e) {
    return e === "head";
  }
  function Uf(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (r === 0) {
            e.removeChild(s), Fi(t);
            return;
          }
          r--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          r++;
        else if (n === "html")
          Yo(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Yo(n);
          for (var u = n.firstChild; u; ) {
            var p = u.nextSibling, b = u.nodeName;
            u[lo] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = p;
          }
        } else
          n === "body" && Yo(e.ownerDocument.body);
      n = s;
    } while (n);
    Fi(t);
  }
  function qf(e, t) {
    var n = e;
    e = 0;
    do {
      var r = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8)
        if (n = r.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = r;
    } while (n);
  }
  function Jc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(n), is(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Py(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[lo])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = ca(e.nextSibling), e === null) break;
    }
    return null;
  }
  function By(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = ca(e.nextSibling), e === null)) return null;
    return e;
  }
  function Gf(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ca(e.nextSibling), e === null)) return null;
    return e;
  }
  function eu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function tu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Yy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var r = function() {
        t(), n.removeEventListener("DOMContentLoaded", r);
      };
      n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function ca(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var au = null;
  function Hf(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return ca(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function If(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Pf(e, t, n) {
    switch (t = hl(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function Yo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    is(e);
  }
  var ua = /* @__PURE__ */ new Map(), Bf = /* @__PURE__ */ new Set();
  function vl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fa = K.d;
  K.d = {
    f: Zy,
    r: Vy,
    D: Ky,
    C: Xy,
    L: Fy,
    m: Wy,
    X: Qy,
    S: $y,
    M: Jy
  };
  function Zy() {
    var e = Fa.f(), t = cl();
    return e || t;
  }
  function Vy(e) {
    var t = fi(e);
    t !== null && t.tag === 5 && t.type === "form" ? om(t) : Fa.r(e);
  }
  var Vi = typeof document > "u" ? null : document;
  function Yf(e, t, n) {
    var r = Vi;
    if (r && typeof t == "string" && t) {
      var s = aa(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Bf.has(s) || (Bf.add(s), e = { rel: e, crossOrigin: n, href: t }, r.querySelector(s) === null && (t = r.createElement("link"), gt(t, "link", e), ut(t), r.head.appendChild(t)));
    }
  }
  function Ky(e) {
    Fa.D(e), Yf("dns-prefetch", e, null);
  }
  function Xy(e, t) {
    Fa.C(e, t), Yf("preconnect", e, t);
  }
  function Fy(e, t, n) {
    Fa.L(e, t, n);
    var r = Vi;
    if (r && e && t) {
      var s = 'link[rel="preload"][as="' + aa(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + aa(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + aa(
        n.imageSizes
      ) + '"]')) : s += '[href="' + aa(e) + '"]';
      var u = s;
      switch (t) {
        case "style":
          u = Ki(e);
          break;
        case "script":
          u = Xi(e);
      }
      ua.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), ua.set(u, e), r.querySelector(s) !== null || t === "style" && r.querySelector(Zo(u)) || t === "script" && r.querySelector(Vo(u)) || (t = r.createElement("link"), gt(t, "link", e), ut(t), r.head.appendChild(t)));
    }
  }
  function Wy(e, t) {
    Fa.m(e, t);
    var n = Vi;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + aa(r) + '"][href="' + aa(e) + '"]', u = s;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Xi(e);
      }
      if (!ua.has(u) && (e = y({ rel: "modulepreload", href: e }, t), ua.set(u, e), n.querySelector(s) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Vo(u)))
              return;
        }
        r = n.createElement("link"), gt(r, "link", e), ut(r), n.head.appendChild(r);
      }
    }
  }
  function $y(e, t, n) {
    Fa.S(e, t, n);
    var r = Vi;
    if (r && e) {
      var s = pi(r).hoistableStyles, u = Ki(e);
      t = t || "default";
      var p = s.get(u);
      if (!p) {
        var b = { loading: 0, preload: null };
        if (p = r.querySelector(
          Zo(u)
        ))
          b.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = ua.get(u)) && nu(e, n);
          var S = p = r.createElement("link");
          ut(S), gt(S, "link", e), S._p = new Promise(function(x, G) {
            S.onload = x, S.onerror = G;
          }), S.addEventListener("load", function() {
            b.loading |= 1;
          }), S.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, yl(p, t, r);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: b
        }, s.set(u, p);
      }
    }
  }
  function Qy(e, t) {
    Fa.X(e, t);
    var n = Vi;
    if (n && e) {
      var r = pi(n).hoistableScripts, s = Xi(e), u = r.get(s);
      u || (u = n.querySelector(Vo(s)), u || (e = y({ src: e, async: !0 }, t), (t = ua.get(s)) && iu(e, t), u = n.createElement("script"), ut(u), gt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, r.set(s, u));
    }
  }
  function Jy(e, t) {
    Fa.M(e, t);
    var n = Vi;
    if (n && e) {
      var r = pi(n).hoistableScripts, s = Xi(e), u = r.get(s);
      u || (u = n.querySelector(Vo(s)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = ua.get(s)) && iu(e, t), u = n.createElement("script"), ut(u), gt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, r.set(s, u));
    }
  }
  function Zf(e, t, n, r) {
    var s = (s = le.current) ? vl(s) : null;
    if (!s) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ki(n.href), n = pi(
          s
        ).hoistableStyles, r = n.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ki(n.href);
          var u = pi(
            s
          ).hoistableStyles, p = u.get(e);
          if (p || (s = s.ownerDocument || s, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, p), (u = s.querySelector(
            Zo(e)
          )) && !u._p && (p.instance = u, p.state.loading = 5), ua.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, ua.set(e, n), u || eb(
            s,
            e,
            n,
            p.state
          ))), t && r === null)
            throw Error(l(528, ""));
          return p;
        }
        if (t && r !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xi(n), n = pi(
          s
        ).hoistableScripts, r = n.get(t), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function Ki(e) {
    return 'href="' + aa(e) + '"';
  }
  function Zo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vf(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function eb(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), gt(t, "link", n), ut(t), e.head.appendChild(t));
  }
  function Xi(e) {
    return '[src="' + aa(e) + '"]';
  }
  function Vo(e) {
    return "script[async]" + e;
  }
  function Kf(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + aa(n.href) + '"]'
          );
          if (r)
            return t.instance = r, ut(r), r;
          var s = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), ut(r), gt(r, "style", s), yl(r, n.precedence, e), t.instance = r;
        case "stylesheet":
          s = Ki(n.href);
          var u = e.querySelector(
            Zo(s)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ut(u), u;
          r = Vf(n), (s = ua.get(s)) && nu(r, s), u = (e.ownerDocument || e).createElement("link"), ut(u);
          var p = u;
          return p._p = new Promise(function(b, S) {
            p.onload = b, p.onerror = S;
          }), gt(u, "link", r), t.state.loading |= 4, yl(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Xi(n.src), (s = e.querySelector(
            Vo(u)
          )) ? (t.instance = s, ut(s), s) : (r = n, (s = ua.get(u)) && (r = y({}, n), iu(r, s)), e = e.ownerDocument || e, s = e.createElement("script"), ut(s), gt(s, "link", r), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, yl(r, n.precedence, e));
    return t.instance;
  }
  function yl(e, t, n) {
    for (var r = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = r.length ? r[r.length - 1] : null, u = s, p = 0; p < r.length; p++) {
      var b = r[p];
      if (b.dataset.precedence === t) u = b;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function nu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function iu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var bl = null;
  function Xf(e, t, n) {
    if (bl === null) {
      var r = /* @__PURE__ */ new Map(), s = bl = /* @__PURE__ */ new Map();
      s.set(n, r);
    } else
      s = bl, r = s.get(n), r || (r = /* @__PURE__ */ new Map(), s.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[lo] || u[_t] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = u.getAttribute(t) || "";
        p = e + p;
        var b = r.get(p);
        b ? b.push(u) : r.set(p, [u]);
      }
    }
    return r;
  }
  function Ff(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function tb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Wf(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ab(e, t, n, r) {
    if (n.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Ki(r.href), u = t.querySelector(
          Zo(s)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = wl.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, ut(u);
          return;
        }
        u = t.ownerDocument || t, r = Vf(r), (s = ua.get(s)) && nu(r, s), u = u.createElement("link"), ut(u);
        var p = u;
        p._p = new Promise(function(b, S) {
          p.onload = b, p.onerror = S;
        }), gt(u, "link", r), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = wl.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var ou = 0;
  function nb(e, t) {
    return e.stylesheets && e.count === 0 && El(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var r = setTimeout(function() {
        if (e.stylesheets && El(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ou === 0 && (ou = 62500 * Uy());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && El(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > ou ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(s);
      };
    } : null;
  }
  function wl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) El(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Sl = null;
  function El(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Sl = /* @__PURE__ */ new Map(), t.forEach(ib, e), Sl = null, wl.call(e));
  }
  function ib(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Sl.get(e);
      if (n) var r = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Sl.set(e, n);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var p = s[u];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), r = p);
        }
        r && n.set(null, r);
      }
      s = t.instance, p = s.getAttribute("data-precedence"), u = n.get(p) || r, u === r && n.set(null, s), n.set(p, s), this.count++, r = wl.bind(this), s.addEventListener("load", r), s.addEventListener("error", r), u ? u.parentNode.insertBefore(s, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ko = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function ob(e, t, n, r, s, u, p, b, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = es(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = es(0), this.hiddenUpdates = es(null), this.identifierPrefix = r, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $f(e, t, n, r, s, u, p, b, S, x, G, B) {
    return e = new ob(
      e,
      t,
      n,
      p,
      S,
      x,
      G,
      B,
      b
    ), t = 1, u === !0 && (t |= 24), u = Kt(3, null, null, t), e.current = u, u.stateNode = e, t = qs(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: t
    }, Ps(u), e;
  }
  function Qf(e) {
    return e ? (e = ki, e) : ki;
  }
  function Jf(e, t, n, r, s, u) {
    s = Qf(s), r.context === null ? r.context = s : r.pendingContext = s, r = cn(t), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = un(e, r, t), n !== null && (It(n, e, t), ko(n, e, t));
  }
  function ep(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ru(e, t) {
    ep(e, t), (e = e.alternate) && ep(e, t);
  }
  function tp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bn(e, 67108864);
      t !== null && It(t, e, 67108864), ru(e, 67108864);
    }
  }
  function ap(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Qt();
      t = ts(t);
      var n = Bn(e, t);
      n !== null && It(n, e, t), ru(e, t);
    }
  }
  var zl = !0;
  function rb(e, t, n, r) {
    var s = M.T;
    M.T = null;
    var u = K.p;
    try {
      K.p = 2, lu(e, t, n, r);
    } finally {
      K.p = u, M.T = s;
    }
  }
  function lb(e, t, n, r) {
    var s = M.T;
    M.T = null;
    var u = K.p;
    try {
      K.p = 8, lu(e, t, n, r);
    } finally {
      K.p = u, M.T = s;
    }
  }
  function lu(e, t, n, r) {
    if (zl) {
      var s = su(r);
      if (s === null)
        Kc(
          e,
          t,
          r,
          kl,
          n
        ), ip(e, r);
      else if (cb(
        s,
        e,
        t,
        n,
        r
      ))
        r.stopPropagation();
      else if (ip(e, r), t & 4 && -1 < sb.indexOf(e)) {
        for (; s !== null; ) {
          var u = fi(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var p = qn(u.pendingLanes);
                  if (p !== 0) {
                    var b = u;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                      var S = 1 << 31 - Zt(p);
                      b.entanglements[1] |= S, p &= ~S;
                    }
                    Aa(u), (De & 6) === 0 && (ll = Nt() + 500, Io(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Bn(u, 2), b !== null && It(b, u, 2), cl(), ru(u, 2);
            }
          if (u = su(r), u === null && Kc(
            e,
            t,
            r,
            kl,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && r.stopPropagation();
      } else
        Kc(
          e,
          t,
          r,
          null,
          n
        );
    }
  }
  function su(e) {
    return e = us(e), cu(e);
  }
  var kl = null;
  function cu(e) {
    if (kl = null, e = mi(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = _(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return kl = e, null;
  }
  function np(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Kh()) {
          case ud:
            return 2;
          case dd:
            return 8;
          case fr:
          case Xh:
            return 32;
          case _d:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uu = !1, wn = null, Sn = null, En = null, Xo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), zn = [], sb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ip(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Sn = null;
        break;
      case "mouseover":
      case "mouseout":
        En = null;
        break;
      case "pointerover":
      case "pointerout":
        Xo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fo.delete(t.pointerId);
    }
  }
  function Wo(e, t, n, r, s, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: u,
      targetContainers: [s]
    }, t !== null && (t = fi(t), t !== null && tp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function cb(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return wn = Wo(
          wn,
          e,
          t,
          n,
          r,
          s
        ), !0;
      case "dragenter":
        return Sn = Wo(
          Sn,
          e,
          t,
          n,
          r,
          s
        ), !0;
      case "mouseover":
        return En = Wo(
          En,
          e,
          t,
          n,
          r,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return Xo.set(
          u,
          Wo(
            Xo.get(u) || null,
            e,
            t,
            n,
            r,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, Fo.set(
          u,
          Wo(
            Fo.get(u) || null,
            e,
            t,
            n,
            r,
            s
          )
        ), !0;
    }
    return !1;
  }
  function op(e) {
    var t = mi(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _(n), t !== null) {
            e.blockedOn = t, vd(e.priority, function() {
              ap(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(n), t !== null) {
            e.blockedOn = t, vd(e.priority, function() {
              ap(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = su(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(
          n.type,
          n
        );
        cs = r, n.target.dispatchEvent(r), cs = null;
      } else
        return t = fi(n), t !== null && tp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function rp(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function ub() {
    uu = !1, wn !== null && Tl(wn) && (wn = null), Sn !== null && Tl(Sn) && (Sn = null), En !== null && Tl(En) && (En = null), Xo.forEach(rp), Fo.forEach(rp);
  }
  function Al(e, t) {
    e.blockedOn === t && (e.blockedOn = null, uu || (uu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      ub
    )));
  }
  var Nl = null;
  function lp(e) {
    Nl !== e && (Nl = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Nl === e && (Nl = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], r = e[t + 1], s = e[t + 2];
          if (typeof r != "function") {
            if (cu(r || n) === null)
              continue;
            break;
          }
          var u = fi(n);
          u !== null && (e.splice(t, 3), t -= 3, sc(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: r
            },
            r,
            s
          ));
        }
      }
    ));
  }
  function Fi(e) {
    function t(S) {
      return Al(S, e);
    }
    wn !== null && Al(wn, e), Sn !== null && Al(Sn, e), En !== null && Al(En, e), Xo.forEach(t), Fo.forEach(t);
    for (var n = 0; n < zn.length; n++) {
      var r = zn[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < zn.length && (n = zn[0], n.blockedOn === null); )
      op(n), n.blockedOn === null && zn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (r = 0; r < n.length; r += 3) {
        var s = n[r], u = n[r + 1], p = s[jt] || null;
        if (typeof u == "function")
          p || lp(n);
        else if (p) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, p = u[jt] || null)
              b = p.formAction;
            else if (cu(s) !== null) continue;
          } else b = p.action;
          typeof b == "function" ? n[r + 1] = b : (n.splice(r, 3), r -= 3), lp(n);
        }
      }
  }
  function sp() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(p) {
            return s = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), r || setTimeout(n, 20);
    }
    function n() {
      if (!r && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var r = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function du(e) {
    this._internalRoot = e;
  }
  Cl.prototype.render = du.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var n = t.current, r = Qt();
    Jf(n, r, e, t, null, null);
  }, Cl.prototype.unmount = du.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Jf(e.current, 2, null, e, null, null), cl(), t[_i] = null;
    }
  };
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = hd();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++) ;
      zn.splice(n, 0, e), n === 0 && op(e);
    }
  };
  var cp = i.version;
  if (cp !== "19.2.3")
    throw Error(
      l(
        527,
        cp,
        "19.2.3"
      )
    );
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = f(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var db = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xl.isDisabled && xl.supportsFiber)
      try {
        io = xl.inject(
          db
        ), Yt = xl;
      } catch {
      }
  }
  return Qo.createRoot = function(e, t) {
    if (!c(e)) throw Error(l(299));
    var n = !1, r = "", s = pm, u = gm, p = hm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = $f(
      e,
      1,
      !1,
      null,
      null,
      n,
      r,
      null,
      s,
      u,
      p,
      sp
    ), e[_i] = t.current, Vc(e), new du(t);
  }, Qo.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(l(299));
    var r = !1, s = "", u = pm, p = gm, b = hm, S = null;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), t = $f(
      e,
      1,
      !0,
      t,
      n ?? null,
      r,
      s,
      S,
      u,
      p,
      b,
      sp
    ), t.context = Qf(null), n = t.current, r = Qt(), r = ts(r), s = cn(r), s.callback = null, un(n, s, r), n = r, t.current.lanes = n, ro(t, n), Aa(t), e[_i] = t.current, Vc(e), new Cl(t);
  }, Qo.version = "19.2.3", Qo;
}
var yp;
function wb() {
  if (yp) return fu.exports;
  yp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), fu.exports = bb(), fu.exports;
}
var Sb = wb();
const Eb = /* @__PURE__ */ yg(Sb);
const bg = (...a) => a.filter((i, o, l) => !!i && i.trim() !== "" && l.indexOf(i) === o).join(" ").trim();
const zb = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const kb = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, o, l) => l ? l.toUpperCase() : o.toLowerCase()
);
const bp = (a) => {
  const i = kb(a);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var Tb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Ab = (a) => {
  for (const i in a)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const Nb = D.forwardRef(
  ({
    color: a = "currentColor",
    size: i = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: l,
    className: c = "",
    children: d,
    iconNode: _,
    ...m
  }, g) => D.createElement(
    "svg",
    {
      ref: g,
      ...Tb,
      width: i,
      height: i,
      stroke: a,
      strokeWidth: l ? Number(o) * 24 / Number(i) : o,
      className: bg("lucide", c),
      ...!d && !Ab(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ..._.map(([f, v]) => D.createElement(f, v)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const ue = (a, i) => {
  const o = D.forwardRef(
    ({ className: l, ...c }, d) => D.createElement(Nb, {
      ref: d,
      iconNode: i,
      className: bg(
        `lucide-${zb(bp(a))}`,
        `lucide-${a}`,
        l
      ),
      ...c
    })
  );
  return o.displayName = bp(a), o;
};
const Cb = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      key: "67vhrh"
    }
  ],
  ["path", { d: "M4 9v6", key: "bns7oa" }]
], xb = ue("arrow-big-right-dash", Cb);
const Mb = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
];
ue("battery-charging", Mb);
const Ob = [
  ["path", { d: "M10 10v4", key: "1mb2ec" }],
  ["path", { d: "M14 10v4", key: "1nt88p" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 10v4", key: "1n77qd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Rb = ue("battery-full", Ob);
const Db = [
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], jb = ue("battery-low", Db);
const Lb = [
  ["path", { d: "M10 14v-4", key: "suye4c" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Ub = ue("battery-medium", Lb);
const qb = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Gb = ue("battery", qb);
const Hb = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], Ib = ue("bookmark", Hb);
const Pb = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], Bb = ue("brain", Pb);
const Yb = [
  ["path", { d: "m16 22-1-4", key: "1ow2iv" }],
  [
    "path",
    {
      d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1",
      key: "11gii7"
    }
  ],
  ["path", { d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z", key: "bju7h4" }],
  ["path", { d: "m8 22 1-4", key: "s3unb" }]
], Lu = ue("brush-cleaning", Yb);
const Zb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], wg = ue("check", Zb);
const Vb = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Sg = ue("chevron-down", Vb);
const Kb = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Xb = ue("circle-play", Kb);
const Fb = [
  ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
], Wb = ue("corner-down-right", Fb);
const $b = [
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 16h12", key: "u522kt" }]
], Qb = ue("dock", $b);
const Jb = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
], Kl = ue("droplet", Jb);
const e0 = [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
], t0 = ue("footprints", e0);
const a0 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
], ql = ue("gauge", a0);
const n0 = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], i0 = ue("grid-2x2-check", n0);
const o0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], r0 = ue("history", o0);
const l0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], s0 = ue("info", l0);
const c0 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], u0 = ue("layers", c0);
const d0 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], _0 = ue("list", d0);
const m0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], f0 = ue("lock-open", m0);
const p0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], g0 = ue("lock", p0);
const h0 = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], Uu = ue("map", h0);
const v0 = [["path", { d: "M5 12h14", key: "1ays0h" }]], y0 = ue("minus", v0);
const b0 = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], w0 = ue("octagon-x", b0);
const S0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
], E0 = ue("panel-bottom-close", S0);
const z0 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], k0 = ue("pause", z0);
const T0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], A0 = ue("play", T0);
const N0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Eg = ue("plus", N0);
const C0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], x0 = ue("rotate-ccw", C0);
const M0 = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], O0 = ue("route", M0);
const R0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], zg = ue("scan", R0);
const D0 = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], j0 = ue("settings-2", D0);
const L0 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], U0 = ue("settings", L0);
const q0 = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
], G0 = ue("shell", q0);
const H0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
], I0 = ue("signal-high", H0);
const P0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
], B0 = ue("signal-low", P0);
const Y0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
], Z0 = ue("signal-medium", Y0);
const V0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
], K0 = ue("signal", V0);
const X0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], F0 = ue("sliders-horizontal", X0);
const W0 = [
  [
    "path",
    {
      d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "1ystz2"
    }
  ],
  ["path", { d: "M3 4v16", key: "1ph11n" }]
], $0 = ue("step-forward", W0);
const Q0 = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
], ku = ue("thermometer", Q0);
const J0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], ew = ue("timer", J0);
const tw = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], aw = ue("volume-2", tw);
const nw = [
  ["path", { d: "M12 10L12 2", key: "jvb0aw" }],
  ["path", { d: "M16 6L12 10L8 6", key: "9j6vje" }],
  [
    "path",
    {
      d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15",
      key: "s2zepw"
    }
  ],
  [
    "path",
    {
      d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21",
      key: "u68omc"
    }
  ]
], iw = ue("waves-arrow-down", nw);
const ow = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], rw = ue("zap", ow), Te = {
  STATE: { key: "state" },
  MAIN_BRUSH_LEFT: { key: "main_brush_left" },
  MAIN_BRUSH_TIME_LEFT: {
    key: "main_brush_time_left"
  },
  SIDE_BRUSH_LEFT: { key: "side_brush_left" },
  SIDE_BRUSH_TIME_LEFT: {
    key: "side_brush_time_left"
  },
  FILTER_LEFT: { key: "filter_left" },
  FILTER_TIME_LEFT: { key: "filter_time_left" },
  SENSOR_DIRTY_LEFT: { key: "sensor_dirty_left" },
  SENSOR_DIRTY_TIME_LEFT: {
    key: "sensor_dirty_time_left"
  },
  TANK_FILTER_LEFT: { key: "tank_filter_left" },
  TANK_FILTER_TIME_LEFT: {
    key: "tank_filter_time_left"
  },
  MOP_PAD_LEFT: { key: "mop_pad_left" },
  MOP_PAD_TIME_LEFT: { key: "mop_pad_time_left" },
  SILVER_ION_LEFT: { key: "silver_ion_left" },
  SILVER_ION_TIME_LEFT: {
    key: "silver_ion_time_left"
  },
  DETERGENT_LEFT: { key: "detergent_left" },
  DETERGENT_TIME_LEFT: {
    key: "detergent_time_left"
  },
  SQUEEGEE_LEFT: { key: "squeegee_left" },
  SQUEEGEE_TIME_LEFT: { key: "squeegee_time_left" },
  ONBOARD_DIRTY_WATER_TANK_LEFT: {
    key: "onboard_dirty_water_tank_left"
  },
  ONBOARD_DIRTY_WATER_TANK_TIME_LEFT: {
    key: "onboard_dirty_water_tank_time_left"
  },
  DIRTY_WATER_CHANNEL_DIRTY_LEFT: {
    key: "dirty_water_channel_dirty_left"
  },
  DIRTY_WATER_CHANNEL_DIRTY_TIME_LEFT: {
    key: "dirty_water_channel_dirty_time_left"
  },
  DEODORIZER_LEFT: { key: "deodorizer_left" },
  DEODORIZER_TIME_LEFT: { key: "deodorizer_time_left" },
  WHEEL_DIRTY_LEFT: { key: "wheel_dirty_left" },
  WHEEL_DIRTY_TIME_LEFT: { key: "wheel_dirty_time_left" },
  SCALE_INHIBITOR_LEFT: { key: "scale_inhibitor_left" },
  SCALE_INHIBITOR_TIME_LEFT: {
    key: "scale_inhibitor_time_left"
  },
  FLUFFING_ROLLER_DIRTY_LEFT: {
    key: "fluffing_roller_dirty_left"
  },
  FLUFFING_ROLLER_DIRTY_TIME_LEFT: {
    key: "fluffing_roller_dirty_time_left"
  },
  ROLLER_MOP_FILTER_DIRTY_LEFT: {
    key: "roller_mop_filter_dirty_left"
  },
  ROLLER_MOP_FILTER_DIRTY_TIME_LEFT: {
    key: "roller_mop_filter_dirty_time_left"
  },
  WATER_OUTLET_FILTER_DIRTY_LEFT: {
    key: "water_outlet_filter_dirty_left"
  },
  WATER_OUTLET_FILTER_DIRTY_TIME_LEFT: {
    key: "water_outlet_filter_dirty_time_left"
  }
}, qu = {
  RESUME_CLEANING: { key: "resume_cleaning", platform: "switch" },
  CARPET_BOOST: { key: "carpet_boost", platform: "switch", category: "config" },
  OBSTACLE_AVOIDANCE: { key: "obstacle_avoidance", platform: "switch", category: "config" },
  CUSTOMIZED_CLEANING: { key: "customized_cleaning", platform: "switch", icon: "mdi:home-search" },
  CHILD_LOCK: { key: "child_lock", platform: "switch", category: "config" },
  TIGHT_MOPPING: { key: "tight_mopping", platform: "switch", icon: "mdi:heating-coil", category: "config" },
  DND: { key: "dnd", platform: "switch", category: "config", name: "DnD" },
  DND_DISABLE_RESUME_CLEANING: {
    key: "dnd_disable_resume_cleaning",
    platform: "switch",
    icon: "mdi:pause-box",
    category: "config"
  },
  DND_DISABLE_AUTO_EMPTY: {
    key: "dnd_disable_auto_empty",
    platform: "switch",
    icon: "mdi:delete-off",
    category: "config"
  },
  DND_REDUCE_VOLUME: { key: "dnd_reduce_volume", platform: "switch", icon: "mdi:volume-minus", category: "config" },
  MULTI_FLOOR_MAP: { key: "multi_floor_map", platform: "switch", category: "config" },
  AUTO_DUST_COLLECTING: { key: "auto_dust_collecting", platform: "switch" },
  CARPET_RECOGNITION: { key: "carpet_recognition", platform: "switch", icon: "mdi:rug", category: "config" },
  SELF_CLEAN: { key: "self_clean", platform: "switch" },
  WATER_ELECTROLYSIS: { key: "water_electrolysis", platform: "switch", category: "config" },
  AUTO_WATER_REFILLING: { key: "auto_water_refilling", platform: "switch", category: "config" },
  INTELLIGENT_RECOGNITION: { key: "intelligent_recognition", platform: "switch", category: "config" },
  AUTO_DRYING: { key: "auto_drying", platform: "switch" },
  CARPET_AVOIDANCE: { key: "carpet_avoidance", platform: "switch", icon: "mdi:close-box-outline", category: "config" },
  AUTO_ADD_DETERGENT: { key: "auto_add_detergent", platform: "switch", icon: "mdi:chart-bubble", category: "config" },
  MOP_WASHING_WITH_DETERGENT: {
    key: "mop_washing_with_detergent",
    platform: "switch",
    icon: "mdi:hand-wash",
    category: "config",
    name: "Mop Washing With Detergent"
  },
  MOPPING_WITH_DETERGENT: {
    key: "mopping_with_detergent",
    platform: "switch",
    icon: "mdi:hand-wash",
    category: "config"
  },
  MAP_SAVING: { key: "map_saving", platform: "switch", icon: "mdi:map-legend", category: "config" },
  AUTO_MOUNT_MOP: { key: "auto_mount_mop", platform: "switch", icon: "mdi:google-circles-group", category: "config" },
  AUTO_CHANGE_MOP: { key: "auto_change_mop", platform: "switch", icon: "mdi:domain-switch", category: "config" },
  VOICE_ASSISTANT: { key: "voice_assistant", platform: "switch", category: "config" },
  CLEANING_SEQUENCE: { key: "cleaning_sequence", platform: "switch", icon: "mdi:order-numeric-ascending" },
  SELF_CLEAN_BY_ZONE: { key: "self_clean_by_zone", platform: "switch" },
  AI_OBSTACLE_DETECTION: { key: "ai_obstacle_detection", platform: "switch", category: "config" },
  AI_OBSTACLE_IMAGE_UPLOAD: {
    key: "ai_obstacle_image_upload",
    platform: "switch",
    icon: "mdi:cloud-upload",
    category: "config"
  },
  AI_OBSTACLE_PICTURE: { key: "ai_obstacle_picture", platform: "switch", category: "config" },
  AI_PET_DETECTION: { key: "ai_pet_detection", platform: "switch", category: "config" },
  AI_HUMAN_DETECTION: { key: "ai_human_detection", platform: "switch", category: "config" },
  AI_FURNITURE_DETECTION: {
    key: "ai_furniture_detection",
    platform: "switch",
    icon: "mdi:table-furniture",
    category: "config"
  },
  AI_FLUID_DETECTION: { key: "ai_fluid_detection", platform: "switch", category: "config" },
  FUZZY_OBSTACLE_DETECTION: {
    key: "fuzzy_obstacle_detection",
    platform: "switch",
    icon: "mdi:blur-linear",
    category: "config"
  },
  AI_PET_AVOIDANCE: { key: "ai_pet_avoidance", platform: "switch", icon: "mdi:dog-service", category: "config" },
  PET_PICTURE: { key: "pet_picture", platform: "switch", icon: "mdi:cat", category: "config" },
  PET_FOCUSED_DETECTION: { key: "pet_focused_detection", platform: "switch", icon: "mdi:dog", category: "config" },
  LARGE_PARTICLES_BOOST: {
    key: "large_particles_boost",
    platform: "switch",
    icon: "mdi:weather-dust",
    category: "config"
  },
  FILL_LIGHT: { key: "fill_light", platform: "switch" },
  COLLISION_AVOIDANCE: { key: "collision_avoidance", platform: "switch", category: "config" },
  STAIN_AVOIDANCE: { key: "stain_avoidance", platform: "switch", icon: "mdi:liquid-spot" },
  FLOOR_DIRECTION_CLEANING: {
    key: "floor_direction_cleaning",
    platform: "switch",
    icon: "mdi:arrow-decision-auto",
    category: "config"
  },
  PET_FOCUSED_CLEANING: { key: "pet_focused_cleaning", platform: "switch", icon: "mdi:paw", category: "config" },
  INTENSIVE_CARPET_CLEANING: {
    key: "intensive_carpet_cleaning",
    platform: "switch",
    icon: "mdi:creation",
    category: "config"
  },
  SIDE_REACH: { key: "side_reach", platform: "switch", icon: "mdi:selection-ellipse-arrow-inside", category: "config" },
  MOP_EXTEND: { key: "mop_extend", platform: "switch", icon: "mdi:waves-arrow-right" },
  GAP_CLEANING_EXTENSION: {
    key: "gap_cleaning_extension",
    platform: "switch",
    icon: "mdi:plus-circle-multiple",
    category: "config"
  },
  MOPPING_UNDER_FURNITURES: {
    key: "mopping_under_furnitures",
    platform: "switch",
    icon: "mdi:table-picnic",
    category: "config"
  },
  OFF_PEAK_CHARGING: { key: "off_peak_charging", platform: "switch", icon: "mdi:battery-clock", category: "config" },
  AUTO_CHARGING: { key: "auto_charging", platform: "switch", icon: "mdi:battery-sync" },
  HUMAN_FOLLOW: { key: "human_follow", platform: "switch" },
  MAX_SUCTION_POWER: { key: "max_suction_power", platform: "switch", icon: "mdi:speedometer" },
  SMART_DRYING: { key: "smart_drying", platform: "switch", icon: "mdi:clock-fast" },
  HOT_WASHING: { key: "hot_washing", platform: "switch", icon: "mdi:sun-thermometer" },
  UV_STERILIZATION: { key: "uv_sterilization", platform: "switch", icon: "mdi:sun-wireless" },
  ULTRA_CLEAN_MODE: { key: "ultra_clean_mode", platform: "switch", icon: "mdi:silverware-clean" },
  STREAMING_VOICE_PROMPT: { key: "streaming_voice_prompt", platform: "switch" },
  CLEAN_CARPETS_FIRST: {
    key: "clean_carpets_first",
    platform: "switch",
    icon: "mdi:order-bool-descending-variant",
    category: "config"
  },
  SMART_MOP_WASHING: { key: "smart_mop_washing", platform: "switch", icon: "mdi:hand-water", category: "config" },
  SILENT_DRYING: { key: "silent_drying", platform: "switch", icon: "mdi:volume-mute" },
  HAIR_COMPRESSION: {
    key: "hair_compression",
    platform: "switch",
    icon: "mdi:arrow-collapse-vertical",
    category: "config"
  },
  SIDE_BRUSH_CARPET_ROTATE: {
    key: "side_brush_carpet_rotate",
    platform: "switch",
    icon: "mdi:format-rotate-90",
    category: "config"
  },
  LIFT_CHASSIS_ON_CARPET: {
    key: "lift_chassis_on_carpet",
    platform: "switch",
    icon: "mdi:weather-moonset-up",
    category: "config"
  },
  CLOSE_ROLLER_COVER_ON_CARPET: {
    key: "close_roller_cover_on_carpet",
    platform: "switch",
    icon: "mdi:circle-off-outline",
    category: "config"
  },
  DUST_BAG_DRYING: { key: "dust_bag_drying", platform: "switch", icon: "mdi:fire-circle", category: "config" },
  RING_LIGHT_ALWAYS_ON: {
    key: "ring_light_always_on",
    platform: "switch",
    icon: "mdi:light-recessed",
    category: "config"
  },
  OBSTACLE_CROSSING: {
    key: "obstacle_crossing",
    platform: "switch",
    icon: "mdi:boom-gate-arrow-up",
    category: "config",
    name: "Synchronized Obstacle Crossing"
  },
  ACTIVE_SUSPENSION_CROSSING: {
    key: "active_suspension_crossing",
    platform: "switch",
    icon: "mdi:weather-moonset-up",
    category: "config"
  },
  DYNAMIC_OBSTACLE_CLEANING: {
    key: "dynamic_obstacle_cleaning",
    platform: "switch",
    icon: "mdi:map-marker-circle",
    category: "config"
  },
  PRESSURIZED_CLEANING: {
    key: "pressurized_cleaning",
    platform: "switch",
    icon: "mdi:car-brake-low-pressure",
    category: "config"
  },
  LDS_STATE: { key: "lds_state", platform: "switch", name: "LDS State" },
  CAMERA_LIGHT_BRIGHTNESS_AUTO: { key: "camera_light_brightness_auto", platform: "switch" }
}, Na = {
  SUCTION_LEVEL: { key: "suction_level", platform: "select" },
  WATER_VOLUME: { key: "water_volume", platform: "select" },
  CLEANING_MODE: { key: "cleaning_mode", platform: "select" },
  CARPET_SENSITIVITY: { key: "carpet_sensitivity", platform: "select", icon: "mdi:rug" },
  CARPET_CLEANING: { key: "carpet_cleaning", platform: "select", icon: "mdi:close-box-outline" },
  AUTO_EMPTY_FREQUENCY: { key: "auto_empty_frequency", platform: "select" },
  DRYING_TIME: { key: "drying_time", platform: "select", icon: "mdi:sun-clock" },
  MOP_WASH_LEVEL: { key: "mop_wash_level", platform: "select", icon: "mdi:water-opacity" },
  VOICE_ASSISTANT_LANGUAGE: {
    key: "voice_assistant_language",
    platform: "select",
    icon: "mdi:translate-variant",
    category: "config"
  },
  MOP_PRESSURE: { key: "mop_pressure", platform: "select", icon: "mdi:car-brake-low-pressure" },
  MOP_TEMPERATURE: { key: "mop_temperature", platform: "select", icon: "mdi:thermometer-water" },
  LOW_LYING_AREA_FREQUENCY: {
    key: "low_lying_area_frequency",
    platform: "select",
    icon: "mdi:priority-high",
    category: "config"
  },
  SCRAPER_FREQUENCY: { key: "scraper_frequency", platform: "select", icon: "mdi:squeegee", category: "config" },
  MOP_PAD_HUMIDITY: { key: "mop_pad_humidity", platform: "select" },
  MOPPING_TYPE: { key: "mopping_type", platform: "select", icon: "mdi:spray-bottle", category: "config" },
  CUSTOM_MOPPING_ROUTE: { key: "custom_mopping_route", platform: "select" },
  WIDER_CORNER_COVERAGE: {
    key: "wider_corner_coverage",
    platform: "select",
    icon: "mdi:rounded-corner",
    category: "config"
  },
  MOP_PAD_SWING: { key: "mop_pad_swing", platform: "select", icon: "mdi:arrow-split-vertical", category: "config" },
  MOP_EXTEND_FREQUENCY: {
    key: "mop_extend_frequency",
    platform: "select",
    icon: "mdi:waves-arrow-right",
    category: "config"
  },
  SELF_CLEAN_FREQUENCY: { key: "self_clean_frequency", platform: "select" },
  AUTO_RECLEANING: { key: "auto_recleaning", platform: "select", icon: "mdi:repeat-variant" },
  AUTO_REWASHING: { key: "auto_rewashing", platform: "select" },
  CLEANING_ROUTE: { key: "cleaning_route", platform: "select" },
  BATTERY_CHARGE_LEVEL: {
    key: "battery_charge_level",
    platform: "select",
    icon: "mdi:battery-heart-variant",
    category: "config"
  },
  CLEANGENIUS: { key: "cleangenius", platform: "select", icon: "mdi:atom" },
  CLEANGENIUS_MODE: { key: "cleangenius_mode", platform: "select", icon: "mdi:atom" },
  WATER_TEMPERATURE: { key: "water_temperature", platform: "select", icon: "mdi:water-thermometer" },
  AUTO_LDS_COVERAGE: { key: "auto_lds_coverage", platform: "select", icon: "mdi:elevator", category: "config" },
  AUTO_EMPTY_MODE: { key: "auto_empty_mode", platform: "select" },
  MOP_CLEAN_FREQUENCY: { key: "mop_clean_frequency", platform: "select" },
  WASHING_MODE: { key: "washing_mode", platform: "select", icon: "mdi:water-opacity" },
  MAP_ROTATION: { key: "map_rotation", platform: "select", icon: "mdi:crop-rotate", category: "config" },
  SELECTED_MAP: { key: "selected_map", platform: "select", icon: "mdi:map-check" },
  CLEANING_TIMES: { key: "cleaning_times", platform: "select" },
  MOP_TYPE: { key: "mop_type", platform: "select", category: "config" },
  ORDER: { key: "order", platform: "select" },
  FLOOR_MATERIAL: { key: "floor_material", platform: "select" },
  FLOOR_MATERIAL_DIRECTION: { key: "floor_material_direction", platform: "select" },
  VISIBILITY: { key: "visibility", platform: "select" },
  NAME: { key: "name", platform: "select" }
}, lw = {
  RESET_MAIN_BRUSH: {
    key: "reset_main_brush",
    platform: "button",
    icon: "mdi:car-turbocharger",
    category: "diagnostic"
  },
  RESET_SIDE_BRUSH: {
    key: "reset_side_brush",
    platform: "button",
    icon: "mdi:pinwheel-outline",
    category: "diagnostic"
  },
  RESET_FILTER: { key: "reset_filter", platform: "button", icon: "mdi:air-filter", category: "diagnostic" },
  RESET_SENSOR: { key: "reset_sensor", platform: "button", icon: "mdi:radar", category: "diagnostic" },
  RESET_MOP_PAD: { key: "reset_mop_pad", platform: "button", icon: "mdi:hydro-power", category: "diagnostic" },
  RESET_SILVER_ION: { key: "reset_silver_ion", platform: "button", icon: "mdi:shimmer", category: "diagnostic" },
  RESET_DETERGENT: { key: "reset_detergent", platform: "button", icon: "mdi:chart-bubble", category: "diagnostic" },
  RESET_SQUEEGEE: { key: "reset_squeegee", platform: "button", icon: "mdi:squeegee", category: "diagnostic" },
  RESET_ONBOARD_DIRTY_WATER_TANK: {
    key: "reset_onboard_dirty_water_tank",
    platform: "button",
    icon: "mdi:train-car-tank",
    category: "diagnostic"
  },
  RESET_DIRTY_WATER_CHANNEL: {
    key: "reset_dirty_water_channel",
    platform: "button",
    icon: "mdi:cup",
    category: "diagnostic"
  },
  RESET_DEODORIZER: { key: "reset_deodorizer", platform: "button", icon: "mdi:scent", category: "diagnostic" },
  RESET_SCALE_INHIBITOR: { key: "reset_scale_inhibitor", platform: "button", icon: "mdi:pipe", category: "diagnostic" },
  RESET_WHEEL: { key: "reset_wheel", platform: "button", icon: "mdi:tire", category: "diagnostic" },
  RESET_FLUFFING_ROLLER: {
    key: "reset_fluffing_roller",
    platform: "button",
    icon: "mdi:blinds-open",
    category: "diagnostic"
  },
  RESET_ROLLER_MOP_FILTER: {
    key: "reset_roller_mop_filter",
    platform: "button",
    icon: "mdi:filter-settings",
    category: "diagnostic"
  },
  RESET_WATER_OUTLET_FILTER: {
    key: "reset_water_outlet_filter",
    platform: "button",
    icon: "mdi:filter-settings",
    category: "diagnostic"
  },
  START_AUTO_EMPTY: { key: "start_auto_empty", platform: "button" },
  CLEAR_WARNING: {
    key: "clear_warning",
    platform: "button",
    icon: "mdi:clipboard-check-outline",
    category: "diagnostic"
  },
  START_FAST_MAPPING: { key: "start_fast_mapping", platform: "button", icon: "mdi:map-plus", category: "config" },
  START_MAPPING: { key: "start_mapping", platform: "button", icon: "mdi:broom", category: "config" },
  SELF_CLEAN: { key: "self_clean", platform: "button" },
  MANUAL_DRYING: { key: "manual_drying", platform: "button" },
  MANUAL_DUST_BAG_DRYING: { key: "manual_dust_bag_drying", platform: "button" },
  WATER_TANK_DRAINING: { key: "water_tank_draining", platform: "button", icon: "mdi:pump", category: "diagnostic" },
  EMPTY_WATER_TANK: { key: "empty_water_tank", platform: "button", icon: "mdi:waves-arrow-up", category: "diagnostic" },
  BASE_STATION_SELF_REPAIR: { key: "base_station_self_repair", platform: "button", category: "diagnostic" },
  BASE_STATION_CLEANING: {
    key: "base_station_cleaning",
    platform: "button",
    icon: "mdi:car-wash",
    category: "diagnostic"
  },
  START_RECLEANING: {
    key: "start_recleaning",
    platform: "button",
    icon: "mdi:refresh-circle",
    name: "Start Re-Cleaning"
  },
  RELOAD_SHORTCUTS: {
    key: "reload_shortcuts",
    platform: "button",
    icon: "mdi:motion-play-outline",
    category: "diagnostic"
  },
  SHORTCUT: { key: "shortcut", platform: "button", icon: "mdi:play-speed" },
  BACKUP: { key: "backup", platform: "button", icon: "mdi:content-save", category: "diagnostic" }
}, jl = {
  VOLUME: { key: "volume", platform: "number" },
  MOP_CLEANING_REMAINDER: {
    key: "mop_cleaning_remainder",
    platform: "number",
    icon: "mdi:alarm-check",
    category: "config"
  },
  SELF_CLEAN_AREA: { key: "self_clean_area", platform: "number" },
  SELF_CLEAN_TIME: { key: "self_clean_time", platform: "number", icon: "mdi:table-clock" },
  CAMERA_LIGHT_BRIGHTNESS: {
    key: "camera_light_brightness",
    platform: "number",
    icon: "mdi:brightness-percent",
    category: "config"
  },
  WETNESS_LEVEL: { key: "wetness_level", platform: "number" },
  DRYING_TIME: { key: "drying_time", platform: "number", icon: "mdi:sun-clock" },
  AUTO_EMPTY_AREA: { key: "auto_empty_area", platform: "number", icon: "mdi:recycle" }
}, sw = {
  DND_START: { key: "dnd_start", platform: "time", icon: "mdi:clock-start", category: "config", name: "DnD Start" },
  DND_END: { key: "dnd_end", platform: "time", icon: "mdi:clock-end", category: "config", name: "DnD End" },
  OFF_PEAK_CHARGING_START: {
    key: "off_peak_charging_start",
    platform: "time",
    icon: "mdi:battery-lock-open",
    category: "config",
    name: "Off-Peak Charging Start"
  },
  OFF_PEAK_CHARGING_END: {
    key: "off_peak_charging_end",
    platform: "time",
    icon: "mdi:battery-lock",
    category: "config",
    name: "Off-Peak Charging End"
  }
}, cw = {
  MAP: { key: "map" }
}, da = {
  SUCTION_LEVEL: { key: "suction_level" },
  MOP_PRESSURE: { key: "mop_pressure" },
  MOP_TEMPERATURE: { key: "mop_temperature" },
  CLEANING_TIMES: { key: "cleaning_times" }
}, Tu = {
  WETNESS_LEVEL: { key: "wetness_level" }
}, wp = {
  VACUUM_RESET_CONSUMABLE: { key: "vacuum_reset_consumable", domain: "dreame_vacuum" }
}, kg = {
  AI_DETECTION: "ai_detection",
  AUTO_ADD_DETERGENT: "auto_add_detergent",
  AUTO_EMPTY_BASE: "auto_empty_base",
  AUTO_EMPTY_MODE: "auto_empty_mode",
  AUTO_REWASHING: "auto_rewashing",
  CARPET_RECOGNITION: "carpet_recognition",
  CLEANGENIUS: "cleangenius",
  CLEANING_ROUTE: "cleaning_route",
  DND: "dnd",
  DND_FUNCTIONS: "dnd_functions",
  HOT_WASHING: "hot_washing",
  LOW_LYING_AREA_FREQUENCY: "low_lying_area_frequency",
  MAX_SUCTION_POWER: "max_suction_power",
  MOP_PAD_LIFTING: "mop_pad_lifting",
  MOP_PAD_SWING: "mop_pad_swing",
  MOP_PAD_SWING_PLUS: "mop_pad_swing_plus",
  OFF_PEAK_CHARGING: "off_peak_charging",
  SCRAPER_FREQUENCY: "scraper_frequency",
  SELF_CLEAN_FREQUENCY: "self_clean_frequency",
  SELF_WASH_BASE: "self_wash_base",
  SHORTCUTS: "shortcuts",
  SIDE_REACH: "side_reach",
  SMART_MOP_WASHING: "smart_mop_washing",
  STATION_CLEANING: "station_cleaning",
  VOICE_ASSISTANT: "voice_assistant",
  WASHING_MODE: "washing_mode",
  WETNESS_LEVEL: "wetness_level"
};
function ht(a, i, o) {
  return `${a}.${i}_${o}`;
}
function Mt(a, i, o, l) {
  return `${a}.${i}_room_${o}_${l}`;
}
function se(a, i, o, l) {
  return {
    key: qu[a].key,
    platform: "switch",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function Ot(a, i, o, l) {
  return {
    key: Na[a].key,
    platform: "select",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function Tg(a, i, o, l) {
  return {
    key: jl[a].key,
    platform: "number",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function _a(a, i, o, l) {
  return {
    key: lw[a].key,
    platform: "button",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function Gl(a, i, o, l) {
  return {
    key: sw[a].key,
    platform: "time",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
const me = kg, Ag = {
  key: "quick_settings",
  titleKey: "settings.quick_settings.title",
  order: 1,
  entities: [
    se("CHILD_LOCK", "settings.quick_settings.child_lock", "settings.quick_settings.child_lock_desc"),
    se("RESUME_CLEANING", "settings.quick_settings.resume_cleaning", "settings.quick_settings.resume_cleaning_desc"),
    se("DND", "settings.quick_settings.dnd", "settings.quick_settings.dnd_desc", { capability: me.DND }),
    Gl("DND_START", "settings.quick_settings.dnd_start", void 0, {
      capability: me.DND,
      parentKey: "dnd"
    }),
    Gl("DND_END", "settings.quick_settings.dnd_end", void 0, {
      capability: me.DND,
      parentKey: "dnd"
    }),
    se(
      "DND_DISABLE_RESUME_CLEANING",
      "settings.quick_settings.dnd_disable_resume",
      "settings.quick_settings.dnd_disable_resume_desc",
      {
        capability: me.DND_FUNCTIONS,
        parentKey: "dnd"
      }
    ),
    se(
      "DND_DISABLE_AUTO_EMPTY",
      "settings.quick_settings.dnd_disable_auto_empty",
      "settings.quick_settings.dnd_disable_auto_empty_desc",
      {
        capability: me.DND_FUNCTIONS,
        parentKey: "dnd"
      }
    ),
    se(
      "DND_REDUCE_VOLUME",
      "settings.quick_settings.dnd_reduce_volume",
      "settings.quick_settings.dnd_reduce_volume_desc",
      {
        capability: me.DND_FUNCTIONS,
        parentKey: "dnd"
      }
    )
  ]
}, Ng = {
  key: "quick_actions",
  titleKey: "settings.station_controls.title",
  order: 2,
  entities: [
    _a("SELF_CLEAN", "settings.station_controls.self_clean", "settings.station_controls.self_clean_desc"),
    _a("MANUAL_DRYING", "settings.station_controls.manual_drying", "settings.station_controls.manual_drying_desc"),
    _a(
      "WATER_TANK_DRAINING",
      "settings.station_controls.water_tank_draining",
      "settings.station_controls.water_tank_draining_desc"
    ),
    _a(
      "BASE_STATION_CLEANING",
      "settings.station_controls.base_station_cleaning",
      "settings.station_controls.base_station_cleaning_desc"
    ),
    _a(
      "EMPTY_WATER_TANK",
      "settings.station_controls.empty_water_tank",
      "settings.station_controls.empty_water_tank_desc"
    ),
    _a(
      "START_AUTO_EMPTY",
      "settings.station_controls.start_auto_empty",
      "settings.station_controls.start_auto_empty_desc"
    ),
    _a(
      "START_RECLEANING",
      "settings.station_controls.start_recleaning",
      "settings.station_controls.start_recleaning_desc"
    ),
    _a("CLEAR_WARNING", "settings.station_controls.clear_warning", "settings.station_controls.clear_warning_desc")
  ]
}, Cg = {
  key: "carpet_settings",
  titleKey: "settings.carpet.title",
  order: 3,
  capabilities: [me.CARPET_RECOGNITION],
  entities: [
    se("CARPET_RECOGNITION", "settings.carpet.carpet_recognition", "settings.carpet.carpet_recognition_desc"),
    se("CARPET_AVOIDANCE", "settings.carpet.carpet_avoidance", "settings.carpet.carpet_avoidance_desc"),
    Ot("CARPET_CLEANING", "settings.carpet.cleaning_mode", "settings.carpet.cleaning_mode_desc"),
    se("CLEAN_CARPETS_FIRST", "settings.carpet.clean_carpets_first", "settings.carpet.clean_carpets_first_desc"),
    se("CARPET_BOOST", "settings.carpet.carpet_boost", "settings.carpet.carpet_boost_desc"),
    se("INTENSIVE_CARPET_CLEANING", "settings.carpet.intensive_cleaning", "settings.carpet.intensive_cleaning_desc"),
    se("SIDE_BRUSH_CARPET_ROTATE", "settings.carpet.side_brush_rotate", "settings.carpet.side_brush_rotate_desc"),
    Ot("CARPET_SENSITIVITY", "settings.carpet.sensitivity", "settings.carpet.sensitivity_desc")
  ]
}, xg = {
  key: "floor_settings",
  titleKey: "settings.floor.title",
  order: 4,
  entities: [
    se("OBSTACLE_AVOIDANCE", "settings.floor.obstacle_avoidance", "settings.floor.obstacle_avoidance_desc"),
    se("COLLISION_AVOIDANCE", "settings.floor.collision_avoidance", "settings.floor.collision_avoidance_desc"),
    se("AUTO_MOUNT_MOP", "settings.floor.auto_mount_mop", "settings.floor.auto_mount_mop_desc"),
    se("TIGHT_MOPPING", "settings.floor.tight_mopping", "settings.floor.tight_mopping_desc"),
    se("STAIN_AVOIDANCE", "settings.floor.stain_avoidance", "settings.floor.stain_avoidance_desc"),
    se(
      "FLOOR_DIRECTION_CLEANING",
      "settings.floor.floor_direction_cleaning",
      "settings.floor.floor_direction_cleaning_desc"
    ),
    se("LARGE_PARTICLES_BOOST", "settings.floor.large_particles_boost", "settings.floor.large_particles_boost_desc"),
    se("PET_FOCUSED_CLEANING", "settings.floor.pet_focused_cleaning", "settings.floor.pet_focused_cleaning_desc"),
    Ot("AUTO_RECLEANING", "settings.floor.auto_recleaning", "settings.floor.auto_recleaning_desc"),
    Ot(
      "LOW_LYING_AREA_FREQUENCY",
      "settings.floor.low_lying_area_frequency",
      "settings.floor.low_lying_area_frequency_desc",
      {
        capability: me.LOW_LYING_AREA_FREQUENCY
      }
    )
  ]
}, Mg = {
  key: "edge_corner",
  titleKey: "settings.edge_corner.title",
  order: 5,
  capabilities: [me.MOP_PAD_LIFTING, me.SIDE_REACH, me.MOP_PAD_SWING, me.MOP_PAD_SWING_PLUS],
  entities: [
    se("SIDE_REACH", "settings.edge_corner.side_reach", "settings.edge_corner.side_reach_desc", {
      capability: me.SIDE_REACH
    }),
    se("MOP_EXTEND", "settings.edge_corner.mop_extend", "settings.edge_corner.mop_extend_desc"),
    se("GAP_CLEANING_EXTENSION", "settings.edge_corner.gap_cleaning", "settings.edge_corner.gap_cleaning_desc", {
      parentKey: "mop_extend"
    }),
    se("MOPPING_UNDER_FURNITURES", "settings.edge_corner.mopping_under", "settings.edge_corner.mopping_under_desc", {
      parentKey: "mop_extend"
    }),
    Ot("MOP_EXTEND_FREQUENCY", "settings.edge_corner.extend_frequency", "settings.edge_corner.extend_frequency_desc")
  ]
}, Og = {
  key: "volume",
  titleKey: "settings.volume.title",
  order: 6,
  entities: [
    Tg("VOLUME", "settings.volume.volume", void 0, { renderHint: "volume", min: 0, max: 100 }),
    se("VOICE_ASSISTANT", "settings.volume.voice_assistant", "settings.volume.voice_assistant_desc", {
      capability: me.VOICE_ASSISTANT
    }),
    Ot("VOICE_ASSISTANT_LANGUAGE", "settings.volume.voice_language", "settings.volume.voice_language_desc", {
      capability: me.VOICE_ASSISTANT,
      parentKey: "voice_assistant"
    }),
    se(
      "STREAMING_VOICE_PROMPT",
      "settings.volume.streaming_voice_prompt",
      "settings.volume.streaming_voice_prompt_desc"
    )
  ]
}, Rg = {
  key: "dock_settings",
  titleKey: "settings.dock.title",
  order: 7,
  capabilities: [
    me.AUTO_EMPTY_BASE,
    me.SELF_WASH_BASE,
    me.AUTO_ADD_DETERGENT,
    me.SMART_MOP_WASHING,
    me.WASHING_MODE,
    me.HOT_WASHING,
    me.OFF_PEAK_CHARGING,
    me.STATION_CLEANING,
    me.AUTO_REWASHING
  ],
  entities: [
    se("SELF_CLEAN", "settings.dock.self_clean", "settings.dock.self_clean_desc", { capability: me.SELF_WASH_BASE }),
    se("AUTO_DUST_COLLECTING", "settings.dock.auto_dust_collecting", "settings.dock.auto_dust_collecting_desc", {
      capability: me.AUTO_EMPTY_BASE
    }),
    Ot("AUTO_EMPTY_MODE", "settings.dock.auto_empty_mode", "settings.dock.auto_empty_mode_desc", {
      capability: me.AUTO_EMPTY_MODE
    }),
    Ot("AUTO_EMPTY_FREQUENCY", "settings.dock.auto_empty_frequency", "settings.dock.auto_empty_frequency_desc", {
      capability: me.AUTO_EMPTY_BASE
    }),
    se("AUTO_ADD_DETERGENT", "settings.dock.auto_detergent", "settings.dock.auto_detergent_desc", {
      capability: me.AUTO_ADD_DETERGENT
    }),
    se(
      "MOP_WASHING_WITH_DETERGENT",
      "settings.dock.mop_washing_with_detergent",
      "settings.dock.mop_washing_with_detergent_desc",
      {
        capability: me.AUTO_ADD_DETERGENT
      }
    ),
    se("MOPPING_WITH_DETERGENT", "settings.dock.mopping_with_detergent", "settings.dock.mopping_with_detergent_desc"),
    se("WATER_ELECTROLYSIS", "settings.dock.water_electrolysis", "settings.dock.water_electrolysis_desc", {
      capability: me.SELF_WASH_BASE
    }),
    se("AUTO_WATER_REFILLING", "settings.dock.auto_water_refilling", "settings.dock.auto_water_refilling_desc"),
    se("SMART_MOP_WASHING", "settings.dock.smart_washing", "settings.dock.smart_washing_desc", {
      capability: me.SMART_MOP_WASHING
    }),
    Ot("MOP_WASH_LEVEL", "settings.dock.mop_wash_level", "settings.dock.mop_wash_level_desc", {
      capability: me.SELF_WASH_BASE
    }),
    Ot("WASHING_MODE", "settings.dock.washing_mode", "settings.dock.washing_mode_desc", {
      capability: me.WASHING_MODE
    }),
    Ot("WATER_TEMPERATURE", "settings.dock.water_temperature", "settings.dock.water_temperature_desc", {
      capability: me.HOT_WASHING
    }),
    se("AUTO_DRYING", "settings.dock.auto_drying", "settings.dock.auto_drying_desc", {
      capability: me.SELF_WASH_BASE
    }),
    Ot("DRYING_TIME", "settings.dock.drying_time", "settings.dock.drying_time_desc", {
      capability: me.SELF_WASH_BASE,
      useSegmentedControl: !0
    }),
    Ot("AUTO_REWASHING", "settings.dock.auto_rewashing", "settings.dock.auto_rewashing_desc", {
      capability: me.AUTO_REWASHING
    }),
    se("OFF_PEAK_CHARGING", "settings.dock.off_peak_charging", "settings.dock.off_peak_charging_desc", {
      capability: me.OFF_PEAK_CHARGING
    }),
    Gl("OFF_PEAK_CHARGING_START", "settings.dock.off_peak_charging_start", void 0, {
      capability: me.OFF_PEAK_CHARGING,
      parentKey: "off_peak_charging"
    }),
    Gl("OFF_PEAK_CHARGING_END", "settings.dock.off_peak_charging_end", void 0, {
      capability: me.OFF_PEAK_CHARGING,
      parentKey: "off_peak_charging"
    }),
    _a("BASE_STATION_CLEANING", "settings.dock.station_cleaning", "settings.dock.station_cleaning_desc", {
      capability: me.STATION_CLEANING
    }),
    _a("BASE_STATION_SELF_REPAIR", "settings.dock.self_repair", "settings.dock.self_repair_desc", {
      capability: me.STATION_CLEANING
    }),
    Ot("SCRAPER_FREQUENCY", "settings.dock.scraper_frequency", "settings.dock.scraper_frequency_desc", {
      capability: me.SCRAPER_FREQUENCY
    })
  ]
}, Dg = {
  key: "ai_detection",
  titleKey: "settings.ai_detection.title",
  order: 8,
  capabilities: [me.AI_DETECTION],
  entities: [
    se(
      "INTELLIGENT_RECOGNITION",
      "settings.ai_detection.intelligent_recognition",
      "settings.ai_detection.intelligent_recognition_desc"
    ),
    se(
      "AI_OBSTACLE_DETECTION",
      "settings.ai_detection.ai_obstacle_detection",
      "settings.ai_detection.ai_obstacle_detection_desc"
    ),
    se(
      "FUZZY_OBSTACLE_DETECTION",
      "settings.ai_detection.fuzzy_obstacle_detection",
      "settings.ai_detection.fuzzy_obstacle_detection_desc"
    ),
    se(
      "AI_OBSTACLE_IMAGE_UPLOAD",
      "settings.ai_detection.ai_obstacle_image_upload",
      "settings.ai_detection.ai_obstacle_image_upload_desc"
    ),
    se(
      "AI_OBSTACLE_PICTURE",
      "settings.ai_detection.ai_obstacle_picture",
      "settings.ai_detection.ai_obstacle_picture_desc"
    ),
    se("AI_PET_DETECTION", "settings.ai_detection.ai_pet_detection", "settings.ai_detection.ai_pet_detection_desc"),
    se("AI_PET_AVOIDANCE", "settings.ai_detection.ai_pet_avoidance", "settings.ai_detection.ai_pet_avoidance_desc"),
    se(
      "PET_FOCUSED_DETECTION",
      "settings.ai_detection.pet_focused_detection",
      "settings.ai_detection.pet_focused_detection_desc"
    ),
    se("PET_PICTURE", "settings.ai_detection.pet_picture", "settings.ai_detection.pet_picture_desc"),
    se(
      "AI_HUMAN_DETECTION",
      "settings.ai_detection.ai_human_detection",
      "settings.ai_detection.ai_human_detection_desc"
    ),
    se("HUMAN_FOLLOW", "settings.ai_detection.human_follow", "settings.ai_detection.human_follow_desc"),
    se(
      "AI_FURNITURE_DETECTION",
      "settings.ai_detection.ai_furniture_detection",
      "settings.ai_detection.ai_furniture_detection_desc"
    ),
    se(
      "AI_FLUID_DETECTION",
      "settings.ai_detection.ai_fluid_detection",
      "settings.ai_detection.ai_fluid_detection_desc"
    ),
    se("FILL_LIGHT", "settings.ai_detection.fill_light", "settings.ai_detection.fill_light_desc"),
    se(
      "CAMERA_LIGHT_BRIGHTNESS_AUTO",
      "settings.ai_detection.camera_light_auto",
      "settings.ai_detection.camera_light_auto_desc"
    ),
    Tg(
      "CAMERA_LIGHT_BRIGHTNESS",
      "settings.ai_detection.camera_light_brightness",
      "settings.ai_detection.camera_light_brightness_desc",
      {
        renderHint: "brightness",
        parentKey: "camera_light_brightness_auto"
        // Show only when auto is OFF (inverted logic handled in component)
      }
    )
  ]
}, jg = {
  key: "map_settings",
  titleKey: "settings.map.title",
  order: 9,
  entities: [
    se("MULTI_FLOOR_MAP", "settings.map.multi_floor", "settings.map.multi_floor_desc"),
    Ot("MAP_ROTATION", "settings.map.rotation", "settings.map.rotation_desc"),
    _a("START_MAPPING", "settings.map.start_mapping"),
    _a("START_FAST_MAPPING", "settings.map.start_fast_mapping")
  ]
};
[
  Ag,
  Ng,
  Cg,
  xg,
  Mg,
  Og,
  Rg,
  Dg,
  jg
].sort((a, i) => a.order - i.order);
const uw = /* @__PURE__ */ h.jsx(Gb, {}), dw = /* @__PURE__ */ h.jsx(jb, {}), _w = /* @__PURE__ */ h.jsx(Ub, {}), mw = /* @__PURE__ */ h.jsx(Rb, {}), fw = /* @__PURE__ */ h.jsx(r0, {}), pw = /* @__PURE__ */ h.jsx(zg, {}), gw = /* @__PURE__ */ h.jsx(A0, {}), hw = /* @__PURE__ */ h.jsx(k0, {}), vw = /* @__PURE__ */ h.jsx($0, {}), yw = /* @__PURE__ */ h.jsx(w0, {}), bw = /* @__PURE__ */ h.jsx(E0, {}), ww = /* @__PURE__ */ h.jsx(Ib, {}), Sw = /* @__PURE__ */ h.jsx(Xb, {}), Lg = /* @__PURE__ */ h.jsx(Lu, {}), Ug = /* @__PURE__ */ h.jsx(Kl, {}), Hl = /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
  /* @__PURE__ */ h.jsx(Lu, {}),
  /* @__PURE__ */ h.jsx(Eg, {}),
  /* @__PURE__ */ h.jsx(Kl, {})
] }), Gu = /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
  /* @__PURE__ */ h.jsx(Lu, {}),
  /* @__PURE__ */ h.jsx(xb, {}),
  /* @__PURE__ */ h.jsx(Kl, {})
] }), Au = /* @__PURE__ */ h.jsx(B0, {}), Hu = /* @__PURE__ */ h.jsx(Z0, {}), qg = /* @__PURE__ */ h.jsx(I0, {}), Nu = /* @__PURE__ */ h.jsx(K0, {}), Ew = /* @__PURE__ */ h.jsx(zg, {}), zw = /* @__PURE__ */ h.jsx(ew, {}), kw = /* @__PURE__ */ h.jsx(i0, {}), Tw = /* @__PURE__ */ h.jsx(rw, {}), Aw = /* @__PURE__ */ h.jsx(O0, {}), Nw = /* @__PURE__ */ h.jsx(G0, {}), Cw = /* @__PURE__ */ h.jsx(iw, {}), Gg = /* @__PURE__ */ h.jsx(F0, {}), Hg = /* @__PURE__ */ h.jsx(Kl, {}), Sp = {
  // Idle states
  idle: "idle",
  charging: "idle",
  charging_completed: "idle",
  // Cleaning states
  sweeping: "cleaning",
  mopping: "cleaning",
  sweeping_and_mopping: "cleaning",
  second_cleaning: "cleaning",
  spot_cleaning: "cleaning",
  extra_cleaning: "cleaning",
  initial_deep_cleaning: "cleaning",
  floor_maintaining: "cleaning",
  // Paused states
  paused: "paused",
  washing_paused: "paused",
  monitoring_paused: "paused",
  dust_bag_drying_paused: "paused",
  finding_pet_paused: "paused",
  initial_deep_cleaning_paused: "paused",
  changing_mop_paused: "paused",
  floor_maintaining_paused: "paused",
  // Returning states
  returning: "returning",
  returning_to_wash: "returning",
  returning_install_mop: "returning",
  returning_remove_mop: "returning",
  returning_auto_empty: "returning",
  returning_to_drain: "returning",
  heading_to_extra_cleaning: "returning",
  // Maintenance states
  washing: "maintenance",
  drying: "maintenance",
  auto_emptying: "maintenance",
  station_cleaning: "maintenance",
  draining: "maintenance",
  auto_water_draining: "maintenance",
  emptying: "maintenance",
  dust_bag_drying: "maintenance",
  water_check: "maintenance",
  clean_add_water: "maintenance",
  sanitizing: "maintenance",
  sanitizing_with_dry: "maintenance",
  changing_mop: "maintenance",
  // Error state
  error: "error",
  // Other states
  unknown: "other",
  building: "other",
  upgrading: "other",
  remote_control: "other",
  monitoring: "other",
  shortcut: "other",
  human_following: "other",
  finding_pet: "other",
  waiting_for_task: "other",
  smart_charging: "other",
  station_reset: "other",
  clean_summon: "other"
}, Ep = {
  sweeping: "vacuuming",
  spot_cleaning: "vacuuming",
  mopping: "mopping",
  second_cleaning: "mopping",
  // Mopping phase of "mop after vac"
  sweeping_and_mopping: "vacuuming_and_mopping",
  extra_cleaning: "vacuuming",
  initial_deep_cleaning: "vacuuming_and_mopping",
  floor_maintaining: "mopping"
}, zp = {
  cleaning: "cleaning",
  docked: "idle",
  idle: "idle",
  paused: "paused",
  returning: "returning",
  error: "error"
}, xw = "idle", Mw = "none", at = kg, Ow = {
  WETNESS: {
    MIN: 1,
    MAX: 32
  }
}, ai = {
  SELECT: "select",
  SWITCH: "switch",
  NUMBER: "number",
  VACUUM: "vacuum",
  DREAME_VACUUM: "dreame_vacuum"
}, Tn = {
  SELECT_OPTION: "select_option",
  TURN_ON: "turn_on",
  TURN_OFF: "turn_off",
  SET_VALUE: "set_value",
  START: "start",
  RETURN_TO_BASE: "return_to_base",
  VACUUM_CLEAN_SEGMENT: "vacuum_clean_segment",
  SET_FAN_SPEED: "set_fan_speed"
}, he = {
  SWEEPING: "Sweeping",
  MOPPING: "Mopping",
  SWEEPING_AND_MOPPING: "Sweeping and mopping",
  MOPPING_AFTER_SWEEPING: "Mopping after sweeping",
  CUSTOMIZE: "Customize"
}, Ea = {
  VACUUM_AND_MOP: "Vacuum and mop",
  MOP_AFTER_VACUUM: "Mop after vacuum"
}, Ca = {
  OFF: "Off",
  ROUTINE_CLEANING: "Routine cleaning",
  DEEP_CLEANING: "Deep cleaning"
}, Jt = {
  CLEANING_MODE: {
    SWEEPING: "sweeping",
    MOPPING: "mopping",
    SWEEPING_AND_MOPPING: "sweeping_and_mopping",
    MOPPING_AFTER_SWEEPING: "mopping_after_sweeping",
    CUSTOMIZE: "customize"
  },
  CLEANGENIUS_MODE: {
    VACUUM_AND_MOP: "vacuum_and_mop",
    MOP_AFTER_VACUUM: "mop_after_vacuum"
  },
  CLEANGENIUS: {
    OFF: "off",
    ROUTINE_CLEANING: "routine_cleaning",
    DEEP_CLEANING: "deep_cleaning"
  },
  SELF_CLEAN_FREQUENCY: {
    BY_AREA: "by_area",
    BY_TIME: "by_time",
    BY_ROOM: "by_room"
  }
}, ri = {
  BY_AREA: "By area",
  BY_TIME: "By time",
  BY_ROOM: "By room"
}, $i = {
  QUIET: "Quiet",
  SILENT: "Silent",
  STANDARD: "Standard",
  STRONG: "Strong",
  TURBO: "Turbo"
}, ii = {
  QUICK: "Quick",
  STANDARD: "Standard",
  INTENSIVE: "Intensive",
  DEEP: "Deep"
}, li = {
  SLIGHTLY_DRY: "Slightly dry",
  MOIST: "Moist",
  WET: "Wet"
}, Ll = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High"
}, Rw = {
  ALL: "all"
}, Jo = {
  CLEANGENIUS: "CleanGenius",
  CUSTOM: "Custom"
}, kp = {
  MAP_LOCKED: "dreame-vacuum-map-locked",
  CUSTOMIZE_CONFIG: "dreame-vacuum-card:customize_config"
}, Et = {
  MODE: Rw.ALL,
  CLEANING_MODE: he.SWEEPING_AND_MOPPING,
  CLEANGENIUS_MODE: Ea.VACUUM_AND_MOP,
  SUCTION_LEVEL: $i.STANDARD,
  WETNESS_LEVEL: 20,
  CLEANING_ROUTE: ii.STANDARD,
  MAX_SUCTION_POWER: !1,
  SELF_CLEAN_AREA: 20,
  SELF_CLEAN_FREQUENCY: ri.BY_AREA,
  MOP_PAD_HUMIDITY: li.MOIST,
  WATER_VOLUME: Ll.MEDIUM,
  SELF_CLEAN_AREA_MIN: 10,
  SELF_CLEAN_AREA_MAX: 35,
  SELF_CLEAN_TIME: 25,
  SELF_CLEAN_TIME_MIN: 10,
  SELF_CLEAN_TIME_MAX: 50
};
let vu = !1;
const te = {
  /** Enable or disable debug logging */
  setDebug: (a) => {
    vu = a;
  },
  /** Check if debug logging is enabled */
  isDebugEnabled: () => vu,
  /** Log debug message (only when debug is enabled) */
  debug: (a, ...i) => {
    vu && console.debug(`[Dreame][${a}]`, ...i);
  },
  /** Log info message (always logged) */
  info: (...a) => {
    console.info("[Dreame]", ...a);
  },
  /** Log warning message (always logged) */
  warn: (...a) => {
    console.warn("[Dreame]", ...a);
  },
  /** Log error message (always logged) */
  error: (...a) => {
    console.error("[Dreame]", ...a);
  }
};
function Dw() {
  const a = {
    enableDebug: () => {
      te.setDebug(!0), te.info("Debug logging enabled");
    },
    disableDebug: () => {
      te.setDebug(!1), te.info("Debug logging disabled");
    },
    isDebugEnabled: () => te.isDebugEnabled()
  };
  window.dreameVacuum = a;
}
function Iu(a) {
  const i = D.useCallback(
    (f, v, y) => {
      te.debug("HA", "Service call:", f, v, y), a.callService(f, v, y);
    },
    [a]
  ), o = D.useCallback(
    (f, v) => {
      te.debug("HA", "Select:", f, "→", v);
      const y = {
        entity_id: f,
        option: v
      };
      i(ai.SELECT, Tn.SELECT_OPTION, y);
    },
    [i]
  ), l = D.useCallback(
    (f, v) => {
      te.debug("HA", "Switch:", f, "→", v ? "ON" : "OFF");
      const y = v ? Tn.TURN_ON : Tn.TURN_OFF;
      i(ai.SWITCH, y, { entity_id: f });
    },
    [i]
  ), c = D.useCallback(
    (f, v) => {
      te.debug("HA", "Number:", f, "→", v);
      const y = {
        entity_id: f,
        value: v
      };
      i(ai.NUMBER, Tn.SET_VALUE, y);
    },
    [i]
  ), d = D.useCallback(
    (f) => {
      te.debug("HA", "Vacuum Start:", f), i(ai.VACUUM, Tn.START, { entity_id: f });
    },
    [i]
  ), _ = D.useCallback(
    (f) => {
      te.debug("HA", "Vacuum Return to base:", f), i(ai.VACUUM, Tn.RETURN_TO_BASE, { entity_id: f });
    },
    [i]
  ), m = D.useCallback(
    (f, v) => {
      te.debug("HA", "Vacuum Clean segments:", f, v);
      const y = {
        entity_id: f,
        segments: v
      };
      i(ai.DREAME_VACUUM, Tn.VACUUM_CLEAN_SEGMENT, y);
    },
    [i]
  ), g = D.useCallback(
    (f, v) => {
      te.debug("HA", "Vacuum Set fan speed:", f, "→", v), i(ai.VACUUM, Tn.SET_FAN_SPEED, {
        entity_id: f,
        fan_speed: v
      });
    },
    [i]
  );
  return {
    setSelectOption: o,
    setSwitch: l,
    setNumber: c,
    startVacuum: d,
    returnToBase: _,
    cleanSegments: m,
    setFanSpeed: g,
    callService: i
  };
}
function jw(a) {
  switch (a) {
    case he.SWEEPING:
      return Jt.CLEANING_MODE.SWEEPING;
    case he.MOPPING:
      return Jt.CLEANING_MODE.MOPPING;
    case he.SWEEPING_AND_MOPPING:
      return Jt.CLEANING_MODE.SWEEPING_AND_MOPPING;
    case he.MOPPING_AFTER_SWEEPING:
      return Jt.CLEANING_MODE.MOPPING_AFTER_SWEEPING;
    case he.CUSTOMIZE:
      return Jt.CLEANING_MODE.CUSTOMIZE;
    default:
      return a;
  }
}
function Lw(a) {
  switch (a) {
    case Ea.VACUUM_AND_MOP:
      return Jt.CLEANGENIUS_MODE.VACUUM_AND_MOP;
    case Ea.MOP_AFTER_VACUUM:
      return Jt.CLEANGENIUS_MODE.MOP_AFTER_VACUUM;
    default:
      return a;
  }
}
function Ig(a) {
  switch (a) {
    case Ca.OFF:
      return Jt.CLEANGENIUS.OFF;
    case Ca.ROUTINE_CLEANING:
      return Jt.CLEANGENIUS.ROUTINE_CLEANING;
    case Ca.DEEP_CLEANING:
      return Jt.CLEANGENIUS.DEEP_CLEANING;
    default:
      return a;
  }
}
function Uw(a) {
  switch (a) {
    case ri.BY_AREA:
      return Jt.SELF_CLEAN_FREQUENCY.BY_AREA;
    case ri.BY_TIME:
      return Jt.SELF_CLEAN_FREQUENCY.BY_TIME;
    case ri.BY_ROOM:
      return Jt.SELF_CLEAN_FREQUENCY.BY_ROOM;
    default:
      return a;
  }
}
function or(a) {
  return a.toLowerCase();
}
function Pu(a) {
  return a.replace("vacuum.", "");
}
function Bu(a) {
  return D.useMemo(() => {
    const i = Pu(a);
    return {
      base: i,
      cleaningMode: ht("select", i, Na.CLEANING_MODE.key),
      cleangeniusMode: ht("select", i, Na.CLEANGENIUS_MODE.key),
      cleangenius: ht("select", i, Na.CLEANGENIUS.key),
      suctionLevel: ht("select", i, Na.SUCTION_LEVEL.key),
      waterVolume: ht("select", i, Na.WATER_VOLUME.key),
      mopPadHumidity: ht("select", i, Na.MOP_PAD_HUMIDITY.key),
      cleaningRoute: ht("select", i, Na.CLEANING_ROUTE.key),
      maxSuctionPower: ht("switch", i, qu.MAX_SUCTION_POWER.key),
      wetnessLevel: ht("number", i, jl.WETNESS_LEVEL.key),
      selfCleanFrequency: ht("select", i, Na.SELF_CLEAN_FREQUENCY.key),
      selfCleanArea: ht("number", i, jl.SELF_CLEAN_AREA.key),
      selfCleanTime: ht("number", i, jl.SELF_CLEAN_TIME.key),
      stateSensor: ht("sensor", i, Te.STATE.key)
    };
  }, [a]);
}
const Yu = "dreame-vacuum-card:repeat_count";
function qw() {
  try {
    const a = localStorage.getItem(Yu);
    if (a) {
      const i = parseInt(a, 10);
      if (i >= 1 && i <= 3)
        return i;
    }
  } catch {
  }
  return 1;
}
function Gw(a) {
  try {
    localStorage.setItem(Yu, String(a));
  } catch {
  }
}
function Hw() {
  try {
    localStorage.removeItem(Yu);
  } catch {
  }
}
function Iw({ defaultMode: a = Et.MODE } = {}) {
  const [i, o] = D.useState(a), [l, c] = D.useState(/* @__PURE__ */ new Map()), [d, _] = D.useState(null), [m, g] = D.useState(!1), [f, v] = D.useState(!1), [y, w] = D.useState(!1), [E, T] = D.useState(qw), N = D.useCallback((Z) => {
    te.debug("UI", "Mode changed:", Z), o(Z), c(/* @__PURE__ */ new Map()), _(null);
  }, []), L = D.useCallback((Z, W) => {
    c((ae) => {
      const re = new Map(ae);
      return ae.has(Z) ? (te.debug("UI", "Room deselected:", { roomId: Z, roomName: W }), re.delete(Z)) : (te.debug("UI", "Room selected:", { roomId: Z, roomName: W }), re.set(Z, W)), re;
    });
  }, []), R = D.useCallback((Z) => {
    te.debug("UI", "Cleaning mode modal:", Z ? "opened" : "closed"), g(Z);
  }, []), U = D.useCallback((Z) => {
    te.debug("UI", "Shortcuts modal:", Z ? "opened" : "closed"), v(Z);
  }, []), Y = D.useCallback((Z) => {
    te.debug("UI", "Settings panel:", Z ? "opened" : "closed"), w(Z);
  }, []), P = D.useCallback((Z) => {
    te.debug("UI", "Zone changed:", Z), _(Z);
  }, []), H = D.useCallback(() => {
    T((Z) => {
      const W = Z % 3 + 1;
      return Gw(W), te.debug("UI", "Repeat count cycled to", W), W;
    });
  }, []), F = D.useCallback(() => {
    T(1), Hw(), te.debug("UI", "Repeat count reset to 1");
  }, []);
  return {
    selectedMode: i,
    selectedRooms: l,
    selectedZone: d,
    modalOpened: m,
    shortcutsModalOpened: f,
    settingsPanelOpened: y,
    repeatCount: E,
    setSelectedMode: o,
    setSelectedRooms: c,
    setSelectedZone: P,
    setModalOpened: R,
    setShortcutsModalOpened: U,
    setSettingsPanelOpened: Y,
    handleModeChange: N,
    handleRoomToggle: L,
    cycleRepeatCount: H,
    resetRepeatCount: F
  };
}
const Pw = {
  // Common
  common: {
    run: "Run",
    start: "Start",
    stop: "Stop",
    cancel: "Cancel",
    save: "Save",
    apply: "Apply",
    reset: "Reset"
  },
  // Room Selector
  room_selector: {
    title: "Select Rooms",
    selected_count: "{{count}} selected"
  },
  // Map Selector
  map_selector: {
    unknown: "Unknown Map"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "No map available",
    looking_for: "Looking for: {{entity}}",
    room_overlay: "Click on room numbers to select rooms for cleaning",
    zone_overlay_create: "Click on the map to place a cleaning zone",
    zone_overlay_resize: "Drag corners to resize, click elsewhere to reposition",
    clear_zone: "Clear zone",
    switch_to_list: "Switch to list view",
    switch_to_map: "Switch to map view",
    room_list_overlay: "Tap rooms to select for cleaning",
    no_rooms: "No rooms available",
    zoom_in: "Zoom in",
    zoom_out: "Zoom out",
    zoom_reset: "Reset zoom",
    lock_map: "Lock map",
    unlock_map: "Unlock map"
  },
  // Mode Tabs
  modes: {
    room: "Room",
    all: "All",
    zone: "Zone"
  },
  // Action Buttons
  actions: {
    clean: "Clean",
    clean_all: "Clean All",
    clean_rooms: "Clean {{count}} Room",
    clean_rooms_plural: "Clean {{count}} Rooms",
    select_rooms: "Select Rooms",
    zone_clean: "Zone Clean",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    stop_and_dock: "Stop & Dock",
    dock: "Dock"
  },
  // Toast Messages
  toast: {
    selected_room: "Selected {{name}}",
    deselected_room: "Deselected {{name}}",
    paused: "Paused cleaning",
    stopped: "Stopped cleaning",
    docked: "Returning to dock",
    cleaning_started: "Cleaning started",
    resuming: "Resuming cleaning",
    starting_full_clean: "Starting full house cleaning",
    pausing_vacuum: "Pausing vacuum",
    stopping_vacuum: "Stopping vacuum",
    stopping_and_docking: "Stopping and returning to dock",
    vacuum_docking: "Vacuum returning to dock",
    starting_room_clean: "Starting cleaning for {{count}} selected room",
    starting_room_clean_plural: "Starting cleaning for {{count}} selected rooms",
    starting_zone_clean: "Starting zone cleaning",
    select_rooms_first: "Please select rooms to clean first",
    cannot_determine_map: "Cannot determine map dimensions",
    select_zone_first: "Please select a zone on the map"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Selected Rooms:",
    selected_label: "Selected:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Custom: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "View shortcuts",
    repeats_tooltip: "Cleaning passes",
    vac_and_mop: "Vac & Mop",
    mop_after_vac: "Mop after Vac",
    vacuum: "Vacuum",
    mop: "Mop"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Cleaning Mode",
    clean_genius: "CleanGenius",
    custom: "Custom"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Shortcuts",
    no_shortcuts: "No shortcuts available",
    create_hint: "Create shortcuts in the Dreame app to quickly start your favorite cleaning routines"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Cleaning Mode",
    suction_power_title: "Suction Power",
    max_plus_description: "The suction power will be increased to the highest level, which is a single-use mode.",
    wetness_title: "Wetness",
    mop_pad_humidity_title: "Mop Pad Humidity",
    slightly_dry: "Slightly dry",
    moist: "Moist",
    wet: "Wet",
    water_volume_title: "Water Volume",
    water_low: "Low",
    water_medium: "Medium",
    water_high: "High",
    mop_washing_frequency_title: "Mop-washing frequency",
    route_title: "Route",
    mop_pressure_title: "Mop Pressure",
    mop_temperature_title: "Water Temperature"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Light",
    normal: "Normal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normal",
    warm: "Warm"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Customize",
    description: "Set personalized suction and mopping preferences for each area.",
    set_button: "Set",
    vacuum: "Vacuum",
    mop: "Mop",
    vac_and_mop: "Vac & Mop",
    cycles: "Cycles",
    apply_to_all: "Apply to All Rooms",
    click_room_hint: "Click the single area to change the mode.",
    intelligent_recommendation: "Intelligent Recommendation",
    select_room: "Select Room",
    settings_for: "{{room}} Settings",
    no_rooms: "No rooms available"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Cleaning Mode",
    deep_cleaning: "Deep Cleaning"
  },
  // Header
  header: {
    battery: "Battery",
    status: "Status",
    area: "Area",
    time: "Time"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Quiet",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "By room",
    by_area: "By area",
    by_time: "By time"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Quick",
    standard: "Standard",
    intensive: "Intensive",
    deep: "Deep"
  },
  // Errors
  errors: {
    entity_not_found: "Entity not found: {{entity}}",
    failed_to_load: "Failed to load entity data",
    service_call_failed: "Failed to send command to vacuum",
    entity_unavailable: "Vacuum is unavailable"
  },
  // Settings Panel
  settings: {
    title: "Settings",
    consumables: {
      title: "Consumables",
      main_brush: "Main Brush",
      side_brush: "Side Brush",
      filter: "Filter",
      sensor: "Sensor",
      mop_pad: "Mop Pad",
      silver_ion: "Silver Ion",
      detergent: "Detergent",
      squeegee: "Squeegee",
      tank_filter: "Tank Filter",
      onboard_dirty_water_tank: "Onboard Dirty Water Tank",
      dirty_water_channel: "Dirty Water Channel",
      deodorizer: "Deodorizer",
      wheel: "Wheel",
      scale_inhibitor: "Scale Inhibitor",
      fluffing_roller: "Fluffing Roller",
      roller_mop_filter: "Roller Mop Filter",
      water_outlet_filter: "Water Outlet Filter",
      remaining: "remaining",
      reset: "Reset"
    },
    device_info: {
      title: "Device Info",
      firmware: "Firmware",
      total_area: "Total Cleaned Area",
      total_time: "Total Cleaning Time",
      total_cleans: "Total Cleanings",
      wifi_ssid: "Wi-Fi Network",
      wifi_signal: "Signal Strength",
      ip_address: "IP Address"
    },
    quick_settings: {
      title: "Quick Settings",
      child_lock: "Child Lock",
      child_lock_desc: "Disable physical buttons on device",
      resume_cleaning: "Resume Cleaning",
      resume_cleaning_desc: "Automatically resume cleaning after charging",
      dnd: "Do Not Disturb",
      dnd_desc: "Quiet hours with reduced activity",
      dnd_start: "Start Time",
      dnd_end: "End Time",
      dnd_disable_resume: "Disable Resume",
      dnd_disable_resume_desc: "Do not resume cleaning during DND",
      dnd_disable_auto_empty: "Disable Auto Empty",
      dnd_disable_auto_empty_desc: "Do not auto empty during DND",
      dnd_reduce_volume: "Reduce Volume",
      dnd_reduce_volume_desc: "Lower device volume during DND"
    },
    volume: {
      title: "Volume & Sound",
      volume: "Volume",
      test_sound: "Locate",
      muted: "Muted",
      voice_assistant: "Voice Assistant",
      voice_assistant_desc: "Enable voice announcements and feedback",
      voice_language: "Voice Language",
      voice_language_desc: "Language for voice announcements",
      streaming_voice_prompt: "Streaming Voice Prompt",
      streaming_voice_prompt_desc: "Real-time voice feedback during cleaning"
    },
    carpet: {
      title: "Carpet Settings",
      carpet_recognition: "Carpet Recognition",
      carpet_recognition_desc: "Detect carpets automatically",
      carpet_avoidance: "Carpet Avoidance",
      carpet_avoidance_desc: "Avoid carpets while mopping",
      clean_carpets_first: "Clean Carpets First",
      clean_carpets_first_desc: "Vacuum carpets before mopping floors",
      carpet_boost: "Carpet Boost",
      carpet_boost_desc: "Increase suction power on carpets",
      intensive_cleaning: "Intensive Cleaning",
      intensive_cleaning_desc: "Deep clean carpets with extra passes",
      side_brush_rotate: "Side Brush Rotate",
      side_brush_rotate_desc: "Rotate side brush on carpets",
      sensitivity: "Carpet Sensitivity",
      sensitivity_desc: "Detection sensitivity level",
      sensitivity_low: "Low",
      sensitivity_medium: "Medium",
      sensitivity_high: "High",
      cleaning_mode: "Carpet Cleaning",
      cleaning_mode_desc: "How to handle carpets during cleaning",
      mode_vacuum: "Vacuum",
      mode_vacuum_and_mop: "Vac & Mop",
      mode_avoidance: "Avoid",
      mode_ignore: "Ignore",
      vacuum_mode: "Vacuum Mode",
      vacuum_adaptation: "Mop Lift",
      vacuum_remove_mop: "Remove Mop"
    },
    floor: {
      title: "Floor Settings",
      obstacle_avoidance: "Obstacle Avoidance",
      obstacle_avoidance_desc: "Use sensors to avoid obstacles",
      collision_avoidance: "Collision Avoidance",
      collision_avoidance_desc: "Slow down near walls and furniture",
      auto_mount_mop: "Auto Mount Mop",
      auto_mount_mop_desc: "Automatically attach mop pad when needed",
      auto_recleaning: "Auto Re-Cleaning",
      auto_recleaning_desc: "Automatically re-clean missed areas",
      recleaning_off: "Off",
      recleaning_in_deep_mode: "In Deep Mode",
      recleaning_in_all_modes: "In All Modes",
      stain_avoidance: "Stain Avoidance",
      stain_avoidance_desc: "Avoid detected stains",
      tight_mopping: "Tight Mopping",
      tight_mopping_desc: "Mop closer to walls and edges",
      floor_direction_cleaning: "Floor Direction Cleaning",
      floor_direction_cleaning_desc: "Clean along the floor grain direction",
      large_particles_boost: "Large Particles Boost",
      large_particles_boost_desc: "Increase suction for large debris",
      pet_focused_cleaning: "Pet Focused Cleaning",
      pet_focused_cleaning_desc: "Extra cleaning in pet areas",
      low_lying_area_frequency: "Low-Lying Area Frequency",
      low_lying_area_frequency_desc: "How often to clean low-lying areas under furniture"
    },
    edge_corner: {
      title: "Edge & Corner",
      side_reach: "Side Reach",
      side_reach_desc: "Extend side brush to reach edges",
      mop_extend: "Mop Extend",
      mop_extend_desc: "Extend mop pad to clean edges and corners",
      gap_cleaning: "Gap Cleaning",
      gap_cleaning_desc: "Clean narrow gaps between furniture",
      mopping_under: "Mop Under Furniture",
      mopping_under_desc: "Extend mop to clean under low furniture",
      extend_frequency: "Extend Frequency",
      extend_frequency_desc: "How often to extend mop for edge cleaning",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligent",
      frequency_high: "High"
    },
    dock: {
      title: "Dock Settings",
      self_clean: "Self Clean",
      self_clean_desc: "Auto wash mop after cleaning",
      auto_empty_mode: "Auto Empty Mode",
      auto_empty_mode_desc: "When to automatically empty the dustbin",
      auto_empty_frequency: "Auto Empty Frequency",
      auto_empty_frequency_desc: "How many cleanings before auto-emptying",
      empty_off: "Off",
      empty_standard: "Standard",
      empty_high_frequency: "High Frequency",
      empty_low_frequency: "Low Frequency",
      auto_detergent: "Auto Add Detergent",
      auto_detergent_desc: "Automatically add detergent when washing",
      mop_washing_with_detergent: "Mop Washing With Detergent",
      mop_washing_with_detergent_desc: "Use detergent when washing mop pad",
      mopping_with_detergent: "Mopping With Detergent",
      mopping_with_detergent_desc: "Use detergent while mopping floors",
      water_electrolysis: "Water Electrolysis",
      water_electrolysis_desc: "Sterilize water using electrolysis",
      auto_water_refilling: "Auto Water Refilling",
      auto_water_refilling_desc: "Automatically refill clean water tank",
      auto_dust_collecting: "Auto Dust Collecting",
      auto_dust_collecting_desc: "Automatically empty dustbin after cleaning",
      smart_washing: "Smart Mop Washing",
      smart_washing_desc: "Intelligently adjust washing based on dirt level",
      mop_wash_level: "Mop Wash Level",
      mop_wash_level_desc: "Intensity of mop pad washing",
      washing_mode: "Washing Mode",
      washing_mode_desc: "Intensity of mop pad washing",
      washing_light: "Light",
      washing_standard: "Standard",
      washing_deep: "Deep",
      water_temperature: "Water Temperature",
      water_temperature_desc: "Temperature for mop washing",
      temp_normal: "Normal",
      temp_mild: "Mild",
      temp_warm: "Warm",
      temp_hot: "Hot",
      auto_drying: "Auto Drying",
      auto_drying_desc: "Automatically dry mop pad after cleaning",
      drying_time: "Drying Time",
      drying_time_desc: "Duration for mop pad drying",
      auto_rewashing: "Auto Rewashing",
      auto_rewashing_desc: "Automatically rewash mop when dirty",
      rewashing_off: "Off",
      rewashing_in_deep_mode: "In Deep Mode",
      rewashing_in_all_modes: "In All Modes",
      off_peak_charging: "Off-Peak Charging",
      off_peak_charging_desc: "Charge during off-peak hours to save energy",
      off_peak_charging_start: "Start Time",
      off_peak_charging_end: "End Time",
      station_cleaning: "Station Cleaning",
      station_cleaning_desc: "Clean the base station",
      clean_now: "Clean Now",
      self_repair: "Self Repair",
      self_repair_desc: "Run station self-repair diagnostics",
      repair_now: "Repair",
      scraper_frequency: "Scraper Frequency",
      scraper_frequency_desc: "How often to clean the rubber scraper"
    },
    ai_detection: {
      title: "AI & Detection",
      intelligent_recognition: "Intelligent Recognition",
      intelligent_recognition_desc: "AI-powered environment recognition",
      ai_obstacle_detection: "AI Obstacle Detection",
      ai_obstacle_detection_desc: "Use AI to identify and avoid obstacles",
      fuzzy_obstacle_detection: "Fuzzy Obstacle Detection",
      fuzzy_obstacle_detection_desc: "Detect soft or unclear obstacles",
      ai_obstacle_image_upload: "Obstacle Image Upload",
      ai_obstacle_image_upload_desc: "Upload obstacle images for analysis",
      ai_obstacle_picture: "Obstacle Picture",
      ai_obstacle_picture_desc: "Take pictures of detected obstacles",
      ai_pet_detection: "Pet Detection",
      ai_pet_detection_desc: "Detect and avoid pets",
      ai_pet_avoidance: "Pet Avoidance",
      ai_pet_avoidance_desc: "Actively avoid detected pets",
      pet_focused_detection: "Pet Focused Detection",
      pet_focused_detection_desc: "Enhanced detection for pet areas",
      pet_picture: "Pet Picture",
      pet_picture_desc: "Take pictures of detected pets",
      ai_human_detection: "Human Detection",
      ai_human_detection_desc: "Detect and avoid humans",
      human_follow: "Human Follow",
      human_follow_desc: "Follow humans for interactive cleaning",
      ai_furniture_detection: "Furniture Detection",
      ai_furniture_detection_desc: "Detect and navigate around furniture",
      ai_fluid_detection: "Fluid Detection",
      ai_fluid_detection_desc: "Detect and avoid liquids",
      fill_light: "Fill Light",
      fill_light_desc: "Use fill light for better detection",
      camera_light_auto: "Auto Camera Brightness",
      camera_light_auto_desc: "Automatically adjust camera light brightness",
      camera_light_brightness: "Camera Light Brightness",
      camera_light_brightness_desc: "Manual camera light brightness level"
    },
    station_controls: {
      title: "Station Controls",
      self_clean: "Self Clean",
      self_clean_desc: "Start mop pad washing cycle",
      manual_drying: "Manual Drying",
      manual_drying_desc: "Start mop pad drying cycle",
      water_tank_draining: "Drain Water Tank",
      water_tank_draining_desc: "Drain dirty water from tank",
      base_station_cleaning: "Clean Station",
      base_station_cleaning_desc: "Clean the base station",
      empty_water_tank: "Empty Water Tank",
      empty_water_tank_desc: "Empty the water collection tank",
      start_auto_empty: "Auto Empty",
      start_auto_empty_desc: "Start automatic dustbin emptying",
      start_recleaning: "Reclean",
      start_recleaning_desc: "Start recleaning missed areas",
      clear_warning: "Clear Warning",
      clear_warning_desc: "Clear current warning messages"
    },
    map: {
      title: "Map Settings",
      multi_floor: "Multi-Floor Map",
      multi_floor_desc: "Enable support for multiple floor maps",
      rotation: "Map Rotation",
      rotation_desc: "Rotate map orientation",
      mapping_actions: "Mapping Actions",
      start_mapping: "Start Mapping",
      start_fast_mapping: "Fast Mapping"
    }
  }
}, Bw = {
  // Common
  common: {
    run: "Ausführen",
    start: "Start",
    stop: "Stopp",
    cancel: "Abbrechen",
    save: "Speichern",
    apply: "Anwenden",
    reset: "Zurücksetzen"
  },
  // Room Selector
  room_selector: {
    title: "Räume auswählen",
    selected_count: "{{count}} ausgewählt"
  },
  // Map Selector
  map_selector: {
    unknown: "Unbekannte Karte"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Keine Karte verfügbar",
    looking_for: "Suche nach: {{entity}}",
    room_overlay: "Klicken Sie auf Raumnummern, um Räume zum Reinigen auszuwählen",
    zone_overlay_create: "Klicken Sie auf die Karte, um eine Reinigungszone zu platzieren",
    zone_overlay_resize: "Ziehen Sie an den Ecken, um die Größe zu ändern, oder klicken Sie woanders, um neu zu positionieren",
    clear_zone: "Zone löschen",
    switch_to_list: "Zur Listenansicht wechseln",
    switch_to_map: "Zur Kartenansicht wechseln",
    room_list_overlay: "Räume antippen, um sie für die Reinigung auszuwählen",
    no_rooms: "Keine Räume verfügbar",
    zoom_in: "Vergrößern",
    zoom_out: "Verkleinern",
    zoom_reset: "Zoom zurücksetzen",
    lock_map: "Karte sperren",
    unlock_map: "Karte entsperren"
  },
  // Mode Tabs
  modes: {
    room: "Raum",
    all: "Alle",
    zone: "Zone"
  },
  // Action Buttons
  actions: {
    clean: "Reinigen",
    clean_all: "Alles reinigen",
    clean_rooms: "{{count}} Raum reinigen",
    clean_rooms_plural: "{{count}} Räume reinigen",
    select_rooms: "Räume auswählen",
    zone_clean: "Zone reinigen",
    pause: "Pause",
    resume: "Fortsetzen",
    stop: "Stopp",
    stop_and_dock: "Stopp & Andocken",
    dock: "Andocken"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} ausgewählt",
    deselected_room: "{{name}} abgewählt",
    paused: "Reinigung pausiert",
    stopped: "Reinigung gestoppt",
    docked: "Kehrt zur Station zurück",
    cleaning_started: "Reinigung gestartet",
    resuming: "Reinigung wird fortgesetzt",
    starting_full_clean: "Vollständige Hausreinigung gestartet",
    pausing_vacuum: "Saugroboter wird pausiert",
    stopping_vacuum: "Saugroboter wird gestoppt",
    stopping_and_docking: "Stoppen und zur Basis zurückkehren",
    vacuum_docking: "Saugroboter kehrt zur Station zurück",
    starting_room_clean: "Reinigung für {{count}} ausgewählten Raum wird gestartet",
    starting_room_clean_plural: "Reinigung für {{count}} ausgewählte Räume wird gestartet",
    starting_zone_clean: "Zonenreinigung wird gestartet",
    select_rooms_first: "Bitte wählen Sie zuerst Räume zum Reinigen aus",
    cannot_determine_map: "Kartenabmessungen können nicht ermittelt werden",
    select_zone_first: "Bitte wählen Sie zuerst eine Zone auf der Karte aus"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Ausgewählte Räume:",
    selected_label: "Ausgewählt:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Benutzerdefiniert: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Verknüpfungen anzeigen",
    repeats_tooltip: "Reinigungsdurchgänge",
    vac_and_mop: "Saugen & Wischen",
    mop_after_vac: "Wischen nach Saugen",
    vacuum: "Saugen",
    mop: "Wischen"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Reinigungsmodus",
    clean_genius: "CleanGenius",
    custom: "Benutzerdefiniert"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Verknüpfungen",
    no_shortcuts: "Keine Verknüpfungen verfügbar",
    create_hint: "Erstellen Sie Verknüpfungen in der Dreame-App, um Ihre bevorzugten Reinigungsroutinen schnell zu starten"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Reinigungsmodus",
    suction_power_title: "Saugleistung",
    max_plus_description: "Die Saugkraft wird auf die höchste Stufe erhöht. Dies ist ein Einmal-Modus.",
    wetness_title: "Feuchtigkeit",
    mop_pad_humidity_title: "Wischmopp-Feuchtigkeit",
    slightly_dry: "Leicht trocken",
    moist: "Feucht",
    wet: "Nass",
    water_volume_title: "Wassermenge",
    water_low: "Niedrig",
    water_medium: "Mittel",
    water_high: "Hoch",
    mop_washing_frequency_title: "Wischmopp-Waschfrequenz",
    route_title: "Route",
    mop_pressure_title: "Wischdruck",
    mop_temperature_title: "Wassertemperatur"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Leicht",
    normal: "Normal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normal",
    warm: "Warm"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Anpassen",
    description: "Personalisierte Saug- und Wischeinstellungen für jeden Bereich festlegen.",
    set_button: "Einstellen",
    vacuum: "Saugen",
    mop: "Wischen",
    vac_and_mop: "Saugen & Wischen",
    cycles: "Durchgänge",
    apply_to_all: "Auf alle Räume anwenden",
    click_room_hint: "Klicken Sie auf einen Bereich, um den Modus zu ändern.",
    intelligent_recommendation: "Intelligente Empfehlung",
    select_room: "Raum auswählen",
    settings_for: "{{room}} Einstellungen",
    no_rooms: "Keine Räume verfügbar"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Reinigungsmodus",
    deep_cleaning: "Tiefenreinigung"
  },
  // Header
  header: {
    battery: "Batterie",
    status: "Status",
    area: "Fläche",
    time: "Zeit"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Leise",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Nach Raum",
    by_area: "Nach Fläche",
    by_time: "Nach Zeit"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Schnell",
    standard: "Standard",
    intensive: "Intensiv",
    deep: "Tief"
  },
  // Errors
  errors: {
    entity_not_found: "Entität nicht gefunden: {{entity}}",
    failed_to_load: "Entitätsdaten konnten nicht geladen werden",
    service_call_failed: "Befehl konnte nicht an den Staubsauger gesendet werden",
    entity_unavailable: "Staubsauger nicht verfügbar"
  },
  // Settings Panel
  settings: {
    title: "Einstellungen",
    consumables: {
      title: "Verbrauchsmaterialien",
      main_brush: "Hauptbürste",
      side_brush: "Seitenbürste",
      filter: "Filter",
      sensor: "Sensor",
      mop_pad: "Wischpad",
      silver_ion: "Silberionen",
      detergent: "Reinigungsmittel",
      squeegee: "Abzieher",
      tank_filter: "Tankfilter",
      onboard_dirty_water_tank: "Onboard-Schmutzwassertank",
      dirty_water_channel: "Schmutzwasserkanal",
      deodorizer: "Deodorizer",
      wheel: "Rad",
      scale_inhibitor: "Kalkschutz",
      fluffing_roller: "Auflockerungswalze",
      roller_mop_filter: "Rollenmopp-Filter",
      water_outlet_filter: "Wasserauslassfilter",
      remaining: "verbleibend",
      reset: "Zurücksetzen"
    },
    device_info: {
      title: "Geräteinformationen",
      firmware: "Firmware",
      total_area: "Gesamtreinigungsfläche",
      total_time: "Gesamtreinigungszeit",
      total_cleans: "Gesamte Reinigungen",
      wifi_ssid: "WLAN-Netzwerk",
      wifi_signal: "Signalstärke",
      ip_address: "IP-Adresse"
    },
    quick_settings: {
      title: "Schnelleinstellungen",
      child_lock: "Kindersicherung",
      child_lock_desc: "Tasten am Gerät deaktivieren",
      resume_cleaning: "Reinigung fortsetzen",
      resume_cleaning_desc: "Reinigung nach dem Laden automatisch fortsetzen",
      dnd: "Nicht stören",
      dnd_desc: "Ruhezeiten mit reduzierter Aktivität",
      dnd_start: "Startzeit",
      dnd_end: "Endzeit",
      dnd_disable_resume: "Fortsetzen deaktivieren",
      dnd_disable_resume_desc: "Reinigung während DND nicht fortsetzen",
      dnd_disable_auto_empty: "Auto-Entleerung deaktivieren",
      dnd_disable_auto_empty_desc: "Während DND nicht automatisch entleeren",
      dnd_reduce_volume: "Lautstärke reduzieren",
      dnd_reduce_volume_desc: "Gerätelautstärke während DND verringern"
    },
    volume: {
      title: "Lautstärke & Ton",
      volume: "Lautstärke",
      test_sound: "Finden",
      muted: "Stumm",
      voice_assistant: "Sprachassistent",
      voice_assistant_desc: "Sprachansagen und Feedback aktivieren",
      voice_language: "Sprachsprache",
      voice_language_desc: "Sprache für Ansagen",
      streaming_voice_prompt: "Streaming-Sprachansage",
      streaming_voice_prompt_desc: "Echtzeit-Sprachfeedback während der Reinigung"
    },
    carpet: {
      title: "Teppich-Einstellungen",
      carpet_recognition: "Teppicherkennung",
      carpet_recognition_desc: "Teppiche automatisch erkennen",
      carpet_avoidance: "Teppichvermeidung",
      carpet_avoidance_desc: "Teppiche beim Wischen vermeiden",
      clean_carpets_first: "Teppiche zuerst reinigen",
      clean_carpets_first_desc: "Teppiche vor dem Wischen saugen",
      carpet_boost: "Teppich-Boost",
      carpet_boost_desc: "Saugkraft auf Teppichen erhöhen",
      intensive_cleaning: "Intensivreinigung",
      intensive_cleaning_desc: "Teppiche mit extra Durchgängen reinigen",
      side_brush_rotate: "Seitenbürste drehen",
      side_brush_rotate_desc: "Seitenbürste auf Teppichen drehen",
      sensitivity: "Teppich-Empfindlichkeit",
      sensitivity_desc: "Erkennungsempfindlichkeit",
      sensitivity_low: "Niedrig",
      sensitivity_medium: "Mittel",
      sensitivity_high: "Hoch",
      cleaning_mode: "Teppichreinigung",
      cleaning_mode_desc: "Verhalten bei Teppichen während der Reinigung",
      mode_vacuum: "Saugen",
      mode_vacuum_and_mop: "Saug & Wisch",
      mode_avoidance: "Vermeiden",
      mode_ignore: "Ignorieren",
      vacuum_mode: "Saugmodus",
      vacuum_adaptation: "Mopp anheben",
      vacuum_remove_mop: "Mopp entfernen"
    },
    floor: {
      title: "Boden-Einstellungen",
      obstacle_avoidance: "Hindernisvermeidung",
      obstacle_avoidance_desc: "Sensoren zur Hindernisvermeidung verwenden",
      collision_avoidance: "Kollisionsvermeidung",
      collision_avoidance_desc: "Langsamer an Wänden und Möbeln",
      auto_mount_mop: "Auto-Mopp montieren",
      auto_mount_mop_desc: "Moppaufsatz automatisch anbringen",
      auto_recleaning: "Auto-Nachreinigung",
      auto_recleaning_desc: "Verpasste Bereiche automatisch nachreinigen",
      recleaning_off: "Aus",
      recleaning_in_deep_mode: "Im Tiefenmodus",
      recleaning_in_all_modes: "In allen Modi",
      stain_avoidance: "Fleckenvermeidung",
      stain_avoidance_desc: "Erkannte Flecken vermeiden",
      tight_mopping: "Gründliches Wischen",
      tight_mopping_desc: "Näher an Wänden und Kanten wischen",
      floor_direction_cleaning: "Bodenrichtungsreinigung",
      floor_direction_cleaning_desc: "Entlang der Bodenmaserung reinigen",
      large_particles_boost: "Großpartikel-Boost",
      large_particles_boost_desc: "Saugleistung für große Partikel erhöhen",
      pet_focused_cleaning: "Haustier-fokussierte Reinigung",
      pet_focused_cleaning_desc: "Extra Reinigung in Haustierbereichen",
      low_lying_area_frequency: "Niedrigbereich-Häufigkeit",
      low_lying_area_frequency_desc: "Wie oft niedrige Bereiche unter Möbeln gereinigt werden"
    },
    edge_corner: {
      title: "Kanten & Ecken",
      side_reach: "Seitenreichweite",
      side_reach_desc: "Seitenbürste für Kanten ausfahren",
      mop_extend: "Mopp ausfahren",
      mop_extend_desc: "Mopp für Kanten und Ecken ausfahren",
      gap_cleaning: "Spaltenreinigung",
      gap_cleaning_desc: "Enge Spalten zwischen Möbeln reinigen",
      mopping_under: "Unter Möbeln wischen",
      mopping_under_desc: "Mopp unter niedrige Möbel ausfahren",
      extend_frequency: "Ausfahrhäufigkeit",
      extend_frequency_desc: "Wie oft der Mopp für Kantenreinigung ausfahren soll",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligent",
      frequency_high: "Hoch"
    },
    dock: {
      title: "Dock-Einstellungen",
      self_clean: "Selbstreinigung",
      self_clean_desc: "Mopp nach Reinigung automatisch waschen",
      auto_empty_mode: "Auto-Entleerungsmodus",
      auto_empty_mode_desc: "Wann der Staubbehälter automatisch entleert werden soll",
      auto_empty_frequency: "Auto-Entleerungsfrequenz",
      auto_empty_frequency_desc: "Anzahl der Reinigungen vor automatischer Entleerung",
      empty_off: "Aus",
      empty_standard: "Standard",
      empty_high_frequency: "Hohe Frequenz",
      empty_low_frequency: "Niedrige Frequenz",
      auto_detergent: "Auto Reinigungsmittel",
      auto_detergent_desc: "Automatisch Reinigungsmittel beim Waschen hinzufügen",
      mop_washing_with_detergent: "Moppwäsche mit Reinigungsmittel",
      mop_washing_with_detergent_desc: "Reinigungsmittel beim Waschen des Mopps verwenden",
      mopping_with_detergent: "Wischen mit Reinigungsmittel",
      mopping_with_detergent_desc: "Reinigungsmittel beim Wischen des Bodens verwenden",
      water_electrolysis: "Wasserelektrolyse",
      water_electrolysis_desc: "Wasser durch Elektrolyse sterilisieren",
      auto_water_refilling: "Auto Wassernachfüllung",
      auto_water_refilling_desc: "Frischwassertank automatisch nachfüllen",
      auto_dust_collecting: "Auto Staubsammlung",
      auto_dust_collecting_desc: "Staubbehälter nach Reinigung automatisch entleeren",
      smart_washing: "Intelligentes Waschen",
      smart_washing_desc: "Waschen intelligent an Verschmutzung anpassen",
      mop_wash_level: "Mopp-Waschstufe",
      mop_wash_level_desc: "Intensität der Moppwäsche",
      washing_mode: "Waschmodus",
      washing_mode_desc: "Intensität der Moppwäsche",
      washing_light: "Leicht",
      washing_standard: "Standard",
      washing_deep: "Intensiv",
      water_temperature: "Wassertemperatur",
      water_temperature_desc: "Temperatur für die Moppwäsche",
      temp_normal: "Normal",
      temp_mild: "Mild",
      temp_warm: "Warm",
      temp_hot: "Heiß",
      auto_drying: "Auto-Trocknung",
      auto_drying_desc: "Mopp nach der Reinigung automatisch trocknen",
      drying_time: "Trocknungszeit",
      drying_time_desc: "Dauer der Mopptrocknung",
      auto_rewashing: "Auto-Nachwaschen",
      auto_rewashing_desc: "Mopp bei Verschmutzung automatisch nachwaschen",
      rewashing_off: "Aus",
      rewashing_in_deep_mode: "Im Tiefenmodus",
      rewashing_in_all_modes: "In allen Modi",
      off_peak_charging: "Schwachlastladen",
      off_peak_charging_desc: "Während Schwachlastzeiten laden um Energie zu sparen",
      off_peak_charging_start: "Startzeit",
      off_peak_charging_end: "Endzeit",
      station_cleaning: "Station reinigen",
      station_cleaning_desc: "Die Basisstation reinigen",
      clean_now: "Jetzt reinigen",
      self_repair: "Selbstreparatur",
      self_repair_desc: "Stations-Selbstdiagnose ausführen",
      repair_now: "Reparieren",
      scraper_frequency: "Schaber-Häufigkeit",
      scraper_frequency_desc: "Wie oft der Gummischaber gereinigt wird"
    },
    ai_detection: {
      title: "KI & Erkennung",
      intelligent_recognition: "Intelligente Erkennung",
      intelligent_recognition_desc: "KI-gestützte Umgebungserkennung",
      ai_obstacle_detection: "KI-Hinderniserkennung",
      ai_obstacle_detection_desc: "KI zur Erkennung und Vermeidung von Hindernissen nutzen",
      fuzzy_obstacle_detection: "Unscharfe Hinderniserkennung",
      fuzzy_obstacle_detection_desc: "Weiche oder undeutliche Hindernisse erkennen",
      ai_obstacle_image_upload: "Hindernis-Bilder hochladen",
      ai_obstacle_image_upload_desc: "Hindernisbilder zur Analyse hochladen",
      ai_obstacle_picture: "Hindernisbild",
      ai_obstacle_picture_desc: "Bilder von erkannten Hindernissen aufnehmen",
      ai_pet_detection: "Haustiererkennung",
      ai_pet_detection_desc: "Haustiere erkennen und vermeiden",
      ai_pet_avoidance: "Haustiervermeidung",
      ai_pet_avoidance_desc: "Erkannte Haustiere aktiv vermeiden",
      pet_focused_detection: "Haustier-fokussierte Erkennung",
      pet_focused_detection_desc: "Verbesserte Erkennung für Haustierbereiche",
      pet_picture: "Haustierbild",
      pet_picture_desc: "Bilder von erkannten Haustieren aufnehmen",
      ai_human_detection: "Personenerkennung",
      ai_human_detection_desc: "Personen erkennen und vermeiden",
      human_follow: "Person folgen",
      human_follow_desc: "Personen für interaktive Reinigung folgen",
      ai_furniture_detection: "Möbelerkennung",
      ai_furniture_detection_desc: "Möbel erkennen und umfahren",
      ai_fluid_detection: "Flüssigkeitserkennung",
      ai_fluid_detection_desc: "Flüssigkeiten erkennen und vermeiden",
      fill_light: "Zusatzlicht",
      fill_light_desc: "Zusatzlicht für bessere Erkennung nutzen",
      camera_light_auto: "Auto-Kamerahelligkeit",
      camera_light_auto_desc: "Kameralicht-Helligkeit automatisch anpassen",
      camera_light_brightness: "Kameralicht-Helligkeit",
      camera_light_brightness_desc: "Manuelle Kameralicht-Helligkeit"
    },
    station_controls: {
      title: "Stationssteuerung",
      self_clean: "Selbstreinigung",
      self_clean_desc: "Wischmoppwaschzyklus starten",
      manual_drying: "Manuelle Trocknung",
      manual_drying_desc: "Wischmopp-Trockenzyklus starten",
      water_tank_draining: "Wassertank entleeren",
      water_tank_draining_desc: "Schmutzwasser aus dem Tank ablassen",
      base_station_cleaning: "Station reinigen",
      base_station_cleaning_desc: "Die Basisstation reinigen",
      empty_water_tank: "Wassertank leeren",
      empty_water_tank_desc: "Den Wassersammelbehälter leeren",
      start_auto_empty: "Auto-Entleerung",
      start_auto_empty_desc: "Automatische Staubbehälter-Entleerung starten",
      start_recleaning: "Nachreinigung",
      start_recleaning_desc: "Nachreinigung verpasster Bereiche starten",
      clear_warning: "Warnung löschen",
      clear_warning_desc: "Aktuelle Warnmeldungen löschen"
    },
    map: {
      title: "Karten-Einstellungen",
      multi_floor: "Mehrere Etagen",
      multi_floor_desc: "Unterstützung für mehrere Etagenkarten aktivieren",
      rotation: "Kartenrotation",
      rotation_desc: "Kartenausrichtung drehen",
      mapping_actions: "Kartierungsaktionen",
      start_mapping: "Kartierung starten",
      start_fast_mapping: "Schnellkartierung"
    }
  }
}, Yw = {
  // Common
  common: {
    run: "Запустить",
    start: "Старт",
    stop: "Стоп",
    cancel: "Отмена",
    save: "Сохранить",
    apply: "Применить",
    reset: "Сбросить"
  },
  // Room Selector
  room_selector: {
    title: "Выбор комнат",
    selected_count: "{{count}} выбрано"
  },
  // Map Selector
  map_selector: {
    unknown: "Неизвестная карта"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Нет доступной карты",
    looking_for: "Обнаружение: {{entity}}",
    room_overlay: "Кликните на номера комнат чтобы выбрать комнаты для убокри",
    zone_overlay_create: "Кликните на карту для добавления зоны уборки",
    zone_overlay_resize: "Потяните за углы для изменения размеры, кликните на любом месте для новой зоны",
    clear_zone: "Уборка зоны",
    switch_to_list: "Переключить на список",
    switch_to_map: "Переключить на карту",
    room_list_overlay: "Нажмите на комнаты для выбора уборки",
    no_rooms: "Нет доступных комнат",
    zoom_in: "Увеличить",
    zoom_out: "Уменьшить",
    zoom_reset: "Сбросить масштаб",
    lock_map: "Заблокировать карту",
    unlock_map: "Разблокировать карту"
  },
  // Mode Tabs
  modes: {
    room: "Комната",
    all: "Всё",
    zone: "Зона"
  },
  // Action Buttons
  actions: {
    clean: "Очистка",
    clean_all: "Очистка всего",
    clean_rooms: "Очистка {{count}} комнаты",
    clean_rooms_plural: "Очистка {{count}} комнат",
    select_rooms: "Выбор комнат",
    zone_clean: "Уборка зоны",
    pause: "Пауза",
    resume: "Продолжить",
    stop: "Стоп",
    stop_and_dock: "Стоп и на базу",
    dock: "Возврат на базу"
  },
  // Toast Messages
  toast: {
    selected_room: "Выбраны {{name}}",
    deselected_room: "Исключены {{name}}",
    paused: "Уборки приостановлена",
    stopped: "Уборка остановлена",
    docked: "Возвращение на базу",
    cleaning_started: "Уборка начата",
    resuming: "Продолжение уборки",
    starting_full_clean: "Начинается полная уборка дома",
    pausing_vacuum: "Приостановка пылесоса",
    stopping_vacuum: "Остановка пылесоса",
    stopping_and_docking: "Остановка и возврат на базу",
    vacuum_docking: "Пылесос возвращается на базу",
    starting_room_clean: "Начало уборки {{count}} выбранной комнаты",
    starting_room_clean_plural: "Начало уборки {{count}} выбранных комнат",
    starting_zone_clean: "Начало зональной уборки",
    select_rooms_first: "Пожалуйста, сначала выберите комнаты с которых начать",
    cannot_determine_map: "Не удаётся распознать размеры карты",
    select_zone_first: "Пожалуйста, выберите зону на карте"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Выбранные комнаты:",
    selected_label: "Выбрано:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Настроить уборку: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Посмотреть шорткаты",
    repeats_tooltip: "Количество проходов",
    vac_and_mop: "Сухая и влажная",
    mop_after_vac: "Влажная после сухой",
    vacuum: "Сухая уборка",
    mop: "Влажная уборка"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Режим уборки",
    clean_genius: "CleanGenius",
    custom: "Настроить"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Шорткаты",
    no_shortcuts: "Нет доступных шорткатов",
    create_hint: "Создайте шорткаты в приложении Dreame для быстрого выбора ваших любимых процедур "
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Режим уборки",
    suction_power_title: "Мощность всасывания",
    max_plus_description: "Мощность всасывания будет увеличена до максимального уровня, что соответствует режиму одноразового использования.",
    wetness_title: "Влажность",
    mop_pad_humidity_title: "Влажность швабры",
    slightly_dry: "Слегка сухая",
    moist: "Влажная",
    wet: "Мокрая",
    water_volume_title: "Объём воды",
    water_low: "Низкий",
    water_medium: "Средний",
    water_high: "Высокий",
    mop_washing_frequency_title: "Периодичность промывки швабры",
    route_title: "Маршрут",
    mop_pressure_title: "Давление швабры",
    mop_temperature_title: "Температура воды"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Лёгкое",
    normal: "Нормальное"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Обычная",
    warm: "Тёплая"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Настроить",
    description: "Установите персонализированные настройки всасывания и влажности для каждой зоны.",
    set_button: "Установить",
    vacuum: "Пылесос",
    mop: "Швабра",
    vac_and_mop: "Пылесос и швабра",
    cycles: "Циклы",
    apply_to_all: "Применить ко всем комнатам",
    click_room_hint: "Нажмите на зону, чтобы изменить режим.",
    intelligent_recommendation: "Умная рекомендация",
    select_room: "Выберите комнату",
    settings_for: "Настройки {{room}}",
    no_rooms: "Комнаты не найдены"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Режим уборки",
    deep_cleaning: "Тщательная уборка"
  },
  // Header
  header: {
    battery: "Батарея",
    status: "Статус",
    area: "Площадь",
    time: "Время"
  },
  // Units
  units: {
    square_meters: "м²",
    minutes: "мин",
    minutes_short: "м",
    percent: "%",
    decibels: "дБм"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Тихий",
    standard: "Стандартный",
    strong: "Турбо",
    turbo: "Макс"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "По комнате",
    by_area: "По площади",
    by_time: "По времени"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Быстрый",
    standard: "Стандартный",
    intensive: "Интенсивный",
    deep: "Глубокий"
  },
  // Errors
  errors: {
    entity_not_found: "Сущность не найдена: {{entity}}",
    failed_to_load: "Не удалось загрузить данные сущности",
    service_call_failed: "Не удалось отправить команду пылесосу",
    entity_unavailable: "Пылесос недоступен"
  },
  // Settings Panel
  settings: {
    title: "Настройки",
    consumables: {
      title: "Расходные материалы",
      main_brush: "Основная щётка",
      side_brush: "Боковая щётка",
      filter: "Фильтр",
      sensor: "Датчик",
      mop_pad: "Моп",
      silver_ion: "Серебряный ион",
      detergent: "Моющее средство",
      squeegee: "Скребок",
      tank_filter: "Фильтр бака",
      onboard_dirty_water_tank: "Бортовой бак грязной воды",
      dirty_water_channel: "Канал грязной воды",
      deodorizer: "Дезодорант",
      wheel: "Колесо",
      scale_inhibitor: "Средство от накипи",
      fluffing_roller: "Взбивающий ролик",
      roller_mop_filter: "Фильтр роликового мопа",
      water_outlet_filter: "Фильтр выхода воды",
      remaining: "осталось",
      reset: "Сбросить"
    },
    device_info: {
      title: "Информация об устройстве",
      firmware: "Прошивка",
      total_area: "Общая площадь уборки",
      total_time: "Общее время уборки",
      total_cleans: "Всего уборок",
      wifi_ssid: "Сеть Wi-Fi",
      wifi_signal: "Уровень сигнала",
      ip_address: "IP-адрес"
    },
    quick_settings: {
      title: "Быстрые настройки",
      child_lock: "Блокировка от детей",
      child_lock_desc: "Отключить кнопки на устройстве",
      resume_cleaning: "Продолжить уборку",
      resume_cleaning_desc: "Автоматически продолжить уборку после зарядки",
      dnd: "Не беспокоить",
      dnd_desc: "Тихие часы с ограниченной активностью",
      dnd_start: "Время начала",
      dnd_end: "Время окончания",
      dnd_disable_resume: "Отключить продолжение",
      dnd_disable_resume_desc: "Не продолжать уборку в режиме DND",
      dnd_disable_auto_empty: "Отключить авто-опустошение",
      dnd_disable_auto_empty_desc: "Не опустошать автоматически в режиме DND",
      dnd_reduce_volume: "Уменьшить громкость",
      dnd_reduce_volume_desc: "Уменьшить громкость устройства в режиме DND"
    },
    volume: {
      title: "Громкость и звук",
      volume: "Громкость",
      test_sound: "Найти",
      muted: "Без звука",
      voice_assistant: "Голосовой помощник",
      voice_assistant_desc: "Включить голосовые объявления и обратную связь",
      voice_language: "Язык голоса",
      voice_language_desc: "Язык голосовых объявлений",
      streaming_voice_prompt: "Потоковые голосовые подсказки",
      streaming_voice_prompt_desc: "Голосовая обратная связь в реальном времени во время уборки"
    },
    carpet: {
      title: "Настройки ковров",
      carpet_recognition: "Распознавание ковров",
      carpet_recognition_desc: "Автоматически распознавать ковры",
      carpet_avoidance: "Избегание ковров",
      carpet_avoidance_desc: "Избегать ковров при влажной уборке",
      clean_carpets_first: "Сначала ковры",
      clean_carpets_first_desc: "Пылесосить ковры перед мытьём полов",
      carpet_boost: "Усиление на коврах",
      carpet_boost_desc: "Увеличить мощность всасывания на коврах",
      intensive_cleaning: "Интенсивная уборка",
      intensive_cleaning_desc: "Глубокая очистка ковров с доп. проходами",
      side_brush_rotate: "Вращение боковой щётки",
      side_brush_rotate_desc: "Вращать боковую щётку на коврах",
      sensitivity: "Чувствительность ковра",
      sensitivity_desc: "Уровень чувствительности распознавания",
      sensitivity_low: "Низкая",
      sensitivity_medium: "Средняя",
      sensitivity_high: "Высокая",
      cleaning_mode: "Уборка ковров",
      cleaning_mode_desc: "Поведение при уборке ковров",
      mode_vacuum: "Пылесос",
      mode_vacuum_and_mop: "Пыл. и швабра",
      mode_avoidance: "Избегать",
      mode_ignore: "Игнорировать",
      vacuum_mode: "Режим пылесоса",
      vacuum_adaptation: "Поднять швабру",
      vacuum_remove_mop: "Снять тряпку"
    },
    floor: {
      title: "Настройки пола",
      obstacle_avoidance: "Избегание препятствий",
      obstacle_avoidance_desc: "Использовать датчики для обхода препятствий",
      collision_avoidance: "Избегание столкновений",
      collision_avoidance_desc: "Замедление у стен и мебели",
      auto_mount_mop: "Авто-установка швабры",
      auto_mount_mop_desc: "Автоматически прикреплять насадку для мытья",
      auto_recleaning: "Авто-перечистка",
      auto_recleaning_desc: "Автоматически перечищать пропущенные участки",
      recleaning_off: "Выкл",
      recleaning_in_deep_mode: "В глубоком режиме",
      recleaning_in_all_modes: "Во всех режимах",
      stain_avoidance: "Избегание пятен",
      stain_avoidance_desc: "Обходить обнаруженные пятна",
      tight_mopping: "Тщательная мойка",
      tight_mopping_desc: "Мыть ближе к стенам и краям",
      floor_direction_cleaning: "Уборка по направлению пола",
      floor_direction_cleaning_desc: "Убирать вдоль направления волокон пола",
      large_particles_boost: "Усиление для крупных частиц",
      large_particles_boost_desc: "Увеличить всасывание для крупного мусора",
      pet_focused_cleaning: "Уборка в зонах питомцев",
      pet_focused_cleaning_desc: "Дополнительная уборка в местах обитания питомцев",
      low_lying_area_frequency: "Частота уборки низких зон",
      low_lying_area_frequency_desc: "Как часто убирать низкие зоны под мебелью"
    },
    edge_corner: {
      title: "Края и углы",
      side_reach: "Боковой охват",
      side_reach_desc: "Выдвижение боковой щётки для краёв",
      mop_extend: "Выдвижение швабры",
      mop_extend_desc: "Выдвижение швабры для краёв и углов",
      gap_cleaning: "Очистка щелей",
      gap_cleaning_desc: "Очистка узких щелей между мебелью",
      mopping_under: "Мытьё под мебелью",
      mopping_under_desc: "Выдвижение швабры под низкую мебель",
      extend_frequency: "Частота выдвижения",
      extend_frequency_desc: "Как часто выдвигать швабру для краёв",
      frequency_standard: "Стандартная",
      frequency_intelligent: "Умная",
      frequency_high: "Высокая"
    },
    dock: {
      title: "Настройки станции",
      self_clean: "Самоочистка",
      self_clean_desc: "Авто-мойка швабры после уборки",
      auto_empty_mode: "Авто-опустошение",
      auto_empty_mode_desc: "Когда автоматически опустошать пылесборник",
      auto_empty_frequency: "Частота авто-опустошения",
      auto_empty_frequency_desc: "Количество уборок перед авто-опустошением",
      empty_off: "Выкл",
      empty_standard: "Стандарт",
      empty_high_frequency: "Часто",
      empty_low_frequency: "Редко",
      auto_detergent: "Авто-моющее средство",
      auto_detergent_desc: "Автоматически добавлять моющее средство",
      mop_washing_with_detergent: "Мойка швабры с моющим средством",
      mop_washing_with_detergent_desc: "Использовать моющее средство при мойке швабры",
      mopping_with_detergent: "Уборка с моющим средством",
      mopping_with_detergent_desc: "Использовать моющее средство при влажной уборке",
      water_electrolysis: "Электролиз воды",
      water_electrolysis_desc: "Стерилизация воды с помощью электролиза",
      auto_water_refilling: "Авто-наполнение воды",
      auto_water_refilling_desc: "Автоматически наполнять бак чистой водой",
      auto_dust_collecting: "Авто-сбор пыли",
      auto_dust_collecting_desc: "Автоматически опустошать пылесборник после уборки",
      smart_washing: "Умная мойка",
      smart_washing_desc: "Умная настройка мойки по уровню загрязнения",
      mop_wash_level: "Уровень мойки швабры",
      mop_wash_level_desc: "Интенсивность мойки насадки",
      washing_mode: "Режим мойки",
      washing_mode_desc: "Интенсивность мойки насадки",
      washing_light: "Лёгкая",
      washing_standard: "Стандарт",
      washing_deep: "Глубокая",
      water_temperature: "Температура воды",
      water_temperature_desc: "Температура для мойки швабры",
      temp_normal: "Обычная",
      temp_mild: "Тёплая",
      temp_warm: "Горячая",
      temp_hot: "Очень горячая",
      auto_drying: "Авто-сушка",
      auto_drying_desc: "Автоматически сушить насадку после уборки",
      drying_time: "Время сушки",
      drying_time_desc: "Продолжительность сушки насадки",
      auto_rewashing: "Авто-перемывка",
      auto_rewashing_desc: "Автоматически перемывать швабру при загрязнении",
      rewashing_off: "Выкл",
      rewashing_in_deep_mode: "В глубоком режиме",
      rewashing_in_all_modes: "Во всех режимах",
      off_peak_charging: "Зарядка в непиковое время",
      off_peak_charging_desc: "Заряжать в непиковые часы для экономии энергии",
      off_peak_charging_start: "Время начала",
      off_peak_charging_end: "Время окончания",
      station_cleaning: "Очистка станции",
      station_cleaning_desc: "Очистить базовую станцию",
      clean_now: "Очистить",
      self_repair: "Самодиагностика",
      self_repair_desc: "Запустить диагностику станции",
      repair_now: "Диагностика",
      scraper_frequency: "Частота очистки скребка",
      scraper_frequency_desc: "Как часто очищать резиновый скребок"
    },
    ai_detection: {
      title: "ИИ и распознавание",
      intelligent_recognition: "Умное распознавание",
      intelligent_recognition_desc: "ИИ-распознавание окружающей среды",
      ai_obstacle_detection: "ИИ-распознавание препятствий",
      ai_obstacle_detection_desc: "Использовать ИИ для определения и обхода препятствий",
      fuzzy_obstacle_detection: "Нечёткое распознавание препятствий",
      fuzzy_obstacle_detection_desc: "Обнаружение мягких или нечётких препятствий",
      ai_obstacle_image_upload: "Загрузка изображений препятствий",
      ai_obstacle_image_upload_desc: "Загружать изображения препятствий для анализа",
      ai_obstacle_picture: "Фото препятствия",
      ai_obstacle_picture_desc: "Фотографировать обнаруженные препятствия",
      ai_pet_detection: "Распознавание питомцев",
      ai_pet_detection_desc: "Обнаружение и обход питомцев",
      ai_pet_avoidance: "Избегание питомцев",
      ai_pet_avoidance_desc: "Активно избегать обнаруженных питомцев",
      pet_focused_detection: "Фокусировка на питомцах",
      pet_focused_detection_desc: "Улучшенное распознавание зон питомцев",
      pet_picture: "Фото питомца",
      pet_picture_desc: "Фотографировать обнаруженных питомцев",
      ai_human_detection: "Распознавание людей",
      ai_human_detection_desc: "Обнаружение и обход людей",
      human_follow: "Следование за человеком",
      human_follow_desc: "Следовать за людьми для интерактивной уборки",
      ai_furniture_detection: "Распознавание мебели",
      ai_furniture_detection_desc: "Обнаружение и обход мебели",
      ai_fluid_detection: "Распознавание жидкостей",
      ai_fluid_detection_desc: "Обнаружение и обход жидкостей",
      fill_light: "Подсветка",
      fill_light_desc: "Использовать подсветку для лучшего распознавания",
      camera_light_auto: "Авто-яркость камеры",
      camera_light_auto_desc: "Автоматически настраивать яркость подсветки камеры",
      camera_light_brightness: "Яркость подсветки камеры",
      camera_light_brightness_desc: "Ручной уровень яркости подсветки камеры"
    },
    station_controls: {
      title: "Управление станцией",
      self_clean: "Самоочистка",
      self_clean_desc: "Запустить цикл мытья салфетки",
      manual_drying: "Ручная сушка",
      manual_drying_desc: "Запустить цикл сушки салфетки",
      water_tank_draining: "Слив воды",
      water_tank_draining_desc: "Слить грязную воду из бака",
      base_station_cleaning: "Очистка станции",
      base_station_cleaning_desc: "Очистить базовую станцию",
      empty_water_tank: "Опустошить бак",
      empty_water_tank_desc: "Опустошить бак для сбора воды",
      start_auto_empty: "Авто-опустошение",
      start_auto_empty_desc: "Запустить автоматическое опустошение пылесборника",
      start_recleaning: "Перечистка",
      start_recleaning_desc: "Запустить перечистку пропущенных участков",
      clear_warning: "Сбросить предупреждение",
      clear_warning_desc: "Сбросить текущие предупреждения"
    },
    map: {
      title: "Настройки карты",
      multi_floor: "Многоэтажная карта",
      multi_floor_desc: "Включить поддержку карт нескольких этажей",
      rotation: "Поворот карты",
      rotation_desc: "Повернуть ориентацию карты",
      mapping_actions: "Действия картографии",
      start_mapping: "Начать картографию",
      start_fast_mapping: "Быстрая картография"
    }
  }
}, Zw = {
  // Common (通用)
  common: {
    run: "运行",
    start: "开始",
    stop: "停止",
    cancel: "取消",
    save: "保存",
    apply: "应用",
    reset: "重置"
  },
  // Room Selector (房间选择器)
  room_selector: {
    title: "选择房间",
    selected_count: "已选 {{count}} 个"
  },
  // Map Selector (地图选择器)
  map_selector: {
    unknown: "未知地图"
  },
  // Vacuum Map (建图与地图交互)
  vacuum_map: {
    no_map: "暂无地图",
    looking_for: "正在寻找：{{entity}}",
    room_overlay: "请选择需要清洁的房间",
    zone_overlay_create: "点击地图添加划区清洁区域",
    zone_overlay_resize: "拖动边角调整大小，点击其他空白处重新放置",
    clear_zone: "清除选区",
    switch_to_list: "切换到列表视图",
    switch_to_map: "切换到地图视图",
    room_list_overlay: "点击房间进行选择",
    no_rooms: "暂无可用房间",
    zoom_in: "放大",
    zoom_out: "缩小",
    zoom_reset: "重置缩放",
    lock_map: "锁定地图",
    unlock_map: "解锁地图"
  },
  // Mode Tabs (模式切换标签)
  modes: {
    room: "选区",
    // 对应选定房间
    all: "全局",
    // 对应全屋
    zone: "划区"
    // 对应自定义区域
  },
  // Action Buttons (操作按钮)
  actions: {
    clean: "开始清洁",
    clean_all: "全屋清洁",
    clean_rooms: "清洁 {{count}} 个房间",
    clean_rooms_plural: "清洁 {{count}} 个房间",
    select_rooms: "选择房间",
    zone_clean: "划区清洁",
    pause: "暂停",
    resume: "继续",
    stop: "停止",
    stop_and_dock: "停止并回充",
    dock: "回充"
  },
  // Toast Messages (提示信息)
  toast: {
    selected_room: "已选择 {{name}}",
    deselected_room: "已取消选择 {{name}}",
    paused: "清洁已暂停",
    stopped: "清洁已停止",
    docked: "正在返回基站",
    cleaning_started: "开始清洁",
    resuming: "恢复清洁",
    starting_full_clean: "开始全屋清洁",
    pausing_vacuum: "扫地机器人已暂停",
    stopping_vacuum: "扫地机器人已停止",
    stopping_and_docking: "停止并返回基站",
    vacuum_docking: "扫地机正在返回基站",
    starting_room_clean: "开始清洁选中的 {{count}} 个房间",
    starting_room_clean_plural: "开始清洁选中的 {{count}} 个房间",
    starting_zone_clean: "开始划区清洁",
    select_rooms_first: "请先选择要清洁的房间",
    cannot_determine_map: "无法获取地图尺寸",
    select_zone_first: "请先在地图上划定一个区域"
  },
  // Room Selection Display (房间选择显示)
  room_display: {
    selected_rooms: "已选房间：",
    selected_label: "已选："
  },
  // Cleaning Mode Button (清洁模式按钮)
  cleaning_mode_button: {
    prefix_custom: "自定义：",
    prefix_cleangenius: "智能托管：",
    view_shortcuts: "查看快捷指令",
    repeats_tooltip: "清洁次数",
    vac_and_mop: "扫拖同步",
    mop_after_vac: "先扫后拖",
    vacuum: "单扫",
    mop: "单拖"
  },
  // Cleaning Mode Modal (清洁模式弹窗)
  cleaning_mode: {
    title: "清洁模式",
    clean_genius: "智能托管",
    custom: "自定义"
  },
  // Shortcuts Modal (快捷指令弹窗)
  shortcuts: {
    title: "快捷指令",
    no_shortcuts: "暂无快捷指令",
    create_hint: "请在 Dreame (追觅) App 中创建快捷指令，以便快速启动您常用的清洁任务"
  },
  // Custom Mode (自定义模式)
  custom_mode: {
    cleaning_mode_title: "清洁模式",
    suction_power_title: "吸力设置",
    max_plus_description: "吸力将提升至最高档位（该模式仅单次生效）。",
    wetness_title: "拖布水量",
    mop_pad_humidity_title: "拖布湿度",
    slightly_dry: "偏干",
    moist: "标准",
    wet: "偏湿",
    water_volume_title: "出水量",
    water_low: "低",
    water_medium: "中",
    water_high: "高",
    mop_washing_frequency_title: "拖布回洗频率",
    route_title: "路径设置",
    mop_pressure_title: "拖地压力",
    mop_temperature_title: "水温"
  },
  // 拖地压力选项
  mop_pressure: {
    light: "轻柔",
    normal: "标准"
  },
  // 水温选项
  mop_temperature: {
    normal: "常温",
    warm: "温水"
  },
  // 定制清洁模式
  customize: {
    title: "定制",
    description: "为每个区域设置个性化的吸力和拖地偏好。",
    set_button: "设置",
    vacuum: "吸尘",
    mop: "拖地",
    vac_and_mop: "吸拖",
    cycles: "清扫次数",
    apply_to_all: "应用到所有房间",
    click_room_hint: "点击区域以更改模式。",
    intelligent_recommendation: "智能推荐",
    select_room: "选择房间",
    settings_for: "{{room}}设置",
    no_rooms: "没有可用的房间"
  },
  // CleanGenius Mode (智能托管模式)
  cleangenius_mode: {
    cleaning_mode_title: "清洁模式",
    deep_cleaning: "深度清洁"
  },
  // Header (头部信息)
  header: {
    battery: "电量",
    status: "状态",
    area: "面积",
    time: "时间"
  },
  // Units (单位)
  units: {
    square_meters: "㎡",
    minutes: "分钟",
    minutes_short: "分",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (吸力档位)
  suction_levels: {
    quiet: "安静",
    standard: "标准",
    strong: "强劲",
    turbo: "超强"
  },
  // Mop Washing Frequency (拖布回洗频率)
  mop_washing_frequency: {
    by_room: "按房间",
    by_area: "按面积",
    by_time: "按时间"
  },
  // Cleaning Routes (清扫路线)
  cleaning_routes: {
    quick: "快速",
    standard: "标准",
    intensive: "强力",
    deep: "深度"
  },
  // Errors (错误提示)
  errors: {
    entity_not_found: "未找到实体：{{entity}}",
    failed_to_load: "加载实体数据失败",
    service_call_failed: "发送指令到扫地机失败",
    entity_unavailable: "扫地机不可用"
  },
  // Settings Panel (设置面板)
  settings: {
    title: "设置",
    consumables: {
      title: "耗材管理",
      main_brush: "主刷",
      side_brush: "边刷",
      filter: "滤网",
      sensor: "传感器",
      mop_pad: "拖布",
      silver_ion: "银离子",
      detergent: "清洁剂",
      squeegee: "刮水器",
      tank_filter: "水箱过滤器",
      onboard_dirty_water_tank: "内置污水箱",
      dirty_water_channel: "污水通道",
      deodorizer: "除臭剂",
      wheel: "轮子",
      scale_inhibitor: "防垢剂",
      fluffing_roller: "蓬松滚筒",
      roller_mop_filter: "滚筒拖布过滤器",
      water_outlet_filter: "出水过滤器",
      remaining: "剩余",
      reset: "复位"
    },
    device_info: {
      title: "设备信息",
      firmware: "固件版本",
      total_area: "累计清洁面积",
      total_time: "累计清洁时间",
      total_cleans: "累计清洁次数",
      wifi_ssid: "Wi-Fi 网络",
      wifi_signal: "信号强度",
      ip_address: "IP 地址"
    },
    quick_settings: {
      title: "快捷设置",
      child_lock: "童锁",
      child_lock_desc: "锁定设备按键以防误触",
      resume_cleaning: "断点续扫",
      resume_cleaning_desc: "充电后自动恢复清洁",
      dnd: "免打扰",
      dnd_desc: "在设定的安静时段内不主动执行任务",
      dnd_start: "开始时间",
      dnd_end: "结束时间",
      dnd_disable_resume: "禁用恢复",
      dnd_disable_resume_desc: "免打扰期间不恢复清洁",
      dnd_disable_auto_empty: "禁用自动集尘",
      dnd_disable_auto_empty_desc: "免打扰期间不自动集尘",
      dnd_reduce_volume: "降低音量",
      dnd_reduce_volume_desc: "免打扰期间降低设备音量"
    },
    volume: {
      title: "音量与语音",
      volume: "音量",
      test_sound: "寻找机器",
      muted: "已静音",
      voice_assistant: "语音助手",
      voice_assistant_desc: "启用语音播报和反馈",
      voice_language: "语音语言",
      voice_language_desc: "语音播报的语言",
      streaming_voice_prompt: "实时语音提示",
      streaming_voice_prompt_desc: "清洁过程中的实时语音反馈"
    },
    carpet: {
      title: "地毯设置",
      carpet_recognition: "地毯识别",
      carpet_recognition_desc: "自动识别地毯",
      carpet_avoidance: "避开地毯",
      carpet_avoidance_desc: "拖地时避开地毯",
      clean_carpets_first: "优先清洁地毯",
      clean_carpets_first_desc: "先吸尘地毯再拖地",
      carpet_boost: "地毯增压",
      carpet_boost_desc: "在地毯上自动提升吸力",
      intensive_cleaning: "深度清洁",
      intensive_cleaning_desc: "多次清扫深度清洁地毯",
      side_brush_rotate: "边刷旋转",
      side_brush_rotate_desc: "在地毯上旋转边刷",
      sensitivity: "地毯识别灵敏度",
      sensitivity_desc: "设置传感器检测地毯的灵敏程度",
      sensitivity_low: "低",
      sensitivity_medium: "中",
      sensitivity_high: "高",
      cleaning_mode: "地毯清洁",
      cleaning_mode_desc: "清洁时遇到地毯的处理方式",
      mode_vacuum: "吸尘",
      mode_vacuum_and_mop: "吸拖",
      mode_avoidance: "躲避",
      mode_ignore: "忽略",
      vacuum_mode: "吸尘模式",
      vacuum_adaptation: "抬升拖布",
      vacuum_remove_mop: "拆除拖布"
    },
    floor: {
      title: "地板设置",
      obstacle_avoidance: "障碍物避让",
      obstacle_avoidance_desc: "使用传感器避开障碍物",
      collision_avoidance: "碰撞避让",
      collision_avoidance_desc: "靠近墙壁和家具时减速",
      auto_mount_mop: "自动安装拖布",
      auto_mount_mop_desc: "需要时自动安装拖布垫",
      auto_recleaning: "自动复清",
      auto_recleaning_desc: "自动重新清洁遗漏区域",
      recleaning_off: "关闭",
      recleaning_in_deep_mode: "深度模式",
      recleaning_in_all_modes: "所有模式",
      stain_avoidance: "污渍躲避",
      stain_avoidance_desc: "自动避开识别到的顽固污渍",
      tight_mopping: "精细拖地",
      tight_mopping_desc: "更贴近墙壁和边缘拖地",
      floor_direction_cleaning: "顺向清洁",
      floor_direction_cleaning_desc: "沿地板纹理方向清洁",
      large_particles_boost: "大颗粒增压",
      large_particles_boost_desc: "增加吸力清理大颗粒杂物",
      pet_focused_cleaning: "宠物区域清洁",
      pet_focused_cleaning_desc: "在宠物活动区域加强清洁",
      low_lying_area_frequency: "低矮区域清洁频率",
      low_lying_area_frequency_desc: "多久清洁一次家具下方的低矮区域"
    },
    edge_corner: {
      title: "边角清洁",
      side_reach: "边刷延伸",
      side_reach_desc: "延伸边刷清洁边缘",
      mop_extend: "拖布延伸",
      mop_extend_desc: "延伸拖布清洁边角",
      gap_cleaning: "缝隙清洁",
      gap_cleaning_desc: "清洁家具之间的窄缝",
      mopping_under: "家具底部清洁",
      mopping_under_desc: "延伸拖布清洁低矮家具底部",
      extend_frequency: "延伸频率",
      extend_frequency_desc: "拖布延伸清洁边缘的频率",
      frequency_standard: "标准",
      frequency_intelligent: "智能",
      frequency_high: "高"
    },
    dock: {
      title: "基站设置",
      self_clean: "自动清洗",
      self_clean_desc: "清洁后自动清洗拖布",
      auto_empty_mode: "自动集尘模式",
      auto_empty_mode_desc: "何时自动清空尘盒",
      auto_empty_frequency: "自动集尘频率",
      auto_empty_frequency_desc: "多少次清洁后自动集尘",
      empty_off: "关闭",
      empty_standard: "标准",
      empty_high_frequency: "高频",
      empty_low_frequency: "低频",
      auto_detergent: "自动添加清洁剂",
      auto_detergent_desc: "清洗时自动添加清洁剂",
      mop_washing_with_detergent: "拖布清洗添加清洁剂",
      mop_washing_with_detergent_desc: "清洗拖布时使用清洁剂",
      mopping_with_detergent: "拖地使用清洁剂",
      mopping_with_detergent_desc: "拖地时使用清洁剂",
      water_electrolysis: "水电解",
      water_electrolysis_desc: "通过电解杀菌净化水质",
      auto_water_refilling: "自动加水",
      auto_water_refilling_desc: "自动补充清水箱",
      auto_dust_collecting: "自动集尘",
      auto_dust_collecting_desc: "清洁后自动清空尘盒",
      smart_washing: "智能洗拖布",
      smart_washing_desc: "根据脏污程度智能调整清洗",
      mop_wash_level: "拖布清洗等级",
      mop_wash_level_desc: "拖布清洗强度",
      washing_mode: "清洗模式",
      washing_mode_desc: "拖布清洗强度",
      washing_light: "轻度",
      washing_standard: "标准",
      washing_deep: "深度",
      water_temperature: "水温",
      water_temperature_desc: "清洗拖布的水温",
      temp_normal: "常温",
      temp_mild: "温和",
      temp_warm: "温热",
      temp_hot: "高温",
      auto_drying: "自动烘干",
      auto_drying_desc: "清洁后自动烘干拖布",
      drying_time: "烘干时间",
      drying_time_desc: "拖布烘干时长",
      auto_rewashing: "自动复洗",
      auto_rewashing_desc: "拖布脏污时自动复洗",
      rewashing_off: "关闭",
      rewashing_in_deep_mode: "深度模式",
      rewashing_in_all_modes: "所有模式",
      off_peak_charging: "低峰充电",
      off_peak_charging_desc: "低峰时段充电节省电费",
      off_peak_charging_start: "开始时间",
      off_peak_charging_end: "结束时间",
      station_cleaning: "基站清洁",
      station_cleaning_desc: "清洁基站",
      clean_now: "立即清洁",
      self_repair: "自检修复",
      self_repair_desc: "运行基站自检修复诊断",
      repair_now: "修复",
      scraper_frequency: "刮板清洁频率",
      scraper_frequency_desc: "多久清洁一次橡胶刮板"
    },
    ai_detection: {
      title: "AI 识别与避障",
      intelligent_recognition: "智能识别",
      intelligent_recognition_desc: "AI 驱动的环境识别",
      ai_obstacle_detection: "AI 障碍物识别",
      ai_obstacle_detection_desc: "使用 AI 视觉识别并避开障碍物",
      fuzzy_obstacle_detection: "模糊障碍物识别",
      fuzzy_obstacle_detection_desc: "检测软质或不清晰的障碍物",
      ai_obstacle_image_upload: "实景障碍物照片上传",
      ai_obstacle_image_upload_desc: "上传拍摄到的障碍物照片以供分析",
      ai_obstacle_picture: "障碍物照片",
      ai_obstacle_picture_desc: "拍摄检测到的障碍物照片",
      ai_pet_detection: "宠物识别",
      ai_pet_detection_desc: "识别并智能避让宠物",
      ai_pet_avoidance: "避让宠物",
      ai_pet_avoidance_desc: "主动避让检测到的宠物",
      pet_focused_detection: "宠物重点识别",
      pet_focused_detection_desc: "增强宠物区域检测",
      pet_picture: "宠物照片",
      pet_picture_desc: "拍摄检测到的宠物照片",
      ai_human_detection: "人员识别",
      ai_human_detection_desc: "识别并避让活动人员",
      human_follow: "人员跟随",
      human_follow_desc: "跟随人员进行互动清洁",
      ai_furniture_detection: "家具识别",
      ai_furniture_detection_desc: "识别家具并沿边清扫",
      ai_fluid_detection: "液体识别",
      ai_fluid_detection_desc: "识别并避开地面液体",
      fill_light: "自动补光灯",
      fill_light_desc: "暗光环境下自动开启以提升识别率",
      camera_light_auto: "自动相机亮度",
      camera_light_auto_desc: "自动调节相机补光灯亮度",
      camera_light_brightness: "相机补光亮度",
      camera_light_brightness_desc: "手动设置相机补光灯亮度"
    },
    station_controls: {
      title: "基站控制",
      self_clean: "自动清洗",
      self_clean_desc: "启动拖布清洗程序",
      manual_drying: "手动烘干",
      manual_drying_desc: "启动拖布烘干程序",
      water_tank_draining: "排水",
      water_tank_draining_desc: "排出污水箱中的脏水",
      base_station_cleaning: "清洁基站",
      base_station_cleaning_desc: "清洁充电基站",
      empty_water_tank: "清空水箱",
      empty_water_tank_desc: "清空集水箱",
      start_auto_empty: "自动集尘",
      start_auto_empty_desc: "启动自动集尘",
      start_recleaning: "重新清洁",
      start_recleaning_desc: "启动遗漏区域重新清洁",
      clear_warning: "清除警告",
      clear_warning_desc: "清除当前警告消息"
    },
    map: {
      title: "地图设置",
      multi_floor: "多层地图",
      multi_floor_desc: "启用多层地图支持",
      rotation: "地图旋转",
      rotation_desc: "旋转地图方向",
      mapping_actions: "建图操作",
      start_mapping: "开始建图",
      start_fast_mapping: "快速建图"
    }
  }
}, Vw = {
  // Common
  common: {
    run: "Ejecutar",
    start: "Iniciar",
    stop: "Detener",
    cancel: "Cancelar",
    save: "Guardar",
    apply: "Aplicar",
    reset: "Restablecer"
  },
  // Room Selector
  room_selector: {
    title: "Seleccionar Habitaciones",
    selected_count: "{{count}} seleccionadas"
  },
  // Map Selector
  map_selector: {
    unknown: "Mapa desconocido"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "No hay mapa disponible",
    looking_for: "Buscando: {{entity}}",
    room_overlay: "Haga clic en los números de las habitaciones para seleccionarlas para la limpieza",
    zone_overlay_create: "Haga clic en el mapa para colocar una zona de limpieza",
    zone_overlay_resize: "Arrastre las esquinas para cambiar el tamaño, haga clic en otro lugar para reposicionar",
    clear_zone: "Borrar zona",
    switch_to_list: "Cambiar a vista de lista",
    switch_to_map: "Cambiar a vista de mapa",
    room_list_overlay: "Toque las habitaciones para seleccionarlas para la limpieza",
    no_rooms: "No hay habitaciones disponibles",
    zoom_in: "Acercar",
    zoom_out: "Alejar",
    zoom_reset: "Restablecer zoom",
    lock_map: "Bloquear mapa",
    unlock_map: "Desbloquear mapa"
  },
  // Mode Tabs
  modes: {
    room: "Habitaciones",
    all: "Todo",
    zone: "Zona"
  },
  // Action Buttons
  actions: {
    clean: "Limpiar",
    clean_all: "Limpiar Todo",
    clean_rooms: "Limpiar {{count}} Habitación",
    clean_rooms_plural: "Limpiar {{count}} Habitaciones",
    select_rooms: "Seleccionar Habitaciones",
    zone_clean: "Limpiar Zona",
    pause: "Pausar",
    resume: "Reanudar",
    stop: "Detener",
    stop_and_dock: "Detener y volver",
    dock: "Base"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} seleccionada",
    deselected_room: "{{name}} deseleccionada",
    paused: "Limpieza pausada",
    stopped: "Limpieza detenida",
    docked: "Volviendo a la base",
    cleaning_started: "Limpieza iniciada",
    resuming: "Reanudando limpieza",
    starting_full_clean: "Iniciando limpieza de toda la casa",
    pausing_vacuum: "Pausando aspirador",
    stopping_vacuum: "Deteniendo aspirador",
    stopping_and_docking: "Deteniendo y volviendo a la base",
    vacuum_docking: "Aspirador volviendo a la base",
    starting_room_clean: "Iniciando limpieza para {{count}} habitación seleccionada",
    starting_room_clean_plural: "Iniciando limpieza para {{count}} habitaciones seleccionadas",
    starting_zone_clean: "Iniciando limpieza de zona",
    select_rooms_first: "Por favor, seleccione primero las habitaciones a limpiar",
    cannot_determine_map: "No se pueden determinar las dimensiones del mapa",
    select_zone_first: "Por favor, seleccione una zona en el mapa"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Habitaciones seleccionadas:",
    selected_label: "Seleccionadas:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Personalizado: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Ver accesos directos",
    repeats_tooltip: "Pasadas de limpieza",
    vac_and_mop: "Aspirar y Trapear",
    mop_after_vac: "Trapear después de aspirar",
    vacuum: "Aspirar",
    mop: "Trapear"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Modo de limpieza",
    clean_genius: "CleanGenius",
    custom: "Personalizado"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Accesos directos",
    no_shortcuts: "No hay accesos directos disponibles",
    create_hint: "Cree accesos directos en la aplicación Dreame para iniciar rápidamente sus rutinas de limpieza favoritas"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Modo de limpieza",
    suction_power_title: "Potencia de succión",
    max_plus_description: "La potencia de succión se incrementará al máximo nivel, es un modo de un solo uso.",
    wetness_title: "Humedad",
    mop_pad_humidity_title: "Humedad de la mopa",
    slightly_dry: "Ligeramente seco",
    moist: "Húmedo",
    wet: "Mojado",
    water_volume_title: "Volumen de agua",
    water_low: "Bajo",
    water_medium: "Medio",
    water_high: "Alto",
    mop_washing_frequency_title: "Frecuencia de lavado de mopa",
    route_title: "Ruta",
    mop_pressure_title: "Presión de la mopa",
    mop_temperature_title: "Temperatura del agua"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Ligera",
    normal: "Normal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normal",
    warm: "Templada"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Personalizar",
    description: "Establece preferencias personalizadas de succión y fregado para cada área.",
    set_button: "Configurar",
    vacuum: "Aspirar",
    mop: "Fregar",
    vac_and_mop: "Aspirar y fregar",
    cycles: "Ciclos",
    apply_to_all: "Aplicar a todas las habitaciones",
    click_room_hint: "Haz clic en un área para cambiar el modo.",
    intelligent_recommendation: "Recomendación inteligente",
    select_room: "Seleccionar habitación",
    settings_for: "Ajustes de {{room}}",
    no_rooms: "No hay habitaciones disponibles"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Modo de limpieza",
    deep_cleaning: "Limpieza profunda"
  },
  // Header
  header: {
    battery: "Batería",
    status: "Estado",
    area: "Área",
    time: "Tiempo"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Silencioso",
    standard: "Estándar",
    strong: "Turbo",
    turbo: "Máximo"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Por habitación",
    by_area: "Por área",
    by_time: "Por tiempo"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Rápido",
    standard: "Estándar",
    intensive: "Intensivo",
    deep: "Profundo"
  },
  // Errors
  errors: {
    entity_not_found: "Entidad no encontrada: {{entity}}",
    failed_to_load: "Error al cargar datos de la entidad",
    service_call_failed: "Error al enviar comando a la aspiradora",
    entity_unavailable: "Aspiradora no disponible"
  },
  // Settings Panel
  settings: {
    title: "Ajustes",
    consumables: {
      title: "Consumibles",
      main_brush: "Cepillo principal",
      side_brush: "Cepillo lateral",
      filter: "Filtro",
      sensor: "Sensor",
      mop_pad: "Almohadilla de fregado",
      silver_ion: "Ion de plata",
      detergent: "Detergente",
      squeegee: "Escobilla",
      tank_filter: "Filtro del tanque",
      onboard_dirty_water_tank: "Tanque de agua sucia integrado",
      dirty_water_channel: "Canal de agua sucia",
      deodorizer: "Desodorizador",
      wheel: "Rueda",
      scale_inhibitor: "Inhibidor de cal",
      fluffing_roller: "Rodillo esponjador",
      roller_mop_filter: "Filtro de rodillo fregona",
      water_outlet_filter: "Filtro de salida de agua",
      remaining: "restante",
      reset: "Restablecer"
    },
    device_info: {
      title: "Información del dispositivo",
      firmware: "Firmware",
      total_area: "Área total limpiada",
      total_time: "Tiempo total de limpieza",
      total_cleans: "Limpiezas totales",
      wifi_ssid: "Red Wi-Fi",
      wifi_signal: "Intensidad de señal",
      ip_address: "Dirección IP"
    },
    quick_settings: {
      title: "Ajustes rápidos",
      child_lock: "Bloqueo infantil",
      child_lock_desc: "Desactivar botones físicos del dispositivo",
      resume_cleaning: "Reanudar limpieza",
      resume_cleaning_desc: "Reanudar automáticamente la limpieza después de cargar",
      dnd: "No molestar",
      dnd_desc: "Horas de silencio con actividad reducida",
      dnd_start: "Hora de inicio",
      dnd_end: "Hora de fin",
      dnd_disable_resume: "Desactivar reanudación",
      dnd_disable_resume_desc: "No reanudar limpieza durante No molestar",
      dnd_disable_auto_empty: "Desactivar vaciado auto",
      dnd_disable_auto_empty_desc: "No vaciar automáticamente durante No molestar",
      dnd_reduce_volume: "Reducir volumen",
      dnd_reduce_volume_desc: "Bajar volumen del dispositivo durante No molestar"
    },
    volume: {
      title: "Volumen y sonido",
      volume: "Volumen",
      test_sound: "Localizar",
      muted: "Silenciado",
      voice_assistant: "Asistente de voz",
      voice_assistant_desc: "Habilitar anuncios y retroalimentación por voz",
      voice_language: "Idioma de voz",
      voice_language_desc: "Idioma para los anuncios de voz",
      streaming_voice_prompt: "Avisos de voz en tiempo real",
      streaming_voice_prompt_desc: "Retroalimentación por voz en tiempo real durante la limpieza"
    },
    carpet: {
      title: "Configuración de alfombras",
      carpet_recognition: "Reconocimiento de alfombras",
      carpet_recognition_desc: "Detectar alfombras automáticamente",
      carpet_avoidance: "Evitar alfombras",
      carpet_avoidance_desc: "Evitar alfombras durante el fregado",
      clean_carpets_first: "Limpiar alfombras primero",
      clean_carpets_first_desc: "Aspirar alfombras antes de trapear",
      carpet_boost: "Potencia en alfombras",
      carpet_boost_desc: "Aumentar potencia de succión en alfombras",
      intensive_cleaning: "Limpieza intensiva",
      intensive_cleaning_desc: "Limpieza profunda con pasadas extra",
      side_brush_rotate: "Rotar cepillo lateral",
      side_brush_rotate_desc: "Rotar cepillo lateral en alfombras",
      sensitivity: "Sensibilidad de alfombras",
      sensitivity_desc: "Nivel de sensibilidad de detección",
      sensitivity_low: "Baja",
      sensitivity_medium: "Media",
      sensitivity_high: "Alta",
      cleaning_mode: "Limpieza de alfombras",
      cleaning_mode_desc: "Cómo manejar alfombras durante la limpieza",
      mode_vacuum: "Aspirar",
      mode_vacuum_and_mop: "Asp. y Trap.",
      mode_avoidance: "Evitar",
      mode_ignore: "Ignorar",
      vacuum_mode: "Modo aspirado",
      vacuum_adaptation: "Levantar mopa",
      vacuum_remove_mop: "Quitar mopa"
    },
    floor: {
      title: "Configuración de suelo",
      obstacle_avoidance: "Evitación de obstáculos",
      obstacle_avoidance_desc: "Usar sensores para evitar obstáculos",
      collision_avoidance: "Evitar colisiones",
      collision_avoidance_desc: "Reducir velocidad cerca de paredes y muebles",
      auto_mount_mop: "Montar mopa auto",
      auto_mount_mop_desc: "Montar automáticamente la almohadilla de mopa",
      auto_recleaning: "Re-limpieza auto",
      auto_recleaning_desc: "Volver a limpiar áreas perdidas automáticamente",
      recleaning_off: "Desactivado",
      recleaning_in_deep_mode: "En modo profundo",
      recleaning_in_all_modes: "En todos los modos",
      stain_avoidance: "Evitación de manchas",
      stain_avoidance_desc: "Evitar manchas detectadas",
      tight_mopping: "Fregado minucioso",
      tight_mopping_desc: "Fregar más cerca de paredes y bordes",
      floor_direction_cleaning: "Limpieza según dirección del suelo",
      floor_direction_cleaning_desc: "Limpiar siguiendo la veta del suelo",
      large_particles_boost: "Potencia para partículas grandes",
      large_particles_boost_desc: "Aumentar succión para residuos grandes",
      pet_focused_cleaning: "Limpieza enfocada en mascotas",
      pet_focused_cleaning_desc: "Limpieza extra en áreas de mascotas",
      low_lying_area_frequency: "Frecuencia de zonas bajas",
      low_lying_area_frequency_desc: "Con qué frecuencia limpiar zonas bajas bajo los muebles"
    },
    edge_corner: {
      title: "Bordes y Esquinas",
      side_reach: "Alcance lateral",
      side_reach_desc: "Extender cepillo lateral para bordes",
      mop_extend: "Extensión de mopa",
      mop_extend_desc: "Extender mopa para bordes y esquinas",
      gap_cleaning: "Limpieza de huecos",
      gap_cleaning_desc: "Limpiar espacios estrechos entre muebles",
      mopping_under: "Fregar bajo muebles",
      mopping_under_desc: "Extender mopa bajo muebles bajos",
      extend_frequency: "Frecuencia de extensión",
      extend_frequency_desc: "Frecuencia de extensión para limpieza de bordes",
      frequency_standard: "Estándar",
      frequency_intelligent: "Inteligente",
      frequency_high: "Alta"
    },
    dock: {
      title: "Configuración de base",
      self_clean: "Autolimpieza",
      self_clean_desc: "Lavar mopa automáticamente después de limpiar",
      auto_empty_mode: "Modo vaciado auto",
      auto_empty_mode_desc: "Cuándo vaciar automáticamente el depósito",
      auto_empty_frequency: "Frecuencia vaciado auto",
      auto_empty_frequency_desc: "Cuántas limpiezas antes del vaciado auto",
      empty_off: "Desactivado",
      empty_standard: "Estándar",
      empty_high_frequency: "Alta frecuencia",
      empty_low_frequency: "Baja frecuencia",
      auto_detergent: "Detergente auto",
      auto_detergent_desc: "Añadir detergente automáticamente al lavar",
      mop_washing_with_detergent: "Lavado de mopa con detergente",
      mop_washing_with_detergent_desc: "Usar detergente al lavar la mopa",
      mopping_with_detergent: "Fregado con detergente",
      mopping_with_detergent_desc: "Usar detergente al fregar el suelo",
      water_electrolysis: "Electrólisis de agua",
      water_electrolysis_desc: "Esterilizar agua mediante electrólisis",
      auto_water_refilling: "Rellenado auto de agua",
      auto_water_refilling_desc: "Rellenar automáticamente el tanque de agua limpia",
      auto_dust_collecting: "Recolección auto de polvo",
      auto_dust_collecting_desc: "Vaciar automáticamente el depósito después de limpiar",
      smart_washing: "Lavado inteligente",
      smart_washing_desc: "Ajustar lavado según nivel de suciedad",
      mop_wash_level: "Nivel lavado mopa",
      mop_wash_level_desc: "Intensidad del lavado de la mopa",
      washing_mode: "Modo lavado",
      washing_mode_desc: "Intensidad del lavado de la mopa",
      washing_light: "Ligero",
      washing_standard: "Estándar",
      washing_deep: "Profundo",
      water_temperature: "Temperatura del agua",
      water_temperature_desc: "Temperatura para lavar la mopa",
      temp_normal: "Normal",
      temp_mild: "Suave",
      temp_warm: "Templada",
      temp_hot: "Caliente",
      auto_drying: "Secado auto",
      auto_drying_desc: "Secar automáticamente la mopa después de limpiar",
      drying_time: "Tiempo de secado",
      drying_time_desc: "Duración del secado de la mopa",
      auto_rewashing: "Relavado automático",
      auto_rewashing_desc: "Relavar mopa automáticamente cuando esté sucia",
      rewashing_off: "Desactivado",
      rewashing_in_deep_mode: "En modo profundo",
      rewashing_in_all_modes: "En todos los modos",
      off_peak_charging: "Carga en horas valle",
      off_peak_charging_desc: "Cargar en horas valle para ahorrar energía",
      off_peak_charging_start: "Hora de inicio",
      off_peak_charging_end: "Hora de fin",
      station_cleaning: "Limpieza de estación",
      station_cleaning_desc: "Limpiar la estación base",
      clean_now: "Limpiar ahora",
      self_repair: "Auto-reparación",
      self_repair_desc: "Ejecutar diagnóstico de auto-reparación de la estación",
      repair_now: "Reparar",
      scraper_frequency: "Frecuencia del raspador",
      scraper_frequency_desc: "Con qué frecuencia limpiar el raspador de goma"
    },
    ai_detection: {
      title: "IA y detección",
      intelligent_recognition: "Reconocimiento inteligente",
      intelligent_recognition_desc: "Reconocimiento del entorno con IA",
      ai_obstacle_detection: "Detección de obstáculos con IA",
      ai_obstacle_detection_desc: "Usar IA para identificar y evitar obstáculos",
      fuzzy_obstacle_detection: "Detección de obstáculos difusos",
      fuzzy_obstacle_detection_desc: "Detectar obstáculos suaves o poco claros",
      ai_obstacle_image_upload: "Carga de imágenes de obstáculos",
      ai_obstacle_image_upload_desc: "Cargar imágenes de obstáculos para análisis",
      ai_obstacle_picture: "Foto de obstáculo",
      ai_obstacle_picture_desc: "Tomar fotos de obstáculos detectados",
      ai_pet_detection: "Detección de mascotas",
      ai_pet_detection_desc: "Detectar y evitar mascotas",
      ai_pet_avoidance: "Evitar mascotas",
      ai_pet_avoidance_desc: "Evitar activamente las mascotas detectadas",
      pet_focused_detection: "Detección enfocada en mascotas",
      pet_focused_detection_desc: "Detección mejorada para áreas de mascotas",
      pet_picture: "Foto de mascota",
      pet_picture_desc: "Tomar fotos de mascotas detectadas",
      ai_human_detection: "Detección de personas",
      ai_human_detection_desc: "Detectar y evitar personas",
      human_follow: "Seguir personas",
      human_follow_desc: "Seguir personas para limpieza interactiva",
      ai_furniture_detection: "Detección de muebles",
      ai_furniture_detection_desc: "Detectar y navegar alrededor de muebles",
      ai_fluid_detection: "Detección de líquidos",
      ai_fluid_detection_desc: "Detectar y evitar líquidos",
      fill_light: "Luz de relleno",
      fill_light_desc: "Usar luz de relleno para mejor detección",
      camera_light_auto: "Brillo automático de cámara",
      camera_light_auto_desc: "Ajustar automáticamente el brillo de la luz de la cámara",
      camera_light_brightness: "Brillo de luz de cámara",
      camera_light_brightness_desc: "Nivel de brillo manual de la luz de la cámara"
    },
    station_controls: {
      title: "Controles de estación",
      self_clean: "Autolimpieza",
      self_clean_desc: "Iniciar ciclo de lavado de mopa",
      manual_drying: "Secado manual",
      manual_drying_desc: "Iniciar ciclo de secado de mopa",
      water_tank_draining: "Vaciar tanque",
      water_tank_draining_desc: "Drenar agua sucia del tanque",
      base_station_cleaning: "Limpiar estación",
      base_station_cleaning_desc: "Limpiar la estación base",
      empty_water_tank: "Vaciar tanque de agua",
      empty_water_tank_desc: "Vaciar el tanque de recolección de agua",
      start_auto_empty: "Vaciado automático",
      start_auto_empty_desc: "Iniciar vaciado automático del depósito",
      start_recleaning: "Relimpieza",
      start_recleaning_desc: "Iniciar relimpieza de áreas perdidas",
      clear_warning: "Limpiar advertencia",
      clear_warning_desc: "Limpiar mensajes de advertencia actuales"
    },
    map: {
      title: "Configuración del mapa",
      multi_floor: "Mapa multi-piso",
      multi_floor_desc: "Habilitar soporte para mapas de múltiples pisos",
      rotation: "Rotación del mapa",
      rotation_desc: "Girar la orientación del mapa",
      mapping_actions: "Acciones de mapeo",
      start_mapping: "Iniciar mapeo",
      start_fast_mapping: "Mapeo rápido"
    }
  }
}, Kw = {
  // Common
  common: {
    run: "Uitvoeren",
    start: "Start",
    stop: "Stop",
    cancel: "Annuleren",
    save: "Opslaan",
    apply: "Toepassen",
    reset: "Resetten"
  },
  // Kamer Kiezer
  room_selector: {
    title: "Kamers Selecteren",
    selected_count: "{{count}} geselecteerd"
  },
  // Kaart Kiezer
  map_selector: {
    unknown: "Onbekende kaart"
  },
  // Stofzuiger Kaart
  vacuum_map: {
    no_map: "Geen kaart beschikbaar",
    looking_for: "Zoeken naar: {{entity}}",
    room_overlay: "Klik op kamernummers om kamers te selecteren voor reiniging",
    zone_overlay_create: "Klik op de kaart om een schoonmaakzone te plaatsen",
    zone_overlay_resize: "Sleep de hoeken om aan te passen, klik elders om te verplaatsen",
    clear_zone: "Zone wissen",
    switch_to_list: "Naar lijstweergave",
    switch_to_map: "Naar kaartweergave",
    room_list_overlay: "Tik op kamers om te selecteren voor reiniging",
    no_rooms: "Geen kamers beschikbaar",
    zoom_in: "Inzoomen",
    zoom_out: "Uitzoomen",
    zoom_reset: "Zoom resetten",
    lock_map: "Kaart vergrendelen",
    unlock_map: "Kaart ontgrendelen"
  },
  // Modus Tabbladen
  modes: {
    room: "Kamer",
    all: "Alles",
    zone: "Zone"
  },
  // Actieknoppen
  actions: {
    clean: "Schoonmaken",
    clean_all: "Alles Schoonmaken",
    clean_rooms: "Schoonmaken ({{count}} kamer)",
    clean_rooms_plural: "Schoonmaken ({{count}} kamers)",
    select_rooms: "Kamers Selecteren",
    zone_clean: "Zone Reinigen",
    pause: "Pauze",
    resume: "Hervatten",
    stop: "Stop",
    stop_and_dock: "Stop & Docken",
    dock: "Docken"
  },
  // Meldingen (Toasts)
  toast: {
    selected_room: "{{name}} geselecteerd",
    deselected_room: "{{name}} gedeselecteerd",
    paused: "Schoonmaken gepauzeerd",
    stopped: "Schoonmaken gestopt",
    docked: "Keert terug naar dock",
    cleaning_started: "Schoonmaken gestart",
    resuming: "Schoonmaken wordt hervat",
    starting_full_clean: "Start volledige reiniging van het huis",
    pausing_vacuum: "Stofzuiger pauzeren",
    stopping_vacuum: "Stofzuiger stoppen",
    stopping_and_docking: "Stoppen en terugkeren naar dock",
    vacuum_docking: "Stofzuiger keert terug naar dock",
    starting_room_clean: "Start reinigen van {{count}} geselecteerde kamer",
    starting_room_clean_plural: "Start reinigen van {{count}} geselecteerde kamers",
    starting_zone_clean: "Zone-reiniging gestart",
    select_rooms_first: "Selecteer eerst de kamers die je wilt schoonmaken",
    cannot_determine_map: "Kan afmetingen van de kaart niet bepalen",
    select_zone_first: "Selecteer eerst een zone op de kaart"
  },
  // Kamer Selectie Weergave
  room_display: {
    selected_rooms: "Geselecteerde Kamers:",
    selected_label: "Geselecteerd:"
  },
  // Schoonmaakmodus Knop
  cleaning_mode_button: {
    prefix_custom: "Aangepast: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Snelkoppelingen bekijken",
    repeats_tooltip: "Reinigingspassen",
    vac_and_mop: "Stofzuigen & Dweilen",
    mop_after_vac: "Dweilen na Stofzuigen",
    vacuum: "Stofzuigen",
    mop: "Dweilen"
  },
  // Schoonmaakmodus Modal
  cleaning_mode: {
    title: "Schoonmaakmodus",
    clean_genius: "CleanGenius",
    custom: "Aangepast"
  },
  // Snelkoppelingen Modal
  shortcuts: {
    title: "Snelkoppelingen",
    no_shortcuts: "Geen snelkoppelingen beschikbaar",
    create_hint: "Maak snelkoppelingen aan in de Dreame app om snel je favoriete routines te starten"
  },
  // Aangepaste Modus
  custom_mode: {
    cleaning_mode_title: "Schoonmaakmodus",
    suction_power_title: "Zuigkracht",
    max_plus_description: "De zuigkracht wordt verhoogd naar het hoogste niveau (eenmalige modus).",
    wetness_title: "Vochtigheid",
    mop_pad_humidity_title: "Dweildoek Vochtigheid",
    slightly_dry: "Licht droog",
    moist: "Vochtig",
    wet: "Nat",
    water_volume_title: "Watervolume",
    water_low: "Laag",
    water_medium: "Gemiddeld",
    water_high: "Hoog",
    mop_washing_frequency_title: "Dweil-wasfrequentie",
    route_title: "Route",
    mop_pressure_title: "Dweildruk",
    mop_temperature_title: "Watertemperatuur"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Licht",
    normal: "Normaal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normaal",
    warm: "Warm"
  },
  // Aanpassen Schoonmaakmodus
  customize: {
    title: "Aanpassen",
    description: "Stel gepersonaliseerde zuig- en dweilvoorkeuren in voor elk gebied.",
    set_button: "Instellen",
    vacuum: "Zuigen",
    mop: "Dweilen",
    vac_and_mop: "Zuigen & dweilen",
    cycles: "Cycli",
    apply_to_all: "Toepassen op alle kamers",
    click_room_hint: "Klik op een gebied om de modus te wijzigen.",
    intelligent_recommendation: "Intelligente aanbeveling",
    select_room: "Selecteer kamer",
    settings_for: "{{room}} instellingen",
    no_rooms: "Geen kamers beschikbaar"
  },
  // CleanGenius Modus
  cleangenius_mode: {
    cleaning_mode_title: "Schoonmaakmodus",
    deep_cleaning: "Grondige Reiniging"
  },
  // Header
  header: {
    battery: "Batterij",
    status: "Status",
    area: "Oppervlak",
    time: "Tijd"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Stil",
    standard: "Standaard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Per kamer",
    by_area: "Per oppervlak",
    by_time: "Per tijd"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Snel",
    standard: "Standaard",
    intensive: "Intensief",
    deep: "Diep"
  },
  // Fouten
  errors: {
    entity_not_found: "Entiteit niet gevonden: {{entity}}",
    failed_to_load: "Kan entiteitsgegevens niet laden",
    service_call_failed: "Kan opdracht niet naar stofzuiger sturen",
    entity_unavailable: "Stofzuiger niet beschikbaar"
  },
  // Instellingenpaneel
  settings: {
    title: "Instellingen",
    consumables: {
      title: "Onderdelen & Verbruik",
      main_brush: "Hoofdborstel",
      side_brush: "Zijborstel",
      filter: "Filter",
      sensor: "Sensor",
      mop_pad: "Dweilpad",
      silver_ion: "Zilverion",
      detergent: "Reinigingsmiddel",
      squeegee: "Trekker",
      tank_filter: "Tankfilter",
      onboard_dirty_water_tank: "Ingebouwde vuilwatertank",
      dirty_water_channel: "Vuilwaterkanaal",
      deodorizer: "Luchtverfrisser",
      wheel: "Wiel",
      scale_inhibitor: "Kalkremmer",
      fluffing_roller: "Pluizende roller",
      roller_mop_filter: "Rollermopfilter",
      water_outlet_filter: "Wateruitlaatfilter",
      remaining: "resterend",
      reset: "Resetten"
    },
    device_info: {
      title: "Apparaatinfo",
      firmware: "Firmware",
      total_area: "Totaal Gereinigd Oppervlak",
      total_time: "Totale Schoonmaaktijd",
      total_cleans: "Totaal Aantal Reinigingen",
      wifi_ssid: "Wifi-netwerk",
      wifi_signal: "Signaalsterkte",
      ip_address: "IP-adres"
    },
    quick_settings: {
      title: "Snelle Instellingen",
      child_lock: "Kinderslot",
      child_lock_desc: "Fysieke knoppen op het apparaat uitschakelen",
      resume_cleaning: "Reiniging hervatten",
      resume_cleaning_desc: "Automatisch reiniging hervatten na opladen",
      dnd: "Niet Storen",
      dnd_desc: "Stille uren met beperkte activiteit",
      dnd_start: "Starttijd",
      dnd_end: "Eindtijd",
      dnd_disable_resume: "Hervatten uitschakelen",
      dnd_disable_resume_desc: "Niet hervatten tijdens Niet Storen",
      dnd_disable_auto_empty: "Auto legen uitschakelen",
      dnd_disable_auto_empty_desc: "Niet automatisch legen tijdens Niet Storen",
      dnd_reduce_volume: "Volume verlagen",
      dnd_reduce_volume_desc: "Apparaatvolume verlagen tijdens Niet Storen"
    },
    volume: {
      title: "Volume & Geluid",
      volume: "Volume",
      test_sound: "Lokaliseren",
      muted: "Gedempt",
      voice_assistant: "Spraakassistent",
      voice_assistant_desc: "Spraakmeldingen en feedback inschakelen",
      voice_language: "Spraaktaal",
      voice_language_desc: "Taal voor spraakmeldingen",
      streaming_voice_prompt: "Realtime spraakprompt",
      streaming_voice_prompt_desc: "Realtime spraakfeedback tijdens reiniging"
    },
    carpet: {
      title: "Tapijtinstellingen",
      carpet_recognition: "Tapijtherkenning",
      carpet_recognition_desc: "Tapijten automatisch detecteren",
      carpet_avoidance: "Tapijt vermijden",
      carpet_avoidance_desc: "Tapijten vermijden tijdens dweilen",
      clean_carpets_first: "Tapijten eerst reinigen",
      clean_carpets_first_desc: "Tapijten stofzuigen voor het dweilen",
      carpet_boost: "Tapijtboost",
      carpet_boost_desc: "Zuigkracht verhogen op tapijt",
      intensive_cleaning: "Intensieve reiniging",
      intensive_cleaning_desc: "Dieptereiniging met extra passages",
      side_brush_rotate: "Zijborstel draaien",
      side_brush_rotate_desc: "Zijborstel draaien op tapijten",
      sensitivity: "Tapijtgevoeligheid",
      sensitivity_desc: "Gevoeligheidsniveau voor detectie",
      sensitivity_low: "Laag",
      sensitivity_medium: "Gemiddeld",
      sensitivity_high: "Hoog",
      cleaning_mode: "Tapijtreiniging",
      cleaning_mode_desc: "Hoe tapijten behandelen tijdens het reinigen",
      mode_vacuum: "Stofzuigen",
      mode_vacuum_and_mop: "Zuig & Dweil",
      mode_avoidance: "Vermijden",
      mode_ignore: "Negeren",
      vacuum_mode: "Stofzuigmodus",
      vacuum_adaptation: "Dweil optillen",
      vacuum_remove_mop: "Dweil verwijderen"
    },
    floor: {
      title: "Vloerinstellingen",
      obstacle_avoidance: "Obstakelvermijding",
      obstacle_avoidance_desc: "Sensoren gebruiken om obstakels te vermijden",
      collision_avoidance: "Botsing vermijden",
      collision_avoidance_desc: "Vertragen bij muren en meubels",
      auto_mount_mop: "Auto dweil monteren",
      auto_mount_mop_desc: "Automatisch dweilpad bevestigen wanneer nodig",
      auto_recleaning: "Auto her-reiniging",
      auto_recleaning_desc: "Automatisch gemiste gebieden opnieuw reinigen",
      recleaning_off: "Uit",
      recleaning_in_deep_mode: "In diepe modus",
      recleaning_in_all_modes: "In alle modi",
      stain_avoidance: "Vlekvermijding",
      stain_avoidance_desc: "Gedetecteerde vlekken vermijden",
      tight_mopping: "Grondig dweilen",
      tight_mopping_desc: "Dweilen dichter bij muren en randen",
      floor_direction_cleaning: "Vloerichting reiniging",
      floor_direction_cleaning_desc: "Reinigen langs de vloernerf",
      large_particles_boost: "Grote deeltjes boost",
      large_particles_boost_desc: "Zuigkracht verhogen voor groot vuil",
      pet_focused_cleaning: "Huisdier-gerichte reiniging",
      pet_focused_cleaning_desc: "Extra reiniging in huisdiergebieden",
      low_lying_area_frequency: "Lage-zonefrequentie",
      low_lying_area_frequency_desc: "Hoe vaak lage zones onder meubels reinigen"
    },
    edge_corner: {
      title: "Randen & Hoeken",
      side_reach: "Zijbereik",
      side_reach_desc: "Zijborstel uitschuiven voor randen",
      mop_extend: "Dweil uitschuiven",
      mop_extend_desc: "Dweil uitschuiven voor randen en hoeken",
      gap_cleaning: "Spleetreiniging",
      gap_cleaning_desc: "Smalle spleten tussen meubels reinigen",
      mopping_under: "Dweilen onder meubels",
      mopping_under_desc: "Dweil uitschuiven onder lage meubels",
      extend_frequency: "Uitschuiffrequentie",
      extend_frequency_desc: "Hoe vaak dweil uitschuiven voor randenreiniging",
      frequency_standard: "Standaard",
      frequency_intelligent: "Intelligent",
      frequency_high: "Hoog"
    },
    dock: {
      title: "Dock-instellingen",
      self_clean: "Zelfreiniging",
      self_clean_desc: "Auto dweil wassen na reiniging",
      auto_empty_mode: "Auto legen modus",
      auto_empty_mode_desc: "Wanneer automatisch de stofbak legen",
      auto_empty_frequency: "Auto legen frequentie",
      auto_empty_frequency_desc: "Hoeveel reinigingen voor auto legen",
      empty_off: "Uit",
      empty_standard: "Standaard",
      empty_high_frequency: "Hoge frequentie",
      empty_low_frequency: "Lage frequentie",
      auto_detergent: "Auto wasmiddel",
      auto_detergent_desc: "Automatisch wasmiddel toevoegen bij wassen",
      mop_washing_with_detergent: "Dweil wassen met wasmiddel",
      mop_washing_with_detergent_desc: "Wasmiddel gebruiken bij dweil wassen",
      mopping_with_detergent: "Dweilen met wasmiddel",
      mopping_with_detergent_desc: "Wasmiddel gebruiken tijdens het dweilen",
      water_electrolysis: "Water elektrolyse",
      water_electrolysis_desc: "Water steriliseren met elektrolyse",
      auto_water_refilling: "Auto water bijvullen",
      auto_water_refilling_desc: "Automatisch schoonwatertank bijvullen",
      auto_dust_collecting: "Auto stof verzamelen",
      auto_dust_collecting_desc: "Automatisch stofbak legen na reiniging",
      smart_washing: "Slim wassen",
      smart_washing_desc: "Wassen aanpassen op basis van vuilniveau",
      mop_wash_level: "Dweil wasniveau",
      mop_wash_level_desc: "Intensiteit van dweil wassen",
      washing_mode: "Wasmodus",
      washing_mode_desc: "Intensiteit van dweil wassen",
      washing_light: "Licht",
      washing_standard: "Standaard",
      washing_deep: "Diep",
      water_temperature: "Watertemperatuur",
      water_temperature_desc: "Temperatuur voor dweil wassen",
      temp_normal: "Normaal",
      temp_mild: "Mild",
      temp_warm: "Warm",
      temp_hot: "Heet",
      auto_drying: "Auto drogen",
      auto_drying_desc: "Automatisch dweil drogen na reiniging",
      drying_time: "Droogtijd",
      drying_time_desc: "Duur van dweil drogen",
      auto_rewashing: "Auto herwassen",
      auto_rewashing_desc: "Automatisch dweil herwassen wanneer vuil",
      rewashing_off: "Uit",
      rewashing_in_deep_mode: "In diepe modus",
      rewashing_in_all_modes: "In alle modi",
      off_peak_charging: "Daluren opladen",
      off_peak_charging_desc: "Opladen tijdens daluren om energie te besparen",
      off_peak_charging_start: "Starttijd",
      off_peak_charging_end: "Eindtijd",
      station_cleaning: "Station reiniging",
      station_cleaning_desc: "Het basisstation reinigen",
      clean_now: "Nu reinigen",
      self_repair: "Zelfreparatie",
      self_repair_desc: "Station zelfreparatie diagnose uitvoeren",
      repair_now: "Repareren",
      scraper_frequency: "Schraperfrequentie",
      scraper_frequency_desc: "Hoe vaak de rubberen schraper reinigen"
    },
    ai_detection: {
      title: "AI & Detectie",
      intelligent_recognition: "Intelligente herkenning",
      intelligent_recognition_desc: "AI-gestuurde omgevingsherkenning",
      ai_obstacle_detection: "AI-obstakeldetectie",
      ai_obstacle_detection_desc: "AI gebruiken om obstakels te herkennen en vermijden",
      fuzzy_obstacle_detection: "Vage obstakeldetectie",
      fuzzy_obstacle_detection_desc: "Zachte of onduidelijke obstakels detecteren",
      ai_obstacle_image_upload: "Obstakelfoto's uploaden",
      ai_obstacle_image_upload_desc: "Foto's van obstakels uploaden voor analyse",
      ai_obstacle_picture: "Obstakelfoto",
      ai_obstacle_picture_desc: "Foto's maken van gedetecteerde obstakels",
      ai_pet_detection: "Huisdierdetectie",
      ai_pet_detection_desc: "Huisdieren detecteren en vermijden",
      ai_pet_avoidance: "Huisdier vermijden",
      ai_pet_avoidance_desc: "Actief gedetecteerde huisdieren vermijden",
      pet_focused_detection: "Huisdier-gerichte detectie",
      pet_focused_detection_desc: "Verbeterde detectie voor huisdiergebieden",
      pet_picture: "Huisdierfoto",
      pet_picture_desc: "Foto's maken van gedetecteerde huisdieren",
      ai_human_detection: "Personendetectie",
      ai_human_detection_desc: "Personen detecteren en vermijden",
      human_follow: "Persoon volgen",
      human_follow_desc: "Personen volgen voor interactieve reiniging",
      ai_furniture_detection: "Meubeldetectie",
      ai_furniture_detection_desc: "Meubels detecteren en eromheen navigeren",
      ai_fluid_detection: "Vloeistofdetectie",
      ai_fluid_detection_desc: "Vloeistoffen detecteren en vermijden",
      fill_light: "Bijverlichting",
      fill_light_desc: "Bijverlichting gebruiken voor betere detectie",
      camera_light_auto: "Auto camerahelderheid",
      camera_light_auto_desc: "Cameralicht helderheid automatisch aanpassen",
      camera_light_brightness: "Cameralicht helderheid",
      camera_light_brightness_desc: "Handmatig cameralicht helderheidsniveau"
    },
    station_controls: {
      title: "Stationbediening",
      self_clean: "Zelfreiniging",
      self_clean_desc: "Start de dweilwascyclus",
      manual_drying: "Handmatig drogen",
      manual_drying_desc: "Start de dweildroogcyclus",
      water_tank_draining: "Watertank legen",
      water_tank_draining_desc: "Vuil water uit de tank laten lopen",
      base_station_cleaning: "Station reinigen",
      base_station_cleaning_desc: "Reinig het basisstation",
      empty_water_tank: "Watertank leegmaken",
      empty_water_tank_desc: "De wateropvangtank leegmaken",
      start_auto_empty: "Auto legen",
      start_auto_empty_desc: "Start automatisch stofbak legen",
      start_recleaning: "Her-reiniging",
      start_recleaning_desc: "Start her-reiniging van gemiste gebieden",
      clear_warning: "Waarschuwing wissen",
      clear_warning_desc: "Huidige waarschuwingsberichten wissen"
    },
    map: {
      title: "Kaartinstellingen",
      multi_floor: "Multi-verdiepingen kaart",
      multi_floor_desc: "Ondersteuning voor meerdere verdiepingskaarten inschakelen",
      rotation: "Kaartrotatie",
      rotation_desc: "Kaartoriëntatie draaien",
      mapping_actions: "Kaartacties",
      start_mapping: "Start kaartmaking",
      start_fast_mapping: "Snelle kaartmaking"
    }
  }
}, Xw = {
  // Common
  common: {
    run: "Esegui",
    start: "Avvia",
    stop: "Ferma",
    cancel: "Annulla",
    save: "Salva",
    apply: "Applica",
    reset: "Reimposta"
  },
  // Room Selector
  room_selector: {
    title: "Seleziona stanze",
    selected_count: "{{count}} selezionate"
  },
  // Map Selector
  map_selector: {
    unknown: "Mappa sconosciuta"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Nessuna mappa disponibile",
    looking_for: "Ricerca di: {{entity}}",
    room_overlay: "Clicca sui numeri delle stanze per selezionarle per la pulizia",
    zone_overlay_create: "Clicca sulla mappa per posizionare una zona di pulizia",
    zone_overlay_resize: "Trascina gli angoli per ridimensionare, clicca altrove per riposizionare",
    clear_zone: "Cancella zona",
    switch_to_list: "Passa alla vista elenco",
    switch_to_map: "Passa alla vista mappa",
    room_list_overlay: "Tocca le stanze per selezionarle per la pulizia",
    no_rooms: "Nessuna stanza disponibile",
    zoom_in: "Ingrandisci",
    zoom_out: "Riduci",
    zoom_reset: "Reimposta zoom",
    lock_map: "Blocca mappa",
    unlock_map: "Sblocca mappa"
  },
  // Mode Tabs
  modes: {
    room: "Stanza",
    all: "Tutto",
    zone: "Zona"
  },
  // Action Buttons
  actions: {
    clean: "Pulisci",
    clean_all: "Pulisci tutto",
    clean_rooms: "Pulisci {{count}} stanza",
    clean_rooms_plural: "Pulisci {{count}} stanze",
    select_rooms: "Seleziona stanze",
    zone_clean: "Pulizia zona",
    pause: "Pausa",
    resume: "Riprendi",
    stop: "Stop",
    stop_and_dock: "Stop e rientra",
    dock: "Rientra alla base"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} selezionata",
    deselected_room: "{{name}} deselezionata",
    paused: "Pulizia in pausa",
    stopped: "Pulizia interrotta",
    docked: "Rientro alla base in corso",
    cleaning_started: "Pulizia avviata",
    resuming: "Ripresa della pulizia",
    starting_full_clean: "Avvio pulizia completa della casa",
    pausing_vacuum: "Messa in pausa del robot",
    stopping_vacuum: "Arresto del robot",
    stopping_and_docking: "Arresto e rientro alla base",
    vacuum_docking: "Il robot sta rientrando alla base",
    starting_room_clean: "Avvio pulizia per {{count}} stanza selezionata",
    starting_room_clean_plural: "Avvio pulizia per {{count}} stanze selezionate",
    starting_zone_clean: "Avvio pulizia della zona",
    select_rooms_first: "Seleziona prima le stanze da pulire",
    cannot_determine_map: "Impossibile determinare le dimensioni della mappa",
    select_zone_first: "Seleziona una zona sulla mappa"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Stanze selezionate:",
    selected_label: "Selezionate:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Personalizzato: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Visualizza scorciatoie",
    repeats_tooltip: "Passaggi di pulizia",
    vac_and_mop: "Aspirazione e lavaggio",
    mop_after_vac: "Lavaggio dopo aspirazione",
    vacuum: "Aspirazione",
    mop: "Lavaggio"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Modalità di pulizia",
    clean_genius: "CleanGenius",
    custom: "Personalizzata"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Scorciatoie",
    no_shortcuts: "Nessuna scorciatoia disponibile",
    create_hint: "Crea scorciatoie nell'app Dreame per avviare rapidamente le tue routine di pulizia preferite"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Modalità di pulizia",
    suction_power_title: "Potenza di aspirazione",
    max_plus_description: "La potenza di aspirazione sarà aumentata al livello massimo. Modalità utilizzabile una sola volta.",
    wetness_title: "Livello di umidità",
    mop_pad_humidity_title: "Umidità del panno",
    slightly_dry: "Leggermente asciutto",
    moist: "Umido",
    wet: "Bagnato",
    water_volume_title: "Volume d'acqua",
    water_low: "Basso",
    water_medium: "Medio",
    water_high: "Alto",
    mop_washing_frequency_title: "Frequenza lavaggio mop",
    route_title: "Percorso",
    mop_pressure_title: "Pressione Mop",
    mop_temperature_title: "Temperatura dell'acqua"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Leggera",
    normal: "Normale"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normale",
    warm: "Calda"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Personalizza",
    description: "Imposta preferenze personalizzate di aspirazione e lavaggio per ogni area.",
    set_button: "Imposta",
    vacuum: "Aspira",
    mop: "Lava",
    vac_and_mop: "Aspira e lava",
    cycles: "Cicli",
    apply_to_all: "Applica a tutte le stanze",
    click_room_hint: "Clicca su un'area per cambiare la modalità.",
    intelligent_recommendation: "Raccomandazione intelligente",
    select_room: "Seleziona stanza",
    settings_for: "Impostazioni di {{room}}",
    no_rooms: "Nessuna stanza disponibile"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Modalità di pulizia",
    deep_cleaning: "Pulizia profonda"
  },
  // Header
  header: {
    battery: "Batteria",
    status: "Stato",
    area: "Area",
    time: "Tempo"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Silenzioso",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Per stanza",
    by_area: "Per area",
    by_time: "Per tempo"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Veloce",
    standard: "Standard",
    intensive: "Intensivo",
    deep: "Profondo"
  },
  // Errors
  errors: {
    entity_not_found: "Entità non trovata: {{entity}}",
    failed_to_load: "Impossibile caricare i dati entità",
    service_call_failed: "Impossibile inviare il comando all'aspirapolvere",
    entity_unavailable: "Aspirapolvere non disponibile"
  },
  // Settings Panel
  settings: {
    title: "Impostazioni",
    consumables: {
      title: "Materiali di consumo",
      main_brush: "Spazzola principale",
      side_brush: "Spazzola laterale",
      filter: "Filtro",
      sensor: "Sensore",
      mop_pad: "Panno lavapavimenti",
      silver_ion: "Ioni d'argento",
      detergent: "Detergente",
      squeegee: "Tergipavimento",
      tank_filter: "Filtro serbatoio",
      onboard_dirty_water_tank: "Serbatoio acqua sporca integrato",
      dirty_water_channel: "Canale acqua sporca",
      deodorizer: "Deodorante",
      wheel: "Ruota",
      scale_inhibitor: "Anticalcare",
      fluffing_roller: "Rullo spazzolatore",
      roller_mop_filter: "Filtro panno rotante",
      water_outlet_filter: "Filtro uscita acqua",
      remaining: "rimanente",
      reset: "Reimposta"
    },
    device_info: {
      title: "Informazioni dispositivo",
      firmware: "Firmware",
      total_area: "Area totale pulita",
      total_time: "Tempo totale di pulizia",
      total_cleans: "Pulizie totali",
      wifi_ssid: "Rete Wi-Fi",
      wifi_signal: "Potenza segnale",
      ip_address: "Indirizzo IP"
    },
    quick_settings: {
      title: "Impostazioni rapide",
      child_lock: "Blocco bambini",
      child_lock_desc: "Disabilita i pulsanti fisici del dispositivo",
      resume_cleaning: "Riprendi pulizia",
      resume_cleaning_desc: "Riprendi automaticamente la pulizia dopo la ricarica",
      dnd: "Non disturbare",
      dnd_desc: "Orari silenziosi con attività ridotta",
      dnd_start: "Ora di inizio",
      dnd_end: "Ora di fine",
      dnd_disable_resume: "Disabilita ripresa",
      dnd_disable_resume_desc: "Non riprendere la pulizia durante DND",
      dnd_disable_auto_empty: "Disabilita svuotamento auto",
      dnd_disable_auto_empty_desc: "Non svuotare automaticamente durante DND",
      dnd_reduce_volume: "Riduci volume",
      dnd_reduce_volume_desc: "Abbassa il volume del dispositivo durante DND"
    },
    volume: {
      title: "Volume e suoni",
      volume: "Volume",
      test_sound: "Individua",
      muted: "Disattivato",
      voice_assistant: "Assistente vocale",
      voice_assistant_desc: "Abilita annunci e feedback vocali",
      voice_language: "Lingua voce",
      voice_language_desc: "Lingua per gli annunci vocali",
      streaming_voice_prompt: "Prompt vocale in streaming",
      streaming_voice_prompt_desc: "Feedback vocale in tempo reale durante la pulizia"
    },
    carpet: {
      title: "Impostazioni tappeti",
      carpet_recognition: "Riconoscimento tappeti",
      carpet_recognition_desc: "Rileva automaticamente i tappeti",
      carpet_avoidance: "Evita tappeti",
      carpet_avoidance_desc: "Evita i tappeti durante il lavaggio",
      clean_carpets_first: "Pulisci tappeti prima",
      clean_carpets_first_desc: "Aspira i tappeti prima di lavare i pavimenti",
      carpet_boost: "Potenza tappeti",
      carpet_boost_desc: "Aumenta la potenza di aspirazione sui tappeti",
      intensive_cleaning: "Pulizia intensiva",
      intensive_cleaning_desc: "Pulizia profonda con passaggi extra",
      side_brush_rotate: "Rotazione spazzola laterale",
      side_brush_rotate_desc: "Ruota la spazzola laterale sui tappeti",
      sensitivity: "Sensibilità tappeti",
      sensitivity_desc: "Livello di sensibilità di rilevamento",
      sensitivity_low: "Bassa",
      sensitivity_medium: "Media",
      sensitivity_high: "Alta",
      cleaning_mode: "Pulizia tappeti",
      cleaning_mode_desc: "Come gestire i tappeti durante la pulizia",
      mode_vacuum: "Aspira",
      mode_vacuum_and_mop: "Asp. e Lava",
      mode_avoidance: "Evita",
      mode_ignore: "Ignora",
      vacuum_mode: "Modalità aspirazione",
      vacuum_adaptation: "Solleva panno",
      vacuum_remove_mop: "Rimuovi panno"
    },
    floor: {
      title: "Impostazioni pavimento",
      obstacle_avoidance: "Evitamento ostacoli",
      obstacle_avoidance_desc: "Usa i sensori per evitare ostacoli",
      collision_avoidance: "Evita collisioni",
      collision_avoidance_desc: "Rallenta vicino a pareti e mobili",
      auto_mount_mop: "Monta panno auto",
      auto_mount_mop_desc: "Montare automaticamente il panno quando necessario",
      auto_recleaning: "Ri-pulizia auto",
      auto_recleaning_desc: "Ri-pulire automaticamente le aree mancate",
      recleaning_off: "Disattivato",
      recleaning_in_deep_mode: "In modalità profonda",
      recleaning_in_all_modes: "In tutte le modalità",
      stain_avoidance: "Evitamento macchie",
      stain_avoidance_desc: "Evita le macchie rilevate",
      tight_mopping: "Lavaggio accurato",
      tight_mopping_desc: "Lava più vicino a pareti e bordi",
      floor_direction_cleaning: "Pulizia direzione pavimento",
      floor_direction_cleaning_desc: "Pulisce seguendo la direzione delle venature del pavimento",
      large_particles_boost: "Potenziamento particelle grandi",
      large_particles_boost_desc: "Aumenta l'aspirazione per detriti grandi",
      pet_focused_cleaning: "Pulizia aree animali",
      pet_focused_cleaning_desc: "Pulizia extra nelle aree degli animali domestici",
      low_lying_area_frequency: "Frequenza zone basse",
      low_lying_area_frequency_desc: "Quanto spesso pulire le zone basse sotto i mobili"
    },
    edge_corner: {
      title: "Bordi e Angoli",
      side_reach: "Portata laterale",
      side_reach_desc: "Estendere la spazzola laterale per i bordi",
      mop_extend: "Estensione panno",
      mop_extend_desc: "Estendere il panno per bordi e angoli",
      gap_cleaning: "Pulizia fessure",
      gap_cleaning_desc: "Pulire spazi stretti tra i mobili",
      mopping_under: "Lavaggio sotto mobili",
      mopping_under_desc: "Estendere il panno sotto mobili bassi",
      extend_frequency: "Frequenza estensione",
      extend_frequency_desc: "Frequenza di estensione per pulizia bordi",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligente",
      frequency_high: "Alta"
    },
    dock: {
      title: "Impostazioni base",
      self_clean: "Autopulizia",
      self_clean_desc: "Lavaggio automatico del panno dopo la pulizia",
      auto_empty_mode: "Svuotamento auto",
      auto_empty_mode_desc: "Quando svuotare automaticamente il contenitore",
      auto_empty_frequency: "Frequenza svuotamento auto",
      auto_empty_frequency_desc: "Quante pulizie prima dello svuotamento auto",
      empty_off: "Disattivato",
      empty_standard: "Standard",
      empty_high_frequency: "Alta frequenza",
      empty_low_frequency: "Bassa frequenza",
      auto_detergent: "Detergente auto",
      auto_detergent_desc: "Aggiungere automaticamente detergente durante il lavaggio",
      mop_washing_with_detergent: "Lavaggio panno con detergente",
      mop_washing_with_detergent_desc: "Usa detergente durante il lavaggio del panno",
      mopping_with_detergent: "Lavaggio con detergente",
      mopping_with_detergent_desc: "Usa detergente durante il lavaggio del pavimento",
      water_electrolysis: "Elettrolisi acqua",
      water_electrolysis_desc: "Sterilizza l'acqua tramite elettrolisi",
      auto_water_refilling: "Riempimento auto acqua",
      auto_water_refilling_desc: "Riempie automaticamente il serbatoio acqua pulita",
      auto_dust_collecting: "Raccolta auto polvere",
      auto_dust_collecting_desc: "Svuota automaticamente il contenitore dopo la pulizia",
      smart_washing: "Lavaggio intelligente",
      smart_washing_desc: "Regolare il lavaggio in base allo sporco",
      mop_wash_level: "Livello lavaggio panno",
      mop_wash_level_desc: "Intensità del lavaggio del panno",
      washing_mode: "Modalità lavaggio",
      washing_mode_desc: "Intensità del lavaggio del panno",
      washing_light: "Leggero",
      washing_standard: "Standard",
      washing_deep: "Profondo",
      water_temperature: "Temperatura dell'acqua",
      water_temperature_desc: "Temperatura per il lavaggio del panno",
      temp_normal: "Normale",
      temp_mild: "Mite",
      temp_warm: "Tiepida",
      temp_hot: "Calda",
      auto_drying: "Asciugatura auto",
      auto_drying_desc: "Asciugare automaticamente il panno dopo la pulizia",
      drying_time: "Tempo asciugatura",
      drying_time_desc: "Durata asciugatura del panno",
      auto_rewashing: "Rilavaggio automatico",
      auto_rewashing_desc: "Rilavare automaticamente il panno quando sporco",
      rewashing_off: "Disattivato",
      rewashing_in_deep_mode: "In modalità profonda",
      rewashing_in_all_modes: "In tutte le modalità",
      off_peak_charging: "Ricarica fuori picco",
      off_peak_charging_desc: "Ricaricare durante le ore non di punta per risparmiare energia",
      off_peak_charging_start: "Ora di inizio",
      off_peak_charging_end: "Ora di fine",
      station_cleaning: "Pulizia stazione",
      station_cleaning_desc: "Pulire la stazione base",
      clean_now: "Pulisci ora",
      self_repair: "Autoriparazione",
      self_repair_desc: "Esegui la diagnostica di autoriparazione della stazione",
      repair_now: "Ripara",
      scraper_frequency: "Frequenza raschietto",
      scraper_frequency_desc: "Quanto spesso pulire il raschietto in gomma"
    },
    ai_detection: {
      title: "AI e rilevamento",
      intelligent_recognition: "Riconoscimento intelligente",
      intelligent_recognition_desc: "Riconoscimento dell'ambiente basato su AI",
      ai_obstacle_detection: "Rilevamento ostacoli AI",
      ai_obstacle_detection_desc: "Usa l'AI per identificare ed evitare ostacoli",
      fuzzy_obstacle_detection: "Rilevamento ostacoli sfocati",
      fuzzy_obstacle_detection_desc: "Rileva ostacoli morbidi o poco chiari",
      ai_obstacle_image_upload: "Caricamento immagini ostacoli",
      ai_obstacle_image_upload_desc: "Carica immagini degli ostacoli per l'analisi",
      ai_obstacle_picture: "Foto ostacoli",
      ai_obstacle_picture_desc: "Scatta foto degli ostacoli rilevati",
      ai_pet_detection: "Rilevamento animali domestici",
      ai_pet_detection_desc: "Rileva ed evita animali domestici",
      ai_pet_avoidance: "Evita animali domestici",
      ai_pet_avoidance_desc: "Evita attivamente gli animali rilevati",
      pet_focused_detection: "Rilevamento focalizzato animali",
      pet_focused_detection_desc: "Rilevamento migliorato per le aree degli animali",
      pet_picture: "Foto animali",
      pet_picture_desc: "Scatta foto degli animali rilevati",
      ai_human_detection: "Rilevamento persone",
      ai_human_detection_desc: "Rileva ed evita persone",
      human_follow: "Segui persone",
      human_follow_desc: "Segui le persone per una pulizia interattiva",
      ai_furniture_detection: "Rilevamento mobili",
      ai_furniture_detection_desc: "Rileva e aggira i mobili",
      ai_fluid_detection: "Rilevamento liquidi",
      ai_fluid_detection_desc: "Rileva ed evita liquidi",
      fill_light: "Luce di riempimento",
      fill_light_desc: "Usa la luce di riempimento per un rilevamento migliore",
      camera_light_auto: "Luminosità camera automatica",
      camera_light_auto_desc: "Regola automaticamente la luminosità della luce della camera",
      camera_light_brightness: "Luminosità luce camera",
      camera_light_brightness_desc: "Livello di luminosità manuale della luce della camera"
    },
    station_controls: {
      title: "Controlli stazione",
      self_clean: "Autopulizia",
      self_clean_desc: "Avvia il ciclo di lavaggio del panno",
      manual_drying: "Asciugatura manuale",
      manual_drying_desc: "Avvia il ciclo di asciugatura del panno",
      water_tank_draining: "Svuota serbatoio",
      water_tank_draining_desc: "Scarica l'acqua sporca dal serbatoio",
      base_station_cleaning: "Pulisci stazione",
      base_station_cleaning_desc: "Pulisci la stazione base",
      empty_water_tank: "Svuota serbatoio acqua",
      empty_water_tank_desc: "Svuota il serbatoio di raccolta dell'acqua",
      start_auto_empty: "Svuotamento automatico",
      start_auto_empty_desc: "Avvia lo svuotamento automatico del contenitore",
      start_recleaning: "Ripulizia",
      start_recleaning_desc: "Avvia la ripulizia delle aree mancate",
      clear_warning: "Cancella avviso",
      clear_warning_desc: "Cancella i messaggi di avviso correnti"
    },
    map: {
      title: "Impostazioni mappa",
      multi_floor: "Mappa multipiano",
      multi_floor_desc: "Abilita il supporto per mappe a più piani",
      rotation: "Rotazione mappa",
      rotation_desc: "Ruota l'orientamento della mappa",
      mapping_actions: "Azioni mappatura",
      start_mapping: "Avvia mappatura",
      start_fast_mapping: "Mappatura veloce"
    }
  }
}, Fw = {
  // Common
  common: {
    run: "Uruchom",
    start: "Start",
    stop: "Stop",
    cancel: "Anuluj",
    save: "Zapisz",
    apply: "Zastosuj",
    reset: "Resetuj"
  },
  // Room Selector
  room_selector: {
    title: "Wybierz pokoje",
    selected_count: "Wybrano: {{count}}"
  },
  // Map Selector
  map_selector: {
    unknown: "Nieznana mapa"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Mapa niedostępna",
    looking_for: "Szukanie: {{entity}}",
    room_overlay: "Kliknij numery pokojów, aby wybrać je do sprzątania",
    zone_overlay_create: "Kliknij na mapie, aby umieścić strefę sprzątania",
    zone_overlay_resize: "Przeciągnij rogi, aby zmienić rozmiar, kliknij obok, aby zmienić pozycję",
    clear_zone: "Wyczyść strefę",
    switch_to_list: "Przełącz na widok listy",
    switch_to_map: "Przełącz na widok mapy",
    room_list_overlay: "Dotknij pokoje, aby wybrać do sprzątania",
    no_rooms: "Brak dostępnych pokoi",
    zoom_in: "Powiększ",
    zoom_out: "Pomniejsz",
    zoom_reset: "Resetuj powiększenie",
    lock_map: "Zablokuj mapę",
    unlock_map: "Odblokuj mapę"
  },
  // Mode Tabs
  modes: {
    room: "Pokój",
    all: "Wszystko",
    zone: "Strefa"
  },
  // Action Buttons
  actions: {
    clean: "Sprzątaj",
    clean_all: "Sprzątaj wszystko",
    clean_rooms: "Sprzątaj {{count}} pokój",
    clean_rooms_plural: "Sprzątaj {{count}} pokoje/pokoi",
    select_rooms: "Wybierz pokoje",
    zone_clean: "Sprzątanie strefowe",
    pause: "Pauza",
    resume: "Wznów",
    stop: "Zatrzymaj",
    stop_and_dock: "Zatrzymaj i wróć",
    dock: "Baza"
  },
  // Toast Messages
  toast: {
    selected_room: "Wybrano {{name}}",
    deselected_room: "Odznaczono {{name}}",
    paused: "Wstrzymano sprzątanie",
    stopped: "Zatrzymano sprzątanie",
    docked: "Powrót do bazy",
    cleaning_started: "Rozpoczęto sprzątanie",
    resuming: "Wznawianie sprzątania",
    starting_full_clean: "Rozpoczynanie sprzątania całego domu",
    pausing_vacuum: "Wstrzymywanie odkurzacza",
    stopping_vacuum: "Zatrzymywanie odkurzacza",
    stopping_and_docking: "Zatrzymywanie i powrót do bazy",
    vacuum_docking: "Odkurzacz wraca do bazy",
    starting_room_clean: "Rozpoczynanie sprzątania {{count}} wybranego pokoju",
    starting_room_clean_plural: "Rozpoczynanie sprzątania {{count}} wybranych pokojów",
    starting_zone_clean: "Rozpoczynanie sprzątania strefowego",
    select_rooms_first: "Najpierw wybierz pokoje do sprzątania",
    cannot_determine_map: "Nie można określić wymiarów mapy",
    select_zone_first: "Najpierw wybierz strefę na mapie"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Wybrane pokoje:",
    selected_label: "Wybrano:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Własne: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Pokaż skróty",
    repeats_tooltip: "Liczba przejść",
    vac_and_mop: "Odkurzanie i mopowanie",
    mop_after_vac: "Mopowanie po odkurzaniu",
    vacuum: "Odkurzanie",
    mop: "Mopowanie"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Tryb sprzątania",
    clean_genius: "CleanGenius",
    custom: "Własny"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Skróty",
    no_shortcuts: "Brak dostępnych skrótów",
    create_hint: "Utwórz skróty w aplikacji Dreame, aby szybko uruchamiać ulubione procedury sprzątania"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Tryb sprzątania",
    suction_power_title: "Siła ssania",
    max_plus_description: "Siła ssania zostanie zwiększona do najwyższego poziomu (tryb jednorazowy).",
    wetness_title: "Wilgotność mopa",
    mop_pad_humidity_title: "Wilgotność nakładki mopa",
    slightly_dry: "Lekko suchy",
    moist: "Wilgotny",
    wet: "Mokry",
    water_volume_title: "Ilość wody",
    water_low: "Niska",
    water_medium: "Średnia",
    water_high: "Wysoka",
    mop_washing_frequency_title: "Częstotliwość mycia mopa",
    route_title: "Trasa",
    mop_pressure_title: "Siła nacisku mopa",
    mop_temperature_title: "Temperatura wody"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Lekki",
    normal: "Normalny"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normalna",
    warm: "Ciepła"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Dostosuj",
    description: "Ustaw spersonalizowane preferencje ssania i mopowania dla każdego obszaru.",
    set_button: "Ustaw",
    vacuum: "Odkurzaj",
    mop: "Mopuj",
    vac_and_mop: "Odkurzaj i mopuj",
    cycles: "Cykle",
    apply_to_all: "Zastosuj do wszystkich pomieszczeń",
    click_room_hint: "Kliknij obszar, aby zmienić tryb.",
    intelligent_recommendation: "Inteligentna rekomendacja",
    select_room: "Wybierz pokój",
    settings_for: "Ustawienia {{room}}",
    no_rooms: "Brak dostępnych pokoi"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Tryb sprzątania",
    deep_cleaning: "Głębokie czyszczenie"
  },
  // Header
  header: {
    battery: "Bateria",
    status: "Status",
    area: "Powierzchnia",
    time: "Czas"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Cichy",
    standard: "Standardowy",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Według pokoju",
    by_area: "Według powierzchni",
    by_time: "Według czasu"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Szybki",
    standard: "Standardowy",
    intensive: "Intensywny",
    deep: "Głęboki"
  },
  // Errors
  errors: {
    entity_not_found: "Nie znaleziono encji: {{entity}}",
    failed_to_load: "Nie udało się załadować danych encji",
    service_call_failed: "Nie udało się wysłać polecenia do odkurzacza",
    entity_unavailable: "Odkurzacz niedostępny"
  },
  // Settings Panel
  settings: {
    title: "Ustawienia",
    consumables: {
      title: "Materiały eksploatacyjne",
      main_brush: "Szczotka główna",
      side_brush: "Szczotka boczna",
      filter: "Filtr",
      sensor: "Czujnik",
      mop_pad: "Nakładka mopująca",
      silver_ion: "Jony srebra",
      detergent: "Detergent",
      squeegee: "Ściągaczka",
      tank_filter: "Filtr zbiornika",
      onboard_dirty_water_tank: "Wbudowany zbiornik brudnej wody",
      dirty_water_channel: "Kanał brudnej wody",
      deodorizer: "Dezodorant",
      wheel: "Koło",
      scale_inhibitor: "Środek antywapniowy",
      fluffing_roller: "Wałek napuszający",
      roller_mop_filter: "Filtr mopa rolkowego",
      water_outlet_filter: "Filtr wylotu wody",
      remaining: "pozostało",
      reset: "Resetuj"
    },
    device_info: {
      title: "Informacje o urządzeniu",
      firmware: "Oprogramowanie układowe",
      total_area: "Całkowita powierzchnia sprzątania",
      total_time: "Całkowity czas sprzątania",
      total_cleans: "Liczba sprzątań",
      wifi_ssid: "Sieć Wi-Fi",
      wifi_signal: "Siła sygnału",
      ip_address: "Adres IP"
    },
    quick_settings: {
      title: "Szybkie ustawienia",
      child_lock: "Blokada rodzicielska",
      child_lock_desc: "Wyłącz przyciski fizyczne na urządzeniu",
      resume_cleaning: "Wznów sprzątanie",
      resume_cleaning_desc: "Automatycznie wznów sprzątanie po naładowaniu",
      dnd: "Nie przeszkadzać (DND)",
      dnd_desc: "Godziny ciszy z ograniczoną aktywnością",
      dnd_start: "Czas rozpoczęcia",
      dnd_end: "Czas zakończenia",
      dnd_disable_resume: "Wyłącz wznawianie",
      dnd_disable_resume_desc: "Nie wznawiaj sprzątania podczas DND",
      dnd_disable_auto_empty: "Wyłącz auto opróżnianie",
      dnd_disable_auto_empty_desc: "Nie opróżniaj automatycznie podczas DND",
      dnd_reduce_volume: "Zmniejsz głośność",
      dnd_reduce_volume_desc: "Zmniejsz głośność urządzenia podczas DND"
    },
    volume: {
      title: "Głośność i dźwięk",
      volume: "Głośność",
      test_sound: "Zlokalizuj urządzenie",
      muted: "Wyciszony",
      voice_assistant: "Asystent głosowy",
      voice_assistant_desc: "Włącz komunikaty głosowe i informacje zwrotne",
      voice_language: "Język głosu",
      voice_language_desc: "Język komunikatów głosowych",
      streaming_voice_prompt: "Komunikaty głosowe na żywo",
      streaming_voice_prompt_desc: "Informacje głosowe w czasie rzeczywistym podczas sprzątania"
    },
    carpet: {
      title: "Ustawienia dywanów",
      carpet_recognition: "Rozpoznawanie dywanów",
      carpet_recognition_desc: "Automatyczne rozpoznawanie dywanów",
      carpet_avoidance: "Unikanie dywanów",
      carpet_avoidance_desc: "Unikaj dywanów podczas mopowania",
      clean_carpets_first: "Najpierw dywany",
      clean_carpets_first_desc: "Odkurzaj dywany przed mopowaniem",
      carpet_boost: "Wzmocnienie na dywanie",
      carpet_boost_desc: "Zwiększ siłę ssania na dywanach",
      intensive_cleaning: "Intensywne czyszczenie",
      intensive_cleaning_desc: "Głębokie czyszczenie z dodatkowymi przejściami",
      side_brush_rotate: "Obracanie szczotki bocznej",
      side_brush_rotate_desc: "Obracaj szczotkę boczną na dywanach",
      sensitivity: "Czułość wykrywania dywanów",
      sensitivity_desc: "Poziom czułości wykrywania",
      sensitivity_low: "Niska",
      sensitivity_medium: "Średnia",
      sensitivity_high: "Wysoka",
      cleaning_mode: "Czyszczenie dywanów",
      cleaning_mode_desc: "Jak postępować z dywanami podczas sprzątania",
      mode_vacuum: "Odkurzanie",
      mode_vacuum_and_mop: "Odk. i Mop",
      mode_avoidance: "Unikaj",
      mode_ignore: "Ignoruj",
      vacuum_mode: "Tryb odkurzania",
      vacuum_adaptation: "Podnieś mop",
      vacuum_remove_mop: "Usuń mop"
    },
    floor: {
      title: "Ustawienia podłogi",
      obstacle_avoidance: "Omijanie przeszkód",
      obstacle_avoidance_desc: "Użyj czujników do omijania przeszkód",
      collision_avoidance: "Unikanie kolizji",
      collision_avoidance_desc: "Zwolnij przy ścianach i meblach",
      auto_mount_mop: "Auto montaż mopa",
      auto_mount_mop_desc: "Automatycznie zamontuj nakładkę mopa",
      auto_recleaning: "Automatyczne doczyszczanie",
      auto_recleaning_desc: "Automatycznie doczyszczaj pominięte obszary",
      recleaning_off: "Wył",
      recleaning_in_deep_mode: "W trybie głębokim",
      recleaning_in_all_modes: "We wszystkich trybach",
      stain_avoidance: "Omijanie plam",
      stain_avoidance_desc: "Omijaj wykryte plamy",
      tight_mopping: "Dokładne mopowanie",
      tight_mopping_desc: "Mopuj bliżej ścian i krawędzi",
      floor_direction_cleaning: "Czyszczenie wzdłuż podłogi",
      floor_direction_cleaning_desc: "Sprzątaj wzdłuż kierunku słojów podłogi",
      large_particles_boost: "Wzmocnienie dla dużych cząstek",
      large_particles_boost_desc: "Zwiększ siłę ssania dla dużych zanieczyszczeń",
      pet_focused_cleaning: "Sprzątanie stref zwierząt",
      pet_focused_cleaning_desc: "Dodatkowe sprzątanie w strefach zwierząt",
      low_lying_area_frequency: "Częstotliwość niskich stref",
      low_lying_area_frequency_desc: "Jak często sprzątać niskie obszary pod meblami"
    },
    edge_corner: {
      title: "Krawędzie i Rogi",
      side_reach: "Zasięg boczny",
      side_reach_desc: "Wysuń szczotkę boczną do krawędzi",
      mop_extend: "Wysunięcie mopa",
      mop_extend_desc: "Wysuń mop do krawędzi i rogów",
      gap_cleaning: "Czyszczenie szczelin",
      gap_cleaning_desc: "Czyść wąskie szczeliny między meblami",
      mopping_under: "Mopowanie pod meblami",
      mopping_under_desc: "Wysuń mop pod niskie meble",
      extend_frequency: "Częstotliwość wysuwania",
      extend_frequency_desc: "Jak często wysuwać mop do czyszczenia krawędzi",
      frequency_standard: "Standardowa",
      frequency_intelligent: "Inteligentna",
      frequency_high: "Wysoka"
    },
    dock: {
      title: "Ustawienia stacji",
      self_clean: "Samooczyszczanie",
      self_clean_desc: "Auto mycie mopa po sprzątaniu",
      auto_empty_mode: "Tryb auto opróżniania",
      auto_empty_mode_desc: "Kiedy automatycznie opróżniać pojemnik",
      auto_empty_frequency: "Częstotliwość auto opróżniania",
      auto_empty_frequency_desc: "Ile sprzątań przed auto opróżnianiem",
      empty_off: "Wył",
      empty_standard: "Standardowy",
      empty_high_frequency: "Wysoka częst.",
      empty_low_frequency: "Niska częst.",
      auto_detergent: "Auto detergent",
      auto_detergent_desc: "Automatycznie dodawaj detergent podczas mycia",
      mop_washing_with_detergent: "Mycie mopa z detergentem",
      mop_washing_with_detergent_desc: "Używaj detergentu podczas mycia mopa",
      mopping_with_detergent: "Mopowanie z detergentem",
      mopping_with_detergent_desc: "Używaj detergentu podczas mopowania",
      water_electrolysis: "Elektroliza wody",
      water_electrolysis_desc: "Sterylizacja wody za pomocą elektrolizy",
      auto_water_refilling: "Auto uzupełnianie wody",
      auto_water_refilling_desc: "Automatyczne uzupełnianie zbiornika czystej wody",
      auto_dust_collecting: "Auto zbieranie kurzu",
      auto_dust_collecting_desc: "Automatyczne opróżnianie pojemnika po sprzątaniu",
      smart_washing: "Inteligentne mycie",
      smart_washing_desc: "Dostosuj mycie do poziomu zabrudzenia",
      mop_wash_level: "Poziom mycia mopa",
      mop_wash_level_desc: "Intensywność mycia mopa",
      washing_mode: "Tryb mycia",
      washing_mode_desc: "Intensywność mycia mopa",
      washing_light: "Lekki",
      washing_standard: "Standardowy",
      washing_deep: "Głęboki",
      water_temperature: "Temperatura wody",
      water_temperature_desc: "Temperatura do mycia mopa",
      temp_normal: "Normalna",
      temp_mild: "Łagodna",
      temp_warm: "Ciepła",
      temp_hot: "Gorąca",
      auto_drying: "Auto suszenie",
      auto_drying_desc: "Automatycznie suszyć mop po czyszczeniu",
      drying_time: "Czas suszenia",
      drying_time_desc: "Czas suszenia mopa",
      auto_rewashing: "Auto ponowne mycie",
      auto_rewashing_desc: "Automatycznie myj mop gdy brudny",
      rewashing_off: "Wył",
      rewashing_in_deep_mode: "W trybie głębokim",
      rewashing_in_all_modes: "We wszystkich trybach",
      off_peak_charging: "Ładowanie poza szczytem",
      off_peak_charging_desc: "Ładuj poza godzinami szczytu, aby oszczędzać energię",
      off_peak_charging_start: "Czas rozpoczęcia",
      off_peak_charging_end: "Czas zakończenia",
      station_cleaning: "Czyszczenie stacji",
      station_cleaning_desc: "Wyczyść stację bazową",
      clean_now: "Wyczyść teraz",
      self_repair: "Samonaprawa",
      self_repair_desc: "Uruchom diagnostykę samonaprawy stacji",
      repair_now: "Napraw",
      scraper_frequency: "Częstotliwość skrobaka",
      scraper_frequency_desc: "Jak często czyścić gumowy skrobak"
    },
    ai_detection: {
      title: "AI i Wykrywanie",
      intelligent_recognition: "Inteligentne rozpoznawanie",
      intelligent_recognition_desc: "Rozpoznawanie otoczenia oparte na AI",
      ai_obstacle_detection: "Rozpoznawanie przeszkód AI",
      ai_obstacle_detection_desc: "Używaj AI do identyfikacji i omijania przeszkód",
      fuzzy_obstacle_detection: "Rozmyte wykrywanie przeszkód",
      fuzzy_obstacle_detection_desc: "Wykrywanie miękkich lub niewyraźnych przeszkód",
      ai_obstacle_image_upload: "Przesyłanie zdjęć przeszkód",
      ai_obstacle_image_upload_desc: "Przesyłaj zdjęcia przeszkód do analizy",
      ai_obstacle_picture: "Zdjęcie przeszkody",
      ai_obstacle_picture_desc: "Rób zdjęcia wykrytych przeszkód",
      ai_pet_detection: "Wykrywanie zwierząt",
      ai_pet_detection_desc: "Wykrywaj i omijaj zwierzęta domowe",
      ai_pet_avoidance: "Unikanie zwierząt",
      ai_pet_avoidance_desc: "Aktywnie omijaj wykryte zwierzęta",
      pet_focused_detection: "Wykrywanie skoncentrowane na zwierzętach",
      pet_focused_detection_desc: "Ulepszone wykrywanie dla obszarów ze zwierzętami",
      pet_picture: "Zdjęcie zwierzęcia",
      pet_picture_desc: "Rób zdjęcia wykrytych zwierząt",
      ai_human_detection: "Wykrywanie ludzi",
      ai_human_detection_desc: "Wykrywaj i omijaj ludzi",
      human_follow: "Podążanie za człowiekiem",
      human_follow_desc: "Podążaj za ludźmi do interaktywnego sprzątania",
      ai_furniture_detection: "Wykrywanie mebli",
      ai_furniture_detection_desc: "Wykrywaj i nawiguj wokół mebli",
      ai_fluid_detection: "Wykrywanie cieczy",
      ai_fluid_detection_desc: "Wykrywaj i omijaj rozlane płyny",
      fill_light: "Doświetlenie",
      fill_light_desc: "Użyj światła pomocniczego dla lepszego wykrywania",
      camera_light_auto: "Auto jasność kamery",
      camera_light_auto_desc: "Automatycznie dostosuj jasność światła kamery",
      camera_light_brightness: "Jasność światła kamery",
      camera_light_brightness_desc: "Ręczny poziom jasności światła kamery"
    },
    station_controls: {
      title: "Sterowanie stacją",
      self_clean: "Samooczyszczanie",
      self_clean_desc: "Rozpocznij cykl mycia mopa",
      manual_drying: "Ręczne suszenie",
      manual_drying_desc: "Rozpocznij cykl suszenia mopa",
      water_tank_draining: "Opróżnij zbiornik",
      water_tank_draining_desc: "Odprowadź brudną wodę ze zbiornika",
      base_station_cleaning: "Wyczyść stację",
      base_station_cleaning_desc: "Oczyść stację bazową",
      empty_water_tank: "Opróżnij zbiornik wody",
      empty_water_tank_desc: "Opróżnij zbiornik na wodę",
      start_auto_empty: "Auto opróżnianie",
      start_auto_empty_desc: "Rozpocznij automatyczne opróżnianie pojemnika",
      start_recleaning: "Ponowne sprzątanie",
      start_recleaning_desc: "Rozpocznij ponowne sprzątanie pominiętych obszarów",
      clear_warning: "Wyczyść ostrzeżenie",
      clear_warning_desc: "Wyczyść bieżące komunikaty ostrzegawcze"
    },
    map: {
      title: "Ustawienia mapy",
      multi_floor: "Mapa wielopiętrowa",
      multi_floor_desc: "Włącz obsługę map wielu pięter",
      rotation: "Obrót mapy",
      rotation_desc: "Obróć orientację mapy",
      mapping_actions: "Akcje mapowania",
      start_mapping: "Rozpocznij mapowanie",
      start_fast_mapping: "Szybkie mapowanie"
    }
  }
}, Ww = {
  // Common
  common: {
    run: "Exécuter",
    start: "Démarrer",
    stop: "Arrêter",
    cancel: "Annuler",
    save: "Enregistrer",
    apply: "Appliquer",
    reset: "Réinitialiser"
  },
  // Room selector
  room_selector: {
    title: "Sélectionner des pièces",
    selected_count: "{{count}} sélectionnée(s)"
  },
  // Map Selector
  map_selector: {
    unknown: "Carte inconnue"
  },
  // Vacuum map
  vacuum_map: {
    no_map: "Aucune carte disponible",
    looking_for: "Recherche de : {{entity}}",
    room_overlay: "Cliquez sur les numéros pour sélectionner les pièces à nettoyer",
    zone_overlay_create: "Cliquez sur la carte pour placer une zone de nettoyage",
    zone_overlay_resize: "Faites glisser les coins pour redimensionner, cliquez ailleurs pour repositionner",
    clear_zone: "Effacer la zone",
    switch_to_list: "Passer à la vue liste",
    switch_to_map: "Passer à la vue carte",
    room_list_overlay: "Appuyez sur les pièces pour les sélectionner",
    no_rooms: "Aucune pièce configurée",
    zoom_in: "Zoom avant",
    zoom_out: "Zoom arrière",
    zoom_reset: "Réinitialiser le zoom",
    lock_map: "Verrouiller la carte",
    unlock_map: "Déverrouiller la carte"
  },
  // Mode tabs
  modes: {
    room: "Pièce",
    all: "Tout",
    zone: "Zone"
  },
  // Action buttons
  actions: {
    clean: "Nettoyer",
    clean_all: "Tout nettoyer",
    clean_rooms: "Nettoyer {{count}} pièce",
    clean_rooms_plural: "Nettoyer {{count}} pièces",
    select_rooms: "Sélectionner des pièces",
    zone_clean: "Nettoyage de zone",
    pause: "Pause",
    resume: "Reprendre",
    stop: "Arrêter",
    stop_and_dock: "Arrêter et charger",
    dock: "Charger"
  },
  // Toast messages
  toast: {
    selected_room: "{{name}} sélectionné(e)",
    deselected_room: "{{name}} désélectionné(e)",
    paused: "Nettoyage mis en pause",
    stopped: "Nettoyage arrêté",
    docked: "Retour à la base",
    cleaning_started: "Nettoyage démarré",
    resuming: "Reprise du nettoyage",
    starting_full_clean: "Démarrage du nettoyage complet",
    pausing_vacuum: "Mise en pause de l'aspirateur",
    stopping_vacuum: "Arrêt de l'aspirateur",
    stopping_and_docking: "Arrêt et retour à la base",
    vacuum_docking: "L'aspirateur retourne à sa base",
    starting_room_clean: "Démarrage du nettoyage de la pièce sélectionnée",
    starting_room_clean_plural: "Démarrage du nettoyage des {{count}} pièces sélectionnées",
    starting_zone_clean: "Démarrage du nettoyage de zone",
    select_rooms_first: "Veuillez d'abord sélectionner des pièces",
    cannot_determine_map: "Impossible de déterminer les dimensions de la carte",
    select_zone_first: "Veuillez sélectionner une zone sur la carte"
  },
  // Room selection display
  room_display: {
    selected_rooms: "Pièces sélectionnées :",
    selected_label: "Sélection :"
  },
  // Cleaning mode button
  cleaning_mode_button: {
    prefix_custom: "Personnalisé : ",
    prefix_cleangenius: "CleanGenius : ",
    view_shortcuts: "Voir les raccourcis",
    repeats_tooltip: "Passages de nettoyage",
    vac_and_mop: "Aspi & Lavage",
    mop_after_vac: "Lavage après Aspi",
    vacuum: "Aspirateur",
    mop: "Serpillère"
  },
  // Cleaning mode modal
  cleaning_mode: {
    title: "Mode de nettoyage",
    clean_genius: "CleanGenius",
    custom: "Personnalisé"
  },
  // Shortcuts modal
  shortcuts: {
    title: "Raccourcis",
    no_shortcuts: "Aucun raccourci disponible",
    create_hint: "Créez des raccourcis dans l'application Dreame pour lancer rapidement vos routines préférées"
  },
  // Custom mode
  custom_mode: {
    cleaning_mode_title: "Mode de nettoyage",
    suction_power_title: "Puissance d'aspiration",
    max_plus_description: "La puissance sera augmentée au niveau maximum (usage unique).",
    wetness_title: "Débit d'eau",
    mop_pad_humidity_title: "Humidité de la serpillère",
    slightly_dry: "Sec",
    moist: "Standard",
    wet: "Humide",
    water_volume_title: "Volume d'eau",
    water_low: "Faible",
    water_medium: "Moyen",
    water_high: "Élevé",
    mop_washing_frequency_title: "Fréquence de lavage de serpillère",
    route_title: "Trajectoire de nettoyage",
    mop_pressure_title: "Pression de la serpillère",
    mop_temperature_title: "Température de l'eau"
  },
  // Niveaux de pression serpillère
  mop_pressure: {
    light: "Légère",
    normal: "Normale"
  },
  // Niveaux de température eau
  mop_temperature: {
    normal: "Normale",
    warm: "Tiède"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Personnaliser",
    description: "Définir les préférences d'aspiration et de lavage pour chaque zone.",
    set_button: "Définir",
    vacuum: "Aspirateur",
    mop: "Serpillère",
    vac_and_mop: "Aspi & Lavage",
    cycles: "Cycles",
    apply_to_all: "Appliquer à toutes les pièces",
    click_room_hint: "Cliquez sur une zone pour changer le mode.",
    intelligent_recommendation: "Recommandation intelligente",
    select_room: "Sélectionner une pièce",
    settings_for: "Paramètres de {{room}}",
    no_rooms: "Aucune pièce disponible"
  },
  // CleanGenius mode
  cleangenius_mode: {
    cleaning_mode_title: "Mode de nettoyage",
    deep_cleaning: "Nettoyage approfondi"
  },
  // Header
  header: {
    battery: "Batterie",
    status: "Statut",
    area: "Surface",
    time: "Temps"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction levels
  suction_levels: {
    quiet: "Silencieux",
    standard: "Standard",
    strong: "Fort",
    turbo: "Turbo"
  },
  // Mop washing frequency
  mop_washing_frequency: {
    by_room: "Par pièce",
    by_area: "Par surface",
    by_time: "Par durée"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Rapide",
    standard: "Standard",
    intensive: "Intensif",
    deep: "Profond"
  },
  // Errors
  errors: {
    entity_not_found: "Entité introuvable : {{entity}}",
    failed_to_load: "Échec du chargement des données de l'entité",
    service_call_failed: "Échec de l'envoi de la commande à l'aspirateur",
    entity_unavailable: "Aspirateur non disponible"
  },
  // Settings panel
  settings: {
    title: "Paramètres",
    consumables: {
      title: "Consommables",
      main_brush: "Brosse principale",
      side_brush: "Brosse latérale",
      filter: "Filtre",
      sensor: "Capteur",
      mop_pad: "Serpillière",
      silver_ion: "Ion argent",
      detergent: "Détergent",
      squeegee: "Raclette",
      tank_filter: "Filtre du réservoir",
      onboard_dirty_water_tank: "Réservoir d'eau sale embarqué",
      dirty_water_channel: "Canal d'eau sale",
      deodorizer: "Désodorisant",
      wheel: "Roue",
      scale_inhibitor: "Anti-calcaire",
      fluffing_roller: "Rouleau de brossage",
      roller_mop_filter: "Filtre de serpillière rotative",
      water_outlet_filter: "Filtre de sortie d'eau",
      remaining: "restant",
      reset: "Réinitialiser"
    },
    device_info: {
      title: "Infos appareil",
      firmware: "Version du firmware",
      total_area: "Surface totale nettoyée",
      total_time: "Temps total de nettoyage",
      total_cleans: "Nombre total de nettoyages",
      wifi_ssid: "Réseau Wi-Fi",
      wifi_signal: "Force du signal",
      ip_address: "Adresse IP"
    },
    quick_settings: {
      title: "Réglages rapides",
      child_lock: "Verrouillage enfant",
      child_lock_desc: "Désactiver les boutons physiques",
      resume_cleaning: "Reprendre le nettoyage",
      resume_cleaning_desc: "Reprendre automatiquement le nettoyage après la charge",
      dnd: "Ne pas déranger",
      dnd_desc: "Heures silencieuses avec activité réduite",
      dnd_start: "Heure de début",
      dnd_end: "Heure de fin",
      dnd_disable_resume: "Désactiver reprise",
      dnd_disable_resume_desc: "Ne pas reprendre le nettoyage en mode NPD",
      dnd_disable_auto_empty: "Désactiver vidage auto",
      dnd_disable_auto_empty_desc: "Ne pas vider automatiquement en mode NPD",
      dnd_reduce_volume: "Réduire le volume",
      dnd_reduce_volume_desc: "Baisser le volume en mode NPD"
    },
    volume: {
      title: "Volume & Son",
      volume: "Volume",
      test_sound: "Localiser l'aspirateur",
      muted: "Muet",
      voice_assistant: "Assistant vocal",
      voice_assistant_desc: "Activer les annonces et retours vocaux",
      voice_language: "Langue vocale",
      voice_language_desc: "Langue des annonces vocales",
      streaming_voice_prompt: "Annonces vocales en temps réel",
      streaming_voice_prompt_desc: "Retour vocal en direct pendant le nettoyage"
    },
    carpet: {
      title: "Paramètres tapis",
      carpet_recognition: "Reconnaissance des tapis",
      carpet_recognition_desc: "Détecter automatiquement les tapis",
      carpet_avoidance: "Évitement des tapis",
      carpet_avoidance_desc: "Éviter les tapis pendant le lavage",
      clean_carpets_first: "Nettoyer tapis en premier",
      clean_carpets_first_desc: "Aspirer les tapis avant de laver les sols",
      carpet_boost: "Boost tapis",
      carpet_boost_desc: "Puissance max sur les tapis",
      intensive_cleaning: "Nettoyage intensif",
      intensive_cleaning_desc: "Nettoyage en profondeur avec passages supplémentaires",
      side_brush_rotate: "Rotation brosse latérale",
      side_brush_rotate_desc: "Faire tourner la brosse latérale sur les tapis",
      sensitivity: "Sensibilité tapis",
      sensitivity_desc: "Niveau de sensibilité de détection",
      sensitivity_low: "Faible",
      sensitivity_medium: "Moyenne",
      sensitivity_high: "Élevée",
      cleaning_mode: "Nettoyage tapis",
      cleaning_mode_desc: "Comment gérer les tapis pendant le nettoyage",
      mode_vacuum: "Aspirer",
      mode_vacuum_and_mop: "Asp. & Lav.",
      mode_avoidance: "Éviter",
      mode_ignore: "Ignorer",
      vacuum_mode: "Mode aspiration",
      vacuum_adaptation: "Lever serpillère",
      vacuum_remove_mop: "Retirer serpillère"
    },
    floor: {
      title: "Paramètres sol",
      obstacle_avoidance: "Évitement d'obstacles",
      obstacle_avoidance_desc: "Utiliser les capteurs pour éviter les obstacles",
      collision_avoidance: "Évitement de collision",
      collision_avoidance_desc: "Ralentir près des murs et meubles",
      auto_mount_mop: "Montage auto serpillère",
      auto_mount_mop_desc: "Attacher automatiquement la serpillère",
      auto_recleaning: "Re-nettoyage auto",
      auto_recleaning_desc: "Re-nettoyer automatiquement les zones manquées",
      recleaning_off: "Désactivé",
      recleaning_in_deep_mode: "En mode profond",
      recleaning_in_all_modes: "Dans tous les modes",
      stain_avoidance: "Évitement des taches",
      stain_avoidance_desc: "Éviter les taches détectées",
      tight_mopping: "Lavage minutieux",
      tight_mopping_desc: "Laver plus près des murs et des bords",
      floor_direction_cleaning: "Nettoyage directionnel",
      floor_direction_cleaning_desc: "Nettoyer dans le sens du grain du sol",
      large_particles_boost: "Boost grosses particules",
      large_particles_boost_desc: "Augmenter l'aspiration pour les gros débris",
      pet_focused_cleaning: "Nettoyage zones animaux",
      pet_focused_cleaning_desc: "Nettoyage supplémentaire dans les zones des animaux",
      low_lying_area_frequency: "Fréquence zones basses",
      low_lying_area_frequency_desc: "Fréquence de nettoyage des zones basses sous les meubles"
    },
    edge_corner: {
      title: "Bords & Coins",
      side_reach: "Portée latérale",
      side_reach_desc: "Étendre la brosse latérale pour les bords",
      mop_extend: "Extension serpillère",
      mop_extend_desc: "Étendre la serpillère pour les bords et coins",
      gap_cleaning: "Nettoyage des interstices",
      gap_cleaning_desc: "Nettoyer les espaces étroits entre les meubles",
      mopping_under: "Lavage sous meubles",
      mopping_under_desc: "Étendre la serpillère sous les meubles bas",
      extend_frequency: "Fréquence d'extension",
      extend_frequency_desc: "Fréquence d'extension pour le nettoyage des bords",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligent",
      frequency_high: "Élevée"
    },
    dock: {
      title: "Paramètres station",
      self_clean: "Auto-nettoyage",
      self_clean_desc: "Démarrer le cycle de lavage de la serpillère",
      auto_empty_mode: "Mode vidage auto",
      auto_empty_mode_desc: "Quand vider automatiquement le bac à poussière",
      auto_empty_frequency: "Fréquence vidage auto",
      auto_empty_frequency_desc: "Nombre de vidages automatiques par cycle",
      empty_off: "Désactivé",
      empty_standard: "Standard",
      empty_high_frequency: "Fréquence élevée",
      empty_low_frequency: "Fréquence basse",
      auto_detergent: "Détergent auto",
      auto_detergent_desc: "Ajouter automatiquement du détergent lors du lavage",
      mop_washing_with_detergent: "Lavage serpillère avec détergent",
      mop_washing_with_detergent_desc: "Utiliser du détergent lors du lavage de la serpillère",
      mopping_with_detergent: "Lavage avec détergent",
      mopping_with_detergent_desc: "Utiliser du détergent lors du lavage du sol",
      water_electrolysis: "Électrolyse de l'eau",
      water_electrolysis_desc: "Stériliser l'eau par électrolyse",
      auto_water_refilling: "Remplissage auto eau",
      auto_water_refilling_desc: "Remplir automatiquement le réservoir d'eau propre",
      auto_dust_collecting: "Collecte auto poussière",
      auto_dust_collecting_desc: "Vider automatiquement le bac après nettoyage",
      smart_washing: "Lavage intelligent",
      smart_washing_desc: "Ajuster le lavage selon le niveau de saleté",
      mop_wash_level: "Niveau de lavage",
      mop_wash_level_desc: "Intensité du cycle de lavage de la serpillère",
      washing_mode: "Mode lavage",
      washing_mode_desc: "Intensité du lavage de la serpillère",
      washing_light: "Léger",
      washing_standard: "Standard",
      washing_deep: "Profond",
      water_temperature: "Température de l'eau",
      water_temperature_desc: "Température pour le lavage de la serpillère",
      temp_normal: "Normale",
      temp_mild: "Douce",
      temp_warm: "Tiède",
      temp_hot: "Chaude",
      auto_drying: "Séchage auto",
      auto_drying_desc: "Sécher automatiquement la serpillère après nettoyage",
      drying_time: "Temps de séchage",
      drying_time_desc: "Durée du séchage de la serpillère",
      station_cleaning: "Nettoyage station",
      station_cleaning_desc: "Nettoyer la station de base",
      clean_now: "Nettoyer",
      auto_rewashing: "Re-lavage auto",
      auto_rewashing_desc: "Re-laver automatiquement la serpillère si nécessaire",
      rewashing_off: "Désactivé",
      rewashing_in_deep_mode: "En mode profond",
      rewashing_in_all_modes: "Dans tous les modes",
      off_peak_charging: "Charge heures creuses",
      off_peak_charging_desc: "Charger pendant les heures creuses pour économiser",
      off_peak_charging_start: "Heure de début",
      off_peak_charging_end: "Heure de fin",
      self_repair: "Auto-réparation",
      self_repair_desc: "Diagnostic et réparation automatiques",
      repair_now: "Réparer",
      scraper_frequency: "Fréquence du racleur",
      scraper_frequency_desc: "Fréquence de nettoyage du racleur en caoutchouc"
    },
    ai_detection: {
      title: "IA & Détection",
      intelligent_recognition: "Reconnaissance intelligente",
      intelligent_recognition_desc: "Utiliser l'IA pour identifier les obstacles et les zones",
      ai_obstacle_detection: "Détection d'obstacles par IA",
      ai_obstacle_detection_desc: "Utiliser l'IA pour identifier les obstacles",
      fuzzy_obstacle_detection: "Détection floue",
      fuzzy_obstacle_detection_desc: "Détecter les obstacles partiellement visibles",
      ai_obstacle_image_upload: "Envoi d'images d'obstacles",
      ai_obstacle_image_upload_desc: "Envoyer les images pour analyse",
      ai_obstacle_picture: "Photo d'obstacles IA",
      ai_obstacle_picture_desc: "Prendre des photos des obstacles détectés",
      ai_pet_detection: "Détection d'animaux",
      ai_pet_detection_desc: "Détecter et éviter les animaux",
      ai_pet_avoidance: "Évitement des animaux",
      ai_pet_avoidance_desc: "Éviter activement les animaux détectés",
      pet_focused_detection: "Détection animaux ciblée",
      pet_focused_detection_desc: "Détection prioritaire des animaux",
      pet_picture: "Photo animaux",
      pet_picture_desc: "Prendre des photos des animaux détectés",
      ai_human_detection: "Détection humaine",
      ai_human_detection_desc: "Détecter et éviter les personnes",
      human_follow: "Suivi humain",
      human_follow_desc: "Suivre les personnes pendant le nettoyage",
      ai_furniture_detection: "Détection de meubles",
      ai_furniture_detection_desc: "Naviguer autour des meubles",
      ai_fluid_detection: "Détection de liquides",
      ai_fluid_detection_desc: "Détecter et éviter les flaques",
      fill_light: "Lumière d'appoint",
      fill_light_desc: "Utiliser la lumière pour une meilleure détection",
      camera_light_auto: "Lumière caméra auto",
      camera_light_auto_desc: "Ajuster automatiquement l'éclairage de la caméra",
      camera_light_brightness: "Luminosité caméra",
      camera_light_brightness_desc: "Niveau de luminosité de l'éclairage caméra"
    },
    station_controls: {
      title: "Contrôles de la station",
      self_clean: "Auto-nettoyage",
      self_clean_desc: "Démarrer le cycle de lavage de la serpillère",
      manual_drying: "Séchage manuel",
      manual_drying_desc: "Démarrer le cycle de séchage de la serpillère",
      water_tank_draining: "Vidange du réservoir",
      water_tank_draining_desc: "Vidanger l'eau sale du réservoir",
      base_station_cleaning: "Nettoyage de la station",
      base_station_cleaning_desc: "Nettoyer la station de base",
      empty_water_tank: "Vider le réservoir",
      empty_water_tank_desc: "Vider le réservoir de collecte d'eau",
      start_auto_empty: "Démarrer vidage auto",
      start_auto_empty_desc: "Vider automatiquement le bac à poussière",
      start_recleaning: "Démarrer re-nettoyage",
      start_recleaning_desc: "Re-nettoyer les zones manquées",
      clear_warning: "Effacer avertissement",
      clear_warning_desc: "Effacer les avertissements actuels"
    },
    map: {
      title: "Paramètres carte",
      multi_floor: "Carte multi-étages",
      multi_floor_desc: "Activer le support pour plusieurs cartes d'étages",
      rotation: "Rotation de la carte",
      rotation_desc: "Tourner l'orientation de la carte",
      mapping_actions: "Actions de cartographie",
      start_mapping: "Démarrer cartographie",
      start_fast_mapping: "Cartographie rapide"
    }
  }
}, $w = {
  // Common
  common: {
    run: "הפעל",
    start: "התחל",
    stop: "עצור",
    cancel: "בטל",
    save: "שמור",
    apply: "החל",
    reset: "אפס"
  },
  // בחירת חדרים
  room_selector: {
    title: "בחר חדרים",
    selected_count: "{{count}} נבחרו"
  },
  // בחירת מפה
  map_selector: {
    unknown: "מפה לא ידועה"
  },
  // מפת שואב
  vacuum_map: {
    no_map: "אין מפה זמינה",
    looking_for: "מחפש את: {{entity}}",
    room_overlay: "לחץ על מספרי החדרים כדי לבחור חדרים לניקוי",
    zone_overlay_create: "לחץ על המפה כדי להוסיף אזור ניקוי",
    zone_overlay_resize: "גרור את הפינות לשינוי גודל, לחץ במקום אחר לשינוי מיקום",
    clear_zone: "נקה אזור",
    switch_to_list: "עבור לתצוגת רשימה",
    switch_to_map: "עבור לתצוגת מפה",
    room_list_overlay: "לחץ על חדרים כדי לבחור לניקוי",
    no_rooms: "אין חדרים זמינים",
    zoom_in: "הגדל",
    zoom_out: "הקטן",
    zoom_reset: "אפס זום",
    lock_map: "נעל מפה",
    unlock_map: "בטל נעילת מפה"
  },
  // לשוניות מצבים
  modes: {
    room: "חדר",
    all: "הכל",
    zone: "אזור"
  },
  // כפתורי פעולה
  actions: {
    clean: "נקה",
    clean_all: "נקה הכל",
    clean_rooms: "נקה חדר {{count}}",
    clean_rooms_plural: "נקה {{count}} חדרים",
    select_rooms: "בחר חדרים",
    zone_clean: "ניקוי אזור",
    pause: "השהה",
    resume: "המשך",
    stop: "עצור",
    stop_and_dock: "עצור וחזור",
    dock: "עמדת טעינה"
  },
  // הודעות קופצות (Toast)
  toast: {
    selected_room: "נבחר {{name}}",
    deselected_room: "בוטל {{name}}",
    paused: "הניקוי הושהה",
    stopped: "הניקוי הופסק",
    docked: "חוזר לעמדת טעינה",
    cleaning_started: "הניקוי התחיל",
    resuming: "ממשיך ניקוי",
    starting_full_clean: "מתחיל ניקוי של כל הבית",
    pausing_vacuum: "משהה שואב",
    stopping_vacuum: "עוצר שואב",
    stopping_and_docking: "עוצר וחוזר לתחנה",
    vacuum_docking: "השואב חוזר לעמדת טעינה",
    starting_room_clean: "מתחיל ניקוי עבור חדר {{count}} שנבחר",
    starting_room_clean_plural: "מתחיל ניקוי עבור {{count}} חדרים שנבחרו",
    starting_zone_clean: "מתחיל ניקוי אזור",
    select_rooms_first: "אנא בחר חדרים לניקוי תחילה",
    cannot_determine_map: "לא ניתן לקבוע את מידות המפה",
    select_zone_first: "אנא בחר אזור על המפה"
  },
  // תצוגת בחירת חדרים
  room_display: {
    selected_rooms: "חדרים שנבחרו:",
    selected_label: "נבחרו:"
  },
  // כפתור מצב ניקוי
  cleaning_mode_button: {
    prefix_custom: "מותאם אישית: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "צפה בקיצורי דרך",
    repeats_tooltip: "חזרות",
    vac_and_mop: "שאיבה ושטיפה",
    mop_after_vac: "שטיפה אחרי שאיבה",
    vacuum: "שאיבה",
    mop: "שטיפה"
  },
  // מודאל מצב ניקוי
  cleaning_mode: {
    title: "מצב ניקוי",
    clean_genius: "CleanGenius",
    custom: "מותאם אישית"
  },
  // מודאל קיצורי דרך
  shortcuts: {
    title: "קיצורי דרך",
    no_shortcuts: "אין קיצורי דרך זמינים",
    create_hint: "צור קיצורי דרך באפליקציית Dreame כדי להפעיל במהירות את תוכניות הניקוי המועדפות עליך"
  },
  // מצב מותאם אישית
  custom_mode: {
    cleaning_mode_title: "מצב ניקוי",
    suction_power_title: "עוצמת שאיבה",
    max_plus_description: "עוצמת השאיבה תוגבר לרמה הגבוהה ביותר, זהו מצב לשימוש חד-פעמי.",
    wetness_title: "רמת רטיבות",
    mop_pad_humidity_title: "לחות משטח הסמרטוט",
    slightly_dry: "מעט יבש",
    moist: "לח",
    wet: "רטוב",
    water_volume_title: "כמות מים",
    water_low: "נמוך",
    water_medium: "בינוני",
    water_high: "גבוה",
    mop_washing_frequency_title: "תדירות שטיפת סמרטוט",
    route_title: "מסלול",
    mop_pressure_title: "לחץ סמרטוט",
    mop_temperature_title: "טמפרטורת מים"
  },
  // רמות לחץ סמרטוט
  mop_pressure: {
    light: "קל",
    normal: "רגיל"
  },
  // רמות טמפרטורת מים
  mop_temperature: {
    normal: "רגיל",
    warm: "חם"
  },
  // מצב התאמה אישית
  customize: {
    title: "התאמה אישית",
    description: "הגדר העדפות שאיבה וניגוב מותאמות אישית לכל אזור.",
    set_button: "הגדר",
    vacuum: "שואב",
    mop: "מנגב",
    vac_and_mop: "שואב ומנגב",
    cycles: "מחזורים",
    apply_to_all: "החל על כל החדרים",
    click_room_hint: "לחץ על אזור כדי לשנות את המצב.",
    intelligent_recommendation: "המלצה חכמה",
    select_room: "בחר חדר",
    settings_for: "הגדרות {{room}}",
    no_rooms: "אין חדרים זמינים"
  },
  // מצב CleanGenius
  cleangenius_mode: {
    cleaning_mode_title: "מצב ניקוי",
    deep_cleaning: "ניקוי עמוק"
  },
  // כותרת (Header)
  header: {
    battery: "סוללה",
    status: "סטטוס",
    area: "שטח",
    time: "זמן"
  },
  // יחידות מידה
  units: {
    square_meters: 'מ"ר',
    minutes: "דק'",
    minutes_short: "ד'",
    percent: "%",
    decibels: "dBm"
  },
  // רמות שאיבה
  suction_levels: {
    quiet: "שקט",
    standard: "סטנדרטי",
    strong: "טורבו",
    turbo: "מקסימום"
  },
  // תדירות שטיפת סמרטוט
  mop_washing_frequency: {
    by_room: "לפי חדר",
    by_area: "לפי שטח",
    by_time: "לפי זמן"
  },
  // מסלולי ניקוי
  cleaning_routes: {
    quick: "מהיר",
    standard: "רגיל",
    intensive: "אינטנסיבי",
    deep: "עמוק"
  },
  // שגיאות
  errors: {
    entity_not_found: "ישות לא נמצאה: {{entity}}",
    failed_to_load: "שגיאה בטעינת נתוני הישות",
    service_call_failed: "שגיאה בשליחת פקודה לשואב",
    entity_unavailable: "השואב אינו זמין"
  },
  // פאנל הגדרות
  settings: {
    title: "הגדרות",
    consumables: {
      title: "חלקי חילוף",
      main_brush: "מברשת ראשית",
      side_brush: "מברשת צד",
      filter: "מסנן",
      sensor: "חיישן",
      mop_pad: "רפידת ניגוב",
      silver_ion: "יוני כסף",
      detergent: "חומר ניקוי",
      squeegee: "מגב",
      tank_filter: "מסנן מיכל",
      onboard_dirty_water_tank: "מיכל מים מלוכלכים מובנה",
      dirty_water_channel: "ערוץ מים מלוכלכים",
      deodorizer: "מטהר אוויר",
      wheel: "גלגל",
      scale_inhibitor: "נוגד אבנית",
      fluffing_roller: "רולר הפרדה",
      roller_mop_filter: "מסנן ספוג רולר",
      water_outlet_filter: "מסנן יציאת מים",
      remaining: "נותרו",
      reset: "איפוס"
    },
    device_info: {
      title: "מידע על המכשיר",
      firmware: "גרסת קושחה",
      total_area: 'סה"כ שטח שנוקה',
      total_time: 'סה"כ זמן ניקוי',
      total_cleans: 'סה"כ סבבי ניקוי',
      wifi_ssid: "רשת Wi-Fi",
      wifi_signal: "עוצמת אות",
      ip_address: "כתובת IP"
    },
    quick_settings: {
      title: "הגדרות מהירות",
      child_lock: "נעילת ילדים",
      child_lock_desc: "ביטול הלחצנים הפיזיים במכשיר",
      resume_cleaning: "המשך ניקוי",
      resume_cleaning_desc: "המשך ניקוי אוטומטית לאחר טעינה",
      dnd: "נא לא להפריע",
      dnd_desc: "שעות שקטות עם פעילות מופחתת",
      dnd_start: "שעת התחלה",
      dnd_end: "שעת סיום",
      dnd_disable_resume: "השבת המשך",
      dnd_disable_resume_desc: "אל תמשיך ניקוי במצב נא לא להפריע",
      dnd_disable_auto_empty: "השבת ריקון אוטומטי",
      dnd_disable_auto_empty_desc: "אל תרוקן אוטומטית במצב נא לא להפריע",
      dnd_reduce_volume: "הפחת עוצמת קול",
      dnd_reduce_volume_desc: "הפחת עוצמת קול המכשיר במצב נא לא להפריע"
    },
    volume: {
      title: "עוצמת קול וצליל",
      volume: "עוצמה",
      test_sound: "אתר מכשיר",
      muted: "מושתק",
      voice_assistant: "עוזר קולי",
      voice_assistant_desc: "הפעל הודעות קוליות ומשוב",
      voice_language: "שפת קול",
      voice_language_desc: "שפה להודעות קוליות",
      streaming_voice_prompt: "הנחיה קולית בזמן אמת",
      streaming_voice_prompt_desc: "משוב קולי בזמן אמת במהלך ניקוי"
    },
    carpet: {
      title: "הגדרות שטיחים",
      carpet_recognition: "זיהוי שטיחים",
      carpet_recognition_desc: "זיהוי אוטומטי של שטיחים",
      carpet_avoidance: "הימנעות משטיחים",
      carpet_avoidance_desc: "הימנעות משטיחים בזמן ניגוב",
      clean_carpets_first: "נקה שטיחים קודם",
      clean_carpets_first_desc: "שאוב שטיחים לפני שטיפת רצפות",
      carpet_boost: "הגברת שאיבה על שטיחים",
      carpet_boost_desc: "הגברת עוצמת השאיבה על שטיחים",
      intensive_cleaning: "ניקוי אינטנסיבי",
      intensive_cleaning_desc: "ניקוי עמוק עם מעברים נוספים",
      side_brush_rotate: "סיבוב מברשת צד",
      side_brush_rotate_desc: "סובב מברשת צד על שטיחים",
      sensitivity: "רגישות לזיהוי שטיחים",
      sensitivity_desc: "רמת רגישות הזיהוי",
      sensitivity_low: "נמוכה",
      sensitivity_medium: "בינונית",
      sensitivity_high: "גבוהה",
      cleaning_mode: "ניקוי שטיחים",
      cleaning_mode_desc: "כיצד לטפל בשטיחים במהלך הניקוי",
      mode_vacuum: "שאיבה",
      mode_vacuum_and_mop: "שאיבה ושטיפה",
      mode_avoidance: "הימנעות",
      mode_ignore: "התעלם",
      vacuum_mode: "מצב שאיבה",
      vacuum_adaptation: "הרמת מגב",
      vacuum_remove_mop: "הסר מגב"
    },
    floor: {
      title: "הגדרות רצפה",
      obstacle_avoidance: "הימנעות ממכשולים",
      obstacle_avoidance_desc: "השתמש בחיישנים להימנעות ממכשולים",
      collision_avoidance: "הימנעות מהתנגשות",
      collision_avoidance_desc: "האט ליד קירות ורהיטים",
      auto_mount_mop: "הרכבת מגב אוטומטית",
      auto_mount_mop_desc: "הרכב אוטומטית את כרית המגב בעת הצורך",
      auto_recleaning: "ניקוי חוזר אוטומטי",
      auto_recleaning_desc: "נקה אוטומטית אזורים שהוחמצו",
      recleaning_off: "כבוי",
      recleaning_in_deep_mode: "במצב עמוק",
      recleaning_in_all_modes: "בכל המצבים",
      stain_avoidance: "הימנעות מכתמים",
      stain_avoidance_desc: "הימנעות מכתמים שזוהו",
      tight_mopping: "שטיפה יסודית",
      tight_mopping_desc: "שטיפה קרובה יותר לקירות ולקצוות",
      floor_direction_cleaning: "ניקוי בכיוון הרצפה",
      floor_direction_cleaning_desc: "נקה לאורך כיוון סיבי הרצפה",
      large_particles_boost: "הגברה לחלקיקים גדולים",
      large_particles_boost_desc: "הגבר שאיבה לפסולת גדולה",
      pet_focused_cleaning: "ניקוי ממוקד חיות מחמד",
      pet_focused_cleaning_desc: "ניקוי נוסף באזורי חיות מחמד",
      low_lying_area_frequency: "תדירות אזורים נמוכים",
      low_lying_area_frequency_desc: "באיזו תדירות לנקות אזורים נמוכים מתחת לרהיטים"
    },
    edge_corner: {
      title: "קצוות ופינות",
      side_reach: "הגעה צדית",
      side_reach_desc: "הארך מברשת צד לקצוות",
      mop_extend: "הארכת מגב",
      mop_extend_desc: "הארך מגב לקצוות ופינות",
      gap_cleaning: "ניקוי מרווחים",
      gap_cleaning_desc: "נקה מרווחים צרים בין רהיטים",
      mopping_under: "שטיפה מתחת לרהיטים",
      mopping_under_desc: "הארך מגב מתחת לרהיטים נמוכים",
      extend_frequency: "תדירות הארכה",
      extend_frequency_desc: "באיזו תדירות להאריך מגב לניקוי קצוות",
      frequency_standard: "רגילה",
      frequency_intelligent: "חכמה",
      frequency_high: "גבוהה"
    },
    dock: {
      title: "הגדרות תחנה",
      self_clean: "ניקוי עצמי",
      self_clean_desc: "שטיפת מגב אוטומטית לאחר ניקוי",
      auto_empty_mode: "מצב ריקון אוטו",
      auto_empty_mode_desc: "מתי לרוקן אוטומטית את מיכל האבק",
      auto_empty_frequency: "תדירות ריקון אוטו",
      auto_empty_frequency_desc: "כמה ניקויים לפני ריקון אוטומטי",
      empty_off: "כבוי",
      empty_standard: "רגיל",
      empty_high_frequency: "תדירות גבוהה",
      empty_low_frequency: "תדירות נמוכה",
      auto_detergent: "חומר ניקוי אוטו",
      auto_detergent_desc: "הוסף אוטומטית חומר ניקוי בזמן שטיפה",
      mop_washing_with_detergent: "שטיפת מגב עם חומר ניקוי",
      mop_washing_with_detergent_desc: "שימוש בחומר ניקוי בשטיפת המגב",
      mopping_with_detergent: "ניגוב עם חומר ניקוי",
      mopping_with_detergent_desc: "שימוש בחומר ניקוי בזמן ניגוב",
      water_electrolysis: "אלקטרוליזה של מים",
      water_electrolysis_desc: "עיקור מים באמצעות אלקטרוליזה",
      auto_water_refilling: "מילוי מים אוטומטי",
      auto_water_refilling_desc: "מילוי אוטומטי של מיכל המים הנקיים",
      auto_dust_collecting: "איסוף אבק אוטומטי",
      auto_dust_collecting_desc: "ריקון אוטומטי של מיכל האבק לאחר ניקוי",
      smart_washing: "שטיפה חכמה",
      smart_washing_desc: "התאם שטיפה לפי רמת הלכלוך",
      mop_wash_level: "רמת שטיפת מגב",
      mop_wash_level_desc: "עוצמת שטיפת המגב",
      washing_mode: "מצב שטיפה",
      washing_mode_desc: "עוצמת שטיפת המגב",
      washing_light: "קל",
      washing_standard: "רגיל",
      washing_deep: "עמוק",
      water_temperature: "טמפרטורת מים",
      water_temperature_desc: "טמפרטורה לשטיפת המגב",
      temp_normal: "רגילה",
      temp_mild: "עדינה",
      temp_warm: "חמה",
      temp_hot: "חמה מאוד",
      auto_drying: "ייבוש אוטו",
      auto_drying_desc: "ייבש אוטומטית את המגב לאחר ניקוי",
      drying_time: "זמן ייבוש",
      drying_time_desc: "משך ייבוש המגב",
      auto_rewashing: "שטיפה חוזרת אוטומטית",
      auto_rewashing_desc: "שטוף מגב אוטומטית כשמלוכלך",
      rewashing_off: "כבוי",
      rewashing_in_deep_mode: "במצב עמוק",
      rewashing_in_all_modes: "בכל המצבים",
      off_peak_charging: "טעינה בשעות שפל",
      off_peak_charging_desc: "טען בשעות שפל לחיסכון באנרגיה",
      off_peak_charging_start: "שעת התחלה",
      off_peak_charging_end: "שעת סיום",
      station_cleaning: "ניקוי תחנה",
      station_cleaning_desc: "נקה את תחנת הבסיס",
      clean_now: "נקה עכשיו",
      self_repair: "תיקון עצמי",
      self_repair_desc: "הפעל אבחון תיקון עצמי של התחנה",
      repair_now: "תקן",
      scraper_frequency: "תדירות מגרד",
      scraper_frequency_desc: "באיזו תדירות לנקות את המגרד הגומי"
    },
    ai_detection: {
      title: "בינה מלאכותית וזיהוי",
      intelligent_recognition: "זיהוי חכם",
      intelligent_recognition_desc: "זיהוי סביבה מבוסס AI",
      ai_obstacle_detection: "זיהוי מכשולים מבוסס AI",
      ai_obstacle_detection_desc: "שימוש ב-AI לזיהוי והימנעות ממכשולים",
      fuzzy_obstacle_detection: "זיהוי מכשולים מטושטש",
      fuzzy_obstacle_detection_desc: "זיהוי מכשולים רכים או לא ברורים",
      ai_obstacle_image_upload: "העלאת תמונות מכשולים",
      ai_obstacle_image_upload_desc: "העלאת תמונות מכשולים לניתוח",
      ai_obstacle_picture: "תמונת מכשול",
      ai_obstacle_picture_desc: "צלם תמונות של מכשולים שזוהו",
      ai_pet_detection: "זיהוי חיות מחמד",
      ai_pet_detection_desc: "זיהוי והימנעות מחיות מחמד",
      ai_pet_avoidance: "הימנעות מחיות מחמד",
      ai_pet_avoidance_desc: "הימנעות פעילה מחיות מחמד שזוהו",
      pet_focused_detection: "זיהוי ממוקד חיות מחמד",
      pet_focused_detection_desc: "זיהוי משופר לאזורי חיות מחמד",
      pet_picture: "תמונת חיית מחמד",
      pet_picture_desc: "צלם תמונות של חיות מחמד שזוהו",
      ai_human_detection: "זיהוי בני אדם",
      ai_human_detection_desc: "זיהוי והימנעות מבני אדם",
      human_follow: "מעקב אחר אדם",
      human_follow_desc: "עקוב אחר אנשים לניקוי אינטראקטיבי",
      ai_furniture_detection: "זיהוי רהיטים",
      ai_furniture_detection_desc: "זיהוי וניווט סביב רהיטים",
      ai_fluid_detection: "זיהוי נוזלים",
      ai_fluid_detection_desc: "זיהוי והימנעות מנוזלים",
      fill_light: "תאורת עזר",
      fill_light_desc: "שימוש בתאורת עזר לזיהוי טוב יותר",
      camera_light_auto: "בהירות מצלמה אוטומטית",
      camera_light_auto_desc: "התאם אוטומטית את בהירות אור המצלמה",
      camera_light_brightness: "בהירות אור מצלמה",
      camera_light_brightness_desc: "רמת בהירות ידנית של אור המצלמה"
    },
    station_controls: {
      title: "בקרת תחנה",
      self_clean: "ניקוי עצמי",
      self_clean_desc: "התחל מחזור שטיפת מטלית",
      manual_drying: "ייבוש ידני",
      manual_drying_desc: "התחל מחזור ייבוש מטלית",
      water_tank_draining: "ריקון מיכל מים",
      water_tank_draining_desc: "נקז מים מלוכלכים מהמיכל",
      base_station_cleaning: "ניקוי תחנה",
      base_station_cleaning_desc: "נקה את תחנת הבסיס",
      empty_water_tank: "רוקן מיכל מים",
      empty_water_tank_desc: "רוקן את מיכל איסוף המים",
      start_auto_empty: "ריקון אוטומטי",
      start_auto_empty_desc: "התחל ריקון אוטומטי של מיכל האבק",
      start_recleaning: "ניקוי חוזר",
      start_recleaning_desc: "התחל ניקוי חוזר של אזורים שהוחמצו",
      clear_warning: "נקה אזהרה",
      clear_warning_desc: "נקה הודעות אזהרה נוכחיות"
    },
    map: {
      title: "הגדרות מפה",
      multi_floor: "מפת רב-קומות",
      multi_floor_desc: "הפעל תמיכה במפות מרובות קומות",
      rotation: "סיבוב מפה",
      rotation_desc: "סובב את כיוון המפה",
      mapping_actions: "פעולות מיפוי",
      start_mapping: "התחל מיפוי",
      start_fast_mapping: "מיפוי מהיר"
    }
  }
}, Qw = {
  // Common
  common: {
    run: "실행",
    start: "시작",
    stop: "정지",
    cancel: "취소",
    save: "저장",
    apply: "적용",
    reset: "초기화"
  },
  // Room Selector
  room_selector: {
    title: "방 선택",
    selected_count: "{{count}}개 선택됨"
  },
  // Map Selector
  map_selector: {
    unknown: "알 수 없는 맵"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "사용 가능한 맵이 없습니다",
    looking_for: "검색 중: {{entity}}",
    room_overlay: "방 번호를 클릭하여 청소할 방을 선택하세요",
    zone_overlay_create: "맵을 클릭하여 청소 구역을 지정하세요",
    zone_overlay_resize: "모서리를 드래그하여 크기를 조절하거나, 다른 곳을 클릭하여 위치를 이동하세요",
    clear_zone: "구역 지우기",
    switch_to_list: "목록 보기로 전환",
    switch_to_map: "맵 보기로 전환",
    room_list_overlay: "청소할 방을 탭하여 선택하세요",
    no_rooms: "사용 가능한 방이 없습니다",
    zoom_in: "확대",
    zoom_out: "축소",
    zoom_reset: "확대/축소 초기화",
    lock_map: "맵 잠금",
    unlock_map: "맵 잠금 해제"
  },
  // Mode Tabs
  modes: {
    room: "방",
    all: "전체",
    zone: "구역"
  },
  // Action Buttons
  actions: {
    clean: "청소",
    clean_all: "전체 청소",
    clean_rooms: "{{count}}개 방 청소",
    clean_rooms_plural: "{{count}}개 방 청소",
    select_rooms: "방 선택",
    zone_clean: "구역 청소",
    pause: "일시 정지",
    resume: "재개",
    stop: "중지",
    stop_and_dock: "중지 및 도크 복귀",
    dock: "도크 복귀"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} 선택됨",
    deselected_room: "{{name}} 선택 해제됨",
    paused: "청소가 일시 정지되었습니다",
    stopped: "청소가 중지되었습니다",
    docked: "도크로 복귀 중입니다",
    cleaning_started: "청소를 시작했습니다",
    resuming: "청소를 재개합니다",
    starting_full_clean: "전체 집 청소를 시작합니다",
    pausing_vacuum: "청소기 일시 정지 중",
    stopping_vacuum: "청소기 중지 중",
    stopping_and_docking: "청소기 중지 및 도크 복귀 중",
    vacuum_docking: "청소기가 도크로 복귀 중입니다",
    starting_room_clean: "선택한 {{count}}개 방 청소를 시작합니다",
    starting_room_clean_plural: "선택한 {{count}}개 방 청소를 시작합니다",
    starting_zone_clean: "구역 청소를 시작합니다",
    select_rooms_first: "먼저 청소할 방을 선택해 주세요",
    cannot_determine_map: "맵 크기를 확인할 수 없습니다",
    select_zone_first: "먼저 맵에서 구역을 선택해 주세요"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "선택된 방:",
    selected_label: "선택 항목:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "맞춤: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "단축키 보기",
    repeats_tooltip: "반복 횟수",
    vac_and_mop: "진공 및 물걸레",
    mop_after_vac: "진공 후 물걸레",
    vacuum: "진공",
    mop: "물걸레"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "청소 모드",
    clean_genius: "CleanGenius",
    custom: "맞춤 설정"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "단축키",
    no_shortcuts: "사용 가능한 단축키가 없습니다",
    create_hint: "Dreame 앱에서 단축키를 만들어 자주 사용하는 청소 루틴을 빠르게 시작하세요"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "청소 모드",
    suction_power_title: "흡입력",
    max_plus_description: "흡입력을 최고 수준으로 올립니다. 일회성 모드입니다.",
    wetness_title: "물걸레 습도",
    mop_pad_humidity_title: "물걸레 패드 습도",
    slightly_dry: "약간 건조",
    moist: "촉촉하게",
    wet: "젖음",
    water_volume_title: "물 양",
    water_low: "낮음",
    water_medium: "중간",
    water_high: "높음",
    mop_washing_frequency_title: "물걸레 세척 빈도",
    route_title: "경로",
    mop_pressure_title: "물걸레 압력",
    mop_temperature_title: "물 온도"
  },
  // 물걸레 압력 레벨
  mop_pressure: {
    light: "약하게",
    normal: "보통"
  },
  // 물 온도 레벨
  mop_temperature: {
    normal: "상온",
    warm: "따뜻하게"
  },
  // Customize Cleaning Mode
  customize: {
    title: "사용자 지정",
    description: "각 구역에 대한 흡입력 및 물걸레 설정을 지정하세요.",
    set_button: "설정",
    vacuum: "진공",
    mop: "물걸레",
    vac_and_mop: "진공 및 물걸레",
    cycles: "반복 횟수",
    apply_to_all: "모든 방에 적용",
    click_room_hint: "개별 구역을 클릭하여 모드를 변경하세요.",
    intelligent_recommendation: "지능형 추천",
    select_room: "방 선택",
    settings_for: "{{room}} 설정",
    no_rooms: "사용 가능한 방이 없습니다"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "청소 모드",
    deep_cleaning: "딥 클리닝"
  },
  // Header
  header: {
    battery: "배터리",
    status: "상태",
    area: "면적",
    time: "시간"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "분",
    minutes_short: "분",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "저소음",
    standard: "표준",
    strong: "터보",
    turbo: "최대"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "방별",
    by_area: "면적별",
    by_time: "시간별"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "빠르게",
    standard: "표준",
    intensive: "집중",
    deep: "딥 클리닝"
  },
  // Errors
  errors: {
    entity_not_found: "엔티티를 찾을 수 없음: {{entity}}",
    failed_to_load: "엔티티 데이터를 불러오지 못했습니다",
    service_call_failed: "청소기에 명령을 보내지 못했습니다",
    entity_unavailable: "청소기를 사용할 수 없습니다"
  },
  // Settings Panel
  settings: {
    title: "설정",
    consumables: {
      title: "소모품",
      main_brush: "메인 브러시",
      side_brush: "사이드 브러시",
      filter: "필터",
      sensor: "센서",
      mop_pad: "물걸레 패드",
      silver_ion: "은이온",
      detergent: "세제",
      squeegee: "스퀴지",
      tank_filter: "탱크 필터",
      onboard_dirty_water_tank: "내장 오수 탱크",
      dirty_water_channel: "오수 채널",
      deodorizer: "탈취제",
      wheel: "바퀴",
      scale_inhibitor: "석회 억제제",
      fluffing_roller: "플러핑 롤러",
      roller_mop_filter: "롤러 물걸레 필터",
      water_outlet_filter: "물 배출 필터",
      remaining: "남음",
      reset: "초기화"
    },
    device_info: {
      title: "기기 정보",
      firmware: "펌웨어",
      total_area: "총 청소 면적",
      total_time: "총 청소 시간",
      total_cleans: "총 청소 횟수",
      wifi_ssid: "Wi-Fi 네트워크",
      wifi_signal: "신호 강도",
      ip_address: "IP 주소"
    },
    quick_settings: {
      title: "빠른 설정",
      child_lock: "차일드 락",
      child_lock_desc: "기기의 물리적 버튼을 비활성화합니다",
      resume_cleaning: "청소 재개",
      resume_cleaning_desc: "충전 후 자동으로 청소 재개",
      dnd: "방해 금지",
      dnd_desc: "활동을 줄여 조용한 시간을 가집니다",
      dnd_start: "시작 시간",
      dnd_end: "종료 시간",
      dnd_disable_resume: "재개 비활성화",
      dnd_disable_resume_desc: "방해 금지 모드에서 청소 재개 안 함",
      dnd_disable_auto_empty: "자동 비우기 비활성화",
      dnd_disable_auto_empty_desc: "방해 금지 모드에서 자동 비우기 안 함",
      dnd_reduce_volume: "볼륨 줄이기",
      dnd_reduce_volume_desc: "방해 금지 모드에서 기기 볼륨 줄이기"
    },
    volume: {
      title: "볼륨 및 사운드",
      volume: "볼륨",
      test_sound: "위치 찾기",
      muted: "음소거됨",
      voice_assistant: "음성 어시스턴트",
      voice_assistant_desc: "음성 안내 및 피드백 활성화",
      voice_language: "음성 언어",
      voice_language_desc: "음성 안내 언어",
      streaming_voice_prompt: "실시간 음성 안내",
      streaming_voice_prompt_desc: "청소 중 실시간 음성 피드백"
    },
    carpet: {
      title: "카펫 설정",
      carpet_recognition: "카펫 인식",
      carpet_recognition_desc: "카펫을 자동으로 감지합니다",
      carpet_avoidance: "카펫 회피",
      carpet_avoidance_desc: "물걸레질 중 카펫을 회피합니다",
      clean_carpets_first: "카펫 먼저 청소",
      clean_carpets_first_desc: "바닥 물걸레 전에 카펫 청소",
      carpet_boost: "카펫 부스트",
      carpet_boost_desc: "카펫 위에서 흡입력을 높입니다",
      intensive_cleaning: "집중 청소",
      intensive_cleaning_desc: "추가 패스로 카펫 심층 청소",
      side_brush_rotate: "사이드 브러시 회전",
      side_brush_rotate_desc: "카펫에서 사이드 브러시 회전",
      sensitivity: "카펫 민감도",
      sensitivity_desc: "감지 민감도 수준",
      sensitivity_low: "낮음",
      sensitivity_medium: "보통",
      sensitivity_high: "높음",
      cleaning_mode: "카펫 청소",
      cleaning_mode_desc: "청소 중 카펫 처리 방법",
      mode_vacuum: "청소",
      mode_vacuum_and_mop: "청소 & 물걸레",
      mode_avoidance: "회피",
      mode_ignore: "무시",
      vacuum_mode: "청소 모드",
      vacuum_adaptation: "물걸레 들어올림",
      vacuum_remove_mop: "물걸레 제거"
    },
    floor: {
      title: "바닥 설정",
      obstacle_avoidance: "장애물 회피",
      obstacle_avoidance_desc: "센서를 사용하여 장애물 회피",
      collision_avoidance: "충돌 회피",
      collision_avoidance_desc: "벽과 가구 근처에서 속도 줄임",
      auto_mount_mop: "자동 물걸레 장착",
      auto_mount_mop_desc: "필요시 자동으로 물걸레 패드 장착",
      auto_recleaning: "자동 재청소",
      auto_recleaning_desc: "놓친 영역 자동 재청소",
      recleaning_off: "끔",
      recleaning_in_deep_mode: "딥 모드에서",
      recleaning_in_all_modes: "모든 모드에서",
      stain_avoidance: "얼룩 회피",
      stain_avoidance_desc: "감지된 얼룩을 피합니다",
      tight_mopping: "꼼꼼한 물걸레질",
      tight_mopping_desc: "벽과 가장자리에 더 가깝게 닦습니다",
      floor_direction_cleaning: "바닥 방향 청소",
      floor_direction_cleaning_desc: "바닥 결 방향에 따라 청소",
      large_particles_boost: "대형 입자 부스트",
      large_particles_boost_desc: "큰 이물질에 대한 흡입력 증가",
      pet_focused_cleaning: "반려동물 구역 청소",
      pet_focused_cleaning_desc: "반려동물 구역에서 추가 청소",
      low_lying_area_frequency: "낮은 구역 청소 빈도",
      low_lying_area_frequency_desc: "가구 아래 낮은 구역을 얼마나 자주 청소할지"
    },
    edge_corner: {
      title: "가장자리 & 모서리",
      side_reach: "측면 도달",
      side_reach_desc: "가장자리를 위해 측면 브러시 확장",
      mop_extend: "물걸레 확장",
      mop_extend_desc: "가장자리와 모서리를 위해 물걸레 확장",
      gap_cleaning: "틈새 청소",
      gap_cleaning_desc: "가구 사이 좁은 틈새 청소",
      mopping_under: "가구 아래 청소",
      mopping_under_desc: "낮은 가구 아래로 물걸레 확장",
      extend_frequency: "확장 빈도",
      extend_frequency_desc: "가장자리 청소를 위한 물걸레 확장 빈도",
      frequency_standard: "표준",
      frequency_intelligent: "지능형",
      frequency_high: "높음"
    },
    dock: {
      title: "도크 설정",
      self_clean: "자가 세척",
      self_clean_desc: "청소 후 자동 물걸레 세척",
      auto_empty_mode: "자동 비우기 모드",
      auto_empty_mode_desc: "먼지통을 자동으로 비울 시기",
      auto_empty_frequency: "자동 비우기 빈도",
      auto_empty_frequency_desc: "주기당 자동 비우기 횟수",
      empty_off: "끔",
      empty_standard: "표준",
      empty_high_frequency: "고빈도",
      empty_low_frequency: "저빈도",
      auto_detergent: "자동 세제 추가",
      auto_detergent_desc: "세척 시 자동으로 세제 추가",
      mop_washing_with_detergent: "세제로 물걸레 세척",
      mop_washing_with_detergent_desc: "물걸레 세척 시 세제 사용",
      mopping_with_detergent: "세제로 물걸레질",
      mopping_with_detergent_desc: "바닥 물걸레질 시 세제 사용",
      water_electrolysis: "물 전기분해",
      water_electrolysis_desc: "전기분해로 물 살균",
      auto_water_refilling: "자동 물 보충",
      auto_water_refilling_desc: "깨끗한 물 탱크 자동 보충",
      auto_dust_collecting: "자동 먼지 수집",
      auto_dust_collecting_desc: "청소 후 자동으로 먼지통 비우기",
      smart_washing: "스마트 세척",
      smart_washing_desc: "오염 수준에 따라 세척 조정",
      mop_wash_level: "세척 수준",
      mop_wash_level_desc: "물걸레 세척 사이클 강도",
      washing_mode: "세척 모드",
      washing_mode_desc: "물걸레 세척 강도",
      washing_light: "가벼움",
      washing_standard: "표준",
      washing_deep: "심층",
      water_temperature: "물 온도",
      water_temperature_desc: "물걸레 세척 온도",
      temp_normal: "보통",
      temp_mild: "미온",
      temp_warm: "따뜻함",
      temp_hot: "뜨거움",
      auto_drying: "자동 건조",
      auto_drying_desc: "청소 후 자동으로 물걸레 건조",
      drying_time: "건조 시간",
      drying_time_desc: "물걸레 건조 시간",
      auto_rewashing: "자동 재세척",
      auto_rewashing_desc: "오염 시 자동으로 물걸레 재세척",
      rewashing_off: "끔",
      rewashing_in_deep_mode: "딥 모드에서",
      rewashing_in_all_modes: "모든 모드에서",
      off_peak_charging: "비피크 시간 충전",
      off_peak_charging_desc: "비피크 시간에 충전하여 에너지 절약",
      off_peak_charging_start: "시작 시간",
      off_peak_charging_end: "종료 시간",
      station_cleaning: "스테이션 청소",
      station_cleaning_desc: "베이스 스테이션 청소",
      clean_now: "지금 청소",
      self_repair: "자가 수리",
      self_repair_desc: "스테이션 자가 진단 실행",
      repair_now: "수리",
      scraper_frequency: "스크레이퍼 청소 빈도",
      scraper_frequency_desc: "고무 스크레이퍼를 얼마나 자주 청소할지"
    },
    ai_detection: {
      title: "AI 및 감지",
      intelligent_recognition: "지능형 인식",
      intelligent_recognition_desc: "AI 기반 환경 인식",
      ai_obstacle_detection: "AI 장애물 감지",
      ai_obstacle_detection_desc: "AI를 사용하여 장애물을 식별하고 피합니다",
      fuzzy_obstacle_detection: "퍼지 장애물 감지",
      fuzzy_obstacle_detection_desc: "부드럽거나 불명확한 장애물 감지",
      ai_obstacle_image_upload: "장애물 이미지 업로드",
      ai_obstacle_image_upload_desc: "분석을 위해 장애물 이미지를 업로드합니다",
      ai_obstacle_picture: "장애물 사진",
      ai_obstacle_picture_desc: "감지된 장애물 사진 촬영",
      ai_pet_detection: "반려동물 감지",
      ai_pet_detection_desc: "반려동물을 감지하고 피합니다",
      ai_pet_avoidance: "반려동물 회피",
      ai_pet_avoidance_desc: "감지된 반려동물을 적극적으로 회피",
      pet_focused_detection: "반려동물 집중 감지",
      pet_focused_detection_desc: "반려동물 영역 강화 감지",
      pet_picture: "반려동물 사진",
      pet_picture_desc: "감지된 반려동물 사진 촬영",
      ai_human_detection: "사람 감지",
      ai_human_detection_desc: "사람을 감지하고 피합니다",
      human_follow: "사람 따라가기",
      human_follow_desc: "인터랙티브 청소를 위해 사람 따라가기",
      ai_furniture_detection: "가구 감지",
      ai_furniture_detection_desc: "가구를 감지하고 주변을 탐색합니다",
      ai_fluid_detection: "액체 감지",
      ai_fluid_detection_desc: "액체를 감지하고 피합니다",
      fill_light: "보조 조명",
      fill_light_desc: "더 나은 감지를 위해 보조 조명을 사용합니다",
      camera_light_auto: "자동 카메라 밝기",
      camera_light_auto_desc: "카메라 조명 밝기 자동 조정",
      camera_light_brightness: "카메라 조명 밝기",
      camera_light_brightness_desc: "수동 카메라 조명 밝기 수준"
    },
    station_controls: {
      title: "스테이션 제어",
      self_clean: "자가 세척",
      self_clean_desc: "물걸레 패드 세척 사이클 시작",
      manual_drying: "수동 건조",
      manual_drying_desc: "물걸레 패드 건조 사이클 시작",
      water_tank_draining: "물탱크 배수",
      water_tank_draining_desc: "탱크에서 오수 배수",
      base_station_cleaning: "스테이션 청소",
      base_station_cleaning_desc: "베이스 스테이션 청소",
      empty_water_tank: "물탱크 비우기",
      empty_water_tank_desc: "물 수집 탱크 비우기",
      start_auto_empty: "자동 비우기",
      start_auto_empty_desc: "먼지통 자동 비우기 시작",
      start_recleaning: "재청소",
      start_recleaning_desc: "놓친 영역 재청소 시작",
      clear_warning: "경고 지우기",
      clear_warning_desc: "현재 경고 메시지 지우기"
    },
    map: {
      title: "지도 설정",
      multi_floor: "다층 지도",
      multi_floor_desc: "여러 층 지도 지원 활성화",
      rotation: "지도 회전",
      rotation_desc: "지도 방향 회전",
      mapping_actions: "매핑 작업",
      start_mapping: "매핑 시작",
      start_fast_mapping: "빠른 매핑"
    }
  }
}, Tp = {
  en: Pw,
  de: Bw,
  ru: Yw,
  zh: Zw,
  es: Vw,
  nl: Kw,
  it: Xw,
  pl: Fw,
  fr_FR: Ww,
  he: $w,
  ko: Qw
};
function Jw(a, i) {
  return i ? Object.entries(i).reduce((o, [l, c]) => o.replace(new RegExp(`{{${l}}}`, "g"), String(c)), a) : a;
}
function e1(a, i) {
  return i.split(".").reduce((o, l) => {
    if (o && typeof o == "object" && l in o)
      return o[l];
  }, a);
}
function t1(a = "en") {
  const i = Tp[a] || Tp.en;
  return function(l, c) {
    const d = e1(i, l);
    return typeof d != "string" ? (te.warn(`Translation key not found: ${l}`), l) : Jw(d, c);
  };
}
function a1(a, i) {
  return i === 0 ? a("actions.select_rooms") : a(i === 1 ? "actions.clean_rooms" : "actions.clean_rooms_plural", { count: String(i) });
}
const n1 = ["he"];
function Pg(a) {
  return n1.includes(a);
}
const Zu = D.createContext(null);
function He(a) {
  const i = D.useContext(Zu), o = a ?? i?.language ?? "en", l = D.useMemo(() => t1(o), [o]);
  return {
    t: l,
    getRoomCountTranslation: (c) => a1(l, c)
  };
}
function V(a, i, o) {
  function l(m, g) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: g,
        constr: _,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(a))
      return;
    m._zod.traits.add(a), i(m, g);
    const f = _.prototype, v = Object.keys(f);
    for (let y = 0; y < v.length; y++) {
      const w = v[y];
      w in m || (m[w] = f[w].bind(m));
    }
  }
  const c = o?.Parent ?? Object;
  class d extends c {
  }
  Object.defineProperty(d, "name", { value: a });
  function _(m) {
    var g;
    const f = o?.Parent ? new d() : this;
    l(f, m), (g = f._zod).deferred ?? (g.deferred = []);
    for (const v of f._zod.deferred)
      v();
    return f;
  }
  return Object.defineProperty(_, "init", { value: l }), Object.defineProperty(_, Symbol.hasInstance, {
    value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(a)
  }), Object.defineProperty(_, "name", { value: a }), _;
}
class eo extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Bg extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
const Yg = {};
function si(a) {
  return Yg;
}
function Zg(a) {
  const i = Object.values(a).filter((l) => typeof l == "number");
  return Object.entries(a).filter(([l, c]) => i.indexOf(+l) === -1).map(([l, c]) => c);
}
function Cu(a, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function Vu(a) {
  return {
    get value() {
      {
        const i = a();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Ku(a) {
  return a == null;
}
function Xu(a) {
  const i = a.startsWith("^") ? 1 : 0, o = a.endsWith("$") ? a.length - 1 : a.length;
  return a.slice(i, o);
}
const Ap = /* @__PURE__ */ Symbol("evaluating");
function Ge(a, i, o) {
  let l;
  Object.defineProperty(a, i, {
    get() {
      if (l !== Ap)
        return l === void 0 && (l = Ap, l = o()), l;
    },
    set(c) {
      Object.defineProperty(a, i, {
        value: c
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ui(a, i, o) {
  Object.defineProperty(a, i, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function On(...a) {
  const i = {};
  for (const o of a) {
    const l = Object.getOwnPropertyDescriptors(o);
    Object.assign(i, l);
  }
  return Object.defineProperties({}, i);
}
function Np(a) {
  return JSON.stringify(a);
}
function i1(a) {
  return a.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Vg = "captureStackTrace" in Error ? Error.captureStackTrace : (...a) => {
};
function Il(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
const o1 = Vu(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const a = Function;
    return new a(""), !0;
  } catch {
    return !1;
  }
});
function tr(a) {
  if (Il(a) === !1)
    return !1;
  const i = a.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const o = i.prototype;
  return !(Il(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Kg(a) {
  return tr(a) ? { ...a } : Array.isArray(a) ? [...a] : a;
}
const r1 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function to(a) {
  return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Rn(a, i, o) {
  const l = new a._zod.constr(i ?? a._zod.def);
  return (!i || o?.parent) && (l._zod.parent = a), l;
}
function de(a) {
  const i = a;
  if (!i)
    return {};
  if (typeof i == "string")
    return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function l1(a) {
  return Object.keys(a).filter((i) => a[i]._zod.optin === "optional" && a[i]._zod.optout === "optional");
}
function s1(a, i) {
  const o = a._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = On(a._zod.def, {
    get shape() {
      const _ = {};
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (_[m] = o.shape[m]);
      }
      return ui(this, "shape", _), _;
    },
    checks: []
  });
  return Rn(a, d);
}
function c1(a, i) {
  const o = a._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = On(a._zod.def, {
    get shape() {
      const _ = { ...a._zod.def.shape };
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete _[m];
      }
      return ui(this, "shape", _), _;
    },
    checks: []
  });
  return Rn(a, d);
}
function u1(a, i) {
  if (!tr(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = a._zod.def.checks;
  if (o && o.length > 0) {
    const d = a._zod.def.shape;
    for (const _ in i)
      if (Object.getOwnPropertyDescriptor(d, _) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const c = On(a._zod.def, {
    get shape() {
      const d = { ...a._zod.def.shape, ...i };
      return ui(this, "shape", d), d;
    }
  });
  return Rn(a, c);
}
function d1(a, i) {
  if (!tr(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = On(a._zod.def, {
    get shape() {
      const l = { ...a._zod.def.shape, ...i };
      return ui(this, "shape", l), l;
    }
  });
  return Rn(a, o);
}
function _1(a, i) {
  const o = On(a._zod.def, {
    get shape() {
      const l = { ...a._zod.def.shape, ...i._zod.def.shape };
      return ui(this, "shape", l), l;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Rn(a, o);
}
function m1(a, i, o) {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const _ = On(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, g = { ...m };
      if (o)
        for (const f in o) {
          if (!(f in m))
            throw new Error(`Unrecognized key: "${f}"`);
          o[f] && (g[f] = a ? new a({
            type: "optional",
            innerType: m[f]
          }) : m[f]);
        }
      else
        for (const f in m)
          g[f] = a ? new a({
            type: "optional",
            innerType: m[f]
          }) : m[f];
      return ui(this, "shape", g), g;
    },
    checks: []
  });
  return Rn(i, _);
}
function f1(a, i, o) {
  const l = On(i._zod.def, {
    get shape() {
      const c = i._zod.def.shape, d = { ...c };
      if (o)
        for (const _ in o) {
          if (!(_ in d))
            throw new Error(`Unrecognized key: "${_}"`);
          o[_] && (d[_] = new a({
            type: "nonoptional",
            innerType: c[_]
          }));
        }
      else
        for (const _ in c)
          d[_] = new a({
            type: "nonoptional",
            innerType: c[_]
          });
      return ui(this, "shape", d), d;
    }
  });
  return Rn(i, l);
}
function Qi(a, i = 0) {
  if (a.aborted === !0)
    return !0;
  for (let o = i; o < a.issues.length; o++)
    if (a.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function Xg(a, i) {
  return i.map((o) => {
    var l;
    return (l = o).path ?? (l.path = []), o.path.unshift(a), o;
  });
}
function Ml(a) {
  return typeof a == "string" ? a : a?.message;
}
function ci(a, i, o) {
  const l = { ...a, path: a.path ?? [] };
  if (!a.message) {
    const c = Ml(a.inst?._zod.def?.error?.(a)) ?? Ml(i?.error?.(a)) ?? Ml(o.customError?.(a)) ?? Ml(o.localeError?.(a)) ?? "Invalid input";
    l.message = c;
  }
  return delete l.inst, delete l.continue, i?.reportInput || delete l.input, l;
}
function Fu(a) {
  return Array.isArray(a) ? "array" : typeof a == "string" ? "string" : "unknown";
}
function ar(...a) {
  const [i, o, l] = a;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: o,
    inst: l
  } : { ...i };
}
const Fg = (a, i) => {
  a.name = "$ZodError", Object.defineProperty(a, "_zod", {
    value: a._zod,
    enumerable: !1
  }), Object.defineProperty(a, "issues", {
    value: i,
    enumerable: !1
  }), a.message = JSON.stringify(i, Cu, 2), Object.defineProperty(a, "toString", {
    value: () => a.message,
    enumerable: !1
  });
}, Wg = V("$ZodError", Fg), $g = V("$ZodError", Fg, { Parent: Error });
function p1(a, i = (o) => o.message) {
  const o = {}, l = [];
  for (const c of a.issues)
    c.path.length > 0 ? (o[c.path[0]] = o[c.path[0]] || [], o[c.path[0]].push(i(c))) : l.push(i(c));
  return { formErrors: l, fieldErrors: o };
}
function g1(a, i = (o) => o.message) {
  const o = { _errors: [] }, l = (c) => {
    for (const d of c.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((_) => l({ issues: _ }));
      else if (d.code === "invalid_key")
        l({ issues: d.issues });
      else if (d.code === "invalid_element")
        l({ issues: d.issues });
      else if (d.path.length === 0)
        o._errors.push(i(d));
      else {
        let _ = o, m = 0;
        for (; m < d.path.length; ) {
          const g = d.path[m];
          m === d.path.length - 1 ? (_[g] = _[g] || { _errors: [] }, _[g]._errors.push(i(d))) : _[g] = _[g] || { _errors: [] }, _ = _[g], m++;
        }
      }
  };
  return l(a), o;
}
const Wu = (a) => (i, o, l, c) => {
  const d = l ? Object.assign(l, { async: !1 }) : { async: !1 }, _ = i._zod.run({ value: o, issues: [] }, d);
  if (_ instanceof Promise)
    throw new eo();
  if (_.issues.length) {
    const m = new (c?.Err ?? a)(_.issues.map((g) => ci(g, d, si())));
    throw Vg(m, c?.callee), m;
  }
  return _.value;
}, $u = (a) => async (i, o, l, c) => {
  const d = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let _ = i._zod.run({ value: o, issues: [] }, d);
  if (_ instanceof Promise && (_ = await _), _.issues.length) {
    const m = new (c?.Err ?? a)(_.issues.map((g) => ci(g, d, si())));
    throw Vg(m, c?.callee), m;
  }
  return _.value;
}, Xl = (a) => (i, o, l) => {
  const c = l ? { ...l, async: !1 } : { async: !1 }, d = i._zod.run({ value: o, issues: [] }, c);
  if (d instanceof Promise)
    throw new eo();
  return d.issues.length ? {
    success: !1,
    error: new (a ?? Wg)(d.issues.map((_) => ci(_, c, si())))
  } : { success: !0, data: d.value };
}, h1 = /* @__PURE__ */ Xl($g), Fl = (a) => async (i, o, l) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let d = i._zod.run({ value: o, issues: [] }, c);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new a(d.issues.map((_) => ci(_, c, si())))
  } : { success: !0, data: d.value };
}, v1 = /* @__PURE__ */ Fl($g), y1 = (a) => (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Wu(a)(i, o, c);
}, b1 = (a) => (i, o, l) => Wu(a)(i, o, l), w1 = (a) => async (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return $u(a)(i, o, c);
}, S1 = (a) => async (i, o, l) => $u(a)(i, o, l), E1 = (a) => (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Xl(a)(i, o, c);
}, z1 = (a) => (i, o, l) => Xl(a)(i, o, l), k1 = (a) => async (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Fl(a)(i, o, c);
}, T1 = (a) => async (i, o, l) => Fl(a)(i, o, l), A1 = /^[cC][^\s-]{8,}$/, N1 = /^[0-9a-z]+$/, C1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, x1 = /^[0-9a-vA-V]{20}$/, M1 = /^[A-Za-z0-9]{27}$/, O1 = /^[a-zA-Z0-9_-]{21}$/, R1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, D1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Cp = (a) => a ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${a}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, j1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, L1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function U1() {
  return new RegExp(L1, "u");
}
const q1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, G1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, H1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, I1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, P1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qg = /^[A-Za-z0-9_-]*$/, B1 = /^\+[1-9]\d{6,14}$/, Jg = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Y1 = /* @__PURE__ */ new RegExp(`^${Jg}$`);
function eh(a) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof a.precision == "number" ? a.precision === -1 ? `${i}` : a.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${a.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Z1(a) {
  return new RegExp(`^${eh(a)}$`);
}
function V1(a) {
  const i = eh({ precision: a.precision }), o = ["Z"];
  a.local && o.push(""), a.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${i}(?:${o.join("|")})`;
  return new RegExp(`^${Jg}T(?:${l})$`);
}
const K1 = (a) => {
  const i = a ? `[\\s\\S]{${a?.minimum ?? 0},${a?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, X1 = /^[^A-Z]*$/, F1 = /^[^a-z]*$/, xa = /* @__PURE__ */ V("$ZodCheck", (a, i) => {
  var o;
  a._zod ?? (a._zod = {}), a._zod.def = i, (o = a._zod).onattach ?? (o.onattach = []);
}), W1 = /* @__PURE__ */ V("$ZodCheckMaxLength", (a, i) => {
  var o;
  xa.init(a, i), (o = a._zod.def).when ?? (o.when = (l) => {
    const c = l.value;
    return !Ku(c) && c.length !== void 0;
  }), a._zod.onattach.push((l) => {
    const c = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < c && (l._zod.bag.maximum = i.maximum);
  }), a._zod.check = (l) => {
    const c = l.value;
    if (c.length <= i.maximum)
      return;
    const _ = Fu(c);
    l.issues.push({
      origin: _,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: c,
      inst: a,
      continue: !i.abort
    });
  };
}), $1 = /* @__PURE__ */ V("$ZodCheckMinLength", (a, i) => {
  var o;
  xa.init(a, i), (o = a._zod.def).when ?? (o.when = (l) => {
    const c = l.value;
    return !Ku(c) && c.length !== void 0;
  }), a._zod.onattach.push((l) => {
    const c = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > c && (l._zod.bag.minimum = i.minimum);
  }), a._zod.check = (l) => {
    const c = l.value;
    if (c.length >= i.minimum)
      return;
    const _ = Fu(c);
    l.issues.push({
      origin: _,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: c,
      inst: a,
      continue: !i.abort
    });
  };
}), Q1 = /* @__PURE__ */ V("$ZodCheckLengthEquals", (a, i) => {
  var o;
  xa.init(a, i), (o = a._zod.def).when ?? (o.when = (l) => {
    const c = l.value;
    return !Ku(c) && c.length !== void 0;
  }), a._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.minimum = i.length, c.maximum = i.length, c.length = i.length;
  }), a._zod.check = (l) => {
    const c = l.value, d = c.length;
    if (d === i.length)
      return;
    const _ = Fu(c), m = d > i.length;
    l.issues.push({
      origin: _,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: a,
      continue: !i.abort
    });
  };
}), Wl = /* @__PURE__ */ V("$ZodCheckStringFormat", (a, i) => {
  var o, l;
  xa.init(a, i), a._zod.onattach.push((c) => {
    const d = c._zod.bag;
    d.format = i.format, i.pattern && (d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(i.pattern));
  }), i.pattern ? (o = a._zod).check ?? (o.check = (c) => {
    i.pattern.lastIndex = 0, !i.pattern.test(c.value) && c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: c.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: a,
      continue: !i.abort
    });
  }) : (l = a._zod).check ?? (l.check = () => {
  });
}), J1 = /* @__PURE__ */ V("$ZodCheckRegex", (a, i) => {
  Wl.init(a, i), a._zod.check = (o) => {
    i.pattern.lastIndex = 0, !i.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: i.pattern.toString(),
      inst: a,
      continue: !i.abort
    });
  };
}), eS = /* @__PURE__ */ V("$ZodCheckLowerCase", (a, i) => {
  i.pattern ?? (i.pattern = X1), Wl.init(a, i);
}), tS = /* @__PURE__ */ V("$ZodCheckUpperCase", (a, i) => {
  i.pattern ?? (i.pattern = F1), Wl.init(a, i);
}), aS = /* @__PURE__ */ V("$ZodCheckIncludes", (a, i) => {
  xa.init(a, i);
  const o = to(i.includes), l = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${o}` : o);
  i.pattern = l, a._zod.onattach.push((c) => {
    const d = c._zod.bag;
    d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(l);
  }), a._zod.check = (c) => {
    c.value.includes(i.includes, i.position) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: c.value,
      inst: a,
      continue: !i.abort
    });
  };
}), nS = /* @__PURE__ */ V("$ZodCheckStartsWith", (a, i) => {
  xa.init(a, i);
  const o = new RegExp(`^${to(i.prefix)}.*`);
  i.pattern ?? (i.pattern = o), a._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(o);
  }), a._zod.check = (l) => {
    l.value.startsWith(i.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: l.value,
      inst: a,
      continue: !i.abort
    });
  };
}), iS = /* @__PURE__ */ V("$ZodCheckEndsWith", (a, i) => {
  xa.init(a, i);
  const o = new RegExp(`.*${to(i.suffix)}$`);
  i.pattern ?? (i.pattern = o), a._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(o);
  }), a._zod.check = (l) => {
    l.value.endsWith(i.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: l.value,
      inst: a,
      continue: !i.abort
    });
  };
}), oS = /* @__PURE__ */ V("$ZodCheckOverwrite", (a, i) => {
  xa.init(a, i), a._zod.check = (o) => {
    o.value = i.tx(o.value);
  };
});
class rS {
  constructor(i = []) {
    this.content = [], this.indent = 0, this && (this.args = i);
  }
  indented(i) {
    this.indent += 1, i(this), this.indent -= 1;
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    const l = i.split(`
`).filter((_) => _), c = Math.min(...l.map((_) => _.length - _.trimStart().length)), d = l.map((_) => _.slice(c)).map((_) => " ".repeat(this.indent * 2) + _);
    for (const _ of d)
      this.content.push(_);
  }
  compile() {
    const i = Function, o = this?.args, c = [...(this?.content ?? [""]).map((d) => `  ${d}`)];
    return new i(...o, c.join(`
`));
  }
}
const lS = {
  major: 4,
  minor: 3,
  patch: 6
}, lt = /* @__PURE__ */ V("$ZodType", (a, i) => {
  var o;
  a ?? (a = {}), a._zod.def = i, a._zod.bag = a._zod.bag || {}, a._zod.version = lS;
  const l = [...a._zod.def.checks ?? []];
  a._zod.traits.has("$ZodCheck") && l.unshift(a);
  for (const c of l)
    for (const d of c._zod.onattach)
      d(a);
  if (l.length === 0)
    (o = a._zod).deferred ?? (o.deferred = []), a._zod.deferred?.push(() => {
      a._zod.run = a._zod.parse;
    });
  else {
    const c = (_, m, g) => {
      let f = Qi(_), v;
      for (const y of m) {
        if (y._zod.def.when) {
          if (!y._zod.def.when(_))
            continue;
        } else if (f)
          continue;
        const w = _.issues.length, E = y._zod.check(_);
        if (E instanceof Promise && g?.async === !1)
          throw new eo();
        if (v || E instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await E, _.issues.length !== w && (f || (f = Qi(_, w)));
          });
        else {
          if (_.issues.length === w)
            continue;
          f || (f = Qi(_, w));
        }
      }
      return v ? v.then(() => _) : _;
    }, d = (_, m, g) => {
      if (Qi(_))
        return _.aborted = !0, _;
      const f = c(m, l, g);
      if (f instanceof Promise) {
        if (g.async === !1)
          throw new eo();
        return f.then((v) => a._zod.parse(v, g));
      }
      return a._zod.parse(f, g);
    };
    a._zod.run = (_, m) => {
      if (m.skipChecks)
        return a._zod.parse(_, m);
      if (m.direction === "backward") {
        const f = a._zod.parse({ value: _.value, issues: [] }, { ...m, skipChecks: !0 });
        return f instanceof Promise ? f.then((v) => d(v, _, m)) : d(f, _, m);
      }
      const g = a._zod.parse(_, m);
      if (g instanceof Promise) {
        if (m.async === !1)
          throw new eo();
        return g.then((f) => c(f, l, m));
      }
      return c(g, l, m);
    };
  }
  Ge(a, "~standard", () => ({
    validate: (c) => {
      try {
        const d = h1(a, c);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return v1(a, c).then((_) => _.success ? { value: _.data } : { issues: _.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Qu = /* @__PURE__ */ V("$ZodString", (a, i) => {
  lt.init(a, i), a._zod.pattern = [...a?._zod.bag?.patterns ?? []].pop() ?? K1(a._zod.bag), a._zod.parse = (o, l) => {
    if (i.coerce)
      try {
        o.value = String(o.value);
      } catch {
      }
    return typeof o.value == "string" || o.issues.push({
      expected: "string",
      code: "invalid_type",
      input: o.value,
      inst: a
    }), o;
  };
}), Fe = /* @__PURE__ */ V("$ZodStringFormat", (a, i) => {
  Wl.init(a, i), Qu.init(a, i);
}), sS = /* @__PURE__ */ V("$ZodGUID", (a, i) => {
  i.pattern ?? (i.pattern = D1), Fe.init(a, i);
}), cS = /* @__PURE__ */ V("$ZodUUID", (a, i) => {
  if (i.version) {
    const l = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (l === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Cp(l));
  } else
    i.pattern ?? (i.pattern = Cp());
  Fe.init(a, i);
}), uS = /* @__PURE__ */ V("$ZodEmail", (a, i) => {
  i.pattern ?? (i.pattern = j1), Fe.init(a, i);
}), dS = /* @__PURE__ */ V("$ZodURL", (a, i) => {
  Fe.init(a, i), a._zod.check = (o) => {
    try {
      const l = o.value.trim(), c = new URL(l);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(c.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: o.value,
        inst: a,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(c.protocol.endsWith(":") ? c.protocol.slice(0, -1) : c.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: o.value,
        inst: a,
        continue: !i.abort
      })), i.normalize ? o.value = c.href : o.value = l;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: a,
        continue: !i.abort
      });
    }
  };
}), _S = /* @__PURE__ */ V("$ZodEmoji", (a, i) => {
  i.pattern ?? (i.pattern = U1()), Fe.init(a, i);
}), mS = /* @__PURE__ */ V("$ZodNanoID", (a, i) => {
  i.pattern ?? (i.pattern = O1), Fe.init(a, i);
}), fS = /* @__PURE__ */ V("$ZodCUID", (a, i) => {
  i.pattern ?? (i.pattern = A1), Fe.init(a, i);
}), pS = /* @__PURE__ */ V("$ZodCUID2", (a, i) => {
  i.pattern ?? (i.pattern = N1), Fe.init(a, i);
}), gS = /* @__PURE__ */ V("$ZodULID", (a, i) => {
  i.pattern ?? (i.pattern = C1), Fe.init(a, i);
}), hS = /* @__PURE__ */ V("$ZodXID", (a, i) => {
  i.pattern ?? (i.pattern = x1), Fe.init(a, i);
}), vS = /* @__PURE__ */ V("$ZodKSUID", (a, i) => {
  i.pattern ?? (i.pattern = M1), Fe.init(a, i);
}), yS = /* @__PURE__ */ V("$ZodISODateTime", (a, i) => {
  i.pattern ?? (i.pattern = V1(i)), Fe.init(a, i);
}), bS = /* @__PURE__ */ V("$ZodISODate", (a, i) => {
  i.pattern ?? (i.pattern = Y1), Fe.init(a, i);
}), wS = /* @__PURE__ */ V("$ZodISOTime", (a, i) => {
  i.pattern ?? (i.pattern = Z1(i)), Fe.init(a, i);
}), SS = /* @__PURE__ */ V("$ZodISODuration", (a, i) => {
  i.pattern ?? (i.pattern = R1), Fe.init(a, i);
}), ES = /* @__PURE__ */ V("$ZodIPv4", (a, i) => {
  i.pattern ?? (i.pattern = q1), Fe.init(a, i), a._zod.bag.format = "ipv4";
}), zS = /* @__PURE__ */ V("$ZodIPv6", (a, i) => {
  i.pattern ?? (i.pattern = G1), Fe.init(a, i), a._zod.bag.format = "ipv6", a._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: a,
        continue: !i.abort
      });
    }
  };
}), kS = /* @__PURE__ */ V("$ZodCIDRv4", (a, i) => {
  i.pattern ?? (i.pattern = H1), Fe.init(a, i);
}), TS = /* @__PURE__ */ V("$ZodCIDRv6", (a, i) => {
  i.pattern ?? (i.pattern = I1), Fe.init(a, i), a._zod.check = (o) => {
    const l = o.value.split("/");
    try {
      if (l.length !== 2)
        throw new Error();
      const [c, d] = l;
      if (!d)
        throw new Error();
      const _ = Number(d);
      if (`${_}` !== d)
        throw new Error();
      if (_ < 0 || _ > 128)
        throw new Error();
      new URL(`http://[${c}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: a,
        continue: !i.abort
      });
    }
  };
});
function th(a) {
  if (a === "")
    return !0;
  if (a.length % 4 !== 0)
    return !1;
  try {
    return atob(a), !0;
  } catch {
    return !1;
  }
}
const AS = /* @__PURE__ */ V("$ZodBase64", (a, i) => {
  i.pattern ?? (i.pattern = P1), Fe.init(a, i), a._zod.bag.contentEncoding = "base64", a._zod.check = (o) => {
    th(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: a,
      continue: !i.abort
    });
  };
});
function NS(a) {
  if (!Qg.test(a))
    return !1;
  const i = a.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), o = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return th(o);
}
const CS = /* @__PURE__ */ V("$ZodBase64URL", (a, i) => {
  i.pattern ?? (i.pattern = Qg), Fe.init(a, i), a._zod.bag.contentEncoding = "base64url", a._zod.check = (o) => {
    NS(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: a,
      continue: !i.abort
    });
  };
}), xS = /* @__PURE__ */ V("$ZodE164", (a, i) => {
  i.pattern ?? (i.pattern = B1), Fe.init(a, i);
});
function MS(a, i = null) {
  try {
    const o = a.split(".");
    if (o.length !== 3)
      return !1;
    const [l] = o;
    if (!l)
      return !1;
    const c = JSON.parse(atob(l));
    return !("typ" in c && c?.typ !== "JWT" || !c.alg || i && (!("alg" in c) || c.alg !== i));
  } catch {
    return !1;
  }
}
const OS = /* @__PURE__ */ V("$ZodJWT", (a, i) => {
  Fe.init(a, i), a._zod.check = (o) => {
    MS(o.value, i.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: a,
      continue: !i.abort
    });
  };
}), RS = /* @__PURE__ */ V("$ZodUnknown", (a, i) => {
  lt.init(a, i), a._zod.parse = (o) => o;
}), DS = /* @__PURE__ */ V("$ZodNever", (a, i) => {
  lt.init(a, i), a._zod.parse = (o, l) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: a
  }), o);
});
function xp(a, i, o) {
  a.issues.length && i.issues.push(...Xg(o, a.issues)), i.value[o] = a.value;
}
const jS = /* @__PURE__ */ V("$ZodArray", (a, i) => {
  lt.init(a, i), a._zod.parse = (o, l) => {
    const c = o.value;
    if (!Array.isArray(c))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: c,
        inst: a
      }), o;
    o.value = Array(c.length);
    const d = [];
    for (let _ = 0; _ < c.length; _++) {
      const m = c[_], g = i.element._zod.run({
        value: m,
        issues: []
      }, l);
      g instanceof Promise ? d.push(g.then((f) => xp(f, o, _))) : xp(g, o, _);
    }
    return d.length ? Promise.all(d).then(() => o) : o;
  };
});
function Pl(a, i, o, l, c) {
  if (a.issues.length) {
    if (c && !(o in l))
      return;
    i.issues.push(...Xg(o, a.issues));
  }
  a.value === void 0 ? o in l && (i.value[o] = void 0) : i.value[o] = a.value;
}
function ah(a) {
  const i = Object.keys(a.shape);
  for (const l of i)
    if (!a.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const o = l1(a.shape);
  return {
    ...a,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(o)
  };
}
function nh(a, i, o, l, c, d) {
  const _ = [], m = c.keySet, g = c.catchall._zod, f = g.def.type, v = g.optout === "optional";
  for (const y in i) {
    if (m.has(y))
      continue;
    if (f === "never") {
      _.push(y);
      continue;
    }
    const w = g.run({ value: i[y], issues: [] }, l);
    w instanceof Promise ? a.push(w.then((E) => Pl(E, o, y, i, v))) : Pl(w, o, y, i, v);
  }
  return _.length && o.issues.push({
    code: "unrecognized_keys",
    keys: _,
    input: i,
    inst: d
  }), a.length ? Promise.all(a).then(() => o) : o;
}
const LS = /* @__PURE__ */ V("$ZodObject", (a, i) => {
  if (lt.init(a, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
    const m = i.shape;
    Object.defineProperty(i, "shape", {
      get: () => {
        const g = { ...m };
        return Object.defineProperty(i, "shape", {
          value: g
        }), g;
      }
    });
  }
  const l = Vu(() => ah(i));
  Ge(a._zod, "propValues", () => {
    const m = i.shape, g = {};
    for (const f in m) {
      const v = m[f]._zod;
      if (v.values) {
        g[f] ?? (g[f] = /* @__PURE__ */ new Set());
        for (const y of v.values)
          g[f].add(y);
      }
    }
    return g;
  });
  const c = Il, d = i.catchall;
  let _;
  a._zod.parse = (m, g) => {
    _ ?? (_ = l.value);
    const f = m.value;
    if (!c(f))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: f,
        inst: a
      }), m;
    m.value = {};
    const v = [], y = _.shape;
    for (const w of _.keys) {
      const E = y[w], T = E._zod.optout === "optional", N = E._zod.run({ value: f[w], issues: [] }, g);
      N instanceof Promise ? v.push(N.then((L) => Pl(L, m, w, f, T))) : Pl(N, m, w, f, T);
    }
    return d ? nh(v, f, m, g, l.value, a) : v.length ? Promise.all(v).then(() => m) : m;
  };
}), US = /* @__PURE__ */ V("$ZodObjectJIT", (a, i) => {
  LS.init(a, i);
  const o = a._zod.parse, l = Vu(() => ah(i)), c = (w) => {
    const E = new rS(["shape", "payload", "ctx"]), T = l.value, N = (Y) => {
      const P = Np(Y);
      return `shape[${P}]._zod.run({ value: input[${P}], issues: [] }, ctx)`;
    };
    E.write("const input = payload.value;");
    const L = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const Y of T.keys)
      L[Y] = `key_${R++}`;
    E.write("const newResult = {};");
    for (const Y of T.keys) {
      const P = L[Y], H = Np(Y), Z = w[Y]?._zod?.optout === "optional";
      E.write(`const ${P} = ${N(Y)};`), Z ? E.write(`
        if (${P}.issues.length) {
          if (${H} in input) {
            payload.issues = payload.issues.concat(${P}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${H}, ...iss.path] : [${H}]
            })));
          }
        }
        
        if (${P}.value === undefined) {
          if (${H} in input) {
            newResult[${H}] = undefined;
          }
        } else {
          newResult[${H}] = ${P}.value;
        }
        
      `) : E.write(`
        if (${P}.issues.length) {
          payload.issues = payload.issues.concat(${P}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${H}, ...iss.path] : [${H}]
          })));
        }
        
        if (${P}.value === undefined) {
          if (${H} in input) {
            newResult[${H}] = undefined;
          }
        } else {
          newResult[${H}] = ${P}.value;
        }
        
      `);
    }
    E.write("payload.value = newResult;"), E.write("return payload;");
    const U = E.compile();
    return (Y, P) => U(w, Y, P);
  };
  let d;
  const _ = Il, m = !Yg.jitless, f = m && o1.value, v = i.catchall;
  let y;
  a._zod.parse = (w, E) => {
    y ?? (y = l.value);
    const T = w.value;
    return _(T) ? m && f && E?.async === !1 && E.jitless !== !0 ? (d || (d = c(i.shape)), w = d(w, E), v ? nh([], T, w, E, y, a) : w) : o(w, E) : (w.issues.push({
      expected: "object",
      code: "invalid_type",
      input: T,
      inst: a
    }), w);
  };
});
function Mp(a, i, o, l) {
  for (const d of a)
    if (d.issues.length === 0)
      return i.value = d.value, i;
  const c = a.filter((d) => !Qi(d));
  return c.length === 1 ? (i.value = c[0].value, c[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: o,
    errors: a.map((d) => d.issues.map((_) => ci(_, l, si())))
  }), i);
}
const qS = /* @__PURE__ */ V("$ZodUnion", (a, i) => {
  lt.init(a, i), Ge(a._zod, "optin", () => i.options.some((c) => c._zod.optin === "optional") ? "optional" : void 0), Ge(a._zod, "optout", () => i.options.some((c) => c._zod.optout === "optional") ? "optional" : void 0), Ge(a._zod, "values", () => {
    if (i.options.every((c) => c._zod.values))
      return new Set(i.options.flatMap((c) => Array.from(c._zod.values)));
  }), Ge(a._zod, "pattern", () => {
    if (i.options.every((c) => c._zod.pattern)) {
      const c = i.options.map((d) => d._zod.pattern);
      return new RegExp(`^(${c.map((d) => Xu(d.source)).join("|")})$`);
    }
  });
  const o = i.options.length === 1, l = i.options[0]._zod.run;
  a._zod.parse = (c, d) => {
    if (o)
      return l(c, d);
    let _ = !1;
    const m = [];
    for (const g of i.options) {
      const f = g._zod.run({
        value: c.value,
        issues: []
      }, d);
      if (f instanceof Promise)
        m.push(f), _ = !0;
      else {
        if (f.issues.length === 0)
          return f;
        m.push(f);
      }
    }
    return _ ? Promise.all(m).then((g) => Mp(g, c, a, d)) : Mp(m, c, a, d);
  };
}), GS = /* @__PURE__ */ V("$ZodIntersection", (a, i) => {
  lt.init(a, i), a._zod.parse = (o, l) => {
    const c = o.value, d = i.left._zod.run({ value: c, issues: [] }, l), _ = i.right._zod.run({ value: c, issues: [] }, l);
    return d instanceof Promise || _ instanceof Promise ? Promise.all([d, _]).then(([g, f]) => Op(o, g, f)) : Op(o, d, _);
  };
});
function xu(a, i) {
  if (a === i)
    return { valid: !0, data: a };
  if (a instanceof Date && i instanceof Date && +a == +i)
    return { valid: !0, data: a };
  if (tr(a) && tr(i)) {
    const o = Object.keys(i), l = Object.keys(a).filter((d) => o.indexOf(d) !== -1), c = { ...a, ...i };
    for (const d of l) {
      const _ = xu(a[d], i[d]);
      if (!_.valid)
        return {
          valid: !1,
          mergeErrorPath: [d, ..._.mergeErrorPath]
        };
      c[d] = _.data;
    }
    return { valid: !0, data: c };
  }
  if (Array.isArray(a) && Array.isArray(i)) {
    if (a.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let l = 0; l < a.length; l++) {
      const c = a[l], d = i[l], _ = xu(c, d);
      if (!_.valid)
        return {
          valid: !1,
          mergeErrorPath: [l, ..._.mergeErrorPath]
        };
      o.push(_.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Op(a, i, o) {
  const l = /* @__PURE__ */ new Map();
  let c;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      c ?? (c = m);
      for (const g of m.keys)
        l.has(g) || l.set(g, {}), l.get(g).l = !0;
    } else
      a.issues.push(m);
  for (const m of o.issues)
    if (m.code === "unrecognized_keys")
      for (const g of m.keys)
        l.has(g) || l.set(g, {}), l.get(g).r = !0;
    else
      a.issues.push(m);
  const d = [...l].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length && c && a.issues.push({ ...c, keys: d }), Qi(a))
    return a;
  const _ = xu(i.value, o.value);
  if (!_.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(_.mergeErrorPath)}`);
  return a.value = _.data, a;
}
const HS = /* @__PURE__ */ V("$ZodEnum", (a, i) => {
  lt.init(a, i);
  const o = Zg(i.entries), l = new Set(o);
  a._zod.values = l, a._zod.pattern = new RegExp(`^(${o.filter((c) => r1.has(typeof c)).map((c) => typeof c == "string" ? to(c) : c.toString()).join("|")})$`), a._zod.parse = (c, d) => {
    const _ = c.value;
    return l.has(_) || c.issues.push({
      code: "invalid_value",
      values: o,
      input: _,
      inst: a
    }), c;
  };
}), IS = /* @__PURE__ */ V("$ZodLiteral", (a, i) => {
  if (lt.init(a, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(i.values);
  a._zod.values = o, a._zod.pattern = new RegExp(`^(${i.values.map((l) => typeof l == "string" ? to(l) : l ? to(l.toString()) : String(l)).join("|")})$`), a._zod.parse = (l, c) => {
    const d = l.value;
    return o.has(d) || l.issues.push({
      code: "invalid_value",
      values: i.values,
      input: d,
      inst: a
    }), l;
  };
}), PS = /* @__PURE__ */ V("$ZodTransform", (a, i) => {
  lt.init(a, i), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new Bg(a.constructor.name);
    const c = i.transform(o.value, o);
    if (l.async)
      return (c instanceof Promise ? c : Promise.resolve(c)).then((_) => (o.value = _, o));
    if (c instanceof Promise)
      throw new eo();
    return o.value = c, o;
  };
});
function Rp(a, i) {
  return a.issues.length && i === void 0 ? { issues: [], value: void 0 } : a;
}
const ih = /* @__PURE__ */ V("$ZodOptional", (a, i) => {
  lt.init(a, i), a._zod.optin = "optional", a._zod.optout = "optional", Ge(a._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Ge(a._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Xu(o.source)})?$`) : void 0;
  }), a._zod.parse = (o, l) => {
    if (i.innerType._zod.optin === "optional") {
      const c = i.innerType._zod.run(o, l);
      return c instanceof Promise ? c.then((d) => Rp(d, o.value)) : Rp(c, o.value);
    }
    return o.value === void 0 ? o : i.innerType._zod.run(o, l);
  };
}), BS = /* @__PURE__ */ V("$ZodExactOptional", (a, i) => {
  ih.init(a, i), Ge(a._zod, "values", () => i.innerType._zod.values), Ge(a._zod, "pattern", () => i.innerType._zod.pattern), a._zod.parse = (o, l) => i.innerType._zod.run(o, l);
}), YS = /* @__PURE__ */ V("$ZodNullable", (a, i) => {
  lt.init(a, i), Ge(a._zod, "optin", () => i.innerType._zod.optin), Ge(a._zod, "optout", () => i.innerType._zod.optout), Ge(a._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Xu(o.source)}|null)$`) : void 0;
  }), Ge(a._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), a._zod.parse = (o, l) => o.value === null ? o : i.innerType._zod.run(o, l);
}), ZS = /* @__PURE__ */ V("$ZodDefault", (a, i) => {
  lt.init(a, i), a._zod.optin = "optional", Ge(a._zod, "values", () => i.innerType._zod.values), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    if (o.value === void 0)
      return o.value = i.defaultValue, o;
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => Dp(d, i)) : Dp(c, i);
  };
});
function Dp(a, i) {
  return a.value === void 0 && (a.value = i.defaultValue), a;
}
const VS = /* @__PURE__ */ V("$ZodPrefault", (a, i) => {
  lt.init(a, i), a._zod.optin = "optional", Ge(a._zod, "values", () => i.innerType._zod.values), a._zod.parse = (o, l) => (l.direction === "backward" || o.value === void 0 && (o.value = i.defaultValue), i.innerType._zod.run(o, l));
}), KS = /* @__PURE__ */ V("$ZodNonOptional", (a, i) => {
  lt.init(a, i), Ge(a._zod, "values", () => {
    const o = i.innerType._zod.values;
    return o ? new Set([...o].filter((l) => l !== void 0)) : void 0;
  }), a._zod.parse = (o, l) => {
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => jp(d, a)) : jp(c, a);
  };
});
function jp(a, i) {
  return !a.issues.length && a.value === void 0 && a.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: a.value,
    inst: i
  }), a;
}
const XS = /* @__PURE__ */ V("$ZodCatch", (a, i) => {
  lt.init(a, i), Ge(a._zod, "optin", () => i.innerType._zod.optin), Ge(a._zod, "optout", () => i.innerType._zod.optout), Ge(a._zod, "values", () => i.innerType._zod.values), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => (o.value = d.value, d.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: d.issues.map((_) => ci(_, l, si()))
      },
      input: o.value
    }), o.issues = []), o)) : (o.value = c.value, c.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: c.issues.map((d) => ci(d, l, si()))
      },
      input: o.value
    }), o.issues = []), o);
  };
}), FS = /* @__PURE__ */ V("$ZodPipe", (a, i) => {
  lt.init(a, i), Ge(a._zod, "values", () => i.in._zod.values), Ge(a._zod, "optin", () => i.in._zod.optin), Ge(a._zod, "optout", () => i.out._zod.optout), Ge(a._zod, "propValues", () => i.in._zod.propValues), a._zod.parse = (o, l) => {
    if (l.direction === "backward") {
      const d = i.out._zod.run(o, l);
      return d instanceof Promise ? d.then((_) => Ol(_, i.in, l)) : Ol(d, i.in, l);
    }
    const c = i.in._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => Ol(d, i.out, l)) : Ol(c, i.out, l);
  };
});
function Ol(a, i, o) {
  return a.issues.length ? (a.aborted = !0, a) : i._zod.run({ value: a.value, issues: a.issues }, o);
}
const WS = /* @__PURE__ */ V("$ZodReadonly", (a, i) => {
  lt.init(a, i), Ge(a._zod, "propValues", () => i.innerType._zod.propValues), Ge(a._zod, "values", () => i.innerType._zod.values), Ge(a._zod, "optin", () => i.innerType?._zod?.optin), Ge(a._zod, "optout", () => i.innerType?._zod?.optout), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then(Lp) : Lp(c);
  };
});
function Lp(a) {
  return a.value = Object.freeze(a.value), a;
}
const $S = /* @__PURE__ */ V("$ZodCustom", (a, i) => {
  xa.init(a, i), lt.init(a, i), a._zod.parse = (o, l) => o, a._zod.check = (o) => {
    const l = o.value, c = i.fn(l);
    if (c instanceof Promise)
      return c.then((d) => Up(d, o, l, a));
    Up(c, o, l, a);
  };
});
function Up(a, i, o, l) {
  if (!a) {
    const c = {
      code: "custom",
      input: o,
      inst: l,
      // incorporates params.error into issue reporting
      path: [...l._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !l._zod.def.abort
      // params: inst._zod.def.params,
    };
    l._zod.def.params && (c.params = l._zod.def.params), i.issues.push(ar(c));
  }
}
var qp;
class QS {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...o) {
    const l = o[0];
    return this._map.set(i, l), l && typeof l == "object" && "id" in l && this._idmap.set(l.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const o = this._map.get(i);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(i), this;
  }
  get(i) {
    const o = i._zod.parent;
    if (o) {
      const l = { ...this.get(o) ?? {} };
      delete l.id;
      const c = { ...l, ...this._map.get(i) };
      return Object.keys(c).length ? c : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function JS() {
  return new QS();
}
(qp = globalThis).__zod_globalRegistry ?? (qp.__zod_globalRegistry = JS());
const er = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function eE(a, i) {
  return new a({
    type: "string",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tE(a, i) {
  return new a({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Gp(a, i) {
  return new a({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aE(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nE(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function iE(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oE(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rE(a, i) {
  return new a({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lE(a, i) {
  return new a({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sE(a, i) {
  return new a({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cE(a, i) {
  return new a({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uE(a, i) {
  return new a({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dE(a, i) {
  return new a({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _E(a, i) {
  return new a({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mE(a, i) {
  return new a({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fE(a, i) {
  return new a({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pE(a, i) {
  return new a({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gE(a, i) {
  return new a({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hE(a, i) {
  return new a({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vE(a, i) {
  return new a({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yE(a, i) {
  return new a({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bE(a, i) {
  return new a({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function wE(a, i) {
  return new a({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function SE(a, i) {
  return new a({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function EE(a, i) {
  return new a({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function zE(a, i) {
  return new a({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function kE(a, i) {
  return new a({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function TE(a) {
  return new a({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function AE(a, i) {
  return new a({
    type: "never",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oh(a, i) {
  return new W1({
    check: "max_length",
    ...de(i),
    maximum: a
  });
}
// @__NO_SIDE_EFFECTS__
function Bl(a, i) {
  return new $1({
    check: "min_length",
    ...de(i),
    minimum: a
  });
}
// @__NO_SIDE_EFFECTS__
function rh(a, i) {
  return new Q1({
    check: "length_equals",
    ...de(i),
    length: a
  });
}
// @__NO_SIDE_EFFECTS__
function NE(a, i) {
  return new J1({
    check: "string_format",
    format: "regex",
    ...de(i),
    pattern: a
  });
}
// @__NO_SIDE_EFFECTS__
function CE(a) {
  return new eS({
    check: "string_format",
    format: "lowercase",
    ...de(a)
  });
}
// @__NO_SIDE_EFFECTS__
function xE(a) {
  return new tS({
    check: "string_format",
    format: "uppercase",
    ...de(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ME(a, i) {
  return new aS({
    check: "string_format",
    format: "includes",
    ...de(i),
    includes: a
  });
}
// @__NO_SIDE_EFFECTS__
function OE(a, i) {
  return new nS({
    check: "string_format",
    format: "starts_with",
    ...de(i),
    prefix: a
  });
}
// @__NO_SIDE_EFFECTS__
function RE(a, i) {
  return new iS({
    check: "string_format",
    format: "ends_with",
    ...de(i),
    suffix: a
  });
}
// @__NO_SIDE_EFFECTS__
function no(a) {
  return new oS({
    check: "overwrite",
    tx: a
  });
}
// @__NO_SIDE_EFFECTS__
function DE(a) {
  return /* @__PURE__ */ no((i) => i.normalize(a));
}
// @__NO_SIDE_EFFECTS__
function jE() {
  return /* @__PURE__ */ no((a) => a.trim());
}
// @__NO_SIDE_EFFECTS__
function LE() {
  return /* @__PURE__ */ no((a) => a.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function UE() {
  return /* @__PURE__ */ no((a) => a.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function qE() {
  return /* @__PURE__ */ no((a) => i1(a));
}
// @__NO_SIDE_EFFECTS__
function GE(a, i, o) {
  return new a({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function HE(a, i, o) {
  return new a({
    type: "custom",
    check: "custom",
    fn: i,
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function IE(a) {
  const i = /* @__PURE__ */ PE((o) => (o.addIssue = (l) => {
    if (typeof l == "string")
      o.issues.push(ar(l, o.value, i._zod.def));
    else {
      const c = l;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), c.input ?? (c.input = o.value), c.inst ?? (c.inst = i), c.continue ?? (c.continue = !i._zod.def.abort), o.issues.push(ar(c));
    }
  }, a(o.value, o)));
  return i;
}
// @__NO_SIDE_EFFECTS__
function PE(a, i) {
  const o = new xa({
    check: "custom",
    ...de(i)
  });
  return o._zod.check = a, o;
}
function lh(a) {
  let i = a?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: a.processors ?? {},
    metadataRegistry: a?.metadata ?? er,
    target: i,
    unrepresentable: a?.unrepresentable ?? "throw",
    override: a?.override ?? (() => {
    }),
    io: a?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: a?.cycles ?? "ref",
    reused: a?.reused ?? "inline",
    external: a?.external ?? void 0
  };
}
function yt(a, i, o = { path: [], schemaPath: [] }) {
  var l;
  const c = a._zod.def, d = i.seen.get(a);
  if (d)
    return d.count++, o.schemaPath.includes(a) && (d.cycle = o.path), d.schema;
  const _ = { schema: {}, count: 1, cycle: void 0, path: o.path };
  i.seen.set(a, _);
  const m = a._zod.toJSONSchema?.();
  if (m)
    _.schema = m;
  else {
    const v = {
      ...o,
      schemaPath: [...o.schemaPath, a],
      path: o.path
    };
    if (a._zod.processJSONSchema)
      a._zod.processJSONSchema(i, _.schema, v);
    else {
      const w = _.schema, E = i.processors[c.type];
      if (!E)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);
      E(a, i, w, v);
    }
    const y = a._zod.parent;
    y && (_.ref || (_.ref = y), yt(y, i, v), i.seen.get(y).isParent = !0);
  }
  const g = i.metadataRegistry.get(a);
  return g && Object.assign(_.schema, g), i.io === "input" && xt(a) && (delete _.schema.examples, delete _.schema.default), i.io === "input" && _.schema._prefault && ((l = _.schema).default ?? (l.default = _.schema._prefault)), delete _.schema._prefault, i.seen.get(a).schema;
}
function sh(a, i) {
  const o = a.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = /* @__PURE__ */ new Map();
  for (const _ of a.seen.entries()) {
    const m = a.metadataRegistry.get(_[0])?.id;
    if (m) {
      const g = l.get(m);
      if (g && g !== _[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      l.set(m, _[0]);
    }
  }
  const c = (_) => {
    const m = a.target === "draft-2020-12" ? "$defs" : "definitions";
    if (a.external) {
      const y = a.external.registry.get(_[0])?.id, w = a.external.uri ?? ((T) => T);
      if (y)
        return { ref: w(y) };
      const E = _[1].defId ?? _[1].schema.id ?? `schema${a.counter++}`;
      return _[1].defId = E, { defId: E, ref: `${w("__shared")}#/${m}/${E}` };
    }
    if (_[1] === o)
      return { ref: "#" };
    const f = `#/${m}/`, v = _[1].schema.id ?? `__schema${a.counter++}`;
    return { defId: v, ref: f + v };
  }, d = (_) => {
    if (_[1].schema.$ref)
      return;
    const m = _[1], { ref: g, defId: f } = c(_);
    m.def = { ...m.schema }, f && (m.defId = f);
    const v = m.schema;
    for (const y in v)
      delete v[y];
    v.$ref = g;
  };
  if (a.cycles === "throw")
    for (const _ of a.seen.entries()) {
      const m = _[1];
      if (m.cycle)
        throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const _ of a.seen.entries()) {
    const m = _[1];
    if (i === _[0]) {
      d(_);
      continue;
    }
    if (a.external) {
      const f = a.external.registry.get(_[0])?.id;
      if (i !== _[0] && f) {
        d(_);
        continue;
      }
    }
    if (a.metadataRegistry.get(_[0])?.id) {
      d(_);
      continue;
    }
    if (m.cycle) {
      d(_);
      continue;
    }
    if (m.count > 1 && a.reused === "ref") {
      d(_);
      continue;
    }
  }
}
function ch(a, i) {
  const o = a.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = (_) => {
    const m = a.seen.get(_);
    if (m.ref === null)
      return;
    const g = m.def ?? m.schema, f = { ...g }, v = m.ref;
    if (m.ref = null, v) {
      l(v);
      const w = a.seen.get(v), E = w.schema;
      if (E.$ref && (a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(E)) : Object.assign(g, E), Object.assign(g, f), _._zod.parent === v)
        for (const N in g)
          N === "$ref" || N === "allOf" || N in f || delete g[N];
      if (E.$ref && w.def)
        for (const N in g)
          N === "$ref" || N === "allOf" || N in w.def && JSON.stringify(g[N]) === JSON.stringify(w.def[N]) && delete g[N];
    }
    const y = _._zod.parent;
    if (y && y !== v) {
      l(y);
      const w = a.seen.get(y);
      if (w?.schema.$ref && (g.$ref = w.schema.$ref, w.def))
        for (const E in g)
          E === "$ref" || E === "allOf" || E in w.def && JSON.stringify(g[E]) === JSON.stringify(w.def[E]) && delete g[E];
    }
    a.override({
      zodSchema: _,
      jsonSchema: g,
      path: m.path ?? []
    });
  };
  for (const _ of [...a.seen.entries()].reverse())
    l(_[0]);
  const c = {};
  if (a.target === "draft-2020-12" ? c.$schema = "https://json-schema.org/draft/2020-12/schema" : a.target === "draft-07" ? c.$schema = "http://json-schema.org/draft-07/schema#" : a.target === "draft-04" ? c.$schema = "http://json-schema.org/draft-04/schema#" : a.target, a.external?.uri) {
    const _ = a.external.registry.get(i)?.id;
    if (!_)
      throw new Error("Schema is missing an `id` property");
    c.$id = a.external.uri(_);
  }
  Object.assign(c, o.def ?? o.schema);
  const d = a.external?.defs ?? {};
  for (const _ of a.seen.entries()) {
    const m = _[1];
    m.def && m.defId && (d[m.defId] = m.def);
  }
  a.external || Object.keys(d).length > 0 && (a.target === "draft-2020-12" ? c.$defs = d : c.definitions = d);
  try {
    const _ = JSON.parse(JSON.stringify(c));
    return Object.defineProperty(_, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: Yl(i, "input", a.processors),
          output: Yl(i, "output", a.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), _;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function xt(a, i) {
  const o = i ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(a))
    return !1;
  o.seen.add(a);
  const l = a._zod.def;
  if (l.type === "transform")
    return !0;
  if (l.type === "array")
    return xt(l.element, o);
  if (l.type === "set")
    return xt(l.valueType, o);
  if (l.type === "lazy")
    return xt(l.getter(), o);
  if (l.type === "promise" || l.type === "optional" || l.type === "nonoptional" || l.type === "nullable" || l.type === "readonly" || l.type === "default" || l.type === "prefault")
    return xt(l.innerType, o);
  if (l.type === "intersection")
    return xt(l.left, o) || xt(l.right, o);
  if (l.type === "record" || l.type === "map")
    return xt(l.keyType, o) || xt(l.valueType, o);
  if (l.type === "pipe")
    return xt(l.in, o) || xt(l.out, o);
  if (l.type === "object") {
    for (const c in l.shape)
      if (xt(l.shape[c], o))
        return !0;
    return !1;
  }
  if (l.type === "union") {
    for (const c of l.options)
      if (xt(c, o))
        return !0;
    return !1;
  }
  if (l.type === "tuple") {
    for (const c of l.items)
      if (xt(c, o))
        return !0;
    return !!(l.rest && xt(l.rest, o));
  }
  return !1;
}
const BE = (a, i = {}) => (o) => {
  const l = lh({ ...o, processors: i });
  return yt(a, l), sh(l, a), ch(l, a);
}, Yl = (a, i, o = {}) => (l) => {
  const { libraryOptions: c, target: d } = l ?? {}, _ = lh({ ...c ?? {}, target: d, io: i, processors: o });
  return yt(a, _), sh(_, a), ch(_, a);
}, YE = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, ZE = (a, i, o, l) => {
  const c = o;
  c.type = "string";
  const { minimum: d, maximum: _, format: m, patterns: g, contentEncoding: f } = a._zod.bag;
  if (typeof d == "number" && (c.minLength = d), typeof _ == "number" && (c.maxLength = _), m && (c.format = YE[m] ?? m, c.format === "" && delete c.format, m === "time" && delete c.format), f && (c.contentEncoding = f), g && g.size > 0) {
    const v = [...g];
    v.length === 1 ? c.pattern = v[0].source : v.length > 1 && (c.allOf = [
      ...v.map((y) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: y.source
      }))
    ]);
  }
}, VE = (a, i, o, l) => {
  o.not = {};
}, KE = (a, i, o, l) => {
}, XE = (a, i, o, l) => {
  const c = a._zod.def, d = Zg(c.entries);
  d.every((_) => typeof _ == "number") && (o.type = "number"), d.every((_) => typeof _ == "string") && (o.type = "string"), o.enum = d;
}, FE = (a, i, o, l) => {
  const c = a._zod.def, d = [];
  for (const _ of c.values)
    if (_ === void 0) {
      if (i.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof _ == "bigint") {
      if (i.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      d.push(Number(_));
    } else
      d.push(_);
  if (d.length !== 0) if (d.length === 1) {
    const _ = d[0];
    o.type = _ === null ? "null" : typeof _, i.target === "draft-04" || i.target === "openapi-3.0" ? o.enum = [_] : o.const = _;
  } else
    d.every((_) => typeof _ == "number") && (o.type = "number"), d.every((_) => typeof _ == "string") && (o.type = "string"), d.every((_) => typeof _ == "boolean") && (o.type = "boolean"), d.every((_) => _ === null) && (o.type = "null"), o.enum = d;
}, WE = (a, i, o, l) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, $E = (a, i, o, l) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, QE = (a, i, o, l) => {
  const c = o, d = a._zod.def, { minimum: _, maximum: m } = a._zod.bag;
  typeof _ == "number" && (c.minItems = _), typeof m == "number" && (c.maxItems = m), c.type = "array", c.items = yt(d.element, i, { ...l, path: [...l.path, "items"] });
}, JE = (a, i, o, l) => {
  const c = o, d = a._zod.def;
  c.type = "object", c.properties = {};
  const _ = d.shape;
  for (const f in _)
    c.properties[f] = yt(_[f], i, {
      ...l,
      path: [...l.path, "properties", f]
    });
  const m = new Set(Object.keys(_)), g = new Set([...m].filter((f) => {
    const v = d.shape[f]._zod;
    return i.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  g.size > 0 && (c.required = Array.from(g)), d.catchall?._zod.def.type === "never" ? c.additionalProperties = !1 : d.catchall ? d.catchall && (c.additionalProperties = yt(d.catchall, i, {
    ...l,
    path: [...l.path, "additionalProperties"]
  })) : i.io === "output" && (c.additionalProperties = !1);
}, ez = (a, i, o, l) => {
  const c = a._zod.def, d = c.inclusive === !1, _ = c.options.map((m, g) => yt(m, i, {
    ...l,
    path: [...l.path, d ? "oneOf" : "anyOf", g]
  }));
  d ? o.oneOf = _ : o.anyOf = _;
}, tz = (a, i, o, l) => {
  const c = a._zod.def, d = yt(c.left, i, {
    ...l,
    path: [...l.path, "allOf", 0]
  }), _ = yt(c.right, i, {
    ...l,
    path: [...l.path, "allOf", 1]
  }), m = (f) => "allOf" in f && Object.keys(f).length === 1, g = [
    ...m(d) ? d.allOf : [d],
    ...m(_) ? _.allOf : [_]
  ];
  o.allOf = g;
}, az = (a, i, o, l) => {
  const c = a._zod.def, d = yt(c.innerType, i, l), _ = i.seen.get(a);
  i.target === "openapi-3.0" ? (_.ref = c.innerType, o.nullable = !0) : o.anyOf = [d, { type: "null" }];
}, nz = (a, i, o, l) => {
  const c = a._zod.def;
  yt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType;
}, iz = (a, i, o, l) => {
  const c = a._zod.def;
  yt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType, o.default = JSON.parse(JSON.stringify(c.defaultValue));
}, oz = (a, i, o, l) => {
  const c = a._zod.def;
  yt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType, i.io === "input" && (o._prefault = JSON.parse(JSON.stringify(c.defaultValue)));
}, rz = (a, i, o, l) => {
  const c = a._zod.def;
  yt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType;
  let _;
  try {
    _ = c.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = _;
}, lz = (a, i, o, l) => {
  const c = a._zod.def, d = i.io === "input" ? c.in._zod.def.type === "transform" ? c.out : c.in : c.out;
  yt(d, i, l);
  const _ = i.seen.get(a);
  _.ref = d;
}, sz = (a, i, o, l) => {
  const c = a._zod.def;
  yt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType, o.readOnly = !0;
}, uh = (a, i, o, l) => {
  const c = a._zod.def;
  yt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType;
}, cz = /* @__PURE__ */ V("ZodISODateTime", (a, i) => {
  yS.init(a, i), $e.init(a, i);
});
function uz(a) {
  return /* @__PURE__ */ SE(cz, a);
}
const dz = /* @__PURE__ */ V("ZodISODate", (a, i) => {
  bS.init(a, i), $e.init(a, i);
});
function _z(a) {
  return /* @__PURE__ */ EE(dz, a);
}
const mz = /* @__PURE__ */ V("ZodISOTime", (a, i) => {
  wS.init(a, i), $e.init(a, i);
});
function fz(a) {
  return /* @__PURE__ */ zE(mz, a);
}
const pz = /* @__PURE__ */ V("ZodISODuration", (a, i) => {
  SS.init(a, i), $e.init(a, i);
});
function gz(a) {
  return /* @__PURE__ */ kE(pz, a);
}
const hz = (a, i) => {
  Wg.init(a, i), a.name = "ZodError", Object.defineProperties(a, {
    format: {
      value: (o) => g1(a, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => p1(a, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        a.issues.push(o), a.message = JSON.stringify(a.issues, Cu, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        a.issues.push(...o), a.message = JSON.stringify(a.issues, Cu, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return a.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, pa = V("ZodError", hz, {
  Parent: Error
}), vz = /* @__PURE__ */ Wu(pa), yz = /* @__PURE__ */ $u(pa), bz = /* @__PURE__ */ Xl(pa), wz = /* @__PURE__ */ Fl(pa), Sz = /* @__PURE__ */ y1(pa), Ez = /* @__PURE__ */ b1(pa), zz = /* @__PURE__ */ w1(pa), kz = /* @__PURE__ */ S1(pa), Tz = /* @__PURE__ */ E1(pa), Az = /* @__PURE__ */ z1(pa), Nz = /* @__PURE__ */ k1(pa), Cz = /* @__PURE__ */ T1(pa), st = /* @__PURE__ */ V("ZodType", (a, i) => (lt.init(a, i), Object.assign(a["~standard"], {
  jsonSchema: {
    input: Yl(a, "input"),
    output: Yl(a, "output")
  }
}), a.toJSONSchema = BE(a, {}), a.def = i, a.type = i.type, Object.defineProperty(a, "_def", { value: i }), a.check = (...o) => a.clone(On(i, {
  checks: [
    ...i.checks ?? [],
    ...o.map((l) => typeof l == "function" ? { _zod: { check: l, def: { check: "custom" }, onattach: [] } } : l)
  ]
}), {
  parent: !0
}), a.with = a.check, a.clone = (o, l) => Rn(a, o, l), a.brand = () => a, a.register = ((o, l) => (o.add(a, l), a)), a.parse = (o, l) => vz(a, o, l, { callee: a.parse }), a.safeParse = (o, l) => bz(a, o, l), a.parseAsync = async (o, l) => yz(a, o, l, { callee: a.parseAsync }), a.safeParseAsync = async (o, l) => wz(a, o, l), a.spa = a.safeParseAsync, a.encode = (o, l) => Sz(a, o, l), a.decode = (o, l) => Ez(a, o, l), a.encodeAsync = async (o, l) => zz(a, o, l), a.decodeAsync = async (o, l) => kz(a, o, l), a.safeEncode = (o, l) => Tz(a, o, l), a.safeDecode = (o, l) => Az(a, o, l), a.safeEncodeAsync = async (o, l) => Nz(a, o, l), a.safeDecodeAsync = async (o, l) => Cz(a, o, l), a.refine = (o, l) => a.check(wk(o, l)), a.superRefine = (o) => a.check(Sk(o)), a.overwrite = (o) => a.check(/* @__PURE__ */ no(o)), a.optional = () => Pp(a), a.exactOptional = () => sk(a), a.nullable = () => Bp(a), a.nullish = () => Pp(Bp(a)), a.nonoptional = (o) => fk(a, o), a.array = () => _h(a), a.or = (o) => ek([a, o]), a.and = (o) => ak(a, o), a.transform = (o) => Yp(a, rk(o)), a.default = (o) => dk(a, o), a.prefault = (o) => mk(a, o), a.catch = (o) => gk(a, o), a.pipe = (o) => Yp(a, o), a.readonly = () => yk(a), a.describe = (o) => {
  const l = a.clone();
  return er.add(l, { description: o }), l;
}, Object.defineProperty(a, "description", {
  get() {
    return er.get(a)?.description;
  },
  configurable: !0
}), a.meta = (...o) => {
  if (o.length === 0)
    return er.get(a);
  const l = a.clone();
  return er.add(l, o[0]), l;
}, a.isOptional = () => a.safeParse(void 0).success, a.isNullable = () => a.safeParse(null).success, a.apply = (o) => o(a), a)), dh = /* @__PURE__ */ V("_ZodString", (a, i) => {
  Qu.init(a, i), st.init(a, i), a._zod.processJSONSchema = (l, c, d) => ZE(a, l, c);
  const o = a._zod.bag;
  a.format = o.format ?? null, a.minLength = o.minimum ?? null, a.maxLength = o.maximum ?? null, a.regex = (...l) => a.check(/* @__PURE__ */ NE(...l)), a.includes = (...l) => a.check(/* @__PURE__ */ ME(...l)), a.startsWith = (...l) => a.check(/* @__PURE__ */ OE(...l)), a.endsWith = (...l) => a.check(/* @__PURE__ */ RE(...l)), a.min = (...l) => a.check(/* @__PURE__ */ Bl(...l)), a.max = (...l) => a.check(/* @__PURE__ */ oh(...l)), a.length = (...l) => a.check(/* @__PURE__ */ rh(...l)), a.nonempty = (...l) => a.check(/* @__PURE__ */ Bl(1, ...l)), a.lowercase = (l) => a.check(/* @__PURE__ */ CE(l)), a.uppercase = (l) => a.check(/* @__PURE__ */ xE(l)), a.trim = () => a.check(/* @__PURE__ */ jE()), a.normalize = (...l) => a.check(/* @__PURE__ */ DE(...l)), a.toLowerCase = () => a.check(/* @__PURE__ */ LE()), a.toUpperCase = () => a.check(/* @__PURE__ */ UE()), a.slugify = () => a.check(/* @__PURE__ */ qE());
}), xz = /* @__PURE__ */ V("ZodString", (a, i) => {
  Qu.init(a, i), dh.init(a, i), a.email = (o) => a.check(/* @__PURE__ */ tE(Mz, o)), a.url = (o) => a.check(/* @__PURE__ */ rE(Oz, o)), a.jwt = (o) => a.check(/* @__PURE__ */ wE(Kz, o)), a.emoji = (o) => a.check(/* @__PURE__ */ lE(Rz, o)), a.guid = (o) => a.check(/* @__PURE__ */ Gp(Hp, o)), a.uuid = (o) => a.check(/* @__PURE__ */ aE(Rl, o)), a.uuidv4 = (o) => a.check(/* @__PURE__ */ nE(Rl, o)), a.uuidv6 = (o) => a.check(/* @__PURE__ */ iE(Rl, o)), a.uuidv7 = (o) => a.check(/* @__PURE__ */ oE(Rl, o)), a.nanoid = (o) => a.check(/* @__PURE__ */ sE(Dz, o)), a.guid = (o) => a.check(/* @__PURE__ */ Gp(Hp, o)), a.cuid = (o) => a.check(/* @__PURE__ */ cE(jz, o)), a.cuid2 = (o) => a.check(/* @__PURE__ */ uE(Lz, o)), a.ulid = (o) => a.check(/* @__PURE__ */ dE(Uz, o)), a.base64 = (o) => a.check(/* @__PURE__ */ vE(Yz, o)), a.base64url = (o) => a.check(/* @__PURE__ */ yE(Zz, o)), a.xid = (o) => a.check(/* @__PURE__ */ _E(qz, o)), a.ksuid = (o) => a.check(/* @__PURE__ */ mE(Gz, o)), a.ipv4 = (o) => a.check(/* @__PURE__ */ fE(Hz, o)), a.ipv6 = (o) => a.check(/* @__PURE__ */ pE(Iz, o)), a.cidrv4 = (o) => a.check(/* @__PURE__ */ gE(Pz, o)), a.cidrv6 = (o) => a.check(/* @__PURE__ */ hE(Bz, o)), a.e164 = (o) => a.check(/* @__PURE__ */ bE(Vz, o)), a.datetime = (o) => a.check(uz(o)), a.date = (o) => a.check(_z(o)), a.time = (o) => a.check(fz(o)), a.duration = (o) => a.check(gz(o));
});
function Wa(a) {
  return /* @__PURE__ */ eE(xz, a);
}
const $e = /* @__PURE__ */ V("ZodStringFormat", (a, i) => {
  Fe.init(a, i), dh.init(a, i);
}), Mz = /* @__PURE__ */ V("ZodEmail", (a, i) => {
  uS.init(a, i), $e.init(a, i);
}), Hp = /* @__PURE__ */ V("ZodGUID", (a, i) => {
  sS.init(a, i), $e.init(a, i);
}), Rl = /* @__PURE__ */ V("ZodUUID", (a, i) => {
  cS.init(a, i), $e.init(a, i);
}), Oz = /* @__PURE__ */ V("ZodURL", (a, i) => {
  dS.init(a, i), $e.init(a, i);
}), Rz = /* @__PURE__ */ V("ZodEmoji", (a, i) => {
  _S.init(a, i), $e.init(a, i);
}), Dz = /* @__PURE__ */ V("ZodNanoID", (a, i) => {
  mS.init(a, i), $e.init(a, i);
}), jz = /* @__PURE__ */ V("ZodCUID", (a, i) => {
  fS.init(a, i), $e.init(a, i);
}), Lz = /* @__PURE__ */ V("ZodCUID2", (a, i) => {
  pS.init(a, i), $e.init(a, i);
}), Uz = /* @__PURE__ */ V("ZodULID", (a, i) => {
  gS.init(a, i), $e.init(a, i);
}), qz = /* @__PURE__ */ V("ZodXID", (a, i) => {
  hS.init(a, i), $e.init(a, i);
}), Gz = /* @__PURE__ */ V("ZodKSUID", (a, i) => {
  vS.init(a, i), $e.init(a, i);
}), Hz = /* @__PURE__ */ V("ZodIPv4", (a, i) => {
  ES.init(a, i), $e.init(a, i);
}), Iz = /* @__PURE__ */ V("ZodIPv6", (a, i) => {
  zS.init(a, i), $e.init(a, i);
}), Pz = /* @__PURE__ */ V("ZodCIDRv4", (a, i) => {
  kS.init(a, i), $e.init(a, i);
}), Bz = /* @__PURE__ */ V("ZodCIDRv6", (a, i) => {
  TS.init(a, i), $e.init(a, i);
}), Yz = /* @__PURE__ */ V("ZodBase64", (a, i) => {
  AS.init(a, i), $e.init(a, i);
}), Zz = /* @__PURE__ */ V("ZodBase64URL", (a, i) => {
  CS.init(a, i), $e.init(a, i);
}), Vz = /* @__PURE__ */ V("ZodE164", (a, i) => {
  xS.init(a, i), $e.init(a, i);
}), Kz = /* @__PURE__ */ V("ZodJWT", (a, i) => {
  OS.init(a, i), $e.init(a, i);
}), Xz = /* @__PURE__ */ V("ZodUnknown", (a, i) => {
  RS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => KE();
});
function Ip() {
  return /* @__PURE__ */ TE(Xz);
}
const Fz = /* @__PURE__ */ V("ZodNever", (a, i) => {
  DS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => VE(a, o, l);
});
function Wz(a) {
  return /* @__PURE__ */ AE(Fz, a);
}
const $z = /* @__PURE__ */ V("ZodArray", (a, i) => {
  jS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => QE(a, o, l, c), a.element = i.element, a.min = (o, l) => a.check(/* @__PURE__ */ Bl(o, l)), a.nonempty = (o) => a.check(/* @__PURE__ */ Bl(1, o)), a.max = (o, l) => a.check(/* @__PURE__ */ oh(o, l)), a.length = (o, l) => a.check(/* @__PURE__ */ rh(o, l)), a.unwrap = () => a.element;
});
function _h(a, i) {
  return /* @__PURE__ */ GE($z, a, i);
}
const Qz = /* @__PURE__ */ V("ZodObject", (a, i) => {
  US.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => JE(a, o, l, c), Ge(a, "shape", () => i.shape), a.keyof = () => Ji(Object.keys(a._zod.def.shape)), a.catchall = (o) => a.clone({ ...a._zod.def, catchall: o }), a.passthrough = () => a.clone({ ...a._zod.def, catchall: Ip() }), a.loose = () => a.clone({ ...a._zod.def, catchall: Ip() }), a.strict = () => a.clone({ ...a._zod.def, catchall: Wz() }), a.strip = () => a.clone({ ...a._zod.def, catchall: void 0 }), a.extend = (o) => u1(a, o), a.safeExtend = (o) => d1(a, o), a.merge = (o) => _1(a, o), a.pick = (o) => s1(a, o), a.omit = (o) => c1(a, o), a.partial = (...o) => m1(mh, a, o[0]), a.required = (...o) => f1(fh, a, o[0]);
});
function Ju(a, i) {
  const o = {
    type: "object",
    shape: a ?? {},
    ...de(i)
  };
  return new Qz(o);
}
const Jz = /* @__PURE__ */ V("ZodUnion", (a, i) => {
  qS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => ez(a, o, l, c), a.options = i.options;
});
function ek(a, i) {
  return new Jz({
    type: "union",
    options: a,
    ...de(i)
  });
}
const tk = /* @__PURE__ */ V("ZodIntersection", (a, i) => {
  GS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => tz(a, o, l, c);
});
function ak(a, i) {
  return new tk({
    type: "intersection",
    left: a,
    right: i
  });
}
const Mu = /* @__PURE__ */ V("ZodEnum", (a, i) => {
  HS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (l, c, d) => XE(a, l, c), a.enum = i.entries, a.options = Object.values(i.entries);
  const o = new Set(Object.keys(i.entries));
  a.extract = (l, c) => {
    const d = {};
    for (const _ of l)
      if (o.has(_))
        d[_] = i.entries[_];
      else
        throw new Error(`Key ${_} not found in enum`);
    return new Mu({
      ...i,
      checks: [],
      ...de(c),
      entries: d
    });
  }, a.exclude = (l, c) => {
    const d = { ...i.entries };
    for (const _ of l)
      if (o.has(_))
        delete d[_];
      else
        throw new Error(`Key ${_} not found in enum`);
    return new Mu({
      ...i,
      checks: [],
      ...de(c),
      entries: d
    });
  };
});
function Ji(a, i) {
  const o = Array.isArray(a) ? Object.fromEntries(a.map((l) => [l, l])) : a;
  return new Mu({
    type: "enum",
    entries: o,
    ...de(i)
  });
}
const nk = /* @__PURE__ */ V("ZodLiteral", (a, i) => {
  IS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => FE(a, o, l), a.values = new Set(i.values), Object.defineProperty(a, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function ik(a, i) {
  return new nk({
    type: "literal",
    values: Array.isArray(a) ? a : [a],
    ...de(i)
  });
}
const ok = /* @__PURE__ */ V("ZodTransform", (a, i) => {
  PS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => $E(a, o), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new Bg(a.constructor.name);
    o.addIssue = (d) => {
      if (typeof d == "string")
        o.issues.push(ar(d, o.value, i));
      else {
        const _ = d;
        _.fatal && (_.continue = !1), _.code ?? (_.code = "custom"), _.input ?? (_.input = o.value), _.inst ?? (_.inst = a), o.issues.push(ar(_));
      }
    };
    const c = i.transform(o.value, o);
    return c instanceof Promise ? c.then((d) => (o.value = d, o)) : (o.value = c, o);
  };
});
function rk(a) {
  return new ok({
    type: "transform",
    transform: a
  });
}
const mh = /* @__PURE__ */ V("ZodOptional", (a, i) => {
  ih.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => uh(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function Pp(a) {
  return new mh({
    type: "optional",
    innerType: a
  });
}
const lk = /* @__PURE__ */ V("ZodExactOptional", (a, i) => {
  BS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => uh(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function sk(a) {
  return new lk({
    type: "optional",
    innerType: a
  });
}
const ck = /* @__PURE__ */ V("ZodNullable", (a, i) => {
  YS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => az(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function Bp(a) {
  return new ck({
    type: "nullable",
    innerType: a
  });
}
const uk = /* @__PURE__ */ V("ZodDefault", (a, i) => {
  ZS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => iz(a, o, l, c), a.unwrap = () => a._zod.def.innerType, a.removeDefault = a.unwrap;
});
function dk(a, i) {
  return new uk({
    type: "default",
    innerType: a,
    get defaultValue() {
      return typeof i == "function" ? i() : Kg(i);
    }
  });
}
const _k = /* @__PURE__ */ V("ZodPrefault", (a, i) => {
  VS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => oz(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function mk(a, i) {
  return new _k({
    type: "prefault",
    innerType: a,
    get defaultValue() {
      return typeof i == "function" ? i() : Kg(i);
    }
  });
}
const fh = /* @__PURE__ */ V("ZodNonOptional", (a, i) => {
  KS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => nz(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function fk(a, i) {
  return new fh({
    type: "nonoptional",
    innerType: a,
    ...de(i)
  });
}
const pk = /* @__PURE__ */ V("ZodCatch", (a, i) => {
  XS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => rz(a, o, l, c), a.unwrap = () => a._zod.def.innerType, a.removeCatch = a.unwrap;
});
function gk(a, i) {
  return new pk({
    type: "catch",
    innerType: a,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const hk = /* @__PURE__ */ V("ZodPipe", (a, i) => {
  FS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => lz(a, o, l, c), a.in = i.in, a.out = i.out;
});
function Yp(a, i) {
  return new hk({
    type: "pipe",
    in: a,
    out: i
    // ...util.normalizeParams(params),
  });
}
const vk = /* @__PURE__ */ V("ZodReadonly", (a, i) => {
  WS.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => sz(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function yk(a) {
  return new vk({
    type: "readonly",
    innerType: a
  });
}
const bk = /* @__PURE__ */ V("ZodCustom", (a, i) => {
  $S.init(a, i), st.init(a, i), a._zod.processJSONSchema = (o, l, c) => WE(a, o);
});
function wk(a, i = {}) {
  return /* @__PURE__ */ HE(bk, a, i);
}
function Sk(a) {
  return /* @__PURE__ */ IE(a);
}
function je(a, i) {
  return typeof a == typeof i ? a : i;
}
function Ek(a) {
  return typeof a == "string";
}
function Nn(a) {
  return typeof a == "number";
}
const zk = /^[a-z][a-z0-9_]*\.[a-z0-9][a-z0-9_]*$/, ph = Wa().regex(zk, "Invalid entity ID format. Expected: domain.object_id"), kk = ph.refine((a) => a.startsWith("vacuum."), {
  message: "Expected vacuum.* entity"
}), Tk = ph.refine((a) => a.startsWith("camera."), {
  message: "Expected camera.* entity"
}), Ak = Ju({
  type: ik("stop"),
  action: Ji(["stop", "stop_and_dock"])
}), Nk = Ju({
  primary: Wa().optional(),
  accent: Wa().optional(),
  background: Wa().optional(),
  surface: Wa().optional(),
  text: Wa().optional(),
  textSecondary: Wa().optional()
}).optional(), Ck = Ju({
  type: Wa(),
  entity: kk,
  map_entity: Tk.optional(),
  title: Wa().optional(),
  theme: Ji(["light", "dark", "custom"]).optional(),
  custom_theme: Nk,
  language: Ji(["en", "de", "ru", "pl", "it", "nl", "es", "zh", "he", "fr_FR", "ko"]).optional(),
  default_mode: Ji(["room", "all", "zone"]).optional(),
  default_room_view: Ji(["map", "list"]).optional(),
  buttons: _h(Ak).optional()
});
function xk(a) {
  const i = Ck.safeParse(a);
  return i.success ? {
    valid: !0,
    errors: [],
    warnings: [],
    data: i.data
  } : {
    valid: !1,
    errors: i.error.issues.map((l) => {
      const c = l.path.join(".");
      return c ? `${c}: ${l.message}` : l.message;
    }),
    warnings: []
  };
}
function Zp(a, i, o) {
  const l = o.scale || 1, c = o.padding || [0, 0, 0, 0], d = o.crop || [0, 0, 0, 0], _ = o.left, m = o.top, g = o.height, f = o.grid_size, v = (a + d[0] - c[0]) / l * f + _, y = m + (g * f - 1) - (i + d[1] - c[1]) / l * f;
  return { x: Math.round(v), y: Math.round(y) };
}
function Mk(a, i, o, l) {
  const c = Dk(i);
  if (te.debug("ZoneConverter", "Input:", { uiZone: a, imageWidth: o, imageHeight: l, hasDimensions: !!c }), !c) {
    const w = Rk(i);
    return te.debug("ZoneConverter", "Using calibration fallback, points:", w?.length ?? 0), Ok(a, w, o, l);
  }
  te.debug("ZoneConverter", "Map dimensions:", c);
  const d = a.x1 / 100 * o, _ = a.y1 / 100 * l, m = a.x2 / 100 * o, g = a.y2 / 100 * l;
  te.debug("ZoneConverter", "Pixel coords:", { px1: d, py1: _, px2: m, py2: g });
  const f = Zp(d, _, c), v = Zp(m, g, c), y = {
    x1: f.x,
    y1: f.y,
    x2: v.x,
    y2: v.y
  };
  return te.debug("ZoneConverter", "Output vacuum coords:", y), y;
}
function Ok(a, i, o, l) {
  if (!i || i.length < 3)
    return {
      x1: Math.round(a.x1 / 100 * 12e3 - 6e3),
      y1: Math.round(a.y1 / 100 * 12e3 - 6e3),
      x2: Math.round(a.x2 / 100 * 12e3 - 6e3),
      y2: Math.round(a.y2 / 100 * 12e3 - 6e3)
    };
  const c = a.x1 / 100 * o, d = a.y1 / 100 * l, _ = a.x2 / 100 * o, m = a.y2 / 100 * l, g = i[0], f = i[1], v = i[2], y = (f.vacuum.x - g.vacuum.x) / (f.map.x - g.map.x || 1), w = (v.vacuum.y - g.vacuum.y) / (v.map.y - g.map.y || 1), E = Math.round(g.vacuum.x + (c - g.map.x) * y), T = Math.round(g.vacuum.y + (d - g.map.y) * w), N = Math.round(g.vacuum.x + (_ - g.map.x) * y), L = Math.round(g.vacuum.y + (m - g.map.y) * w);
  return {
    x1: E,
    y1: T,
    x2: N,
    y2: L
  };
}
function Rk(a) {
  const i = a?.attributes?.calibration_points;
  return !i || !Array.isArray(i) || i.length < 3 ? null : i.map((o) => {
    const l = o;
    return {
      vacuum: { x: l.vacuum?.x ?? 0, y: l.vacuum?.y ?? 0 },
      map: { x: l.map?.x ?? 0, y: l.map?.y ?? 0 }
    };
  });
}
function Dk(a) {
  const i = a?.attributes;
  if (!i)
    return null;
  const o = Nn(i.top) ? i.top : void 0, l = Nn(i.left) ? i.left : void 0, c = Nn(i.height) ? i.height : void 0, d = Nn(i.width) ? i.width : void 0, _ = Nn(i.grid_size) ? i.grid_size : void 0;
  if (o !== void 0 && l !== void 0 && c && d && _) {
    const m = Nn(i.scale) ? i.scale : 1, g = Array.isArray(i.padding) ? i.padding : [0, 0, 0, 0], f = Array.isArray(i.crop) ? i.crop : [0, 0, 0, 0];
    return {
      top: o,
      left: l,
      height: c,
      width: d,
      grid_size: _,
      scale: m,
      padding: g,
      crop: f
    };
  }
  return null;
}
async function An(a, i, o, l, c, d) {
  try {
    return await a.callService(i, o, l), !0;
  } catch (_) {
    return te.error(`Service call failed: ${i}.${o}`, _), c && d && c(d), !1;
  }
}
function jk({ hass: a, entityId: i, mapEntityId: o, onSuccess: l, onError: c }) {
  const { t: d } = He(), _ = D.useCallback(async () => {
    te.debug("Vacuum", "Start full clean", i), await An(
      a,
      "vacuum",
      "start",
      { entity_id: i },
      c,
      d("errors.service_call_failed")
    ) && l?.(d("toast.starting_full_clean"));
  }, [a, i, l, c, d]), m = D.useCallback(async () => {
    te.debug("Vacuum", "Pause", i), await An(
      a,
      "vacuum",
      "pause",
      { entity_id: i },
      c,
      d("errors.service_call_failed")
    ) && l?.(d("toast.pausing_vacuum"));
  }, [a, i, l, c, d]), g = D.useCallback(
    async (T = "stop") => {
      te.debug("Vacuum", "Stop", { action: T, entityId: i }), await An(
        a,
        "vacuum",
        "stop",
        { entity_id: i },
        c,
        d("errors.service_call_failed")
      ) && (T === "stop_and_dock" ? (await An(
        a,
        "vacuum",
        "return_to_base",
        { entity_id: i },
        c,
        d("errors.service_call_failed")
      ), l?.(d("toast.stopping_and_docking"))) : l?.(d("toast.stopping_vacuum")));
    },
    [a, i, l, c, d]
  ), f = D.useCallback(async () => {
    te.debug("Vacuum", "Return to dock", i), await An(
      a,
      "vacuum",
      "return_to_base",
      { entity_id: i },
      c,
      d("errors.service_call_failed")
    ) && l?.(d("toast.vacuum_docking"));
  }, [a, i, l, c, d]), v = D.useCallback(
    async (T, N, L = 1) => {
      te.debug("Vacuum", "Clean segments", { entityId: i, segments: T, count: N, repeats: L }), await An(
        a,
        "dreame_vacuum",
        "vacuum_clean_segment",
        {
          entity_id: i,
          segments: T,
          repeats: L
        },
        c,
        d("errors.service_call_failed")
      ) && l?.(d(N === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(N) }));
    },
    [a, i, l, c, d]
  ), y = D.useCallback(
    async (T) => {
      if (T.length === 0) {
        te.debug("Vacuum", "No room configs provided");
        return;
      }
      const N = T.map((P) => P.roomId), L = T.map((P) => P.cycles), R = T.map((P) => P.suctionLevel), U = T.map((P) => P.mopWetness);
      if (te.debug("Vacuum", "Clean segments with custom config", {
        entityId: i,
        segments: N,
        repeats: L,
        suctionLevels: R,
        waterVolumes: U,
        roomConfigs: T
      }), await An(
        a,
        "dreame_vacuum",
        "vacuum_clean_segment",
        {
          entity_id: i,
          segments: N,
          repeats: L,
          suction_level: R,
          water_volume: U
        },
        c,
        d("errors.service_call_failed")
      )) {
        const P = T.length;
        l?.(d(P === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(P) }));
      }
    },
    [a, i, l, c, d]
  ), w = D.useCallback(
    async (T, N, L, R = 1) => {
      const U = a.states[o];
      te.debug("Vacuum", "Clean zone - input:", {
        uiZone: T,
        imageWidth: N,
        imageHeight: L,
        mapEntityId: o,
        repeats: R,
        calibrationPoints: U?.attributes?.calibration_points
      });
      const Y = Mk(T, U, N, L);
      te.debug("Vacuum", "Clean zone - converted:", Y), await An(
        a,
        "dreame_vacuum",
        "vacuum_clean_zone",
        {
          entity_id: i,
          zone: [Y.x1, Y.y1, Y.x2, Y.y2],
          repeats: R
        },
        c,
        d("errors.service_call_failed")
      ) && l?.(d("toast.starting_zone_clean"));
    },
    [a, i, o, l, c, d]
  ), E = D.useCallback(
    (T, N, L, R, U, Y = 1, P) => {
      switch (te.debug("Vacuum", "Handle clean", {
        mode: T,
        selectedRooms: Array.from(N.entries()),
        selectedZone: L,
        imageWidth: R,
        imageHeight: U,
        repeats: Y,
        customizeMode: !!P
      }), T) {
        case "all":
          P && P.length > 0 ? y(P) : _();
          break;
        case "room":
          if (N.size > 0)
            if (P && P.length > 0) {
              const H = P.filter((F) => N.has(F.roomId));
              H.length > 0 ? y(H) : v(Array.from(N.keys()), N.size, Y);
            } else
              v(Array.from(N.keys()), N.size, Y);
          else
            te.debug("Vacuum", "No rooms selected"), l?.(d("toast.select_rooms_first"));
          break;
        case "zone":
          L && R && U ? w(L, R, U, Y) : L ? (te.debug("Vacuum", "Zone selected but no image dimensions"), l?.(d("toast.cannot_determine_map"))) : (te.debug("Vacuum", "No zone selected"), l?.(d("toast.select_zone_first")));
          break;
      }
    },
    [_, v, y, w, l, d]
  );
  return {
    handleStart: _,
    handlePause: m,
    handleStop: g,
    handleDock: f,
    handleCleanSegments: v,
    handleCleanSegmentsCustomized: y,
    handleCleanZone: w,
    handleClean: E
  };
}
function Lk(a = 3e3) {
  const [i, o] = D.useState(null);
  D.useEffect(() => {
    if (i) {
      const d = setTimeout(() => o(null), a);
      return () => clearTimeout(d);
    }
  }, [i, a]);
  const l = D.useCallback((d) => {
    o(d);
  }, []), c = D.useCallback(() => {
    o(null);
  }, []);
  return {
    toast: i,
    showToast: l,
    hideToast: c
  };
}
const Ou = {
  name: "light",
  colors: {
    // Background colors
    cardBg: "#f5f5f7",
    surfaceBg: "#ffffff",
    surfaceSecondary: "#f0f0f0",
    surfaceTertiary: "#e8e8e8",
    surfaceBgHover: "rgba(255, 255, 255, 0.5)",
    // Text colors
    textPrimary: "#1a1a1a",
    textPrimaryInvert: "#ffffff",
    textSecondary: "#666666",
    textTertiary: "#999999",
    // Accent colors
    accentColor: "#007aff",
    accentColorHover: "#0051d5",
    accentBg: "rgba(0, 122, 255, 0.2)",
    accentBgHover: "rgba(0, 122, 255, 0.3)",
    accentBgSecondary: "rgba(0, 122, 255, 0.1)",
    accentBgSecondaryHover: "rgba(0, 122, 255, 0.2)",
    accentBgTransparent: "rgba(0, 122, 255, 0.2)",
    accentShadow: "rgba(0, 122, 255, 0.4)",
    accentColorShadowColor: "rgba(0, 122, 255, 0.25)",
    // State colors
    warningColor: "#ff9500",
    warningShadow: "rgba(255, 149, 0, 0.4)",
    errorColor: "#ff3b30",
    errorColorHover: "#ff1f0f",
    errorShadow: "rgba(255, 59, 48, 0.4)",
    // UI elements
    borderColor: "#e0e0e0",
    overlayBg: "rgba(0, 0, 0, 0.05)",
    cardShadow: "rgba(0, 0, 0, 0.08)",
    cardShadowHover: "rgba(0, 0, 0, 0.12)",
    handleShadow: "rgba(0, 0, 0, 0.2)",
    handleBg: "rgba(0, 0, 0, 0.15)",
    backdropBg: "rgba(0, 0, 0, 0.4)",
    // Toggle specific
    toggleActive: "rgba(0, 122, 255, 0.25)",
    toggleActiveBorder: "#0051d5",
    toggleActiveShadowColor: "#ffffff"
  }
}, gh = {
  name: "dark",
  colors: {
    // Background colors
    cardBg: "#1c1c1e",
    surfaceBg: "#2c2c2e",
    surfaceSecondary: "#3a3a3c",
    surfaceTertiary: "#48484a",
    surfaceBgHover: "rgba(255, 255, 255, 0.1)",
    // Text colors
    textPrimary: "#ffffff",
    textPrimaryInvert: "#1a1a1a",
    textSecondary: "#aeaeb2",
    textTertiary: "#8e8e93",
    // Accent colors
    accentColor: "#5865f2",
    accentColorHover: "#409cff",
    accentBg: "rgba(10, 132, 255, 0.2)",
    accentBgHover: "rgba(10, 132, 255, 0.3)",
    accentBgSecondary: "rgba(10, 132, 255, 0.1)",
    accentBgSecondaryHover: "rgba(10, 132, 255, 0.2)",
    accentBgTransparent: "rgba(10, 132, 255, 0.2)",
    accentShadow: "rgba(10, 132, 255, 0.4)",
    accentColorShadowColor: "rgba(88, 101, 242, 0.25)",
    // State colors
    warningColor: "#ff9f0a",
    warningShadow: "rgba(255, 159, 10, 0.4)",
    errorColor: "#ff453a",
    errorColorHover: "#ff6961",
    errorShadow: "rgba(255, 69, 58, 0.4)",
    // UI elements
    borderColor: "#48484a",
    overlayBg: "rgba(0, 0, 0, 0.3)",
    cardShadow: "rgba(0, 0, 0, 0.3)",
    cardShadowHover: "rgba(0, 0, 0, 0.4)",
    handleShadow: "rgba(0, 0, 0, 0.4)",
    handleBg: "rgba(255, 255, 255, 0.15)",
    backdropBg: "rgba(0, 0, 0, 0.6)",
    // Toggle specific
    toggleActive: "#2e354f",
    toggleActiveBorder: "#5865f2",
    toggleActiveShadowColor: "rgba(88, 101, 242, 0.25)"
  }
};
function Uk(a, i) {
  switch (a) {
    case "light":
      return Ou;
    case "dark":
      return gh;
    case "custom":
      return qk(i || {});
    default:
      return Ou;
  }
}
function qk(a) {
  return {
    name: "custom",
    colors: {
      ...(a.base === "dark" ? gh : Ou).colors,
      ...a
    }
  };
}
function Gk(a) {
  return {
    "--card-bg": a.cardBg,
    "--surface-bg": a.surfaceBg,
    "--surface-secondary": a.surfaceSecondary,
    "--surface-tertiary": a.surfaceTertiary,
    "--surface-bg-hover": a.surfaceBgHover,
    "--text-primary": a.textPrimary,
    "--text-primary-invert": a.textPrimaryInvert,
    "--text-secondary": a.textSecondary,
    "--text-tertiary": a.textTertiary,
    "--accent-color": a.accentColor,
    "--accent-color-hover": a.accentColorHover,
    "--accent-bg": a.accentBg,
    "--accent-bg-hover": a.accentBgHover,
    "--accent-bg-secondary": a.accentBgSecondary,
    "--accent-bg-secondary-hover": a.accentBgSecondaryHover,
    "--accent-bg-transparent": a.accentBgTransparent,
    "--accent-shadow": a.accentShadow,
    "--accent-color-shadow-color": a.accentColorShadowColor,
    "--warning-color": a.warningColor,
    "--warning-shadow": a.warningShadow,
    "--error-color": a.errorColor,
    "--error-color-hover": a.errorColorHover,
    "--error-shadow": a.errorShadow,
    "--border-color": a.borderColor,
    "--overlay-bg": a.overlayBg,
    "--card-shadow": a.cardShadow,
    "--card-shadow-hover": a.cardShadowHover,
    "--handle-shadow": a.handleShadow,
    "--handle-bg": a.handleBg,
    "--backdrop-bg": a.backdropBg,
    "--toggle-active": a.toggleActive,
    "--toggle-active-border": a.toggleActiveBorder,
    "--toggle-active-shadow-color": a.toggleActiveShadowColor
  };
}
function Hk(a, i) {
  const o = Gk(i.colors);
  Object.entries(o).forEach(([l, c]) => {
    a.style.setProperty(l, c);
  });
}
function Ik({ themeType: a = "light", customThemeConfig: i, containerRef: o }) {
  const l = D.useMemo(() => Uk(a, i), [a, i]);
  return D.useEffect(() => {
    o?.current && Hk(o.current, l);
  }, [l, o]), l;
}
function Pk({ hass: a, entity: i, config: o, language: l, children: c }) {
  const d = D.useMemo(() => Pg(l), [l]), _ = $k(a, i), m = D.useMemo(
    () => ({ hass: a, entity: i, config: o, language: l, isRtl: d, machineState: _ }),
    [a, i, o, l, d, _]
  );
  return /* @__PURE__ */ h.jsx(Zu.Provider, { value: m, children: c });
}
function rr() {
  const a = D.useContext(Zu);
  if (!a)
    throw new Error("useVacuumCardContext must be used within VacuumCardProvider");
  return a;
}
function Rt() {
  return rr().hass;
}
function Bt() {
  return rr().entity;
}
function ed() {
  return rr().config;
}
function td() {
  return Rt().config?.unit_system?.area ?? "m²";
}
function ad() {
  return rr().isRtl;
}
function Ma() {
  return rr().machineState;
}
function Bk() {
  const a = ed();
  return { getStopAction: D.useCallback(() => a.buttons?.find((l) => l.type === "stop")?.action ?? "stop", [a.buttons]) };
}
function Yk({ hass: a, baseEntityId: i, rooms: o }) {
  const l = D.useMemo(() => o.map((v) => ({
    roomId: v.id,
    roomName: v.name,
    suctionEntityId: Mt("select", i, v.id, da.SUCTION_LEVEL.key),
    wetnessEntityId: Mt("number", i, v.id, Tu.WETNESS_LEVEL.key),
    cleaningTimesEntityId: Mt(
      "select",
      i,
      v.id,
      da.CLEANING_TIMES.key
    ),
    mopPressureEntityId: Mt(
      "select",
      i,
      v.id,
      da.MOP_PRESSURE.key
    ),
    mopTemperatureEntityId: Mt(
      "select",
      i,
      v.id,
      da.MOP_TEMPERATURE.key
    )
  })), [i, o]), c = D.useMemo(() => {
    const v = /* @__PURE__ */ new Map();
    for (const y of l) {
      const w = a.states[y.suctionEntityId], E = a.states[y.wetnessEntityId], T = a.states[y.cleaningTimesEntityId], N = a.states[y.mopPressureEntityId], L = a.states[y.mopTemperatureEntityId], R = !!(w || E || T || N || L);
      v.set(y.roomId, {
        roomId: y.roomId,
        roomName: y.roomName,
        // Suction level
        suctionLevel: w?.state ?? null,
        suctionLevelOptions: w?.attributes?.options ?? [],
        // Wetness level
        wetnessLevel: E ? parseFloat(E.state) : null,
        wetnessMin: E?.attributes?.min ?? 1,
        wetnessMax: E?.attributes?.max ?? 32,
        // Cleaning times
        cleaningTimes: T?.state ?? null,
        cleaningTimesOptions: T?.attributes?.options ?? [],
        // Mop pressure
        mopPressure: N?.state ?? null,
        mopPressureOptions: N?.attributes?.options ?? [],
        // Mop temperature
        mopTemperature: L?.state ?? null,
        mopTemperatureOptions: L?.attributes?.options ?? [],
        hasEntities: R
      });
    }
    return v;
  }, [a.states, l]), d = D.useCallback(
    (v, y) => {
      const w = Mt("select", i, v, da.SUCTION_LEVEL.key);
      te.debug("RoomSettings", "Setting suction level:", { roomId: v, value: y, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: y
      });
    },
    [a, i]
  ), _ = D.useCallback(
    (v, y) => {
      const w = Mt("number", i, v, Tu.WETNESS_LEVEL.key);
      te.debug("RoomSettings", "Setting wetness level:", { roomId: v, value: y, entityId: w }), a.callService("number", "set_value", {
        entity_id: w,
        value: y
      });
    },
    [a, i]
  ), m = D.useCallback(
    (v, y) => {
      const w = Mt("select", i, v, da.CLEANING_TIMES.key);
      te.debug("RoomSettings", "Setting cleaning times:", { roomId: v, value: y, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: y
      });
    },
    [a, i]
  ), g = D.useCallback(
    (v, y) => {
      const w = Mt("select", i, v, da.MOP_PRESSURE.key);
      te.debug("RoomSettings", "Setting mop pressure:", { roomId: v, value: y, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: y
      });
    },
    [a, i]
  ), f = D.useCallback(
    (v, y) => {
      const w = Mt("select", i, v, da.MOP_TEMPERATURE.key);
      te.debug("RoomSettings", "Setting mop temperature:", { roomId: v, value: y, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: y
      });
    },
    [a, i]
  );
  return {
    roomSettings: c,
    setSuctionLevel: d,
    setWetnessLevel: _,
    setCleaningTimes: m,
    setMopPressure: g,
    setMopTemperature: f
  };
}
function vt(a, i) {
  const o = i ? a.states[i] : void 0, l = !!o, c = o ? o.state !== "unavailable" : !1, d = l && !c;
  return {
    entity: o,
    exists: l,
    available: c,
    state: o?.state,
    isOn: o?.state === "on",
    disabled: !l || !c,
    unavailable: d,
    attributes: o?.attributes ?? {}
  };
}
function hh(a, i, o) {
  const l = `switch.${i}_${o}`;
  return { entityId: l, ...vt(a, l) };
}
function vh(a, i, o) {
  const l = `select.${i}_${o}`;
  return { entityId: l, ...vt(a, l) };
}
function Zk(a, i, o) {
  const l = `number.${i}_${o}`, c = vt(a, l), d = c.state ? parseFloat(c.state) : 0;
  return { entityId: l, ...c, numericValue: d };
}
function Vk(a, i, o) {
  const l = `button.${i}_${o}`;
  return { entityId: l, ...vt(a, l) };
}
function Kk(a, i, o) {
  const l = `time.${i}_${o}`, c = vt(a, l), d = c.state ? c.state.substring(0, 5) : "00:00";
  return { entityId: l, ...c, timeValue: d };
}
function lr() {
  const a = Bt();
  return D.useMemo(() => {
    const i = a.attributes.capabilities ?? [], o = new Set(i);
    return {
      raw: i,
      has: (l) => o.has(l),
      hasAny: (...l) => l.some((c) => o.has(c)),
      hasAll: (...l) => l.every((c) => o.has(c))
    };
  }, [a.attributes.capabilities]);
}
function Xk(a, i) {
  return a && Sp[a] ? Sp[a] : i && zp[i] ? zp[i] : xw;
}
function Fk(a) {
  return a && Ep[a] ? Ep[a] : Mw;
}
function Wk(a, i, o) {
  const l = a === "cleaning", c = a === "paused", d = l || c, _ = i === he.MOPPING, m = i === he.SWEEPING, g = i === he.MOPPING_AFTER_SWEEPING;
  return {
    canChangeCleaningMode: a === "idle" || d && !g,
    canChangeSuctionPower: !_ && !o,
    canChangeWetness: !m && !o,
    canChangeRoute: !d,
    canChangeMopFrequency: !d,
    canToggleMaxPower: (m || g) && !o,
    canStartCleaning: !d && a !== "returning" && a !== "error",
    canPause: l,
    canResume: c,
    canStop: d,
    canDock: a !== "returning" && a !== "maintenance"
  };
}
function $k(a, i) {
  return D.useMemo(() => {
    const o = Pu(i.entity_id), l = ht("sensor", o, Te.STATE.key), c = vt(a, l), d = c.state ?? i.state ?? "unknown", _ = Xk(c.state, i.state), m = Fk(c.state), g = i.attributes.cleaning_mode ?? he.SWEEPING_AND_MOPPING, f = i.attributes.customized_cleaning === !0, v = Wk(_, g, f);
    return {
      phase: _,
      task: m,
      rawState: d,
      cleaningMode: g,
      isCustomizedCleaning: f,
      controls: v
    };
  }, [a, i]);
}
const Vp = {
  [he.SWEEPING_AND_MOPPING]: "cleaning_mode_button.vac_and_mop",
  [he.MOPPING_AFTER_SWEEPING]: "cleaning_mode_button.mop_after_vac",
  [he.SWEEPING]: "cleaning_mode_button.vacuum",
  [he.MOPPING]: "cleaning_mode_button.mop",
  [he.CUSTOMIZE]: "customize.title"
}, Qk = {
  [he.SWEEPING_AND_MOPPING]: "Vac & Mop",
  [he.MOPPING_AFTER_SWEEPING]: "Mop after Vac",
  [he.SWEEPING]: "Vac",
  [he.MOPPING]: "Mop",
  [he.CUSTOMIZE]: "Customize"
};
function Jk(a, i) {
  return i && Vp[a] ? i(Vp[a]) : Qk[a] ?? a;
}
const Kp = {
  [Ea.VACUUM_AND_MOP]: "cleaning_mode_button.vac_and_mop",
  [Ea.MOP_AFTER_VACUUM]: "cleaning_mode_button.mop_after_vac"
}, eT = {
  [Ea.VACUUM_AND_MOP]: "Vac & Mop",
  [Ea.MOP_AFTER_VACUUM]: "Mop after Vac"
};
function tT(a, i) {
  return i && Kp[a] ? i(Kp[a]) : eT[a] ?? a;
}
function aT(a, i) {
  const o = a.toLowerCase();
  return o.includes("quiet") || o.includes("silent") ? i ? i("suction_levels.quiet") : "Quiet" : o.includes("standard") ? i ? i("suction_levels.standard") : "Standard" : o.includes("strong") ? i ? i("suction_levels.strong") : "Turbo" : o.includes("turbo") ? i ? i("suction_levels.turbo") : "Max" : a;
}
function nT(a) {
  switch (a) {
    case he.SWEEPING:
      return Lg;
    case he.MOPPING:
      return Ug;
    case he.SWEEPING_AND_MOPPING:
      return Hl;
    case he.MOPPING_AFTER_SWEEPING:
      return Gu;
    case he.CUSTOMIZE:
      return Gg;
    default:
      return "";
  }
}
function iT(a) {
  switch (a) {
    case Ea.VACUUM_AND_MOP:
      return Hl;
    case Ea.MOP_AFTER_VACUUM:
      return Gu;
    default:
      return "";
  }
}
function oT(a) {
  switch (a) {
    case $i.QUIET:
    case $i.SILENT:
      return Au;
    case $i.STANDARD:
      return Hu;
    case $i.STRONG:
      return qg;
    case $i.TURBO:
      return Nu;
  }
}
function rT(a) {
  switch (a) {
    case ii.QUICK:
      return Tw;
    case ii.STANDARD:
      return Aw;
    case ii.INTENSIVE:
      return Nw;
    case ii.DEEP:
      return Cw;
  }
}
function lT(a) {
  switch (a) {
    case ri.BY_AREA:
      return Ew;
    case ri.BY_TIME:
      return zw;
    case ri.BY_ROOM:
      return kw;
    default:
      return "⚙️";
  }
}
function sT(a) {
  return Hg;
}
function cT(a, i) {
  if (i)
    switch (a) {
      case Ll.LOW:
        return i("custom_mode.water_low");
      case Ll.MEDIUM:
        return i("custom_mode.water_medium");
      case Ll.HIGH:
        return i("custom_mode.water_high");
      default:
        return a;
    }
  return a;
}
function uT(a) {
  return Hg;
}
function dT(a, i) {
  if (i)
    switch (a) {
      case li.SLIGHTLY_DRY:
        return i("custom_mode.slightly_dry");
      case li.MOIST:
        return i("custom_mode.moist");
      case li.WET:
        return i("custom_mode.wet");
      default:
        return a;
    }
  return a;
}
function _T(a, i, o) {
  if (o)
    return o;
  const c = `camera.${i.split(".")[1]}_map`;
  if (Xp(a.states[c]))
    return c;
  for (const d of Object.keys(a.states))
    if (!(!d.startsWith("camera.") || !d.endsWith("_map") || d.includes("_map_")) && Xp(a.states[d]))
      return d;
  return c;
}
function Xp(a) {
  const i = a?.attributes;
  return i ? "rooms" in i || "vacuum_position" in i || "calibration_points" in i || "charger_position" in i : !1;
}
function mT(a, i, o) {
  if (!a)
    return null;
  const l = i.title || a.attributes?.friendly_name || "Dreame Vacuum", c = i.map_entity || `camera.${i.entity.split(".")[1]}_map`, d = a.attributes?.selected_map || "", _ = a.attributes?.rooms?.[d], m = Array.isArray(_) ? _.map((g) => ({
    id: g.id,
    name: g.name,
    x: 50,
    y: 50,
    icon: g.icon
  })) : [];
  return {
    deviceName: l,
    mapEntityId: c,
    rooms: m
  };
}
function fT(a, i) {
  const o = je(a.attributes.status, ""), l = a.attributes.segment_cleaning || !1, c = a.attributes.zone_cleaning || !1;
  if (a.attributes.started) {
    if (l || o.toLowerCase().includes("room"))
      return "room";
    if (c || o.toLowerCase().includes("zone"))
      return "zone";
  }
  return i;
}
function pT(a, i, o) {
  const l = a.states[i], c = a.states[o], d = /* @__PURE__ */ new Map();
  if (!l) return d;
  const _ = l.attributes.segment_cleaning === !0, m = l.attributes.active_segments;
  if (!_ || !m || !Array.isArray(m))
    return d;
  const g = c?.attributes?.rooms, f = /* @__PURE__ */ new Map();
  g && Object.values(g).forEach((v) => {
    f.set(v.room_id, v.name);
  });
  for (const v of m) {
    const y = f.get(v) || `Room ${v}`;
    d.set(v, y);
  }
  return d;
}
const Fp = 0.05, Wp = 2e4, $p = 1e4;
function gT(a, i, o, l = 0) {
  const c = a.filter(
    (R) => R.x0 !== void 0 && R.y0 !== void 0 && R.x1 !== void 0 && R.y1 !== void 0
  );
  if (c.length === 0)
    return [];
  const d = c.flatMap((R) => [R.x0, R.x1]), _ = c.flatMap((R) => [R.y0, R.y1]), m = Math.min(...d), g = Math.max(...d), f = Math.min(..._), v = Math.max(..._);
  if (m === g || f === v)
    return te.warn("RoomParser", "Degenerate room bounds, cannot auto-calibrate"), [];
  const y = i * Fp, w = o * Fp, E = y, T = i - y, N = w, L = o - w;
  switch (te.debug("RoomParser", "Auto-calibrating from rooms:", {
    rotation: l,
    vacuumBounds: { minX: m, maxX: g, minY: f, maxY: v },
    imageBounds: { width: i, height: o }
  }), l) {
    case 90:
      return [
        { vacuum: { x: m, y: f }, map: { x: E, y: N } },
        { vacuum: { x: g, y: f }, map: { x: E, y: L } },
        { vacuum: { x: m, y: v }, map: { x: T, y: N } }
      ];
    case 180:
      return [
        { vacuum: { x: m, y: f }, map: { x: T, y: N } },
        { vacuum: { x: g, y: f }, map: { x: E, y: N } },
        { vacuum: { x: m, y: v }, map: { x: T, y: L } }
      ];
    case 270:
      return [
        { vacuum: { x: m, y: f }, map: { x: T, y: L } },
        { vacuum: { x: g, y: f }, map: { x: T, y: N } },
        { vacuum: { x: m, y: v }, map: { x: E, y: L } }
      ];
    default:
      return [
        { vacuum: { x: m, y: f }, map: { x: E, y: L } },
        { vacuum: { x: g, y: f }, map: { x: T, y: L } },
        { vacuum: { x: m, y: v }, map: { x: E, y: N } }
      ];
  }
}
function yh(a, i) {
  const o = a.states[i];
  if (!o?.attributes?.rooms)
    return te.debug("RoomParser", "No rooms found in camera entity:", i), [];
  const l = o.attributes.rooms;
  return Object.values(l).map((c) => ({
    id: c.room_id,
    name: c.name,
    icon: c.icon,
    visibility: c.visibility,
    x0: c.x0,
    y0: c.y0,
    x1: c.x1,
    y1: c.y1,
    x: c.x,
    y: c.y
  }));
}
function $l(a, i, o, l, c, d, _ = 0) {
  const m = o && o.length >= 3;
  let g = o;
  if (!m && d && d.length > 0 && (g = gT(d, l, c, _)), !g || g.length < 3) {
    const L = (a + $p) / Wp, R = (i + $p) / Wp;
    return {
      x: L * l,
      y: R * c
    };
  }
  const f = g[0], v = g[1], y = g[2], w = (v.map.x - f.map.x) / (v.vacuum.x - f.vacuum.x || 1), E = (y.map.y - f.map.y) / (y.vacuum.y - f.vacuum.y || 1), T = f.map.x + (a - f.vacuum.x) * w, N = f.map.y + (i - f.vacuum.y) * E;
  return { x: T, y: N };
}
function hT(a, i, o, l, c, d = 0) {
  if (a.x0 === void 0 || a.y0 === void 0 || a.x1 === void 0 || a.y1 === void 0)
    return te.warn("Room missing coordinates:", a), "";
  const _ = (y, w) => $l(y, w, i, o, l, c, d), m = _(a.x0, a.y0), g = _(a.x1, a.y0), f = _(a.x1, a.y1), v = _(a.x0, a.y1);
  return `M ${m.x} ${m.y} L ${g.x} ${g.y} L ${f.x} ${f.y} L ${v.x} ${v.y} Z`;
}
function vT({ deviceName: a, onSettingsClick: i }) {
  const { t: o } = He(), l = td(), c = Bt(), { rawState: d } = Ma(), _ = d.charAt(0).toUpperCase() + d.slice(1).replace(/_/g, " "), m = je(c.attributes.cleaned_area, 0), g = je(c.attributes.cleaning_time, 0), f = je(c.attributes.battery, 0), v = () => {
    const w = c.attributes.battery;
    return Nn(w) ? w >= 80 ? mw : w >= 60 ? _w : w >= 20 ? dw : uw : null;
  }, y = je(c.attributes.cleaning_progress, 0) || je(c.attributes.drying_progress, 0);
  return /* @__PURE__ */ h.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "header__top", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ h.jsx("h2", { className: "header__title", children: a }),
        /* @__PURE__ */ h.jsx("p", { className: "header__status", children: _ })
      ] }),
      i && /* @__PURE__ */ h.jsx("button", { className: "header__settings-btn", onClick: i, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ h.jsx(U0, {}) })
    ] }),
    d !== "sleeping" && y > 0 && /* @__PURE__ */ h.jsx("div", { className: "header__progress", children: /* @__PURE__ */ h.jsx("div", { className: "header__progress-bar", children: /* @__PURE__ */ h.jsx("div", { className: "header__progress-fill", style: { width: `${y}%` } }) }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "header__stats", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ h.jsx("span", { className: "header__stat-icon", children: pw }),
        /* @__PURE__ */ h.jsxs("span", { className: "header__stat-value", children: [
          m,
          " ",
          l
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ h.jsx("span", { className: "header__stat-icon", children: fw }),
        /* @__PURE__ */ h.jsxs("span", { className: "header__stat-value--cleaning-time", children: [
          g,
          " ",
          o("units.minutes")
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ h.jsx("span", { className: "header__stat-icon", children: v() }),
        /* @__PURE__ */ h.jsxs("span", { className: "header__stat-value", children: [
          f,
          " ",
          o("units.percent")
        ] })
      ] })
    ] })
  ] });
}
function yT() {
  const { t: a } = He(), i = Bt(), o = Rt(), l = ed(), [c, d] = D.useState(!1), _ = D.useRef(null), m = i.attributes, g = D.useMemo(() => m.maps ?? [], [m.maps]), f = m.selected_map_id ?? m.selected_map, v = l.entity?.split(".")[1] ?? "", y = ht("select", v, Na.SELECTED_MAP.key), E = vh(o, v, "selected_map").unavailable, T = D.useMemo(() => g.find((R) => R.id === f), [g, f]), N = T?.custom_name || T?.name || a("map_selector.unknown"), L = D.useCallback(
    (R) => {
      o.callService("select", "select_option", {
        entity_id: y,
        option: R.name
      }), d(!1);
    },
    [o, y]
  );
  return D.useEffect(() => {
    function R(U) {
      const Y = U.composedPath();
      _.current && !Y.includes(_.current) && d(!1);
    }
    if (c)
      return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [c]), D.useEffect(() => {
    function R(U) {
      U.key === "Escape" && d(!1);
    }
    if (c)
      return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R);
  }, [c]), /* @__PURE__ */ h.jsxs("div", { className: "map-selector", ref: _, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: `map-selector__button ${c ? "map-selector__button--open" : ""} ${E ? "map-selector__button--disabled" : ""}`,
        onClick: () => !E && d(!c),
        type: "button",
        disabled: E,
        "aria-expanded": c,
        "aria-haspopup": "listbox",
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "map-selector__icon", children: /* @__PURE__ */ h.jsx(Uu, { size: 16 }) }),
          /* @__PURE__ */ h.jsx("span", { className: "map-selector__label", children: N }),
          /* @__PURE__ */ h.jsx(Sg, { className: `map-selector__chevron ${c ? "map-selector__chevron--open" : ""}` })
        ]
      }
    ),
    c && /* @__PURE__ */ h.jsx("div", { className: "map-selector__dropdown", role: "listbox", children: g.map((R) => {
      const U = R.id === f, Y = R.custom_name || R.name;
      return /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: `map-selector__option ${U ? "map-selector__option--selected" : ""}`,
          onClick: () => L(R),
          type: "button",
          role: "option",
          "aria-selected": U,
          children: [
            /* @__PURE__ */ h.jsx("span", { className: "map-selector__option-name", children: Y }),
            U && /* @__PURE__ */ h.jsx(wg, { className: "map-selector__option-check" })
          ]
        },
        R.id
      );
    }) })
  ] });
}
function bT({
  cleaningMode: a,
  cleanGeniusMode: i,
  cleangenius: o,
  onClick: l,
  onShortcutsClick: c,
  onRepeatClick: d,
  repeatCount: _ = 1
}) {
  const { t: m } = He(), { phase: g, isCustomizedCleaning: f } = Ma(), y = g === "cleaning" || g === "paused" || f, w = (U) => f ? Gg : U === he.SWEEPING ? Lg : U === he.MOPPING ? Ug : U === he.SWEEPING_AND_MOPPING ? Hl : U === he.MOPPING_AFTER_SWEEPING ? Gu : Hl, E = (U) => U === Ea.VACUUM_AND_MOP ? m("cleaning_mode_button.vac_and_mop") : U === Ea.MOP_AFTER_VACUUM ? m("cleaning_mode_button.mop_after_vac") : "", T = (U) => f ? m("customize.title") : U === he.MOPPING_AFTER_SWEEPING ? m("cleaning_mode_button.mop_after_vac") : U === he.SWEEPING_AND_MOPPING ? m("cleaning_mode_button.vac_and_mop") : U === he.SWEEPING ? m("cleaning_mode_button.vacuum") : U === he.MOPPING ? m("cleaning_mode_button.mop") : "", N = () => m(o === "Off" ? "cleaning_mode_button.prefix_custom" : "cleaning_mode_button.prefix_cleangenius"), L = (U) => {
    U.stopPropagation(), c?.();
  }, R = (U) => {
    U.stopPropagation(), d?.();
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-button-wrapper", children: [
    /* @__PURE__ */ h.jsxs("button", { onClick: l, className: "cleaning-mode-button", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-button__content", children: [
        /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-button__icon", children: w(a) }),
        /* @__PURE__ */ h.jsxs("span", { className: "cleaning-mode-button__text", children: [
          N(),
          o === "Off" ? T(a) : E(i)
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-button__arrow", children: "›" })
    ] }),
    d && /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: `cleaning-mode-button-wrapper__repeats ${y ? "cleaning-mode-button-wrapper__repeats--disabled" : ""}`,
        onClick: R,
        title: m("cleaning_mode_button.repeats_tooltip"),
        disabled: y,
        children: [
          "x",
          _
        ]
      }
    ),
    o === "Off" && c && /* @__PURE__ */ h.jsx(
      "button",
      {
        className: `cleaning-mode-button-wrapper__shortcuts ${y ? "cleaning-mode-button-wrapper__shortcuts--disabled" : ""}`,
        onClick: L,
        title: m("cleaning_mode_button.view_shortcuts"),
        disabled: y,
        children: ww
      }
    )
  ] });
}
var oi = function(a, i) {
  return Number(a.toFixed(i));
}, wT = function(a, i) {
  return i;
}, Re = function(a, i, o) {
  o && typeof o == "function" && o(a, i);
}, ST = function(a) {
  return -Math.cos(a * Math.PI) / 2 + 0.5;
}, ET = function(a) {
  return a;
}, zT = function(a) {
  return a * a;
}, kT = function(a) {
  return a * (2 - a);
}, TT = function(a) {
  return a < 0.5 ? 2 * a * a : -1 + (4 - 2 * a) * a;
}, AT = function(a) {
  return a * a * a;
}, NT = function(a) {
  return --a * a * a + 1;
}, CT = function(a) {
  return a < 0.5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
}, xT = function(a) {
  return a * a * a * a;
}, MT = function(a) {
  return 1 - --a * a * a * a;
}, OT = function(a) {
  return a < 0.5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
}, RT = function(a) {
  return a * a * a * a * a;
}, DT = function(a) {
  return 1 + --a * a * a * a * a;
}, jT = function(a) {
  return a < 0.5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a;
}, bh = {
  easeOut: ST,
  linear: ET,
  easeInQuad: zT,
  easeOutQuad: kT,
  easeInOutQuad: TT,
  easeInCubic: AT,
  easeOutCubic: NT,
  easeInOutCubic: CT,
  easeInQuart: xT,
  easeOutQuart: MT,
  easeInOutQuart: OT,
  easeInQuint: RT,
  easeOutQuint: DT,
  easeInOutQuint: jT
}, wh = function(a) {
  typeof a == "number" && cancelAnimationFrame(a);
}, Sa = function(a) {
  a.mounted && (wh(a.animation), a.isAnimating = !1, a.animation = null, a.velocity = null);
};
function Sh(a, i, o, l) {
  if (a.mounted) {
    var c = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    Sa(a), a.animation = function() {
      if (!a.mounted)
        return wh(a.animation);
      var _ = (/* @__PURE__ */ new Date()).getTime() - c, m = _ / o, g = bh[i], f = g(m);
      _ >= o ? (l(d), a.animation = null) : a.animation && (l(f), requestAnimationFrame(a.animation));
    }, requestAnimationFrame(a.animation);
  }
}
function LT(a) {
  var i = a.scale, o = a.positionX, l = a.positionY;
  return !(Number.isNaN(i) || Number.isNaN(o) || Number.isNaN(l));
}
function Dn(a, i, o, l) {
  var c = LT(i);
  if (!(!a.mounted || !c)) {
    var d = a.setState, _ = a.state, m = _.scale, g = _.positionX, f = _.positionY, v = i.scale - m, y = i.positionX - g, w = i.positionY - f;
    o === 0 ? d(i.scale, i.positionX, i.positionY) : Sh(a, l, o, function(E) {
      E !== 1 ? a.isAnimating = !0 : a.isAnimating = !1;
      var T = m + v * E, N = g + y * E, L = f + w * E;
      d(T, N, L);
    });
  }
}
function UT(a, i, o) {
  var l = a.offsetWidth, c = a.offsetHeight, d = i.offsetWidth, _ = i.offsetHeight, m = d * o, g = _ * o, f = l - m, v = c - g;
  return {
    wrapperWidth: l,
    wrapperHeight: c,
    newContentWidth: m,
    newDiffWidth: f,
    newContentHeight: g,
    newDiffHeight: v
  };
}
var qT = function(a, i, o, l, c, d, _) {
  var m = a > i ? o * (_ ? 0.5 : 1) : 0, g = l > c ? d * (_ ? 0.5 : 1) : 0, f = a - i - m, v = m, y = l - c - g, w = g;
  return {
    minPositionX: f,
    maxPositionX: v,
    minPositionY: y,
    maxPositionY: w,
    scaleWidthFactor: m,
    scaleHeightFactor: g
  };
}, nd = function(a, i) {
  var o = a.wrapperComponent, l = a.contentComponent, c = a.setup, d = c.centerZoomedOut, _ = c.disablePadding;
  if (!o || !l)
    throw new Error("Components are not mounted");
  var m = UT(o, l, i), g = m.wrapperWidth, f = m.wrapperHeight, v = m.newContentWidth, y = m.newContentHeight, w = m.newDiffWidth, E = m.newDiffHeight, T = qT(g, v, w, f, y, E, !!d), N = g >= v && f >= y;
  _ && N && !d && (T.minPositionX = 0, T.maxPositionX = 0, T.minPositionY = 0, T.maxPositionY = 0);
  var L = a.setup, R = L.minPositionX, U = L.maxPositionX, Y = L.minPositionY, P = L.maxPositionY;
  return R != null && (T.minPositionX = g * (1 - i) + R * i), U != null && (T.maxPositionX = U * i), Y != null && (T.minPositionY = f * (1 - i) + Y * i), P != null && (T.maxPositionY = P * i), T;
}, nr = function(a, i, o, l) {
  return l ? a < i ? oi(i, 2) : a > o ? oi(o, 2) : oi(a, 2) : oi(a, 2);
}, ao = function(a, i) {
  var o = nd(a, i);
  return a.bounds = o, o;
};
function sr(a, i, o, l, c, d, _) {
  var m = o.minPositionX, g = o.minPositionY, f = o.maxPositionX, v = o.maxPositionY, y = 0, w = 0;
  _ && (y = c, w = d);
  var E = nr(a, m - y, f + y, l), T = nr(i, g - w, v + w, l);
  return { x: E, y: T };
}
function Ql(a, i, o, l, c, d) {
  var _ = a.state, m = _.scale, g = _.positionX, f = _.positionY, v = l - m;
  if (typeof i != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: g, y: f };
  var y = g - i * v, w = f - o * v, E = sr(y, w, c, d, 0, 0, null);
  return E;
}
var Qp = 1e-7;
function cr(a, i, o, l, c) {
  var d = c ? l : 0, _ = Math.max(i - d, Qp), m = o + d;
  return !Number.isNaN(o) && a >= m ? m : !Number.isNaN(i) && a <= _ ? _ : Math.max(a, Qp);
}
var Jp = function(a, i) {
  var o = a.setup.panning.excluded, l = a.isInitialized, c = a.wrapperComponent, d = i.target, _ = "shadowRoot" in d && "composedPath" in i, m = _ ? i.composedPath().some(function(v) {
    return v instanceof Element ? c?.contains(v) : !1;
  }) : c?.contains(d), g = l && d && m;
  if (!g)
    return !1;
  var f = ur(d, o);
  return !(f || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, eg = function(a) {
  var i = a.isInitialized, o = a.isPanning, l = a.setup, c = l.panning.disabled, d = i && o && !c;
  return !!d;
}, GT = function(a, i) {
  var o = a.state, l = o.positionX, c = o.positionY;
  a.isPanning = !0;
  var d = i.clientX, _ = i.clientY;
  a.startCoords = { x: d - l, y: _ - c };
}, HT = function(a, i) {
  var o = i.touches, l = a.state, c = l.positionX, d = l.positionY;
  a.isPanning = !0;
  var _ = o.length === 1;
  if (_) {
    var m = o[0].clientX, g = o[0].clientY;
    a.startCoords = { x: m - c, y: g - d };
  }
};
function IT(a) {
  var i = a.state, o = i.positionX, l = i.positionY, c = i.scale, d = a.setup, _ = d.disabled, m = d.limitToBounds, g = d.centerZoomedOut, f = a.wrapperComponent;
  if (!(_ || !f || !a.bounds)) {
    var v = a.bounds, y = v.maxPositionX, w = v.minPositionX, E = v.maxPositionY, T = v.minPositionY, N = o > y || o < w, L = l > E || l < T, R = o > y ? f.offsetWidth : a.setup.minPositionX || 0, U = l > E ? f.offsetHeight : a.setup.minPositionY || 0, Y = Ql(a, R, U, c, a.bounds, m || g), P = Y.x, H = Y.y;
    return {
      scale: c,
      positionX: N ? P : o,
      positionY: L ? H : l
    };
  }
}
function Eh(a, i, o, l, c) {
  var d = a.setup.limitToBounds, _ = a.wrapperComponent, m = a.bounds, g = a.state, f = g.scale, v = g.positionX, y = g.positionY;
  if (!(_ === null || m === null || i === v && o === y)) {
    var w = sr(i, o, m, d, l, c, _), E = w.x, T = w.y;
    a.setState(f, E, T);
  }
}
var PT = function(a, i, o) {
  var l = a.startCoords, c = a.state, d = a.setup.panning, _ = d.lockAxisX, m = d.lockAxisY, g = c.positionX, f = c.positionY;
  if (!l)
    return { x: g, y: f };
  var v = i - l.x, y = o - l.y, w = _ ? g : v, E = m ? f : y;
  return { x: w, y: E };
}, Mn = function(a, i, o) {
  var l = a.setup, c = a.state, d = l.minScale, _ = l.disablePadding, m = l.centerZoomedOut, g = o ?? c.scale;
  return i > 0 && g >= d && !_ && !m ? i : 0;
}, Cn;
(function(a) {
  a.TRACK_PAD = "track_pad", a.MOUSE = "mouse", a.TOUCH = "touch";
})(Cn || (Cn = {}));
var BT = function(a) {
  var i = a.mounted, o = a.wrapperComponent, l = a.contentComponent, c = a.setup, d = c.disabled, _ = c.velocityAnimation, m = c.limitToBounds, g = a.state.scale, f = _.disabled;
  if (f || d || !i || !o || !l)
    return !1;
  if (!m)
    return !0;
  var v = o.offsetWidth < l.offsetWidth * g || o.offsetHeight < l.offsetHeight * g;
  return v;
}, YT = function(a) {
  var i = a.mounted, o = a.velocity, l = a.bounds, c = a.setup, d = c.disabled, _ = c.velocityAnimation, m = _.disabled, g = !m && !d && i;
  return !(!g || !o || !l);
};
function ZT(a, i) {
  var o = a.setup.velocityAnimation, l = o.animationTime, c = o.maxAnimationTime, d = o.inertia;
  return Math.min(l * Math.max(1, Math.abs(i / d)), c);
}
function tg(a, i, o, l, c, d, _, m, g, f) {
  if (c) {
    if (i > _ && o > _) {
      var v = _ + (a - _) * f;
      return v > g ? g : v < _ ? _ : v;
    }
    if (i < d && o < d) {
      var v = d + (a - d) * f;
      return v < m ? m : v > d ? d : v;
    }
  }
  return l ? i : nr(a, d, _, c);
}
function VT(a) {
  var i = 1, o = a.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? i : Math.min(i, o);
}
var yu = function(a, i, o) {
  var l = 0, c = a * o;
  return Number.isNaN(c) ? l : a < 0 ? Math.max(c, -i) : Math.min(c, i);
};
function KT(a, i, o) {
  var l, c, d = BT(a);
  if (d) {
    var _ = a.lastMousePosition, m = a.velocityTime, g = a.setup, f = a.wrapperComponent, v = g.velocityAnimation, y = v.maxStrengthMouse, w = v.maxStrengthTouch, E = v.sensitivityTouch, T = v.sensitivityMouse, N = Date.now();
    if (_ && m && f) {
      var L = VT(f), R = (l = {}, l[Cn.TOUCH] = E, l[Cn.MOUSE] = T, l)[o], U = (c = {}, c[Cn.TOUCH] = w, c[Cn.MOUSE] = y, c)[o], Y = i.x - _.x, P = i.y - _.y, H = yu(Y / L, U, R), F = yu(P / L, U, R), Z = N - m, W = Y * Y + P * P, ae = yu(Math.sqrt(W) / Z, U, R);
      a.velocity = { velocityX: H, velocityY: F, total: ae };
    }
    a.lastMousePosition = i, a.velocityTime = N;
  }
}
function XT(a) {
  var i = a.velocity, o = a.bounds, l = a.setup, c = a.wrapperComponent, d = YT(a);
  if (!(!d || !i || !o || !c)) {
    var _ = i.velocityX, m = i.velocityY, g = i.total, f = o.maxPositionX, v = o.minPositionX, y = o.maxPositionY, w = o.minPositionY, E = l.limitToBounds, T = l.autoAlignment, N = l.zoomAnimation, L = l.panning, R = L.lockAxisY, U = L.lockAxisX, Y = N.animationType, P = T.sizeX, H = T.sizeY, F = T.velocityAlignmentTime, Z = F, W = ZT(a, g), ae = Math.max(W, Z), re = Mn(a, P), fe = Mn(a, H), ie = re * c.offsetWidth / 100, Ce = fe * c.offsetHeight / 100, we = f + ie, xe = v - ie, M = y + Ce, K = w - Ce, Q = a.state, _e = (/* @__PURE__ */ new Date()).getTime();
    Sh(a, Y, ae, function(pe) {
      var z = a.state, q = z.scale, X = z.positionX, $ = z.positionY, ee = (/* @__PURE__ */ new Date()).getTime() - _e, le = ee / Z, ve = bh[T.animationType], Ze = 1 - ve(Math.min(1, le)), Le = 1 - pe, kt = X + _ * Le, ea = $ + m * Le, Dt = tg(kt, Q.positionX, X, U, E, v, f, xe, we, Ze), ga = tg(ea, Q.positionY, $, R, E, w, y, K, M, Ze);
      if (X !== kt || $ !== ea) {
        a.setState(q, Dt, ga);
        var Tt = a.props.onPanning;
        Tt && Tt(Ne(a), {});
      }
    });
  }
}
function ag(a, i) {
  var o = a.state, l = o.scale, c = o.positionX, d = o.positionY;
  a.panStartPosition = { x: c, y: d }, Sa(a), ao(a, l), window.TouchEvent !== void 0 && i instanceof TouchEvent ? HT(a, i) : GT(a, i);
}
function zh(a, i) {
  var o = a.state.scale, l = a.setup, c = l.minScale, d = l.autoAlignment, _ = d.disabled, m = d.sizeX, g = d.sizeY, f = d.animationTime, v = d.animationType, y = _ || o < c || !m && !g;
  if (!y) {
    var w = IT(a);
    w && Dn(a, w, f, v);
  }
}
function ng(a, i, o, l) {
  var c = a.startCoords, d = a.setup, _ = d.autoAlignment, m = _.sizeX, g = _.sizeY;
  if (c) {
    var f = PT(a, i, o), v = f.x, y = f.y, w = Mn(a, m), E = Mn(a, g);
    KT(a, { x: v, y }, l), Eh(a, v, y, w, E);
  }
}
function FT(a, i) {
  if (a.isPanning) {
    var o = a.velocity, l = a.wrapperComponent, c = a.contentComponent;
    a.isPanning = !1;
    var d = a.state, _ = d.positionX, m = d.positionY, g = d.scale, f = a.panStartPosition;
    if (a.panStartPosition = null, f) {
      var v = _ - f.x, y = m - f.y;
      if (v * v + y * y <= 25)
        return;
    }
    a.isAnimating = !1, a.animation = null;
    var w = l?.offsetWidth || 0, E = l?.offsetHeight || 0, T = (c?.offsetWidth || 0) * g, N = (c?.offsetHeight || 0) * g, L = !a.setup.limitToBounds || w < T || E < N, R = !i && o && o.total > 0.1 && L;
    R ? XT(a) : zh(a);
  }
}
function id(a, i, o, l) {
  var c = a.setup, d = c.minScale, _ = c.maxScale, m = c.limitToBounds, g = cr(oi(i, 2), d, _, 0, !1), f = ao(a, g), v = Ql(a, o, l, g, f, m), y = v.x, w = v.y;
  return { scale: g, positionX: y, positionY: w };
}
function od(a, i, o) {
  var l = a.state.scale, c = a.wrapperComponent, d = a.setup, _ = d.minScale, m = d.maxScale, g = d.limitToBounds, f = d.zoomAnimation, v = f.disabled, y = f.animationTime, w = f.animationType, E = l >= _ && l <= m, T = v || E;
  if ((l >= 1 || g) && zh(a), !(T || !c || !a.mounted)) {
    var N = i || c.offsetWidth / 2, L = o || c.offsetHeight / 2, R = l < _ ? _ : m, U = id(a, R, N, L);
    U && Dn(a, U, y, w);
  }
}
var fa = function() {
  return fa = Object.assign || function(i) {
    for (var o, l = 1, c = arguments.length; l < c; l++) {
      o = arguments[l];
      for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (i[d] = o[d]);
    }
    return i;
  }, fa.apply(this, arguments);
};
function ig(a, i, o) {
  for (var l = 0, c = i.length, d; l < c; l++)
    (d || !(l in i)) && (d || (d = Array.prototype.slice.call(i, 0, l)), d[l] = i[l]);
  return a.concat(d || Array.prototype.slice.call(i));
}
var bu = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, ni = {
  disabled: !1,
  minPositionX: null,
  maxPositionX: null,
  minPositionY: null,
  maxPositionY: null,
  minScale: 1,
  maxScale: 8,
  limitToBounds: !0,
  centerZoomedOut: !1,
  centerOnInit: !1,
  disablePadding: !1,
  smooth: !0,
  detached: !1,
  wheel: {
    step: 0.015,
    disabled: !1,
    wheelDisabled: !1,
    touchPadDisabled: !1,
    activationKeys: [],
    excluded: []
  },
  trackPadPanning: {
    disabled: !0,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    activationKeys: [],
    excluded: []
  },
  panning: {
    disabled: !1,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    allowLeftClickPan: !0,
    allowMiddleClickPan: !0,
    allowRightClickPan: !0,
    activationKeys: [],
    excluded: []
  },
  pinch: {
    step: 5,
    disabled: !1,
    allowPanning: !0,
    excluded: []
  },
  doubleClick: {
    disabled: !1,
    step: 0.7,
    mode: "zoomIn",
    animationType: "easeOut",
    animationTime: 200,
    excluded: []
  },
  zoomAnimation: {
    disabled: !1,
    size: 0.4,
    animationTime: 200,
    animationType: "easeOut"
  },
  autoAlignment: {
    disabled: !1,
    sizeX: 100,
    sizeY: 100,
    animationTime: 200,
    velocityAlignmentTime: 400,
    animationType: "easeOut"
  },
  velocityAnimation: {
    disabled: !1,
    sensitivityMouse: 1,
    sensitivityTouch: 1.2,
    maxStrengthMouse: 20,
    maxStrengthTouch: 40,
    inertia: 1,
    animationTime: 300,
    maxAnimationTime: 800,
    animationType: "easeOut"
  }
}, Ru = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, kh = function(a) {
  var i, o, l, c, d, _, m, g, f, v = Math.max((i = a.minScale) !== null && i !== void 0 ? i : ni.minScale, 1e-7), y = (o = a.maxScale) !== null && o !== void 0 ? o : ni.maxScale, w = (l = a.initialScale) !== null && l !== void 0 ? l : bu.scale, E = Math.min(Math.max(w, v), y), T = nr((c = a.initialPositionX) !== null && c !== void 0 ? c : bu.positionX, (d = a.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (_ = a.maxPositionX) !== null && _ !== void 0 ? _ : 1 / 0, a.minPositionX != null || a.maxPositionX != null), N = nr((m = a.initialPositionY) !== null && m !== void 0 ? m : bu.positionY, (g = a.minPositionY) !== null && g !== void 0 ? g : -1 / 0, (f = a.maxPositionY) !== null && f !== void 0 ? f : 1 / 0, a.minPositionY != null || a.maxPositionY != null);
  return {
    previousScale: E,
    scale: E,
    positionX: T,
    positionY: N
  };
}, og = function(a) {
  var i = fa({}, ni);
  return Object.keys(a).forEach(function(o) {
    var l = o, c = typeof a[l] < "u", d = typeof ni[l] < "u";
    if (d && c) {
      var _ = Object.prototype.toString.call(ni[l]), m = _ === "[object Object]", g = _ === "[object Array]";
      m ? i[l] = fa(fa({}, ni[l]), a[l]) : g ? i[l] = ig(ig([], ni[l], !0), a[l]) : i[l] = a[l];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, Th = function(a, i, o) {
  var l = a.state.scale, c = a.wrapperComponent, d = a.setup, _ = d.maxScale, m = d.minScale, g = d.zoomAnimation, f = d.smooth, v = g.size;
  if (!c)
    throw new Error("Wrapper is not mounted");
  var y = f ? l * Math.exp(i * o) : l + i * o, w = cr(oi(y, 3), m, _, v, !1);
  return w;
};
function Ah(a, i, o, l, c) {
  var d, _, m = a.wrapperComponent, g = a.state, f = g.scale, v = g.positionX, y = g.positionY, w = a.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var E = w.disabled ? 0 : l, T = m.offsetWidth, N = m.offsetHeight, L = (T / 2 - v) / f, R = (N / 2 - y) / f, U = Th(a, i, o), Y = id(a, U, L, R);
  if (!Y)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var P = a.props, H = P.onZoomStart, F = P.onZoom, Z = P.onZoomStop, W = new MouseEvent("mousemove", { bubbles: !0 }), ae = Ne(a);
  Re(ae, W, H), Re(ae, W, F), Dn(a, Y, E, c);
  var re = (_ = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && _ !== void 0 ? _ : typeof window < "u" ? window : null;
  re && re.setTimeout(function() {
    a.mounted && Re(Ne(a), W, Z);
  }, E);
}
function Nh(a, i, o, l) {
  var c, d, _ = a.setup, m = a.wrapperComponent, g = a.contentComponent, f = _.limitToBounds, v = _.centerOnInit, y = kh(a.props), w = a.state, E = w.scale, T = w.positionX, N = w.positionY;
  if (m) {
    var L = y.positionX, R = y.positionY;
    if (v && g) {
      var U = rd(y.scale, m, g);
      L = U.positionX, R = U.positionY;
    }
    var Y = nd(a, y.scale), P = sr(L, R, Y, f, 0, 0, m), H = {
      scale: y.scale,
      positionX: P.x,
      positionY: P.y
    };
    if (!(E === y.scale && T === y.positionX && N === y.positionY)) {
      l?.();
      var F = a.props, Z = F.onZoomStart, W = F.onZoom, ae = F.onZoomStop, re = new MouseEvent("mousemove", { bubbles: !0 }), fe = Ne(a);
      Re(fe, re, Z), Re(fe, re, W), Dn(a, H, i, o);
      var ie = (d = (c = m.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      ie && ie.setTimeout(function() {
        a.mounted && Re(Ne(a), re, ae);
      }, i);
    }
  }
}
function WT(a, i, o, l) {
  var c = a.getBoundingClientRect(), d = i.getBoundingClientRect(), _ = o.getBoundingClientRect(), m = d.x * l.scale, g = d.y * l.scale;
  return {
    x: (c.x - _.x + m) / l.scale,
    y: (c.y - _.y + g) / l.scale
  };
}
function $T(a, i, o, l, c) {
  l === void 0 && (l = 0), c === void 0 && (c = 0);
  var d = a.wrapperComponent, _ = a.contentComponent, m = a.state, g = a.setup, f = g.limitToBounds, v = g.minScale, y = g.maxScale;
  if (!d || !_)
    return m;
  var w = d.getBoundingClientRect(), E = i.getBoundingClientRect(), T = WT(i, d, _, m), N = T.x, L = T.y, R = E.width / m.scale, U = E.height / m.scale, Y = d.offsetWidth / R, P = d.offsetHeight / U, H = cr(o || Math.min(Y, P), v, y, 0, !1), F = (w.width - R * H) / 2, Z = (w.height - U * H) / 2, W = (w.left - N) * H + F + l, ae = (w.top - L) * H + Z + c, re = nd(a, H), fe = sr(W, ae, re, f, 0, 0, d), ie = fe.x, Ce = fe.y;
  return { positionX: ie, positionY: Ce, scale: H };
}
var QT = function(a) {
  return function(i, o, l) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Ah(a, 1, i, o, l);
  };
}, JT = function(a) {
  return function(i, o, l) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Ah(a, -1, i, o, l);
  };
}, eA = function(a) {
  return function(i, o, l, c, d) {
    c === void 0 && (c = 300), d === void 0 && (d = "easeOut");
    var _ = a.state, m = _.positionX, g = _.positionY, f = _.scale, v = a.wrapperComponent, y = a.contentComponent, w = a.setup.disabled;
    if (!(w || !v || !y)) {
      var E = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(o) ? g : o,
        scale: Number.isNaN(l) ? f : l
      };
      Dn(a, E, c, d);
    }
  };
}, tA = function(a) {
  return function(i, o) {
    i === void 0 && (i = 200), o === void 0 && (o = "easeOut"), Nh(a, i, o);
  };
}, aA = function(a) {
  return function(i, o, l) {
    o === void 0 && (o = 200), l === void 0 && (l = "easeOut");
    var c = a.state, d = a.wrapperComponent, _ = a.contentComponent;
    if (d && _) {
      var m = rd(i || c.scale, d, _);
      Dn(a, m, o, l);
    }
  };
}, nA = function(a) {
  return function(i, o, l, c, d, _) {
    l === void 0 && (l = 600), c === void 0 && (c = "easeOut"), d === void 0 && (d = 0), _ === void 0 && (_ = 0), Sa(a);
    var m = a.wrapperComponent, g = typeof i == "string" ? document.getElementById(i) : i;
    if (m && g && m.contains(g)) {
      var f = $T(a, g, o, d, _);
      Dn(a, f, l, c);
    }
  };
}, Zl = function(a) {
  return {
    instance: a,
    state: a.state,
    zoomIn: QT(a),
    zoomOut: JT(a),
    setTransform: eA(a),
    resetTransform: tA(a),
    centerView: aA(a),
    zoomToElement: nA(a)
  };
}, Ch = function(a) {
  return {
    instance: a,
    state: a.state
  };
}, Ne = function(a) {
  var i = {};
  return Object.assign(i, Ch(a)), Object.assign(i, Zl(a)), i;
}, wu = !1;
function Su() {
  try {
    var a = {
      get passive() {
        return wu = !0, !1;
      }
    };
    return a;
  } catch {
    return wu = !1, wu;
  }
}
var Dl = ".".concat(Ru.wrapperClass), ur = function(a, i) {
  return i.some(function(o) {
    return a.matches("".concat(Dl, " ").concat(o, ", ").concat(Dl, " .").concat(o, ", ").concat(Dl, " ").concat(o, " *, ").concat(Dl, " .").concat(o, " *"));
  });
}, ir = function(a) {
  a && clearTimeout(a);
}, iA = function(a) {
  return Number.parseFloat(a.toFixed(8));
}, xh = function(a, i, o) {
  var l = iA(o);
  return "translate(".concat(a, "px, ").concat(i, "px) scale(").concat(l, ")");
}, rd = function(a, i, o) {
  var l = o.offsetWidth * a, c = o.offsetHeight * a, d = (i.offsetWidth - l) / 2, _ = (i.offsetHeight - c) / 2;
  return {
    scale: a,
    positionX: d,
    positionY: _
  };
};
function oA(a, i) {
  a != null && (typeof a == "function" ? a(i) : a.current = i);
}
function rA(a) {
  return function(i) {
    a.forEach(function(o) {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Mh = function(a, i) {
  var o = a.setup.wheel, l = o.disabled, c = o.wheelDisabled, d = o.touchPadDisabled, _ = o.excluded, m = a.isInitialized, g = a.isPanning, f = i.target, v = m && !g && !l && f;
  if (!v || c && !i.ctrlKey || d && i.ctrlKey)
    return !1;
  var y = ur(f, _);
  if (y)
    return !1;
  var w = a.isPressingKeys(a.setup.wheel.activationKeys);
  return !!w;
}, lA = function(a, i) {
  var o = a.setup, l = o.disabled, c = o.trackPadPanning, d = c.activationKeys, _ = c.excluded;
  if (!a.wrapperComponent || !a.contentComponent || l || c.disabled || i.ctrlKey)
    return !1;
  var m = Mh(a, i);
  if (m)
    return !1;
  var g = i.target, f = ur(g, _);
  if (f)
    return !1;
  var v = a.isPressingKeys(d);
  return !!v;
}, sA = function(a) {
  return a ? a.deltaY < 0 ? 1 : -1 : 0;
};
function cA(a, i) {
  var o = sA(a), l = wT(i, o);
  return l;
}
function Oh(a, i, o) {
  var l = i.getBoundingClientRect(), c = 0, d = 0;
  if ("clientX" in a)
    c = (a.clientX - l.left) / o, d = (a.clientY - l.top) / o;
  else {
    var _ = a.touches[0];
    c = (_.clientX - l.left) / o, d = (_.clientY - l.top) / o;
  }
  return (Number.isNaN(c) || Number.isNaN(d)) && console.error("No mouse or touch offset found"), {
    x: c,
    y: d
  };
}
var uA = function(a, i, o, l, c) {
  var d = a.state.scale, _ = a.wrapperComponent, m = a.setup, g = m.maxScale, f = m.minScale, v = m.zoomAnimation, y = m.disablePadding, w = v.size, E = v.disabled;
  if (!_)
    throw new Error("Wrapper is not mounted");
  var T = d + i * o, N = l ? !1 : !E, L = cr(T, f, g, w, N && !y);
  return L;
}, Rh = function(a, i) {
  var o = a.previousWheelEvent, l = a.state.scale, c = a.setup, d = c.maxScale, _ = c.minScale;
  return o ? l < d || l > _ || Math.sign(o.deltaY) !== Math.sign(i.deltaY) || o.deltaY > 0 && o.deltaY < i.deltaY || o.deltaY < 0 && o.deltaY > i.deltaY || Math.sign(o.deltaY) !== Math.sign(i.deltaY) : !1;
}, dA = function(a, i) {
  var o = a.setup.pinch, l = o.disabled, c = o.excluded, d = a.isInitialized, _ = i.target, m = d && !l && _;
  if (!m)
    return !1;
  var g = ur(_, c);
  return !g;
}, _A = function(a) {
  var i = a.setup.pinch.disabled, o = a.isInitialized, l = a.pinchStartDistance, c = o && !i && l !== null;
  return !!c;
}, mA = function(a, i, o) {
  var l = o.getBoundingClientRect(), c = a.touches, d = c[0].clientX - l.left, _ = c[0].clientY - l.top, m = c[1].clientX - l.left, g = c[1].clientY - l.top;
  return {
    x: (d + m) / 2 / i,
    y: (_ + g) / 2 / i
  };
}, Dh = function(a) {
  return Math.sqrt(Math.pow(a.touches[0].pageX - a.touches[1].pageX, 2) + Math.pow(a.touches[0].pageY - a.touches[1].pageY, 2));
}, fA = 5, pA = function(a, i) {
  var o = a.pinchStartScale, l = a.pinchStartDistance, c = a.setup, d = c.maxScale, _ = c.minScale, m = c.zoomAnimation, g = c.disablePadding, f = c.pinch, v = m.size, y = m.disabled, w = f.step;
  if (!o || l === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return a.state.scale;
  var E = i / l, T = E * o, N = (T - o) * (w / fA), L = o + N, R = L === 1 / 0 ? 0 : oi(L, 10);
  return cr(R, _, d, v, !y && !g);
}, jh = 160, Lh = 100, gA = function(a, i) {
  var o = a.props, l = o.onWheelStart, c = o.onZoomStart;
  a.wheelStopEventTimer || (Sa(a), Re(Ne(a), i, l), Re(Ne(a), i, c));
}, hA = function(a, i) {
  var o = a.props, l = o.onWheel, c = o.onZoom, d = a.contentComponent, _ = a.setup, m = a.state, g = m.scale, f = _.limitToBounds, v = _.centerZoomedOut, y = _.zoomAnimation, w = _.wheel, E = _.disablePadding, T = _.smooth, N = y.size, L = y.disabled, R = w.step;
  if (!d)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var U = cA(i, null), Y = T ? R * Math.abs(i.deltaY) : R, P = uA(a, U, Y, !i.ctrlKey);
  if (g !== P) {
    var H = ao(a, P), F = Oh(i, d, g), Z = L || N === 0 || v || E, W = f && Z, ae = Ql(a, F.x, F.y, P, H, W), re = ae.x, fe = ae.y;
    a.previousWheelEvent = i, a.setState(P, re, fe), Re(Ne(a), i, l), Re(Ne(a), i, c);
  }
}, vA = function(a, i) {
  var o = a.props, l = o.onWheelStop, c = o.onZoomStop;
  ir(a.wheelAnimationTimer), a.wheelAnimationTimer = setTimeout(function() {
    a.mounted && (od(a, i.x, i.y), a.wheelAnimationTimer = null);
  }, Lh);
  var d = Rh(a, i);
  d && (ir(a.wheelStopEventTimer), a.wheelStopEventTimer = setTimeout(function() {
    a.mounted && (a.wheelStopEventTimer = null, Re(Ne(a), i, l), Re(Ne(a), i, c));
  }, jh));
}, yA = function(a, i) {
  var o = a.props, l = o.onWheelStart, c = o.onPanningStart;
  a.wheelStopEventTimer || (Sa(a), Re(Ne(a), i, l), Re(Ne(a), i, c));
}, bA = function(a, i) {
  var o = a.props, l = o.onWheelStop, c = o.onPanningStop;
  ir(a.wheelAnimationTimer), a.wheelAnimationTimer = setTimeout(function() {
    a.mounted && (od(a, i.x, i.y), a.wheelAnimationTimer = null);
  }, Lh);
  var d = Rh(a, i);
  d && (ir(a.wheelStopEventTimer), a.wheelStopEventTimer = setTimeout(function() {
    a.mounted && (a.wheelStopEventTimer = null, Re(Ne(a), i, l), Re(Ne(a), i, c));
  }, jh));
}, Uh = function(a) {
  for (var i = 0, o = 0, l = 0; l < 2; l += 1)
    i += a.touches[l].clientX, o += a.touches[l].clientY;
  var c = i / 2, d = o / 2;
  return { x: c, y: d };
}, wA = function(a, i) {
  var o = Dh(i);
  a.pinchStartDistance = o, a.lastDistance = o, a.pinchStartScale = a.state.scale, a.isPanning = !1, a.isPinching = !0, a.pinchPreviousCenter = Uh(i), Sa(a);
}, SA = function(a, i) {
  var o = a.contentComponent, l = a.pinchStartDistance, c = a.wrapperComponent, d = a.pinchPreviousCenter, _ = a.state.scale, m = a.setup, g = m.limitToBounds, f = m.centerZoomedOut, v = m.zoomAnimation, y = m.autoAlignment, w = m.pinch, E = m.panning, T = v.disabled, N = v.size, L = w.allowPanning;
  if (!(l === null || !o)) {
    var R = mA(i, _, o);
    if (!(!Number.isFinite(R.x) || !Number.isFinite(R.y))) {
      var U = Dh(i), Y = pA(a, U), P = Uh(i), H = _ / Y, F = (P.x - (d?.x || 0)) * H, Z = (P.y - (d?.y || 0)) * H;
      if (!(Y === _ && F === 0 && Z === 0)) {
        a.pinchPreviousCenter = P;
        var W = ao(a, Y), ae = T || N === 0 || f, re = g && ae, fe = Ql(a, R.x, R.y, Y, W, re), ie = fe.x, Ce = fe.y;
        if (a.pinchMidpoint = R, a.lastDistance = U, E.disabled || !L)
          a.setState(Y, ie, Ce);
        else {
          var we = y.sizeX, xe = y.sizeY, M = Mn(a, we, Y), K = Mn(a, xe, Y), Q = ie + F, _e = Ce + Z, pe = sr(Q, _e, W, g, M, K, c), z = pe.x, q = pe.y;
          a.setState(Y, z, q);
        }
      }
    }
  }
}, EA = function(a) {
  var i = a.pinchMidpoint;
  a.velocity = null, a.lastDistance = null, a.pinchMidpoint = null, a.pinchStartScale = null, a.pinchStartDistance = null, a.isPinching = !1, od(a, i?.x, i?.y);
}, qh = function(a, i) {
  var o = a.props.onZoomStop, l = a.setup.doubleClick.animationTime;
  ir(a.doubleClickStopEventTimer), a.doubleClickStopEventTimer = setTimeout(function() {
    a.doubleClickStopEventTimer = null, Re(Ne(a), i, o);
  }, l);
}, zA = function(a, i) {
  var o = a.props, l = o.onZoomStart, c = o.onZoom, d = a.setup.doubleClick, _ = d.animationTime, m = d.animationType;
  Re(Ne(a), i, l), Nh(a, _, m, function() {
    return Re(Ne(a), i, c);
  }), qh(a, i);
};
function kA(a, i) {
  return a === "toggle" ? i === 1 ? 1 : -1 : a === "zoomOut" ? -1 : 1;
}
function TA(a, i) {
  var o = a.setup, l = a.doubleClickStopEventTimer, c = a.state, d = a.contentComponent, _ = c.scale, m = a.props, g = m.onZoomStart, f = m.onZoom, v = o.doubleClick, y = v.disabled, w = v.mode, E = v.step, T = v.animationTime, N = v.animationType;
  if (!y && !l) {
    if (w === "reset")
      return zA(a, i);
    if (!d)
      return console.error("No ContentComponent found");
    var L = kA(w, a.state.scale), R = Th(a, L, E);
    if (_ !== R) {
      Re(Ne(a), i, g);
      var U = Oh(i, d, _), Y = id(a, R, U.x, U.y);
      if (!Y)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Re(Ne(a), i, f), Dn(a, Y, T, N), qh(a, i);
    }
  }
}
var AA = function(a, i) {
  var o = a.isInitialized, l = a.setup, c = a.wrapperComponent, d = l.doubleClick, _ = d.disabled, m = d.excluded, g = i.target, f = c?.contains(g), v = o && g && f && !_;
  if (!v)
    return !1;
  var y = ur(g, m);
  return !y;
}, NA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(i) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(l) {
        o.props = l, o.wrapperComponent && o.contentComponent && ao(o, o.state.scale), o.setup = og(l);
      }, this.initializeWindowEvents = function() {
        var l, c, d, _, m = Su(), g = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, f = g?.defaultView;
        (c = o.wrapperComponent) === null || c === void 0 || c.addEventListener("wheel", o.onWheelPanning, m), (d = o.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", o.setKeyUnPressed, m), (_ = o.wrapperComponent) === null || _ === void 0 || _.addEventListener("keydown", o.setKeyPressed, m), f?.addEventListener("mousedown", o.onPanningStart, m), f?.addEventListener("mousemove", o.onPanning, m), f?.addEventListener("mouseup", o.onPanningStop, m), g?.addEventListener("mouseleave", o.clearPanning, m), f?.addEventListener("keyup", o.setKeyUnPressed, m), f?.addEventListener("keydown", o.setKeyPressed, m), f?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var l, c, d, _, m, g = Su(), f = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, v = f?.defaultView;
        v?.removeEventListener("mousedown", o.onPanningStart, g), v?.removeEventListener("mousemove", o.onPanning, g), v?.removeEventListener("mouseup", o.onPanningStop, g), f?.removeEventListener("mouseleave", o.clearPanning, g), v?.removeEventListener("keyup", o.setKeyUnPressed, g), v?.removeEventListener("keydown", o.setKeyPressed, g), v?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, g), (c = o.wrapperComponent) === null || c === void 0 || c.removeEventListener("wheel", o.onWheelPanning, g), (d = o.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", o.setKeyUnPressed, g), (_ = o.wrapperComponent) === null || _ === void 0 || _.removeEventListener("keydown", o.setKeyPressed, g), Sa(o), (m = o.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(l) {
        var c = Su();
        l.addEventListener("wheel", o.onWheelZoom, c), l.addEventListener("dblclick", o.onDoubleClick, c), l.addEventListener("touchstart", o.onTouchPanningStart, c), l.addEventListener("touchmove", o.onTouchPanning, c), l.addEventListener("touchend", o.onTouchPanningStop, c);
      }, this.handleInitialize = function(l) {
        var c = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(d) {
          return d(Ne(o));
        }), c && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var d, _ = l.offsetWidth, m = l.offsetHeight;
          (_ > 0 || m > 0) && (o.onInitCallbacks.forEach(function(g) {
            return g(Ne(o));
          }), o.setCenter(), (d = o.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = o.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), o.observer.observe(l));
      }, this.onWheelZoom = function(l) {
        var c = o.setup.disabled;
        if (!c) {
          o.syncModifierKeys(l);
          var d = Mh(o, l);
          d && (gA(o, l), hA(o, l), vA(o, l));
        }
      }, this.onWheelPanning = function(l) {
        var c = o.props.onPanning, d = o.setup.trackPadPanning, _ = d.lockAxisX, m = d.lockAxisY;
        o.syncModifierKeys(l);
        var g = lA(o, l);
        if (g) {
          l.preventDefault(), l.stopPropagation();
          var f = o.state, v = f.positionX, y = f.positionY, w = v - l.deltaX, E = y - l.deltaY, T = _ ? v : w, N = m ? y : E, L = o.setup.autoAlignment, R = L.sizeX, U = L.sizeY, Y = Mn(o, R), P = Mn(o, U);
          T === v && N === y || (yA(o, l), Eh(o, T, N, Y, P), Re(Ne(o), l, c), bA(o, l));
        }
      }, this.onPanningStart = function(l) {
        var c = o.setup.disabled, d = o.props.onPanningStart;
        if (!c) {
          o.syncModifierKeys(l);
          var _ = Jp(o, l);
          if (_) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.button === 0 && !o.setup.panning.allowLeftClickPan || l.button === 1 && !o.setup.panning.allowMiddleClickPan || l.button === 2 && !o.setup.panning.allowRightClickPan || (l.preventDefault(), l.stopPropagation(), Sa(o), ag(o, l), Re(Ne(o), l, d)));
          }
        }
      }, this.onPanning = function(l) {
        var c = o.setup.disabled, d = o.props.onPanning;
        if (!c) {
          if (o.syncModifierKeys(l), o.isPanning && l.buttons === 0) {
            o.clearPanning(l);
            return;
          }
          var _ = eg(o);
          if (_) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.preventDefault(), l.stopPropagation(), ng(o, l.clientX, l.clientY, Cn.MOUSE), Re(Ne(o), l, d));
          }
        }
      }, this.onPanningStop = function(l) {
        var c = o.setup.panning.velocityDisabled, d = o.props.onPanningStop;
        o.isPanning && (FT(o, c), Re(Ne(o), l, d));
      }, this.onPinchStart = function(l) {
        var c = o.setup.disabled, d = o.props.onPinchStart;
        if (!c) {
          var _ = dA(o, l);
          _ && (wA(o, l), Sa(o), Re(Ne(o), l, d));
        }
      }, this.onPinch = function(l) {
        var c = o.setup.disabled, d = o.props.onPinch;
        if (!c) {
          var _ = _A(o);
          _ && (l.preventDefault(), l.stopPropagation(), SA(o, l), Re(Ne(o), l, d));
        }
      }, this.onPinchStop = function(l) {
        var c = o.props.onPinchStop;
        o.pinchStartScale && (EA(o), Re(Ne(o), l, c));
      }, this.onTouchPanningStart = function(l) {
        var c = o.setup, d = c.disabled, _ = c.doubleClick, m = o.props.onPanningStart;
        if (!d) {
          var g = !_?.disabled, f = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (g && f && l.touches.length === 1)
            o.onDoubleClick(l);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), Sa(o);
            var v = l.touches, y = v.length === 1, w = v.length === 2, E = Jp(o, l);
            if (y) {
              if (!E)
                return;
              Sa(o), ag(o, l), Re(Ne(o), l, m);
            }
            w && o.onPinchStart(l);
          }
        }
      }, this.onTouchPanning = function(l) {
        var c = o.setup.disabled, d = o.props.onPanning;
        if (o.isPanning && l.touches.length === 1) {
          if (c)
            return;
          var _ = eg(o);
          if (!_)
            return;
          l.cancelable && l.preventDefault(), l.stopPropagation();
          var m = l.touches[0];
          ng(o, m.clientX, m.clientY, Cn.TOUCH), Re(Ne(o), l, d);
        } else l.touches.length > 1 && o.onPinch(l);
      }, this.onTouchPanningStop = function(l) {
        o.onPanningStop(l), o.onPinchStop(l);
      }, this.onDoubleClick = function(l) {
        var c = o.setup.disabled;
        if (!c) {
          var d = AA(o, l);
          d && TA(o, l);
        }
      }, this.clearPanning = function(l) {
        o.isPanning && o.onPanningStop(l);
      }, this.handleWindowBlur = function() {
        o.pressedKeys = {}, o.isPanning && (o.isPanning = !1, o.startCoords = null);
      }, this.syncModifierKeys = function(l) {
        var c = l.ctrlKey, d = l.metaKey, _ = l.shiftKey, m = l.altKey;
        typeof c == "boolean" && (o.pressedKeys.Control = c), typeof d == "boolean" && (o.pressedKeys.Meta = d), typeof _ == "boolean" && (o.pressedKeys.Shift = _), typeof m == "boolean" && (o.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(l) {
        o.pressedKeys[l.key] = !0;
      }, this.setKeyUnPressed = function(l) {
        o.pressedKeys[l.key] = !1;
      }, this.isPressingKeys = function(l) {
        return typeof l == "function" ? l(Object.entries(o.pressedKeys).filter(function(c) {
          var d = c[1];
          return d;
        }).map(function(c) {
          var d = c[0];
          return d;
        })) : l.length ? !!l.every(function(c) {
          return o.pressedKeys[c];
        }) : !0;
      }, this.setCenter = function() {
        if (o.wrapperComponent && o.contentComponent) {
          var l = rd(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(l.scale, l.positionX, l.positionY);
        }
      }, this.handleTransformStyles = function(l, c, d) {
        return o.props.customTransform ? o.props.customTransform(l, c, d) : xh(l, c, d);
      }, this.getContext = function() {
        return Ne(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var l = o.state, c = l.scale, d = l.positionX, _ = l.positionY, m = o.handleTransformStyles(d, _, c);
          o.props.detached || (o.contentComponent.style.transform = m), o.onTransformCallbacks.forEach(function(g) {
            return g({
              scale: c,
              positionX: d,
              positionY: _,
              previousScale: o.state.previousScale,
              ref: Ne(o)
            });
          });
        }
      }, this.setState = function(l, c, d) {
        var _ = o.props.onTransform;
        if (!Number.isNaN(l) && !Number.isNaN(c) && !Number.isNaN(d)) {
          var m = Math.max(l, 1e-7);
          m !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = m), o.state.positionX = c, o.state.positionY = d, o.applyTransformation();
          var g = Ne(o);
          o.onChangeCallbacks.forEach(function(f) {
            return f(g);
          }), Re(g, { scale: o.state.scale, positionX: c, positionY: d }, _);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(l) {
        return o.onTransformCallbacks.has(l) || o.onTransformCallbacks.add(l), function() {
          o.onTransformCallbacks.delete(l);
        };
      }, this.onChange = function(l) {
        return o.onChangeCallbacks.has(l) || o.onChangeCallbacks.add(l), function() {
          o.onChangeCallbacks.delete(l);
        };
      }, this.onInit = function(l) {
        return o.onInitCallbacks.has(l) || o.onInitCallbacks.add(l), function() {
          o.onInitCallbacks.delete(l);
        };
      }, this.init = function(l, c) {
        o.cleanupWindowEvents(), o.wrapperComponent = l, o.contentComponent = c, ao(o, o.state.scale), o.handleInitializeWrapperEvents(l), o.handleInitialize(c), o.initializeWindowEvents(), o.isInitialized = !0;
        var d = Ne(o);
        Re(d, void 0, o.props.onInit), oA(o.props.ref, d);
      }, this.props = i, this.setup = og(this.props), this.state = kh(this.props);
    }
    return a;
  })()
), dr = xn.createContext(null), CA = function(a, i) {
  return typeof a == "function" ? a(i) : a;
}, xA = xn.forwardRef(function(a, i) {
  var o = D.useRef(new NA(a)).current, l = CA(a.children, Zl(o));
  return D.useImperativeHandle(i, function() {
    return Zl(o);
  }, [o]), D.useEffect(function() {
    o.update(a);
  }, [o, a]), h.jsx(dr.Provider, fa({ value: o }, { children: l }));
});
xn.forwardRef(function(a, i) {
  var o = D.useRef(null), l = D.useContext(dr);
  return D.useEffect(function() {
    return l.onChange(function(c) {
      if (o.current) {
        var d = 0, _ = 0;
        o.current.style.transform = l.handleTransformStyles(d, _, 1 / c.instance.state.scale);
      }
    });
  }, [l]), h.jsx("div", fa({}, a, { ref: rA([o, i]) }));
});
function MA(a, i) {
  i === void 0 && (i = {});
  var o = i.insertAt;
  if (!(typeof document > "u")) {
    var l = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", o === "top" && l.firstChild ? l.insertBefore(c, l.firstChild) : l.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
  }
}
var OA = `.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
.transform-component-module_infiniteGrid__Z-aP3 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.12) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  background-position: 0 0;
}
`, Eu = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
MA(OA);
var RA = function(a) {
  var i = a.children, o = a.wrapperClass, l = o === void 0 ? "" : o, c = a.contentClass, d = c === void 0 ? "" : c, _ = a.wrapperStyle, m = a.contentStyle, g = a.wrapperProps, f = g === void 0 ? {} : g, v = a.contentProps, y = v === void 0 ? {} : v, w = a.infinite, E = w === void 0 ? !1 : w, T = D.useContext(dr), N = T.init, L = T.cleanupWindowEvents, R = D.useRef(null), U = D.useRef(null), Y = D.useRef(null);
  return D.useEffect(function() {
    var P = R.current, H = U.current;
    return P !== null && H !== null && N && N?.(P, H), function() {
      L?.();
    };
  }, []), D.useEffect(function() {
    if (E) {
      var P = Y.current;
      if (P) {
        var H = function() {
          var F = T.state, Z = F.positionX, W = F.positionY;
          P.style.backgroundPosition = "".concat(Z, "px ").concat(W, "px");
        };
        return H(), T.onChange(H);
      }
    }
  }, [E, T]), h.jsxs("div", fa({}, f, { ref: R, className: "".concat(Ru.wrapperClass, " ").concat(Eu.wrapper, " ").concat(l), style: _ }, { children: [E && h.jsx("div", { ref: Y, className: Eu.infiniteGrid, "aria-hidden": !0 }), h.jsx("div", fa({}, y, { ref: U, className: "".concat(Ru.contentClass, " ").concat(Eu.content, " ").concat(d), style: fa(fa({}, m), { transform: xh(T.state.positionX, T.state.positionY, T.state.scale) }) }, { children: i }))] }));
};
function DA(a, i) {
  var o = Math.max(0, Math.min(a.x + a.width, i.x + i.width) - Math.max(a.x, i.x)), l = Math.max(0, Math.min(a.y + a.height, i.y + i.height) - Math.max(a.y, i.y));
  return o * l;
}
function jA(a) {
  var i = a.elementX, o = a.elementY, l = a.elementWidth, c = a.elementHeight, d = a.scale, _ = a.positionX, m = a.positionY, g = a.viewportWidth, f = a.viewportHeight, v = a.margin, y = v === void 0 ? 0 : v, w = a.threshold, E = w === void 0 ? 0 : w, T = {
    x: -y,
    y: -y,
    width: g + 2 * y,
    height: f + 2 * y
  }, N = {
    x: i * d + _,
    y: o * d + m,
    width: l * d,
    height: c * d
  };
  if (E <= 0) {
    var L = N.x < T.x + T.width && N.x + N.width > T.x, R = N.y < T.y + T.height && N.y + N.height > T.y;
    return L && R;
  }
  var U = N.width * N.height;
  if (U <= 0)
    return !1;
  var Y = DA(T, N);
  return Y / U >= E;
}
xn.forwardRef(function(a, i) {
  var o = a.x, l = a.y, c = a.width, d = a.height, _ = a.margin, m = _ === void 0 ? 0 : _, g = a.threshold, f = g === void 0 ? 0 : g, v = a.placeholder, y = v === void 0 ? null : v, w = a.onShow, E = a.onHide, T = a.children, N = a.className, L = a.style, R = D.useContext(dr), U = D.useState(!1), Y = U[0], P = U[1], H = D.useRef(!1), F = D.useRef(w), Z = D.useRef(E);
  return F.current = w, Z.current = E, D.useEffect(function() {
    var W = function() {
      var fe, ie, Ce = R.wrapperComponent;
      if (Ce) {
        var we = jA({
          elementX: o,
          elementY: l,
          elementWidth: c,
          elementHeight: d,
          scale: R.state.scale,
          positionX: R.state.positionX,
          positionY: R.state.positionY,
          viewportWidth: Ce.offsetWidth,
          viewportHeight: Ce.offsetHeight,
          margin: m,
          threshold: f
        });
        we !== H.current && (H.current = we, P(we), we ? (fe = F.current) === null || fe === void 0 || fe.call(F) : (ie = Z.current) === null || ie === void 0 || ie.call(Z));
      }
    };
    W();
    var ae = R.onChange(W), re;
    return R.wrapperComponent || (re = R.onInit(function() {
      return W();
    })), function() {
      ae(), re?.();
    };
  }, [R, o, l, c, d, m, f]), Y ? h.jsx("div", fa({ ref: i, className: N, style: L }, { children: T })) : y ? h.jsx(h.Fragment, { children: y }) : null;
});
var ld = function() {
  var a = D.useContext(dr);
  if (!a)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return a;
}, LA = function() {
  var a = ld();
  return Zl(a);
}, UA = function(a) {
  var i = ld();
  D.useEffect(function() {
    var o, l = i.onChange(function(c) {
      o = a(Ch(c.instance));
    });
    return function() {
      l(), o?.();
    };
  }, [a, i]);
};
function qA(a, i, o) {
  return Math.max(i, Math.min(a, o));
}
const zt = {
  toVector(a, i) {
    return a === void 0 && (a = i), Array.isArray(a) ? a : [a, a];
  },
  add(a, i) {
    return [a[0] + i[0], a[1] + i[1]];
  },
  sub(a, i) {
    return [a[0] - i[0], a[1] - i[1]];
  },
  addTo(a, i) {
    a[0] += i[0], a[1] += i[1];
  },
  subTo(a, i) {
    a[0] -= i[0], a[1] -= i[1];
  }
};
function rg(a, i, o) {
  return i === 0 || Math.abs(i) === 1 / 0 ? Math.pow(a, o * 5) : a * i * o / (i + o * a);
}
function lg(a, i, o, l = 0.15) {
  return l === 0 ? qA(a, i, o) : a < i ? -rg(i - a, o - i, l) + i : a > o ? +rg(a - o, o - i, l) + o : a;
}
function GA(a, [i, o], [l, c]) {
  const [[d, _], [m, g]] = a;
  return [lg(i, d, _, l), lg(o, m, g, c)];
}
function HA(a, i) {
  if (typeof a != "object" || a === null) return a;
  var o = a[Symbol.toPrimitive];
  if (o !== void 0) {
    var l = o.call(a, i);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(a);
}
function IA(a) {
  var i = HA(a, "string");
  return typeof i == "symbol" ? i : String(i);
}
function Pt(a, i, o) {
  return i = IA(i), i in a ? Object.defineProperty(a, i, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[i] = o, a;
}
function sg(a, i) {
  var o = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(a);
    i && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(a, c).enumerable;
    })), o.push.apply(o, l);
  }
  return o;
}
function We(a) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2 ? sg(Object(o), !0).forEach(function(l) {
      Pt(a, l, o[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : sg(Object(o)).forEach(function(l) {
      Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(o, l));
    });
  }
  return a;
}
const Gh = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function cg(a) {
  return a ? a[0].toUpperCase() + a.slice(1) : "";
}
const PA = ["enter", "leave"];
function BA(a = !1, i) {
  return a && !PA.includes(i);
}
function YA(a, i = "", o = !1) {
  const l = Gh[a], c = l && l[i] || i;
  return "on" + cg(a) + cg(c) + (BA(o, c) ? "Capture" : "");
}
const ZA = ["gotpointercapture", "lostpointercapture"];
function VA(a) {
  let i = a.substring(2).toLowerCase();
  const o = !!~i.indexOf("passive");
  o && (i = i.replace("passive", ""));
  const l = ZA.includes(i) ? "capturecapture" : "capture", c = !!~i.indexOf(l);
  return c && (i = i.replace("capture", "")), {
    device: i,
    capture: c,
    passive: o
  };
}
function KA(a, i = "") {
  const o = Gh[a], l = o && o[i] || i;
  return a + l;
}
function Jl(a) {
  return "touches" in a;
}
function Hh(a) {
  return Jl(a) ? "touch" : "pointerType" in a ? a.pointerType : "mouse";
}
function XA(a) {
  return Array.from(a.touches).filter((i) => {
    var o, l;
    return i.target === a.currentTarget || ((o = a.currentTarget) === null || o === void 0 || (l = o.contains) === null || l === void 0 ? void 0 : l.call(o, i.target));
  });
}
function FA(a) {
  return a.type === "touchend" || a.type === "touchcancel" ? a.changedTouches : a.targetTouches;
}
function Ih(a) {
  return Jl(a) ? FA(a)[0] : a;
}
function WA(a) {
  return XA(a).map((i) => i.identifier);
}
function zu(a) {
  const i = Ih(a);
  return Jl(a) ? i.identifier : i.pointerId;
}
function ug(a) {
  const i = Ih(a);
  return [i.clientX, i.clientY];
}
function $A(a) {
  const i = {};
  if ("buttons" in a && (i.buttons = a.buttons), "shiftKey" in a) {
    const {
      shiftKey: o,
      altKey: l,
      metaKey: c,
      ctrlKey: d
    } = a;
    Object.assign(i, {
      shiftKey: o,
      altKey: l,
      metaKey: c,
      ctrlKey: d
    });
  }
  return i;
}
function Vl(a, ...i) {
  return typeof a == "function" ? a(...i) : a;
}
function QA() {
}
function JA(...a) {
  return a.length === 0 ? QA : a.length === 1 ? a[0] : function() {
    let i;
    for (const o of a)
      i = o.apply(this, arguments) || i;
    return i;
  };
}
function dg(a, i) {
  return Object.assign({}, i, a || {});
}
const e2 = 32;
class t2 {
  constructor(i, o, l) {
    this.ctrl = i, this.args = o, this.key = l, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(i) {
    this.ctrl.state[this.key] = i;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: i,
      shared: o,
      ingKey: l,
      args: c
    } = this;
    o[l] = i._active = i.active = i._blocked = i._force = !1, i._step = [!1, !1], i.intentional = !1, i._movement = [0, 0], i._distance = [0, 0], i._direction = [0, 0], i._delta = [0, 0], i._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], i.args = c, i.axis = void 0, i.memo = void 0, i.elapsedTime = i.timeDelta = 0, i.direction = [0, 0], i.distance = [0, 0], i.overflow = [0, 0], i._movementBound = [!1, !1], i.velocity = [0, 0], i.movement = [0, 0], i.delta = [0, 0], i.timeStamp = 0;
  }
  start(i) {
    const o = this.state, l = this.config;
    o._active || (this.reset(), this.computeInitial(), o._active = !0, o.target = i.target, o.currentTarget = i.currentTarget, o.lastOffset = l.from ? Vl(l.from, o) : o.offset, o.offset = o.lastOffset, o.startTime = o.timeStamp = i.timeStamp);
  }
  computeValues(i) {
    const o = this.state;
    o._values = i, o.values = this.config.transform(i);
  }
  computeInitial() {
    const i = this.state;
    i._initial = i._values, i.initial = i.values;
  }
  compute(i) {
    const {
      state: o,
      config: l,
      shared: c
    } = this;
    o.args = this.args;
    let d = 0;
    if (i && (o.event = i, l.preventDefault && i.cancelable && o.event.preventDefault(), o.type = i.type, c.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, c.locked = !!document.pointerLockElement, Object.assign(c, $A(i)), c.down = c.pressed = c.buttons % 2 === 1 || c.touches > 0, d = i.timeStamp - o.timeStamp, o.timeStamp = i.timeStamp, o.elapsedTime = o.timeStamp - o.startTime), o._active) {
      const F = o._delta.map(Math.abs);
      zt.addTo(o._distance, F);
    }
    this.axisIntent && this.axisIntent(i);
    const [_, m] = o._movement, [g, f] = l.threshold, {
      _step: v,
      values: y
    } = o;
    if (l.hasCustomTransform ? (v[0] === !1 && (v[0] = Math.abs(_) >= g && y[0]), v[1] === !1 && (v[1] = Math.abs(m) >= f && y[1])) : (v[0] === !1 && (v[0] = Math.abs(_) >= g && Math.sign(_) * g), v[1] === !1 && (v[1] = Math.abs(m) >= f && Math.sign(m) * f)), o.intentional = v[0] !== !1 || v[1] !== !1, !o.intentional) return;
    const w = [0, 0];
    if (l.hasCustomTransform) {
      const [F, Z] = y;
      w[0] = v[0] !== !1 ? F - v[0] : 0, w[1] = v[1] !== !1 ? Z - v[1] : 0;
    } else
      w[0] = v[0] !== !1 ? _ - v[0] : 0, w[1] = v[1] !== !1 ? m - v[1] : 0;
    this.restrictToAxis && !o._blocked && this.restrictToAxis(w);
    const E = o.offset, T = o._active && !o._blocked || o.active;
    T && (o.first = o._active && !o.active, o.last = !o._active && o.active, o.active = c[this.ingKey] = o._active, i && (o.first && ("bounds" in l && (o._bounds = Vl(l.bounds, o)), this.setup && this.setup()), o.movement = w, this.computeOffset()));
    const [N, L] = o.offset, [[R, U], [Y, P]] = o._bounds;
    o.overflow = [N < R ? -1 : N > U ? 1 : 0, L < Y ? -1 : L > P ? 1 : 0], o._movementBound[0] = o.overflow[0] ? o._movementBound[0] === !1 ? o._movement[0] : o._movementBound[0] : !1, o._movementBound[1] = o.overflow[1] ? o._movementBound[1] === !1 ? o._movement[1] : o._movementBound[1] : !1;
    const H = o._active ? l.rubberband || [0, 0] : [0, 0];
    if (o.offset = GA(o._bounds, o.offset, H), o.delta = zt.sub(o.offset, E), this.computeMovement(), T && (!o.last || d > e2)) {
      o.delta = zt.sub(o.offset, E);
      const F = o.delta.map(Math.abs);
      zt.addTo(o.distance, F), o.direction = o.delta.map(Math.sign), o._direction = o._delta.map(Math.sign), !o.first && d > 0 && (o.velocity = [F[0] / d, F[1] / d], o.timeDelta = d);
    }
  }
  emit() {
    const i = this.state, o = this.shared, l = this.config;
    if (i._active || this.clean(), (i._blocked || !i.intentional) && !i._force && !l.triggerAllEvents) return;
    const c = this.handler(We(We(We({}, o), i), {}, {
      [this.aliasKey]: i.values
    }));
    c !== void 0 && (i.memo = c);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function a2([a, i], o) {
  const l = Math.abs(a), c = Math.abs(i);
  if (l > c && l > o)
    return "x";
  if (c > l && c > o)
    return "y";
}
class n2 extends t2 {
  constructor(...i) {
    super(...i), Pt(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = zt.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = zt.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(i) {
    const o = this.state, l = this.config;
    if (!o.axis && i) {
      const c = typeof l.axisThreshold == "object" ? l.axisThreshold[Hh(i)] : l.axisThreshold;
      o.axis = a2(o._movement, c);
    }
    o._blocked = (l.lockDirection || !!l.axis) && !o.axis || !!l.axis && l.axis !== o.axis;
  }
  restrictToAxis(i) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          i[1] = 0;
          break;
        case "y":
          i[0] = 0;
          break;
      }
  }
}
const i2 = (a) => a, _g = 0.15, Ph = {
  enabled(a = !0) {
    return a;
  },
  eventOptions(a, i, o) {
    return We(We({}, o.shared.eventOptions), a);
  },
  preventDefault(a = !1) {
    return a;
  },
  triggerAllEvents(a = !1) {
    return a;
  },
  rubberband(a = 0) {
    switch (a) {
      case !0:
        return [_g, _g];
      case !1:
        return [0, 0];
      default:
        return zt.toVector(a);
    }
  },
  from(a) {
    if (typeof a == "function") return a;
    if (a != null) return zt.toVector(a);
  },
  transform(a, i, o) {
    const l = a || o.shared.transform;
    return this.hasCustomTransform = !!l, l || i2;
  },
  threshold(a) {
    return zt.toVector(a, 0);
  }
}, o2 = 0, _r = We(We({}, Ph), {}, {
  axis(a, i, {
    axis: o
  }) {
    if (this.lockDirection = o === "lock", !this.lockDirection) return o;
  },
  axisThreshold(a = o2) {
    return a;
  },
  bounds(a = {}) {
    if (typeof a == "function")
      return (d) => _r.bounds(a(d));
    if ("current" in a)
      return () => a.current;
    if (typeof HTMLElement == "function" && a instanceof HTMLElement)
      return a;
    const {
      left: i = -1 / 0,
      right: o = 1 / 0,
      top: l = -1 / 0,
      bottom: c = 1 / 0
    } = a;
    return [[i, o], [l, c]];
  }
}), mg = {
  ArrowRight: (a, i = 1) => [a * i, 0],
  ArrowLeft: (a, i = 1) => [-1 * a * i, 0],
  ArrowUp: (a, i = 1) => [0, -1 * a * i],
  ArrowDown: (a, i = 1) => [0, a * i]
};
class r2 extends n2 {
  constructor(...i) {
    super(...i), Pt(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const i = this.state;
    i._pointerId = void 0, i._pointerActive = !1, i._keyboardActive = !1, i._preventScroll = !1, i._delayed = !1, i.swipe = [0, 0], i.tap = !1, i.canceled = !1, i.cancel = this.cancel.bind(this);
  }
  setup() {
    const i = this.state;
    if (i._bounds instanceof HTMLElement) {
      const o = i._bounds.getBoundingClientRect(), l = i.currentTarget.getBoundingClientRect(), c = {
        left: o.left - l.left + i.offset[0],
        right: o.right - l.right + i.offset[0],
        top: o.top - l.top + i.offset[1],
        bottom: o.bottom - l.bottom + i.offset[1]
      };
      i._bounds = _r.bounds(c);
    }
  }
  cancel() {
    const i = this.state;
    i.canceled || (i.canceled = !0, i._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(i) {
    const o = this.config, l = this.state;
    if (i.buttons != null && (Array.isArray(o.pointerButtons) ? !o.pointerButtons.includes(i.buttons) : o.pointerButtons !== -1 && o.pointerButtons !== i.buttons)) return;
    const c = this.ctrl.setEventIds(i);
    o.pointerCapture && i.target.setPointerCapture(i.pointerId), !(c && c.size > 1 && l._pointerActive) && (this.start(i), this.setupPointer(i), l._pointerId = zu(i), l._pointerActive = !0, this.computeValues(ug(i)), this.computeInitial(), o.preventScrollAxis && Hh(i) !== "mouse" ? (l._active = !1, this.setupScrollPrevention(i)) : o.delay > 0 ? (this.setupDelayTrigger(i), o.triggerAllEvents && (this.compute(i), this.emit())) : this.startPointerDrag(i));
  }
  startPointerDrag(i) {
    const o = this.state;
    o._active = !0, o._preventScroll = !0, o._delayed = !1, this.compute(i), this.emit();
  }
  pointerMove(i) {
    const o = this.state, l = this.config;
    if (!o._pointerActive) return;
    const c = zu(i);
    if (o._pointerId !== void 0 && c !== o._pointerId) return;
    const d = ug(i);
    if (document.pointerLockElement === i.target ? o._delta = [i.movementX, i.movementY] : (o._delta = zt.sub(d, o._values), this.computeValues(d)), zt.addTo(o._movement, o._delta), this.compute(i), o._delayed && o.intentional) {
      this.timeoutStore.remove("dragDelay"), o.active = !1, this.startPointerDrag(i);
      return;
    }
    if (l.preventScrollAxis && !o._preventScroll)
      if (o.axis)
        if (o.axis === l.preventScrollAxis || l.preventScrollAxis === "xy") {
          o._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(i);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(i) {
    this.ctrl.setEventIds(i);
    try {
      this.config.pointerCapture && i.target.hasPointerCapture(i.pointerId) && i.target.releasePointerCapture(i.pointerId);
    } catch {
    }
    const o = this.state, l = this.config;
    if (!o._active || !o._pointerActive) return;
    const c = zu(i);
    if (o._pointerId !== void 0 && c !== o._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(i);
    const [d, _] = o._distance;
    if (o.tap = d <= l.tapsThreshold && _ <= l.tapsThreshold, o.tap && l.filterTaps)
      o._force = !0;
    else {
      const [m, g] = o._delta, [f, v] = o._movement, [y, w] = l.swipe.velocity, [E, T] = l.swipe.distance, N = l.swipe.duration;
      if (o.elapsedTime < N) {
        const L = Math.abs(m / o.timeDelta), R = Math.abs(g / o.timeDelta);
        L > y && Math.abs(f) > E && (o.swipe[0] = Math.sign(m)), R > w && Math.abs(v) > T && (o.swipe[1] = Math.sign(g));
      }
    }
    this.emit();
  }
  pointerClick(i) {
    !this.state.tap && i.detail > 0 && (i.preventDefault(), i.stopPropagation());
  }
  setupPointer(i) {
    const o = this.config, l = o.device;
    o.pointerLock && i.currentTarget.requestPointerLock(), o.pointerCapture || (this.eventStore.add(this.sharedConfig.window, l, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, l, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, l, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(i) {
    this.state._preventScroll && i.cancelable && i.preventDefault();
  }
  setupScrollPrevention(i) {
    this.state._preventScroll = !1, l2(i);
    const o = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", o), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", o), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, i);
  }
  setupDelayTrigger(i) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(i);
    }, this.config.delay);
  }
  keyDown(i) {
    const o = mg[i.key];
    if (o) {
      const l = this.state, c = i.shiftKey ? 10 : i.altKey ? 0.1 : 1;
      this.start(i), l._delta = o(this.config.keyboardDisplacement, c), l._keyboardActive = !0, zt.addTo(l._movement, l._delta), this.compute(i), this.emit();
    }
  }
  keyUp(i) {
    i.key in mg && (this.state._keyboardActive = !1, this.setActive(), this.compute(i), this.emit());
  }
  bind(i) {
    const o = this.config.device;
    i(o, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (i(o, "change", this.pointerMove.bind(this)), i(o, "end", this.pointerUp.bind(this)), i(o, "cancel", this.pointerUp.bind(this)), i("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (i("key", "down", this.keyDown.bind(this)), i("key", "up", this.keyUp.bind(this))), this.config.filterTaps && i("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function l2(a) {
  "persist" in a && typeof a.persist == "function" && a.persist();
}
const mr = typeof window < "u" && window.document && window.document.createElement;
function Bh() {
  return mr && "ontouchstart" in window;
}
function s2() {
  return Bh() || mr && window.navigator.maxTouchPoints > 1;
}
function c2() {
  return mr && "onpointerdown" in window;
}
function u2() {
  return mr && "exitPointerLock" in window.document;
}
function d2() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const ma = {
  isBrowser: mr,
  gesture: d2(),
  touch: Bh(),
  touchscreen: s2(),
  pointer: c2(),
  pointerLock: u2()
}, _2 = 250, m2 = 180, f2 = 0.5, p2 = 50, g2 = 250, h2 = 10, fg = {
  mouse: 0,
  touch: 0,
  pen: 8
}, v2 = We(We({}, _r), {}, {
  device(a, i, {
    pointer: {
      touch: o = !1,
      lock: l = !1,
      mouse: c = !1
    } = {}
  }) {
    return this.pointerLock = l && ma.pointerLock, ma.touch && o ? "touch" : this.pointerLock ? "mouse" : ma.pointer && !c ? "pointer" : ma.touch ? "touch" : "mouse";
  },
  preventScrollAxis(a, i, {
    preventScroll: o
  }) {
    if (this.preventScrollDelay = typeof o == "number" ? o : o || o === void 0 && a ? _2 : void 0, !(!ma.touchscreen || o === !1))
      return a || (o !== void 0 ? "y" : void 0);
  },
  pointerCapture(a, i, {
    pointer: {
      capture: o = !0,
      buttons: l = 1,
      keys: c = !0
    } = {}
  }) {
    return this.pointerButtons = l, this.keys = c, !this.pointerLock && this.device === "pointer" && o;
  },
  threshold(a, i, {
    filterTaps: o = !1,
    tapsThreshold: l = 3,
    axis: c = void 0
  }) {
    const d = zt.toVector(a, o ? l : c ? 1 : 0);
    return this.filterTaps = o, this.tapsThreshold = l, d;
  },
  swipe({
    velocity: a = f2,
    distance: i = p2,
    duration: o = g2
  } = {}) {
    return {
      velocity: this.transform(zt.toVector(a)),
      distance: this.transform(zt.toVector(i)),
      duration: o
    };
  },
  delay(a = 0) {
    switch (a) {
      case !0:
        return m2;
      case !1:
        return 0;
      default:
        return a;
    }
  },
  axisThreshold(a) {
    return a ? We(We({}, fg), a) : fg;
  },
  keyboardDisplacement(a = h2) {
    return a;
  }
});
We(We({}, Ph), {}, {
  device(a, i, {
    shared: o,
    pointer: {
      touch: l = !1
    } = {}
  }) {
    if (o.target && !ma.touch && ma.gesture) return "gesture";
    if (ma.touch && l) return "touch";
    if (ma.touchscreen) {
      if (ma.pointer) return "pointer";
      if (ma.touch) return "touch";
    }
  },
  bounds(a, i, {
    scaleBounds: o = {},
    angleBounds: l = {}
  }) {
    const c = (_) => {
      const m = dg(Vl(o, _), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [m.min, m.max];
    }, d = (_) => {
      const m = dg(Vl(l, _), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [m.min, m.max];
    };
    return typeof o != "function" && typeof l != "function" ? [c(), d()] : (_) => [c(_), d(_)];
  },
  threshold(a, i, o) {
    return this.lockDirection = o.axis === "lock", zt.toVector(a, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(a) {
    return a === void 0 ? "ctrlKey" : a;
  },
  pinchOnWheel(a = !0) {
    return a;
  }
});
We(We({}, _r), {}, {
  mouseOnly: (a = !0) => a
});
We(We({}, _r), {}, {
  mouseOnly: (a = !0) => a
});
const Yh = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map();
function y2(a) {
  Yh.set(a.key, a.engine), Du.set(a.key, a.resolver);
}
const b2 = {
  key: "drag",
  engine: r2,
  resolver: v2
};
function w2(a, i) {
  if (a == null) return {};
  var o = {}, l = Object.keys(a), c, d;
  for (d = 0; d < l.length; d++)
    c = l[d], !(i.indexOf(c) >= 0) && (o[c] = a[c]);
  return o;
}
function S2(a, i) {
  if (a == null) return {};
  var o = w2(a, i), l, c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    for (c = 0; c < d.length; c++)
      l = d[c], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(a, l) && (o[l] = a[l]);
  }
  return o;
}
const E2 = {
  target(a) {
    if (a)
      return () => "current" in a ? a.current : a;
  },
  enabled(a = !0) {
    return a;
  },
  window(a = ma.isBrowser ? window : void 0) {
    return a;
  },
  eventOptions({
    passive: a = !0,
    capture: i = !1
  } = {}) {
    return {
      passive: a,
      capture: i
    };
  },
  transform(a) {
    return a;
  }
}, z2 = ["target", "eventOptions", "window", "enabled", "transform"];
function Ul(a = {}, i) {
  const o = {};
  for (const [l, c] of Object.entries(i))
    switch (typeof c) {
      case "function":
        o[l] = c.call(o, a[l], l, a);
        break;
      case "object":
        o[l] = Ul(a[l], c);
        break;
      case "boolean":
        c && (o[l] = a[l]);
        break;
    }
  return o;
}
function k2(a, i, o = {}) {
  const l = a, {
    target: c,
    eventOptions: d,
    window: _,
    enabled: m,
    transform: g
  } = l, f = S2(l, z2);
  if (o.shared = Ul({
    target: c,
    eventOptions: d,
    window: _,
    enabled: m,
    transform: g
  }, E2), i) {
    const v = Du.get(i);
    o[i] = Ul(We({
      shared: o.shared
    }, f), v);
  } else
    for (const v in f) {
      const y = Du.get(v);
      y && (o[v] = Ul(We({
        shared: o.shared
      }, f[v]), y));
    }
  return o;
}
class Zh {
  constructor(i, o) {
    Pt(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = i, this._gestureKey = o;
  }
  add(i, o, l, c, d) {
    const _ = this._listeners, m = KA(o, l), g = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, f = We(We({}, g), d);
    i.addEventListener(m, c, f);
    const v = () => {
      i.removeEventListener(m, c, f), _.delete(v);
    };
    return _.add(v), v;
  }
  clean() {
    this._listeners.forEach((i) => i()), this._listeners.clear();
  }
}
class T2 {
  constructor() {
    Pt(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(i, o, l = 140, ...c) {
    this.remove(i), this._timeouts.set(i, window.setTimeout(o, l, ...c));
  }
  remove(i) {
    const o = this._timeouts.get(i);
    o && window.clearTimeout(o);
  }
  clean() {
    this._timeouts.forEach((i) => {
      window.clearTimeout(i);
    }), this._timeouts.clear();
  }
}
class A2 {
  constructor(i) {
    Pt(this, "gestures", /* @__PURE__ */ new Set()), Pt(this, "_targetEventStore", new Zh(this)), Pt(this, "gestureEventStores", {}), Pt(this, "gestureTimeoutStores", {}), Pt(this, "handlers", {}), Pt(this, "config", {}), Pt(this, "pointerIds", /* @__PURE__ */ new Set()), Pt(this, "touchIds", /* @__PURE__ */ new Set()), Pt(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), N2(this, i);
  }
  setEventIds(i) {
    if (Jl(i))
      return this.touchIds = new Set(WA(i)), this.touchIds;
    if ("pointerId" in i)
      return i.type === "pointerup" || i.type === "pointercancel" ? this.pointerIds.delete(i.pointerId) : i.type === "pointerdown" && this.pointerIds.add(i.pointerId), this.pointerIds;
  }
  applyHandlers(i, o) {
    this.handlers = i, this.nativeHandlers = o;
  }
  applyConfig(i, o) {
    this.config = k2(i, o, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const i of this.gestures)
      this.gestureEventStores[i].clean(), this.gestureTimeoutStores[i].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...i) {
    const o = this.config.shared, l = {};
    let c;
    if (!(o.target && (c = o.target(), !c))) {
      if (o.enabled) {
        for (const _ of this.gestures) {
          const m = this.config[_], g = pg(l, m.eventOptions, !!c);
          if (m.enabled) {
            const f = Yh.get(_);
            new f(this, i, _).bind(g);
          }
        }
        const d = pg(l, o.eventOptions, !!c);
        for (const _ in this.nativeHandlers)
          d(_, "", (m) => this.nativeHandlers[_](We(We({}, this.state.shared), {}, {
            event: m,
            args: i
          })), void 0, !0);
      }
      for (const d in l)
        l[d] = JA(...l[d]);
      if (!c) return l;
      for (const d in l) {
        const {
          device: _,
          capture: m,
          passive: g
        } = VA(d);
        this._targetEventStore.add(c, _, "", l[d], {
          capture: m,
          passive: g
        });
      }
    }
  }
}
function Wi(a, i) {
  a.gestures.add(i), a.gestureEventStores[i] = new Zh(a, i), a.gestureTimeoutStores[i] = new T2();
}
function N2(a, i) {
  i.drag && Wi(a, "drag"), i.wheel && Wi(a, "wheel"), i.scroll && Wi(a, "scroll"), i.move && Wi(a, "move"), i.pinch && Wi(a, "pinch"), i.hover && Wi(a, "hover");
}
const pg = (a, i, o) => (l, c, d, _ = {}, m = !1) => {
  var g, f;
  const v = (g = _.capture) !== null && g !== void 0 ? g : i.capture, y = (f = _.passive) !== null && f !== void 0 ? f : i.passive;
  let w = m ? l : YA(l, c, v);
  o && y && (w += "Passive"), a[w] = a[w] || [], a[w].push(d);
};
function C2(a, i = {}, o, l) {
  const c = xn.useMemo(() => new A2(a), []);
  if (c.applyHandlers(a, l), c.applyConfig(i, o), xn.useEffect(c.effect.bind(c)), xn.useEffect(() => c.clean.bind(c), []), i.target === void 0)
    return c.bind.bind(c);
}
function x2(a, i) {
  return y2(b2), C2({
    drag: a
  }, i || {}, "drag");
}
const M2 = 10;
function O2({ room: a, path: i, isSelected: o, isBusy: l, onRoomToggle: c }) {
  const d = D.useRef(null);
  return x2(
    (_) => {
      _.tap && (te.debug("RoomSegments", "Tap on room:", a.id, a.name), c(a.id, a.name));
    },
    {
      target: d,
      filterTaps: !0,
      tapsThreshold: M2
    }
  ), /* @__PURE__ */ h.jsx(
    "path",
    {
      ref: d,
      d: i,
      className: `vacuum-map__room-segment ${o ? "vacuum-map__room-segment--selected" : ""}`,
      fill: o ? "var(--accent-bg, rgba(212, 175, 55, 0.3))" : "transparent",
      stroke: !l && o ? "var(--accent-color, #D4AF37)" : "rgba(255, 255, 255, 0.2)",
      strokeWidth: "2",
      style: { cursor: "pointer", transition: "all 0.2s ease", touchAction: "none" },
      "data-room-id": a.id,
      "data-room-name": a.name,
      children: /* @__PURE__ */ h.jsx("title", { children: a.name })
    }
  );
}
function R2({
  rooms: a,
  selectedRooms: i,
  onRoomToggle: o,
  calibrationPoints: l,
  imageWidth: c,
  imageHeight: d,
  rotation: _ = 0
}) {
  const { phase: m } = Ma(), g = m !== "idle";
  te.debug("RoomSegments", "Render, selectedRooms:", Array.from(i.keys()));
  const f = D.useMemo(() => a.filter((v) => v.visibility !== "Hidden").sort((v, y) => {
    const w = Math.abs(((v.x1 ?? 0) - (v.x0 ?? 0)) * ((v.y1 ?? 0) - (v.y0 ?? 0)));
    return Math.abs(((y.x1 ?? 0) - (y.x0 ?? 0)) * ((y.y1 ?? 0) - (y.y0 ?? 0))) - w;
  }).map((v) => ({
    room: v,
    path: hT(v, l, c, d, a, _)
  })), [a, l, c, d, _]);
  return !c || !d ? null : /* @__PURE__ */ h.jsx(
    "svg",
    {
      className: "vacuum-map__room-segments",
      viewBox: `0 0 ${c} ${d}`,
      preserveAspectRatio: "xMidYMid meet",
      children: f.map(({ room: v, path: y }) => {
        const w = i.has(v.id);
        return y ? /* @__PURE__ */ h.jsx(
          O2,
          {
            room: v,
            path: y,
            isSelected: w,
            isBusy: g,
            onRoomToggle: o
          },
          v.id
        ) : (te.warn("No path for room:", v.id, v.name), null);
      })
    }
  );
}
const D2 = D.memo(R2);
function j2({
  viewMode: a,
  onViewToggle: i,
  onZoomIn: o,
  onZoomOut: l,
  onZoomReset: c,
  showViewToggle: d = !1,
  showZoomControls: _ = !0,
  isMapLocked: m,
  onToggleLock: g
}) {
  const { t: f } = He(), v = a === "map", y = a === "list", w = f(v ? "vacuum_map.switch_to_list" : "vacuum_map.switch_to_map"), E = v ? _0 : Uu, T = f(m ? "vacuum_map.unlock_map" : "vacuum_map.lock_map"), N = m ? g0 : f0;
  return /* @__PURE__ */ h.jsxs("div", { className: "map-controls", children: [
    d && i && /* @__PURE__ */ h.jsx("button", { className: "map-controls__button", onClick: i, "aria-label": w, title: w, children: /* @__PURE__ */ h.jsx(E, { size: 18 }) }),
    _ && !m && !y && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: "map-controls__button",
          onClick: o,
          "aria-label": f("vacuum_map.zoom_in"),
          title: f("vacuum_map.zoom_in"),
          children: /* @__PURE__ */ h.jsx(Eg, { size: 18 })
        }
      ),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: "map-controls__button",
          onClick: l,
          "aria-label": f("vacuum_map.zoom_out"),
          title: f("vacuum_map.zoom_out"),
          children: /* @__PURE__ */ h.jsx(y0, { size: 18 })
        }
      ),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: "map-controls__button",
          onClick: c,
          "aria-label": f("vacuum_map.zoom_reset"),
          title: f("vacuum_map.zoom_reset"),
          children: /* @__PURE__ */ h.jsx(x0, { size: 16 })
        }
      )
    ] }),
    !y && /* @__PURE__ */ h.jsx(
      "button",
      {
        className: `map-controls__button map-controls__button--lock${m ? " map-controls__button--locked" : ""}`,
        onClick: g,
        "aria-label": T,
        title: T,
        children: /* @__PURE__ */ h.jsx(N, { size: 16 })
      }
    )
  ] });
}
function L2({ rooms: a, selectedRooms: i, onRoomToggle: o }) {
  const { t: l } = He();
  return a.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "room-list-view", children: /* @__PURE__ */ h.jsx("div", { className: "room-list-view__empty", children: l("vacuum_map.no_rooms") }) }) : /* @__PURE__ */ h.jsxs("div", { className: "room-list-view", children: [
    /* @__PURE__ */ h.jsx("div", { className: "room-list-view__header", children: l("vacuum_map.room_list_overlay") }),
    /* @__PURE__ */ h.jsx("div", { className: "room-list-view__list", children: a.map((c) => {
      const d = i.has(c.id);
      return /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: `room-list-view__item ${d ? "room-list-view__item--selected" : ""}`,
          onClick: () => o(c.id, c.name),
          children: [
            /* @__PURE__ */ h.jsx("span", { className: "room-list-view__item-name", children: c.name }),
            /* @__PURE__ */ h.jsx("span", { className: "room-list-view__item-check", children: d && /* @__PURE__ */ h.jsx(wg, { size: 18 }) })
          ]
        },
        c.id
      );
    }) })
  ] });
}
function U2({ zone: a, onZoneChange: i, clearZoneLabel: o, contentRef: l }) {
  const c = ld(), { phase: d } = Ma(), _ = d === "cleaning" || d === "paused", [m, g] = D.useState(null), [f, v] = D.useState(c.state.scale);
  UA(
    D.useCallback((H) => {
      v(H.state.scale);
    }, [])
  );
  const y = 1 / f, [w, E] = D.useState(null), T = D.useCallback(
    (H, F) => {
      const Z = l.current;
      if (!Z) return null;
      const W = Z.getBoundingClientRect(), { scale: ae } = c.state, re = (H - W.left) / ae, fe = (F - W.top) / ae, ie = W.width / ae, Ce = W.height / ae, we = Math.max(0, Math.min(100, re / ie * 100)), xe = Math.max(0, Math.min(100, fe / Ce * 100));
      return { x: we, y: xe };
    },
    [l, c]
  ), N = D.useCallback(
    (H) => {
      if (m) return;
      H.stopPropagation();
      const F = T(H.clientX, H.clientY);
      if (!F) return;
      const Z = 15, W = {
        x1: Math.max(0, F.x - Z / 2),
        y1: Math.max(0, F.y - Z / 2),
        x2: Math.min(100, F.x + Z / 2),
        y2: Math.min(100, F.y + Z / 2)
      };
      te.debug("Zone", "Created at click:", F, W), i(W);
    },
    [T, i, m]
  ), L = (H, F) => {
    H.stopPropagation(), H.preventDefault(), a && (g(F), E(a));
  }, R = (H) => "touches" in H && H.touches.length > 0 ? { clientX: H.touches[0].clientX, clientY: H.touches[0].clientY } : { clientX: H.clientX, clientY: H.clientY }, U = D.useCallback(
    (H) => {
      if (!m || !w) return;
      const { clientX: F, clientY: Z } = R(H), W = T(F, Z);
      if (!W) return;
      const ae = { ...w }, re = 5;
      switch (m) {
        case "top":
          ae.y1 = Math.min(W.y, w.y2 - re);
          break;
        case "bottom":
          ae.y2 = Math.max(W.y, w.y1 + re);
          break;
        case "left":
          ae.x1 = Math.min(W.x, w.x2 - re);
          break;
        case "right":
          ae.x2 = Math.max(W.x, w.x1 + re);
          break;
      }
      i(ae);
    },
    [m, w, T, i]
  ), Y = D.useCallback(() => {
    g(null), E(null);
  }, []), P = (H) => {
    H.stopPropagation(), i(null), g(null), E(null);
  };
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: "vacuum-map__zone-container",
      onClick: N,
      onMouseMove: U,
      onMouseUp: Y,
      onMouseLeave: Y,
      onTouchMove: U,
      onTouchEnd: Y,
      onTouchCancel: Y,
      children: a && /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "vacuum-map__zone",
          style: {
            left: `${a.x1}%`,
            top: `${a.y1}%`,
            width: `${a.x2 - a.x1}%`,
            height: `${a.y2 - a.y1}%`
          },
          onClick: (H) => H.stopPropagation(),
          children: !_ && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--top",
                style: { transform: `translateX(-50%) scale(${y})` },
                onMouseDown: (H) => L(H, "top"),
                onTouchStart: (H) => L(H, "top"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--right",
                style: { transform: `translateY(-50%) scale(${y})` },
                onMouseDown: (H) => L(H, "right"),
                onTouchStart: (H) => L(H, "right"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--bottom",
                style: { transform: `translateX(-50%) scale(${y})` },
                onMouseDown: (H) => L(H, "bottom"),
                onTouchStart: (H) => L(H, "bottom"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--left",
                style: { transform: `translateY(-50%) scale(${y})` },
                onMouseDown: (H) => L(H, "left"),
                onTouchStart: (H) => L(H, "left"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "vacuum-map__zone-clear",
                style: { transform: `scale(${y})` },
                onClick: P,
                title: o,
                children: "×"
              }
            )
          ] })
        }
      )
    }
  );
}
const q2 = "M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z";
function G2({
  position: a,
  calibrationPoints: i,
  imageWidth: o,
  imageHeight: l,
  isCleaning: c = !1
}) {
  const d = D.useMemo(() => $l(a.x, a.y, i, o, l), [a.x, a.y, i, o, l]), _ = Math.max(o, l) * 0.05, m = _ / 2;
  return /* @__PURE__ */ h.jsx(
    "svg",
    {
      className: `vacuum-position-marker${c ? " vacuum-position-marker--cleaning" : ""}`,
      viewBox: `0 0 ${o} ${l}`,
      preserveAspectRatio: "xMidYMid meet",
      children: /* @__PURE__ */ h.jsxs("g", { transform: `translate(${d.x - m}, ${d.y - m})`, children: [
        /* @__PURE__ */ h.jsx("circle", { cx: m, cy: m, r: m * 0.9, className: "vacuum-position-marker__bg" }),
        /* @__PURE__ */ h.jsx("g", { transform: `scale(${_ / 24})`, children: /* @__PURE__ */ h.jsx("path", { d: q2, className: "vacuum-position-marker__icon" }) })
      ] })
    }
  );
}
const H2 = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15";
function I2({ position: a, calibrationPoints: i, imageWidth: o, imageHeight: l }) {
  const c = D.useMemo(() => $l(a.x, a.y, i, o, l), [a.x, a.y, i, o, l]), d = Math.max(o, l) * 0.04, _ = d / 2;
  return /* @__PURE__ */ h.jsx("svg", { className: "charger-marker", viewBox: `0 0 ${o} ${l}`, preserveAspectRatio: "xMidYMid meet", children: /* @__PURE__ */ h.jsxs("g", { transform: `translate(${c.x - _}, ${c.y - _})`, children: [
    /* @__PURE__ */ h.jsx("circle", { cx: _, cy: _, r: _ * 0.9, className: "charger-marker__bg" }),
    /* @__PURE__ */ h.jsx("g", { transform: `scale(${d / 24})`, children: /* @__PURE__ */ h.jsx("path", { d: H2, className: "charger-marker__icon" }) })
  ] }) });
}
function P2({ rooms: a, calibrationPoints: i, imageWidth: o, imageHeight: l }) {
  const c = Math.max(o, l) * 0.025, d = c * 0.6, _ = c * 0.4, m = c * 0.5, g = D.useMemo(() => a.filter((f) => f.visibility !== "Hidden").filter((f) => {
    const v = f.x !== void 0 && f.y !== void 0, y = f.x0 !== void 0 && f.y0 !== void 0 && f.x1 !== void 0 && f.y1 !== void 0;
    return v || y;
  }).map((f) => {
    const v = f.x ?? (f.x0 + f.x1) / 2, y = f.y ?? (f.y0 + f.y1) / 2, w = $l(v, y, i, o, l);
    return { id: f.id, name: f.name, x: w.x, y: w.y };
  }), [a, i, o, l]);
  return /* @__PURE__ */ h.jsx("svg", { className: "room-labels", viewBox: `0 0 ${o} ${l}`, preserveAspectRatio: "xMidYMid meet", children: g.map((f) => {
    const y = f.name.length * c * 0.6 + d * 2, w = c + _ * 2;
    return /* @__PURE__ */ h.jsxs("g", { transform: `translate(${f.x}, ${f.y})`, children: [
      /* @__PURE__ */ h.jsx(
        "rect",
        {
          className: "room-labels__bg",
          x: -y / 2,
          y: -w / 2,
          width: y,
          height: w,
          rx: m
        }
      ),
      /* @__PURE__ */ h.jsx("text", { className: "room-labels__text", textAnchor: "middle", dominantBaseline: "middle", fontSize: c, children: f.name })
    ] }, f.id);
  }) });
}
function B2({
  showViewToggle: a,
  showZoomControls: i,
  viewMode: o,
  onViewToggle: l,
  isMapLocked: c,
  onToggleLock: d,
  onResetTransformReady: _
}) {
  const { zoomIn: m, zoomOut: g, resetTransform: f } = LA();
  return D.useEffect(() => {
    _(f);
  }, [f, _]), /* @__PURE__ */ h.jsx(
    j2,
    {
      showViewToggle: a,
      showZoomControls: i,
      viewMode: o,
      onViewToggle: l,
      onZoomIn: () => m(),
      onZoomOut: () => g(),
      onZoomReset: () => f(),
      isMapLocked: c,
      onToggleLock: d
    }
  );
}
function Y2({
  mapEntityId: a,
  selectedMode: i,
  selectedRooms: o,
  onRoomToggle: l,
  zone: c,
  onZoneChange: d,
  onImageDimensionsChange: _,
  defaultRoomView: m = "map",
  cleaningMode: mapCleaningMode,
  hass: mapHass,
  entityId: mapEntityId2
}) {
  const { t: g } = He(), f = Rt(), v = ed(), { phase: y } = Ma(), w = y === "cleaning" || y === "paused", E = f.states[a], T = E?.attributes?.entity_picture, N = D.useRef(null), L = D.useRef(null), R = D.useRef(null), [U, Y] = D.useState({ width: 0, height: 0 }), [P, H] = D.useState(m), [F, Z] = D.useState(() => {
    try {
      const ee = localStorage.getItem(kp.MAP_LOCKED);
      return ee === null ? !0 : ee === "true";
    } catch {
      return !0;
    }
  }), W = D.useCallback((ee) => {
    R.current = ee;
  }, []), ae = D.useCallback(() => {
    const ee = !F;
    ee && R.current && R.current(), Z(ee);
    try {
      localStorage.setItem(kp.MAP_LOCKED, String(ee));
    } catch {
    }
  }, [F]), re = i === "room" ? P : m, fe = D.useMemo(
    () => yh(f, a),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f.states[a]?.attributes?.rooms, a]
  ), ie = E?.attributes?.calibration_points ?? [], Ce = E?.attributes?.rotation ?? 0, we = E?.attributes?.vacuum_position, xe = E?.attributes?.charger_position, M = y === "cleaning", K = v.map_overlays ?? [], Q = U.width > 0 && U.height > 0, _e = K.includes("vacuum") && we && Q, pe = K.includes("charger") && xe && Q, z = K.includes("room_labels") && Q, q = D.useCallback(
    (ee) => {
      const le = ee.currentTarget;
      le.naturalWidth && le.naturalHeight && (Y({ width: le.naturalWidth, height: le.naturalHeight }), _?.(le.naturalWidth, le.naturalHeight));
    },
    [_]
  ), X = !F && i !== "zone", $ = `vacuum-map${F ? " vacuum-map--locked" : ""}`;
  return /* @__PURE__ */ h.jsxs("div", { className: $, ref: N, children: [
    E && T ? /* @__PURE__ */ h.jsxs(
      xA,
      {
        initialScale: 1,
        minScale: 0.5,
        maxScale: 4,
        centerOnInit: !0,
        centerZoomedOut: !1,
        limitToBounds: !1,
        wheel: {
          step: 0.05,
          disabled: F
        },
        pinch: {
          step: 0.5,
          disabled: F
        },
        panning: {
          disabled: !X,
          velocityDisabled: !0,
          excluded: ["vacuum-map__room-segment"]
        },
        doubleClick: { disabled: !0 },
        children: [
          /* @__PURE__ */ h.jsx(
            B2,
            {
              showViewToggle: i === "room",
              showZoomControls: i !== "room" || re === "map",
              viewMode: re,
              onViewToggle: () => H((ee) => ee === "map" ? "list" : "map"),
              isMapLocked: F,
              onToggleLock: ae,
              onResetTransformReady: W
            }
          ),
          /* @__PURE__ */ h.jsx(
            RA,
            {
              wrapperStyle: {
                width: "100%",
                height: "100%"
              },
              contentStyle: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ h.jsxs("div", { className: "vacuum-map__content", ref: L, children: [
                /* @__PURE__ */ h.jsx(
                  "img",
                  {
                    src: f.hassUrl(T),
                    alt: "Vacuum Map",
                    className: "vacuum-map__image",
                    onLoad: q,
                    draggable: !1
                  }
                ),
                pe && /* @__PURE__ */ h.jsx(
                  I2,
                  {
                    position: xe,
                    calibrationPoints: ie,
                    imageWidth: U.width,
                    imageHeight: U.height
                  }
                ),
                _e && /* @__PURE__ */ h.jsx(
                  G2,
                  {
                    position: we,
                    calibrationPoints: ie,
                    imageWidth: U.width,
                    imageHeight: U.height,
                    isCleaning: M
                  }
                ),
                z && /* @__PURE__ */ h.jsx(
                  P2,
                  {
                    rooms: fe,
                    calibrationPoints: ie,
                    imageWidth: U.width,
                    imageHeight: U.height
                  }
                ),
                i === "room" && re === "map" && !w && U.width > 0 && U.height > 0 && /* @__PURE__ */ h.jsx(
                  D2,
                  {
                    rooms: fe,
                    selectedRooms: o,
                    onRoomToggle: l,
                    calibrationPoints: ie,
                    imageWidth: U.width,
                    imageHeight: U.height,
                    rotation: Ce
                  }
                ),
                i === "zone" && /* @__PURE__ */ h.jsx(
                  U2,
                  {
                    zone: c,
                    onZoneChange: d,
                    clearZoneLabel: g("vacuum_map.clear_zone"),
                    contentRef: L
                  }
                )
              ] })
            }
          )
        ]
      }
    ) : /* @__PURE__ */ h.jsxs("div", { className: "vacuum-map__placeholder", children: [
      g("vacuum_map.no_map"),
      /* @__PURE__ */ h.jsx("br", {}),
      /* @__PURE__ */ h.jsx("small", { children: g("vacuum_map.looking_for", { entity: a }) })
    ] }),
    i === "room" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      re === "map" && !w && /* @__PURE__ */ h.jsx("div", { className: "vacuum-map__overlay", children: g("vacuum_map.room_overlay") }),
      re === "list" && /* @__PURE__ */ h.jsx(L2, { rooms: fe, selectedRooms: o, onRoomToggle: l })
    ] }),
    i === "zone" && /* @__PURE__ */ h.jsx("div", { className: "vacuum-map__overlay", children: g(c ? "vacuum_map.zone_overlay_resize" : "vacuum_map.zone_overlay_create") }),
    (() => {
      if (!mapHass || !mapEntityId2) return null;
      if (y !== "cleaning" && y !== "paused") return null;
      const isMopMode = mapCleaningMode === "Mopping" || mapCleaningMode === "Mopping after sweeping";
      if (!isMopMode) return null;
      const devId = mapEntityId2.split(".")[1] ?? "";
      const handleClick = (e) => {
        e.stopPropagation();
        mapHass.callService("button", "press", { entity_id: "button." + devId + "_self_clean" });
      };
      const btnIcon = /* @__PURE__ */ h.jsx(Kl, { size: 20 });
      return /* @__PURE__ */ h.jsx("button", {
        onClick: handleClick,
        title: isMopMode ? "Wash Mop" : "Auto Empty",
        style: {
          position: "absolute", bottom: "1rem", right: "1rem",
          zIndex: 20, width: "2.75rem", height: "2.75rem",
          borderRadius: "50%", border: "none", cursor: "pointer",
          background: "var(--accent-color, #007aff)",
          color: "#fff", display: "flex", alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          transition: "transform 0.15s ease, opacity 0.15s ease"
        },
        children: btnIcon
      });
    })()
  ] });
}
function Z2({ selectedMode: a, onModeChange: i }) {
  const { t: o } = He(), { phase: l } = Ma(), c = l === "cleaning" || l === "paused", d = [
    { value: "room", label: o("modes.room") },
    { value: "all", label: o("modes.all") },
    { value: "zone", label: o("modes.zone") }
  ];
  return /* @__PURE__ */ h.jsx("div", { className: `mode-tabs ${c ? "mode-tabs--disabled" : ""}`, children: d.map((_) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: () => i(_.value),
      className: `mode-tabs__button ${a === _.value ? "mode-tabs__button--active" : ""}`,
      disabled: c,
      children: _.label
    },
    _.value
  )) });
}
function V2({ onClick: a, text: i, disabled: o = !1 }) {
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__clean ${o ? "action-buttons__clean--disabled" : ""}`,
      disabled: o,
      children: [
        /* @__PURE__ */ h.jsx("span", { className: "action-buttons__icon", children: gw }),
        /* @__PURE__ */ h.jsx("span", { children: i })
      ]
    }
  );
}
function K2({ onClick: a, disabled: i = !1 }) {
  const { t: o } = He();
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__pause ${i ? "action-buttons__pause--disabled" : ""}`,
      disabled: i,
      children: [
        /* @__PURE__ */ h.jsx("span", { className: "action-buttons__icon", children: hw }),
        /* @__PURE__ */ h.jsx("span", { children: o("actions.pause") })
      ]
    }
  );
}
function X2({ onClick: a, disabled: i = !1 }) {
  const { t: o } = He();
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__resume ${i ? "action-buttons__resume--disabled" : ""}`,
      disabled: i,
      children: [
        /* @__PURE__ */ h.jsx("span", { className: "action-buttons__icon", children: vw }),
        /* @__PURE__ */ h.jsx("span", { children: o("actions.resume") })
      ]
    }
  );
}
function gg({ onClick: a, action: i, disabled: o = !1 }) {
  const { t: l } = He(), c = l(i === "stop_and_dock" ? "actions.stop_and_dock" : "actions.stop");
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__stop ${o ? "action-buttons__stop--disabled" : ""}`,
      disabled: o,
      children: [
        /* @__PURE__ */ h.jsx("span", { className: "action-buttons__icon", children: yw }),
        /* @__PURE__ */ h.jsx("span", { children: c })
      ]
    }
  );
}
function F2({ onClick: a, disabled: i = !1 }) {
  const { t: o } = He();
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__dock ${i ? "action-buttons__dock--disabled" : ""}`,
      disabled: i,
      children: [
        /* @__PURE__ */ h.jsx("span", { className: "action-buttons__icon", children: bw }),
        /* @__PURE__ */ h.jsx("span", { children: o("actions.dock") })
      ]
    }
  );
}
function DockTasksPopup({ onClose: a, entityId: i, hass: o }) {
  const l = D.useCallback((c) => {
    const d = i.split(".")[1] ?? "";
    o.callService("button", "press", { entity_id: `button.${d}_${c}` });
    a();
  }, [i, o, a]);
  const tasks = [
    { key: "start_auto_empty", icon: "\uD83D\uDDF1\uFE0F", label: "Auto Empty" },
    { key: "start_washing", icon: "\uD83D\uDCA7", label: "Wash Mop" },
    { key: "manual_drying", icon: "\u2600\uFE0F", label: "Mop Drying" }
  ];
  const attrs = o.states[i]?.attributes ?? {};
  const dockItems = [
    { label: "Clean Water Tank", attrKey: "clean_water_tank_status" },
    { label: "Used Water Tank", attrKey: "dirty_water_tank_status" },
    { label: "Dust Bag", attrKey: "dust_bag_status" },
    { label: "Detergent", attrKey: "detergent_status" }
  ];
  const getStatusLevel = (attrKey, val) => {
    if (val == null) return "unknown";
    if (typeof val === "boolean") return val ? "good" : "bad";
    if (typeof val === "number") return val > 0 ? "good" : "bad";
    const s = String(val).toLowerCase().trim();
    if (s === "" || s === "unavailable" || s === "unknown") return "unknown";
    const bad = ["not installed", "not_installed", "missing", "empty", "full", "error",
                 "fault", "off", "false", "0", "max water level", "warning", "abnormal"];
    if (bad.some((b) => s.includes(b))) return "bad";
    if (attrKey === "clean_water_tank_status") {
      const warn = ["low", "low water", "water low", "low level"];
      if (warn.some((w) => s.includes(w))) return "warn";
    }
    const good = ["normal", "ok", "on", "true", "installed", "available", "ready",
                  "good", "present", "standard", "medium", "high"];
    if (good.some((g) => s.includes(g))) return "good";
    const n = parseFloat(s);
    if (!isNaN(n)) return n > 0 ? "good" : "bad";
    return "good";
  };
  const getDotColor = (attrKey) => {
    const level = getStatusLevel(attrKey, attrs[attrKey]);
    return level === "unknown" ? "#aaa" : level === "good" ? "#34c759" : level === "warn" ? "#ff9500" : "#ff3b30";
  };
  const getStatusText = (attrKey) => {
    const val = attrs[attrKey];
    if (val == null || String(val).toLowerCase() === "unavailable") return null;
    return String(val);
  };
  const getStatusColor = (attrKey) => {
    const level = getStatusLevel(attrKey, attrs[attrKey]);
    return level === "unknown" ? "var(--text-tertiary, #999)" : level === "good" ? "#34c759" : level === "warn" ? "#ff9500" : "#ff3b30";
  };
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx("div", { className: "modal__backdrop", onClick: a, style: { background: "transparent" } }),
    /* @__PURE__ */ h.jsxs("div", { className: "modal", style: { inset: "auto 0 0", height: "fit-content" }, children: [
      /* @__PURE__ */ h.jsx("div", { className: "modal__handle", onClick: a }),
      /* @__PURE__ */ h.jsxs("div", { style: { padding: "0 0 1rem", overflowY: "auto", maxHeight: "calc(80vh - 3rem)" }, children: [
        /* @__PURE__ */ h.jsx("h3", { style: { margin: "0 0 1rem", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary, #1a1a1a)" }, children: "Dock Information" }),
        /* @__PURE__ */ h.jsx("div", {
          style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem 1rem", marginBottom: "1.5rem" },
          children: dockItems.map(({ label: c, attrKey: d }) => /* @__PURE__ */ h.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "0.5rem", paddingBottom: "0.25rem" },
            children: [
              /* @__PURE__ */ h.jsx("span", {
                style: {
                  width: "0.625rem", height: "0.625rem", borderRadius: "50%",
                  background: getDotColor(d), flexShrink: 0,
                  boxShadow: "0 0 0 2px " + getDotColor(d) + "33"
                }
              }),
              /* @__PURE__ */ h.jsxs("span", { style: { display: "flex", flexDirection: "column", gap: "0.125rem" }, children: [
                /* @__PURE__ */ h.jsx("span", { style: { fontSize: "0.875rem", color: "var(--text-primary, #1a1a1a)", fontWeight: 500 }, children: c }),
                getStatusText(d) && /* @__PURE__ */ h.jsx("span", { style: { fontSize: "0.75rem", color: getStatusColor(d), lineHeight: 1.3 }, children: getStatusText(d) })
              ]})
            ]
          }, d))
        }),
        /* @__PURE__ */ h.jsx("div", { style: { height: "1px", background: "var(--border-color, #e0e0e0)", margin: "0 0 1.25rem" } }),
        /* @__PURE__ */ h.jsx("h3", { style: { margin: "0 0 1rem", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary, #1a1a1a)" }, children: "Dock Task" }),
        /* @__PURE__ */ h.jsx("div", {
          style: { display: "flex", flexDirection: "row", gap: "0.75rem" },
          children: tasks.map(({ key: c, icon: d, label: _ }) => /* @__PURE__ */ h.jsxs("button", {
            onClick: () => l(c),
            style: {
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "0.5rem", padding: "1.25rem 0.5rem",
              background: "var(--surface-secondary, #f5f5f5)",
              border: "1px solid var(--border-color, #e0e0e0)",
              borderRadius: "1rem", cursor: "pointer",
              color: "var(--text-primary, #1a1a1a)",
              transition: "background 0.15s ease, transform 0.1s ease"
            },
            children: [
              /* @__PURE__ */ h.jsx("span", { style: { fontSize: "1.75rem", lineHeight: 1 }, children: d }),
              /* @__PURE__ */ h.jsx("span", { style: { fontSize: "0.8125rem", fontWeight: 500, textAlign: "center", lineHeight: 1.2 }, children: _ })
            ]
          }, c))
        })
      ] })
    ] })
  ]});
}
function W2({
  selectedMode: a,
  selectedRoomsCount: i,
  onClean: o,
  onPause: l,
  onResume: c,
  onStop: d,
  onDock: _,
  hass: hassRef,
  entityId: entityIdRef
}) {
  const { t: m, getRoomCountTranslation: g } = He(), { getStopAction: f } = Bk(), { phase: v, controls: y } = Ma(), w = f(), [dockPopupOpen, setDockPopupOpen] = D.useState(false);
  const E = () => {
    switch (a) {
      case "room":
        return g(i);
      case "all":
        return m("actions.clean_all");
      case "zone":
        return m("actions.zone_clean");
      default:
        return m("actions.clean");
    }
  }, T = () => d(w);
  const isInDock = v === "idle" || v === "maintenance" || v === "returning" || v === "error" || v === "other";
  const handleDockClick = D.useCallback(() => {
    if (isInDock) {
      setDockPopupOpen(true);
    } else {
      _();
    }
  }, [isInDock, _]);
  return /* @__PURE__ */ h.jsxs(D.Fragment, { children: [
    v === "cleaning" ? /* @__PURE__ */ h.jsxs("div", { className: "action-buttons", children: [
      /* @__PURE__ */ h.jsx(K2, { onClick: l, disabled: !y.canPause }),
      /* @__PURE__ */ h.jsx(gg, { onClick: T, action: w, disabled: !y.canStop })
    ] }) : v === "paused" ? /* @__PURE__ */ h.jsxs("div", { className: "action-buttons", children: [
      /* @__PURE__ */ h.jsx(X2, { onClick: c, disabled: !y.canResume }),
      /* @__PURE__ */ h.jsx(gg, { onClick: T, action: w, disabled: !y.canStop })
    ] }) : /* @__PURE__ */ h.jsxs("div", { className: "action-buttons", children: [
      /* @__PURE__ */ h.jsx(V2, { onClick: o, text: E(), disabled: !y.canStartCleaning }),
      /* @__PURE__ */ h.jsx(F2, { onClick: handleDockClick, disabled: !y.canDock && !isInDock })
    ] }),
    dockPopupOpen && /* @__PURE__ */ h.jsx(DockTasksPopup, {
      onClose: () => setDockPopupOpen(false),
      entityId: entityIdRef,
      hass: hassRef
    })
  ]});
}
function wa({ title: a, icon: i, defaultOpen: o = !1, children: l }) {
  const [c, d] = D.useState(o), _ = D.useCallback(() => {
    d((m) => !m);
  }, []);
  return /* @__PURE__ */ h.jsxs("div", { className: `accordion ${c ? "accordion--open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs("button", { className: "accordion__header", onClick: _, type: "button", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "accordion__title-wrapper", children: [
        i && /* @__PURE__ */ h.jsx("span", { className: "accordion__icon", children: i }),
        /* @__PURE__ */ h.jsx("span", { className: "accordion__title", children: a })
      ] }),
      /* @__PURE__ */ h.jsx(Sg, { className: "accordion__chevron" })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "accordion__content", children: /* @__PURE__ */ h.jsx("div", { className: "accordion__content-inner", children: l }) })
  ] });
}
function sd({ checked: a = !1, onChange: i, disabled: o = !1 }) {
  const l = (c) => {
    i && !o && i(c.target.checked);
  };
  return /* @__PURE__ */ h.jsxs("label", { className: `toggle ${o ? "toggle--disabled" : ""}`, children: [
    /* @__PURE__ */ h.jsx("input", { type: "checkbox", className: "toggle__input", checked: a, onChange: l, disabled: o }),
    /* @__PURE__ */ h.jsx("span", { className: "toggle__slider", children: /* @__PURE__ */ h.jsx("span", { className: "toggle__knob" }) })
  ] });
}
function $a({
  icon: a,
  label: i,
  selected: o = !1,
  onClick: l,
  size: c = "medium",
  iconStyle: d,
  disabled: _ = !1
}) {
  return /* @__PURE__ */ h.jsxs("div", { className: `circular-button ${_ ? "circular-button--disabled" : ""}`, children: [
    /* @__PURE__ */ h.jsx(
      "button",
      {
        className: `circular-button__circle circular-button__circle--${c} ${o ? "circular-button__circle--selected" : ""}`,
        onClick: l,
        disabled: _,
        children: typeof a == "string" ? /* @__PURE__ */ h.jsx("span", { className: "circular-button__icon", style: d, children: a }) : a
      }
    ),
    i && /* @__PURE__ */ h.jsx("span", { className: "circular-button__label", children: i })
  ] });
}
function cd({ opened: a, onClose: i, children: o }) {
  return a ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx("div", { className: "modal__backdrop", onClick: i }),
    /* @__PURE__ */ h.jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ h.jsx("div", { className: "modal__handle" }),
      /* @__PURE__ */ h.jsx("div", { className: "modal__content", children: o })
    ] })
  ] }) : null;
}
function Vh({ options: a, value: i, onChange: o, disabled: l = !1 }) {
  return /* @__PURE__ */ h.jsx("div", { className: `segmented-control ${l ? "segmented-control--disabled" : ""}`, children: a.map((c) => /* @__PURE__ */ h.jsx(
    "button",
    {
      className: `segmented-control__button ${i === c.value ? "segmented-control__button--active" : ""}`,
      onClick: () => !l && o(c.value),
      disabled: l,
      children: c.label
    },
    c.value
  )) });
}
function $2({ message: a, onClose: i }) {
  return /* @__PURE__ */ h.jsxs("div", { className: "toast", children: [
    /* @__PURE__ */ h.jsx("span", { className: "toast__message", children: a }),
    /* @__PURE__ */ h.jsx("button", { className: "toast__close", onClick: i, "aria-label": "Close", children: "×" })
  ] });
}
class Q2 extends D.Component {
  constructor(i) {
    super(i), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(i) {
    return { hasError: !0, error: i };
  }
  componentDidCatch(i, o) {
    te.error("Caught error:", i), te.error("Component stack:", o.componentStack);
  }
  handleRetry = () => {
    this.setState({ hasError: !1, error: null });
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ h.jsx("div", { className: "error-boundary", children: /* @__PURE__ */ h.jsxs("div", { className: "error-boundary__content", children: [
      /* @__PURE__ */ h.jsx("div", { className: "error-boundary__icon", children: "!" }),
      /* @__PURE__ */ h.jsx("h3", { className: "error-boundary__title", children: "Something went wrong" }),
      /* @__PURE__ */ h.jsx("p", { className: "error-boundary__message", children: "The card encountered an error. Try refreshing the page." }),
      /* @__PURE__ */ h.jsx("button", { className: "error-boundary__retry", onClick: this.handleRetry, children: "Try Again" })
    ] }) }) : this.props.children;
  }
}
function J2({
  cleangeniusMode: a,
  cleangeniusModeList: i,
  cleangenius: o,
  baseEntityId: l
}) {
  const c = Rt(), { phase: d } = Ma(), { setSelectOption: _ } = Iu(c), { t: m } = He(), g = Bu(l), f = d === "cleaning" || d === "paused", v = vt(c, g.cleangenius), y = vt(c, g.cleaningRoute), w = vt(c, g.cleangeniusMode), E = f || w.unavailable, T = f || v.unavailable, N = (L) => {
    const R = L ? Ca.DEEP_CLEANING : Ca.ROUTINE_CLEANING, U = L ? ii.DEEP : ii.STANDARD;
    _(g.cleangenius, Ig(R)), y.available && _(g.cleaningRoute, or(U));
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: m("cleangenius_mode.cleaning_mode_title") }),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: `cleaning-mode-modal__mode-grid ${E ? "cleaning-mode-modal__mode-grid--disabled" : ""}`,
          children: i.map((L, R) => {
            const U = L, Y = L === "Vacuum and mop";
            return /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: `cleaning-mode-modal__mode-card ${L === a ? "cleaning-mode-modal__mode-card--selected" : ""} ${E ? "cleaning-mode-modal__mode-card--disabled" : ""}`,
                onClick: () => !E && _(g.cleangeniusMode, Lw(U)),
                style: { cursor: E ? "not-allowed" : "pointer" },
                children: [
                  /* @__PURE__ */ h.jsx(
                    "div",
                    {
                      className: `cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${Y ? "vac-mop" : "mop-after"}`,
                      children: iT(U)
                    }
                  ),
                  /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__mode-label", children: tT(U, m) }),
                  L === a && /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__mode-checkmark", children: /* @__PURE__ */ h.jsx("span", { children: "✓" }) })
                ]
              },
              R
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: `cleaning-mode-modal__setting ${T ? "cleaning-mode-modal__setting--disabled" : ""}`,
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__setting-label", children: m("cleangenius_mode.deep_cleaning") }),
          /* @__PURE__ */ h.jsx(
            sd,
            {
              checked: o === Ca.DEEP_CLEANING,
              onChange: N,
              disabled: T
            }
          )
        ]
      }
    )
  ] });
}
function eN({
  cleaningMode: a,
  cleaningModeList: i,
  onSelect: o,
  entityId: l,
  t: c,
  disabled: d = !1,
  customizeSelected: _ = !1,
  hideCustomize: m = !1
}) {
  const g = m ? i.filter((f) => f !== he.CUSTOMIZE) : i;
  return /* @__PURE__ */ h.jsx("div", { className: `cleaning-mode-modal__power-grid ${d ? "cleaning-mode-modal__power-grid--disabled" : ""}`, children: g.map((f, v) => {
    const y = f === he.CUSTOMIZE ? _ : f === a && !_;
    return /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
      /* @__PURE__ */ h.jsx(
        $a,
        {
          size: "small",
          selected: y,
          onClick: () => {
            if (d) return;
            const w = f === he.CUSTOMIZE ? he.CUSTOMIZE : jw(f);
            o(l, w);
          },
          icon: nT(f)
        }
      ),
      /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: Jk(f, c) })
    ] }, v);
  }) });
}
const tN = ["Quiet", "Standard", "Strong", "Turbo"];
function aN({
  suctionLevel: a,
  suctionLevelList: i,
  maxSuctionPower: o,
  onSelectSuctionLevel: l,
  onToggleMaxPower: c,
  suctionLevelEntityId: d,
  maxSuctionPowerEntityId: _,
  maxPlusDescription: m,
  t: g,
  suctionLevelDisabled: f = !1,
  maxPowerDisabled: v = !1,
  hideMaxPower: y = !1
}) {
  const w = i.length > 0 ? i : tN, E = f || !y && o;
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: `cleaning-mode-modal__power-grid ${E ? "cleaning-mode-modal__power-grid--disabled" : ""}`,
        children: w.map((T, N) => /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
          /* @__PURE__ */ h.jsx(
            $a,
            {
              size: "small",
              selected: !o && T === a,
              onClick: () => !E && l(d, or(T)),
              icon: oT(T),
              disabled: E
            }
          ),
          /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__power-label", children: aT(T, g) })
        ] }, N))
      }
    ),
    !y && /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__max-plus", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__max-plus-header", children: [
        /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__max-plus-title", children: "Max+" }),
        /* @__PURE__ */ h.jsx(
          sd,
          {
            checked: o,
            disabled: v,
            onChange: (T) => c(_, T)
          }
        )
      ] }),
      /* @__PURE__ */ h.jsx("p", { className: "cleaning-mode-modal__max-plus-description", children: m })
    ] })
  ] });
}
function nN({
  wetnessLevel: a,
  mopPadHumidity: i,
  onChangeWetness: o,
  entityId: l,
  slightlyDryLabel: c,
  moistLabel: d,
  wetLabel: _,
  disabled: m = !1
}) {
  const [g, f] = D.useState(a), v = ad();
  D.useEffect(() => {
    f(a);
  }, [a]);
  const { MIN: y, MAX: w } = Ow.WETNESS, E = (g - y) / (w - y) * 100, T = 20, N = `calc(${E}% + ${T / 2 - E * T / 100}px)`, L = (P) => {
    m || f(parseInt(P.target.value));
  }, R = () => {
    !m && g !== a && o(l, g);
  }, U = v ? "to left" : "to right", Y = [
    { humidity: li.SLIGHTLY_DRY, text: c },
    { humidity: li.MOIST, text: d },
    { humidity: li.WET, text: _ }
  ];
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: `cleaning-mode-modal__slider-container ${m ? "cleaning-mode-modal__slider-container--disabled" : ""}`,
        children: /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "range",
              min: y,
              max: w,
              value: g,
              onChange: L,
              onMouseUp: R,
              onTouchEnd: R,
              disabled: m,
              className: "cleaning-mode-modal__slider",
              style: {
                background: `linear-gradient(${U}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${E}%, var(--accent-bg-secondary-hover) ${E}%, var(--accent-bg-secondary-hover) 100%)`
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "div",
            {
              className: "cleaning-mode-modal__slider-tooltip",
              style: v ? { right: N } : { left: N },
              children: g
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__slider-labels", children: Y.map(({ humidity: P, text: H }) => /* @__PURE__ */ h.jsx(
      "span",
      {
        className: `cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--${i === P ? "active" : "inactive"}`,
        children: H
      },
      P
    )) })
  ] });
}
const iN = ["Low", "Medium", "High"];
function oN({
  waterVolume: a,
  waterVolumeList: i,
  onSelect: o,
  entityId: l,
  t: c,
  disabled: d = !1
}) {
  const _ = i.length > 0 ? i : iN;
  return /* @__PURE__ */ h.jsx("div", { className: `cleaning-mode-modal__power-grid ${d ? "cleaning-mode-modal__power-grid--disabled" : ""}`, children: _.map((m, g) => /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
    /* @__PURE__ */ h.jsx(
      $a,
      {
        size: "small",
        selected: m === a,
        onClick: () => !d && o(l, or(m)),
        icon: sT(),
        disabled: d
      }
    ),
    /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__power-label", children: cT(m, c) })
  ] }, g)) });
}
const rN = ["Slightly dry", "Moist", "Wet"];
function lN({
  mopPadHumidity: a,
  mopPadHumidityList: i,
  onSelect: o,
  entityId: l,
  t: c,
  disabled: d = !1
}) {
  const _ = i.length > 0 ? i : rN;
  return /* @__PURE__ */ h.jsx("div", { className: `cleaning-mode-modal__power-grid ${d ? "cleaning-mode-modal__power-grid--disabled" : ""}`, children: _.map((m, g) => /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
    /* @__PURE__ */ h.jsx(
      $a,
      {
        size: "small",
        selected: m === a,
        onClick: () => !d && o(l, or(m)),
        icon: uT(),
        disabled: d
      }
    ),
    /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__power-label", children: dT(m, c) })
  ] }, g)) });
}
const hg = {
  "By room": "mop_washing_frequency.by_room",
  "By area": "mop_washing_frequency.by_area",
  "By time": "mop_washing_frequency.by_time"
};
function sN(a, i) {
  return i && hg[a] ? i(hg[a]) : a;
}
function cN({
  selfCleanFrequency: a,
  selfCleanFrequencyList: i,
  selfCleanArea: o,
  selfCleanAreaMin: l,
  selfCleanAreaMax: c,
  selfCleanTime: d,
  selfCleanTimeMin: _,
  selfCleanTimeMax: m,
  onSelectFrequency: g,
  onChangeArea: f,
  onChangeTime: v,
  frequencyEntityId: y,
  areaEntityId: w,
  timeEntityId: E,
  t: T,
  frequencyDisabled: N = !1,
  areaDisabled: L = !1,
  timeDisabled: R = !1
}) {
  const [U, Y] = D.useState(o), [P, H] = D.useState(d), F = td(), Z = ad();
  D.useEffect(() => {
    Y(o);
  }, [o]), D.useEffect(() => {
    H(d);
  }, [d]);
  const W = a === "By area", ae = a === "By time", re = W || ae, fe = W ? U : P, ie = W ? l : _, Ce = W ? c : m, we = (fe - ie) / (Ce - ie) * 100, xe = 20, M = `calc(${we}% + ${xe / 2 - we * xe / 100}px)`, K = T ? T("units.minutes_short") : "m", Q = Z ? "to left" : "to right", _e = W ? L : R, pe = (q) => {
    if (_e) return;
    const X = parseInt(q.target.value);
    W ? Y(X) : H(X);
  }, z = () => {
    _e || (W && U !== o ? f(w, U) : ae && P !== d && v(E, P));
  };
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: `cleaning-mode-modal__horizontal-scroll ${N ? "cleaning-mode-modal__horizontal-scroll--disabled" : ""}`,
        children: i.map((q, X) => /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
          /* @__PURE__ */ h.jsx(
            $a,
            {
              size: "small",
              selected: q === a,
              onClick: () => !N && g(y, Uw(q)),
              icon: lT(q),
              disabled: N
            }
          ),
          /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: sN(q, T) })
        ] }, X))
      }
    ),
    re && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: `cleaning-mode-modal__slider-container ${_e ? "cleaning-mode-modal__slider-container--disabled" : ""}`,
        style: { marginTop: "1rem" },
        children: /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "range",
              min: ie,
              max: Ce,
              value: fe,
              onChange: pe,
              onMouseUp: z,
              onTouchEnd: z,
              disabled: _e,
              className: "cleaning-mode-modal__slider",
              style: {
                background: `linear-gradient(${Q}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${we}%, var(--accent-bg-secondary-hover) ${we}%, var(--accent-bg-secondary-hover) 100%)`
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "div",
            {
              className: "cleaning-mode-modal__slider-tooltip",
              style: Z ? { right: M } : { left: M },
              children: W ? `${U}${F}` : `${P}${K}`
            }
          )
        ] })
      }
    )
  ] });
}
function uN(a, i) {
  const o = `cleaning_routes.${a.toLowerCase()}`, l = i(o);
  return l === o ? a : l;
}
function dN({
  cleaningRoute: a,
  cleaningRouteList: i,
  onSelect: o,
  entityId: l,
  disabled: c = !1
}) {
  const { t: d } = He();
  return /* @__PURE__ */ h.jsx("div", { className: `cleaning-mode-modal__route-grid ${c ? "cleaning-mode-modal__route-grid--disabled" : ""}`, children: i.map((_, m) => /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__route-option", children: [
    /* @__PURE__ */ h.jsx(
      $a,
      {
        size: "small",
        selected: _ === a,
        onClick: () => !c && o(l, or(_)),
        icon: rT(_),
        disabled: c
      }
    ),
    /* @__PURE__ */ h.jsx("span", { className: "cleaning-mode-modal__route-label", children: uN(_, d) })
  ] }, m)) });
}
function _N({
  cleaningMode: a,
  cleaningModeList: i,
  suctionLevel: o,
  suctionLevelList: l,
  wetnessLevel: c,
  mopPadHumidity: d,
  mopPadHumidityList: _,
  waterVolume: m,
  waterVolumeList: g,
  cleaningRoute: f,
  cleaningRouteList: v,
  maxSuctionPower: y,
  selfCleanArea: w,
  selfCleanFrequency: E,
  selfCleanFrequencyList: T,
  selfCleanAreaMin: N,
  selfCleanAreaMax: L,
  selfCleanTime: R,
  selfCleanTimeMin: U,
  selfCleanTimeMax: Y,
  baseEntityId: P,
  onCleaningModeSelect: H,
  showOnlyCleaningModeSelector: F = !1
}) {
  const Z = Rt(), W = Bt(), { controls: ae, phase: re, isCustomizedCleaning: fe } = Ma(), { setSelectOption: ie, setSwitch: Ce, setNumber: we, setFanSpeed: xe } = Iu(Z), M = Bu(P), { t: K } = He(), Q = lr(), _e = Q.has(at.MAX_SUCTION_POWER), pe = Q.has(at.WETNESS_LEVEL), z = Q.has(at.SELF_CLEAN_FREQUENCY), q = Q.has(at.CLEANING_ROUTE), X = Q.has(at.SELF_WASH_BASE), $ = !pe && !X && g.length > 0, ee = X && !pe && _.length > 0, le = vt(Z, M.cleaningMode), ve = re === "cleaning" || re === "paused", Ze = H ?? ie, Le = D.useCallback(
    (ea, Dt) => {
      if (ve && !fe) {
        const ga = {
          quiet: "silent",
          standard: "standard",
          strong: "strong",
          turbo: "turbo"
        };
        xe(W.entity_id, ga[Dt] ?? Dt);
      } else ve || ie(M.suctionLevel, Dt);
    },
    [ve, fe, xe, ie, W.entity_id, M.suctionLevel]
  ), kt = ve || !F && le.unavailable;
  return /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.cleaning_mode_title") }),
      /* @__PURE__ */ h.jsx(
        eN,
        {
          cleaningMode: a,
          cleaningModeList: i,
          onSelect: Ze,
          entityId: M.cleaningMode,
          t: K,
          customizeSelected: F,
          hideCustomize: ve,
          disabled: kt
        }
      )
    ] }),
    !F && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.suction_power_title") }),
        /* @__PURE__ */ h.jsx(
          aN,
          {
            suctionLevel: o,
            suctionLevelList: l,
            maxSuctionPower: y,
            onSelectSuctionLevel: Le,
            onToggleMaxPower: Ce,
            suctionLevelEntityId: M.suctionLevel,
            maxSuctionPowerEntityId: M.maxSuctionPower,
            maxPlusDescription: K("custom_mode.max_plus_description"),
            t: K,
            suctionLevelDisabled: !ae.canChangeSuctionPower,
            maxPowerDisabled: !ae.canToggleMaxPower,
            hideMaxPower: !_e
          }
        )
      ] }),
      $ && a !== he.SWEEPING && /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.water_volume_title") }),
        /* @__PURE__ */ h.jsx(
          oN,
          {
            waterVolume: m,
            waterVolumeList: g,
            onSelect: ie,
            entityId: M.waterVolume,
            t: K,
            disabled: !ae.canChangeWetness
          }
        )
      ] }),
      pe && a !== he.SWEEPING && /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.wetness_title") }),
        /* @__PURE__ */ h.jsx(
          nN,
          {
            wetnessLevel: c,
            mopPadHumidity: d,
            onChangeWetness: we,
            entityId: M.wetnessLevel,
            slightlyDryLabel: K("custom_mode.slightly_dry"),
            moistLabel: K("custom_mode.moist"),
            wetLabel: K("custom_mode.wet"),
            disabled: !ae.canChangeWetness
          }
        )
      ] }),
      ee && a !== he.SWEEPING && /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.mop_pad_humidity_title") }),
        /* @__PURE__ */ h.jsx(
          lN,
          {
            mopPadHumidity: d,
            mopPadHumidityList: _,
            onSelect: ie,
            entityId: M.mopPadHumidity,
            t: K,
            disabled: !ae.canChangeWetness
          }
        )
      ] }),
      z && /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.mop_washing_frequency_title") }),
        /* @__PURE__ */ h.jsx(
          cN,
          {
            selfCleanFrequency: E,
            selfCleanFrequencyList: T,
            selfCleanArea: w,
            selfCleanAreaMin: N,
            selfCleanAreaMax: L,
            selfCleanTime: R,
            selfCleanTimeMin: U,
            selfCleanTimeMax: Y,
            onSelectFrequency: ie,
            onChangeArea: we,
            onChangeTime: we,
            frequencyEntityId: M.selfCleanFrequency,
            areaEntityId: M.selfCleanArea,
            timeEntityId: M.selfCleanTime,
            t: K,
            frequencyDisabled: !ae.canChangeMopFrequency,
            areaDisabled: !1,
            timeDisabled: !1
          }
        )
      ] }),
      q && v.length > 0 && /* @__PURE__ */ h.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__section-header", children: /* @__PURE__ */ h.jsx("h3", { className: "cleaning-mode-modal__section-title", children: K("custom_mode.route_title") }) }),
        /* @__PURE__ */ h.jsx(
          dN,
          {
            cleaningRoute: f,
            cleaningRouteList: v,
            onSelect: ie,
            entityId: M.cleaningRoute,
            disabled: !ae.canChangeRoute
          }
        )
      ] })
    ] })
  ] });
}
const mN = {
  quiet: Au,
  silent: Au,
  standard: Hu,
  strong: qg,
  turbo: Nu,
  max: Nu
}, fN = {
  light: /* @__PURE__ */ h.jsx(ql, { size: 18, strokeWidth: 1.5 }),
  normal: /* @__PURE__ */ h.jsx(ql, { size: 18, strokeWidth: 2.5 })
}, pN = {
  normal: /* @__PURE__ */ h.jsx(ku, { size: 18, strokeWidth: 1.5 }),
  warm: /* @__PURE__ */ h.jsx(ku, { size: 18, strokeWidth: 2.5 })
}, gN = {
  quiet: "Q",
  silent: "Q",
  standard: "S",
  strong: "T",
  turbo: "T",
  max: "M"
};
function hN(a) {
  return a ? gN[a] ?? a.charAt(0).toUpperCase() : "-";
}
function vN(a, i, o) {
  if (a === null) return "-";
  const l = (o - i) / 3;
  return a <= i + l ? "D" : a <= i + l * 2 ? "M" : "W";
}
function yN({
  value: a,
  min: i,
  max: o,
  onChange: l,
  slightlyDryLabel: c,
  moistLabel: d,
  wetLabel: _,
  disabled: m = !1
}) {
  const [g, f] = D.useState(a), v = ad();
  D.useEffect(() => {
    f(a);
  }, [a]);
  const y = (g - i) / (o - i) * 100, w = 20, E = `calc(${y}% + ${w / 2 - y * w / 100}px)`, T = (P) => {
    m || f(parseInt(P.target.value));
  }, N = () => {
    !m && g !== a && l(g);
  }, L = v ? "to left" : "to right", R = (o - i) / 3, U = g <= i + R ? "dry" : g <= i + R * 2 ? "moist" : "wet", Y = [
    { key: "dry", text: c },
    { key: "moist", text: d },
    { key: "wet", text: _ }
  ];
  return /* @__PURE__ */ h.jsxs("div", { className: `customize-mode__wetness-slider ${m ? "customize-mode__wetness-slider--disabled" : ""}`, children: [
    /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__slider-container", children: /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ h.jsx(
        "input",
        {
          type: "range",
          min: i,
          max: o,
          value: g,
          onChange: T,
          onMouseUp: N,
          onTouchEnd: N,
          disabled: m,
          className: "cleaning-mode-modal__slider",
          style: {
            background: `linear-gradient(${L}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${y}%, var(--accent-bg-secondary-hover) ${y}%, var(--accent-bg-secondary-hover) 100%)`
          }
        }
      ),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "cleaning-mode-modal__slider-tooltip",
          style: v ? { right: E } : { left: E },
          children: g
        }
      )
    ] }) }),
    /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__slider-labels", children: Y.map(({ key: P, text: H }) => /* @__PURE__ */ h.jsx(
      "span",
      {
        className: `cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--${U === P ? "active" : "inactive"}`,
        children: H
      },
      P
    )) })
  ] });
}
function bN({
  setting: a,
  setSuctionLevel: i,
  setWetnessLevel: o,
  setCleaningTimes: l,
  setMopPressure: c,
  setMopTemperature: d,
  t: _,
  suctionDisabled: m = !1,
  wetnessDisabled: g = !1,
  cleaningTimesDisabled: f = !1,
  mopPressureDisabled: v = !1,
  mopTemperatureDisabled: y = !1
}) {
  return /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__room-settings-content", children: [
    a.suctionLevelOptions.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ h.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.suction_power_title") }),
      /* @__PURE__ */ h.jsx("div", { className: `customize-mode__options ${m ? "customize-mode__options--disabled" : ""}`, children: a.suctionLevelOptions.map((w) => /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__option", children: [
        /* @__PURE__ */ h.jsx(
          $a,
          {
            size: "small",
            selected: a.suctionLevel === w,
            onClick: () => !m && i(a.roomId, w),
            icon: mN[w] || Hu,
            disabled: m
          }
        ),
        /* @__PURE__ */ h.jsx("span", { className: "customize-mode__option-label", children: _(`suction_levels.${w.toLowerCase()}`) })
      ] }, w)) })
    ] }),
    a.wetnessLevel !== null && /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ h.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.wetness_title") }),
      /* @__PURE__ */ h.jsx(
        yN,
        {
          value: a.wetnessLevel,
          min: a.wetnessMin,
          max: a.wetnessMax,
          onChange: (w) => o(a.roomId, w),
          slightlyDryLabel: _("custom_mode.slightly_dry"),
          moistLabel: _("custom_mode.moist"),
          wetLabel: _("custom_mode.wet"),
          disabled: g
        }
      )
    ] }),
    a.mopPressureOptions.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ h.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.mop_pressure_title") }),
      /* @__PURE__ */ h.jsx("div", { className: `customize-mode__options ${v ? "customize-mode__options--disabled" : ""}`, children: a.mopPressureOptions.map((w) => /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__option", children: [
        /* @__PURE__ */ h.jsx(
          $a,
          {
            size: "small",
            selected: a.mopPressure === w,
            onClick: () => !v && c(a.roomId, w),
            icon: fN[w.toLowerCase()] || /* @__PURE__ */ h.jsx(ql, { size: 18 }),
            disabled: v
          }
        ),
        /* @__PURE__ */ h.jsx("span", { className: "customize-mode__option-label", children: _(`mop_pressure.${w.toLowerCase()}`) })
      ] }, w)) })
    ] }),
    a.mopTemperatureOptions.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ h.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.mop_temperature_title") }),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: `customize-mode__options ${y ? "customize-mode__options--disabled" : ""}`,
          children: a.mopTemperatureOptions.map((w) => /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__option", children: [
            /* @__PURE__ */ h.jsx(
              $a,
              {
                size: "small",
                selected: a.mopTemperature === w,
                onClick: () => !y && d(a.roomId, w),
                icon: pN[w.toLowerCase()] || /* @__PURE__ */ h.jsx(ku, { size: 18 }),
                disabled: y
              }
            ),
            /* @__PURE__ */ h.jsx("span", { className: "customize-mode__option-label", children: _(`mop_temperature.${w.toLowerCase()}`) })
          ] }, w))
        }
      )
    ] }),
    a.cleaningTimesOptions.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ h.jsx("span", { className: "customize-mode__setting-label", children: _("customize.cycles") }),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: `customize-mode__options customize-mode__options--pills ${f ? "customize-mode__options--disabled" : ""}`,
          children: a.cleaningTimesOptions.map((w) => /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `customize-mode__pill customize-mode__pill--cycle ${a.cleaningTimes === w ? "customize-mode__pill--selected" : ""}`,
              onClick: () => !f && l(a.roomId, w),
              disabled: f,
              children: w
            },
            w
          ))
        }
      )
    ] })
  ] });
}
function wN({ baseEntityId: a }) {
  const { t: i } = He(), o = Rt(), l = ht("camera", a, cw.MAP.key), c = yh(o, l), { roomSettings: d, setSuctionLevel: _, setWetnessLevel: m, setCleaningTimes: g, setMopPressure: f, setMopTemperature: v } = Yk({
    hass: o,
    baseEntityId: a,
    rooms: c.map((w) => ({ id: w.id, name: w.name }))
  });
  if (c.length === 0)
    return /* @__PURE__ */ h.jsx("div", { className: "customize-mode", children: /* @__PURE__ */ h.jsx("div", { className: "customize-mode__empty", children: /* @__PURE__ */ h.jsx("p", { children: i("customize.no_rooms") }) }) });
  const y = c.filter((w) => d.get(w.id)?.hasEntities);
  return y.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "customize-mode", children: /* @__PURE__ */ h.jsx("div", { className: "customize-mode__empty", children: /* @__PURE__ */ h.jsx("p", { children: i("customize.no_rooms") }) }) }) : /* @__PURE__ */ h.jsx("div", { className: "customize-mode", children: /* @__PURE__ */ h.jsx("div", { className: "customize-mode__room-accordions", children: y.map((w) => {
    const E = d.get(w.id);
    if (!E) return null;
    const T = Mt(
      "select",
      a,
      w.id,
      da.SUCTION_LEVEL.key
    ), N = Mt(
      "number",
      a,
      w.id,
      Tu.WETNESS_LEVEL.key
    ), L = Mt(
      "select",
      a,
      w.id,
      da.CLEANING_TIMES.key
    ), R = Mt(
      "select",
      a,
      w.id,
      da.MOP_PRESSURE.key
    ), U = Mt(
      "select",
      a,
      w.id,
      da.MOP_TEMPERATURE.key
    ), Y = vt(o, T), P = vt(o, N), H = vt(o, L), F = vt(o, R), Z = vt(o, U), W = [];
    return E.suctionLevel && W.push(hN(E.suctionLevel)), E.wetnessLevel !== null && W.push(vN(E.wetnessLevel, E.wetnessMin, E.wetnessMax)), E.cleaningTimes && W.push(`${E.cleaningTimes}`), /* @__PURE__ */ h.jsx(
      wa,
      {
        title: w.name,
        icon: /* @__PURE__ */ h.jsx("span", { className: "customize-mode__badges", children: W.map((ae, re) => /* @__PURE__ */ h.jsx("span", { className: "customize-mode__badge", children: ae }, re)) }),
        children: /* @__PURE__ */ h.jsx(
          bN,
          {
            setting: E,
            setSuctionLevel: _,
            setWetnessLevel: m,
            setCleaningTimes: g,
            setMopPressure: f,
            setMopTemperature: v,
            t: i,
            suctionDisabled: Y.unavailable,
            wetnessDisabled: P.unavailable,
            cleaningTimesDisabled: H.unavailable,
            mopPressureDisabled: F.unavailable,
            mopTemperatureDisabled: Z.unavailable
          }
        )
      },
      w.id
    );
  }) }) });
}
function SN({ opened: a, onClose: i }) {
  const { t: o } = He(), l = Bt(), c = Rt(), { phase: d, isCustomizedCleaning: _ } = Ma(), m = Pu(l.entity_id), { setSelectOption: g } = Iu(c), f = Bu(m), y = lr().has(at.CLEANGENIUS), w = d === "cleaning" || d === "paused", E = ht("switch", m, qu.CUSTOMIZED_CLEANING.key), T = vt(c, f.cleangenius), N = (wt, ha) => {
    const Ja = l.attributes[wt];
    return Array.isArray(Ja) ? Ja : ha;
  }, L = T.state?.toLowerCase(), R = je(l.attributes.cleangenius, Ca.OFF), Y = L && L !== "unavailable" && L !== "unknown" ? L !== "off" : R !== Ca.OFF, P = R, H = je(l.attributes.cleaning_mode, Et.CLEANING_MODE), F = je(l.attributes.cleangenius_mode, Et.CLEANGENIUS_MODE), Z = je(l.attributes.suction_level, Et.SUCTION_LEVEL), W = je(l.attributes.wetness_level, Et.WETNESS_LEVEL), ae = je(l.attributes.water_volume, Et.WATER_VOLUME), re = je(l.attributes.cleaning_route, Et.CLEANING_ROUTE), fe = je(l.attributes.max_suction_power, Et.MAX_SUCTION_POWER), ie = je(l.attributes.self_clean_area, Et.SELF_CLEAN_AREA), Ce = je(l.attributes.self_clean_frequency, Et.SELF_CLEAN_FREQUENCY), we = je(l.attributes.mop_pad_humidity, Et.MOP_PAD_HUMIDITY), xe = N("self_clean_frequency_list", []), M = xe.length > 0 ? xe : ["By area", "By time", "By room"], K = je(l.attributes.self_clean_area_min, Et.SELF_CLEAN_AREA_MIN), Q = je(l.attributes.self_clean_area_max, Et.SELF_CLEAN_AREA_MAX), _e = je(l.attributes.previous_self_clean_time, Et.SELF_CLEAN_TIME), pe = je(l.attributes.self_clean_time_min, Et.SELF_CLEAN_TIME_MIN), z = je(l.attributes.self_clean_time_max, Et.SELF_CLEAN_TIME_MAX), q = [
    { value: Jo.CLEANGENIUS, label: o("cleaning_mode.clean_genius") },
    { value: Jo.CUSTOM, label: o("cleaning_mode.custom") }
  ], X = N("cleaning_mode_list", []), ee = [...X.length > 0 ? X : ["Sweeping", "Mopping", "Sweeping and mopping", "Mopping after sweeping"], he.CUSTOMIZE], le = N("cleangenius_mode_list", []), ve = le.length > 0 ? le : ["Vacuum and mop", "Mop after vacuum"], Ze = N("suction_level_list", []), Le = Ze.length > 0 ? Ze : ["Quiet", "Standard", "Strong", "Turbo"], kt = N("water_volume_list", []), ea = kt.length > 0 ? kt : ["Low", "Medium", "High"], Dt = N("mop_pad_humidity_list", []), ga = Dt.length > 0 ? Dt : ["Slightly dry", "Moist", "Wet"], Tt = N("cleaning_route_list", []), jn = Tt.length > 0 ? Tt : ["Quick", "Standard", "Intensive", "Deep"], Ln = w || T.unavailable, Un = y && Y, di = (wt) => {
    const ha = wt === Jo.CLEANGENIUS;
    ha && _ && c.callService("switch", "turn_off", { entity_id: E });
    const Ja = ha ? Ca.ROUTINE_CLEANING : Ca.OFF;
    g(f.cleangenius, Ig(Ja));
  }, bt = (wt, ha) => {
    if (ha === he.CUSTOMIZE) {
      te.debug("CleaningModeModal", "Enabling customized cleaning"), c.callService("switch", "turn_on", { entity_id: E });
      return;
    }
    _ ? (te.debug("CleaningModeModal", "Disabling customized cleaning"), c.callService("switch", "turn_off", { entity_id: E }), setTimeout(() => g(wt, ha), 300)) : g(wt, ha);
  }, At = !Un && _;
  return /* @__PURE__ */ h.jsx(cd, { opened: a, onClose: i, children: /* @__PURE__ */ h.jsxs("div", { className: "cleaning-mode-modal", children: [
    y && /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__header", children: /* @__PURE__ */ h.jsx(
      Vh,
      {
        value: Un ? Jo.CLEANGENIUS : Jo.CUSTOM,
        onChange: di,
        options: q,
        disabled: Ln
      }
    ) }),
    /* @__PURE__ */ h.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: Un ? /* @__PURE__ */ h.jsx(
      J2,
      {
        cleangeniusMode: F,
        cleangeniusModeList: ve,
        cleangenius: P,
        baseEntityId: m
      }
    ) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        _N,
        {
          cleaningMode: _ ? he.CUSTOMIZE : H,
          cleaningModeList: ee,
          suctionLevel: Z,
          suctionLevelList: Le,
          wetnessLevel: W,
          mopPadHumidity: we,
          mopPadHumidityList: ga,
          waterVolume: ae,
          waterVolumeList: ea,
          cleaningRoute: re,
          cleaningRouteList: jn,
          maxSuctionPower: fe,
          selfCleanArea: ie,
          selfCleanFrequency: Ce,
          selfCleanFrequencyList: M,
          selfCleanAreaMin: K,
          selfCleanAreaMax: Q,
          selfCleanTime: _e,
          selfCleanTimeMin: pe,
          selfCleanTimeMax: z,
          baseEntityId: m,
          onCleaningModeSelect: bt,
          showOnlyCleaningModeSelector: At
        }
      ),
      At && /* @__PURE__ */ h.jsx(wN, { baseEntityId: m })
    ] }) })
  ] }) });
}
function EN({ opened: a, onClose: i }) {
  const { t: o } = He(), l = Bt(), c = Rt(), d = l.attributes.shortcuts || {}, _ = Object.entries(d).map(([v, y]) => ({
    id: parseInt(v),
    ...y
  })), g = vt(c, l.entity_id).disabled, f = (v) => {
    g || (c.callService("dreame_vacuum", "vacuum_start_shortcut", {
      entity_id: l.entity_id,
      shortcut_id: v
    }), i());
  };
  return /* @__PURE__ */ h.jsx(cd, { opened: a, onClose: i, children: /* @__PURE__ */ h.jsxs("div", { className: "shortcuts-modal", children: [
    /* @__PURE__ */ h.jsx("h2", { className: "shortcuts-modal__title", children: o("shortcuts.title") }),
    _.length === 0 ? /* @__PURE__ */ h.jsxs("div", { className: "shortcuts-modal__empty", children: [
      /* @__PURE__ */ h.jsx("p", { children: o("shortcuts.no_shortcuts") }),
      /* @__PURE__ */ h.jsx("p", { className: "shortcuts-modal__empty-hint", children: o("shortcuts.create_hint") })
    ] }) : /* @__PURE__ */ h.jsx("div", { className: "shortcuts-modal__list", children: _.map((v) => /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: `shortcuts-modal__item ${g ? "shortcuts-modal__item--disabled" : ""}`,
        onClick: () => f(v.id),
        disabled: g,
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "shortcuts-modal__item-icon", children: Sw }),
          /* @__PURE__ */ h.jsx("span", { className: "shortcuts-modal__item-name", children: v.name })
        ]
      },
      v.id
    )) })
  ] }) });
}
function zN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Rt(), d = l.entity_id.split(".")[1] ?? "", _ = hh(c, d, a.key), m = D.useCallback(
    (g) => {
      c.callService("switch", g ? "turn_on" : "turn_off", {
        entity_id: _.entityId
      });
    },
    [c, _.entityId]
  );
  return _.disabled ? null : /* @__PURE__ */ h.jsxs("div", { className: `entity-item ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ h.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ h.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ h.jsx(sd, { checked: _.isOn, disabled: _.unavailable, onChange: m })
  ] });
}
function vg(a) {
  return a.split("_").map((i) => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()).join(" ");
}
function kN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Rt(), d = l.entity_id.split(".")[1] ?? "", _ = `select.${d}_${a.key}`, m = vh(c, d, a.key), g = m.attributes.options ?? [], f = D.useCallback(
    (y) => {
      c.callService("select", "select_option", {
        entity_id: _,
        option: y
      });
    },
    [c, _]
  );
  if (m.disabled || g.length === 0) return null;
  const v = m.state ?? g[0] ?? "";
  if (a.useSegmentedControl) {
    const y = g.map((w) => ({
      value: w,
      label: vg(w)
    }));
    return /* @__PURE__ */ h.jsxs("div", { className: `entity-item entity-item--segmented ${i ? "entity-item--child" : ""}`, children: [
      /* @__PURE__ */ h.jsxs("div", { className: "entity-item__info", children: [
        /* @__PURE__ */ h.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
        a.descriptionKey && /* @__PURE__ */ h.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
      ] }),
      /* @__PURE__ */ h.jsx(
        Vh,
        {
          options: y,
          value: v,
          onChange: f,
          disabled: m.unavailable
        }
      )
    ] });
  }
  return /* @__PURE__ */ h.jsxs("div", { className: `entity-item entity-item--select ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ h.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ h.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        className: "entity-item__select",
        value: v,
        disabled: m.unavailable,
        onChange: (y) => f(y.target.value),
        children: g.map((y) => /* @__PURE__ */ h.jsx("option", { value: y, children: vg(y) }, y))
      }
    )
  ] });
}
function TN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Rt(), d = l.entity_id.split(".")[1] ?? "", _ = Zk(c, d, a.key), m = a.min ?? _.attributes.min ?? 0, g = a.max ?? _.attributes.max ?? 100, f = a.step ?? _.attributes.step ?? 1, v = D.useCallback(
    (E) => {
      c.callService("number", "set_value", {
        entity_id: _.entityId,
        value: E
      });
    },
    [c, _.entityId]
  );
  if (_.disabled) return null;
  const y = a.renderHint ?? "slider", w = y === "volume" ? "entity-item__slider--volume" : y === "brightness" ? "entity-item__slider--brightness" : "";
  return /* @__PURE__ */ h.jsxs("div", { className: `entity-item entity-item--slider ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ h.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ h.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: `entity-item__slider-container ${w}`, children: [
      /* @__PURE__ */ h.jsx(
        "input",
        {
          type: "range",
          className: "entity-item__slider",
          min: m,
          max: g,
          step: f,
          value: _.numericValue,
          disabled: _.unavailable,
          onChange: (E) => v(Number(E.target.value))
        }
      ),
      /* @__PURE__ */ h.jsxs("span", { className: "entity-item__slider-value", children: [
        Math.round(_.numericValue),
        y === "volume" || y === "brightness" ? "%" : ""
      ] })
    ] })
  ] });
}
function AN({ definition: a, isChild: i = !1, buttonLabel: o }) {
  const { t: l } = He(), c = Bt(), d = Rt(), _ = c.entity_id.split(".")[1] ?? "", m = Vk(d, _, a.key), g = D.useCallback(() => {
    d.callService("button", "press", {
      entity_id: m.entityId
    });
  }, [d, m.entityId]);
  return m.disabled ? null : /* @__PURE__ */ h.jsxs("div", { className: `entity-item ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ h.jsx("span", { className: "entity-item__label", children: l(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ h.jsx("span", { className: "entity-item__description", children: l(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ h.jsx("button", { className: "entity-item__button", disabled: m.unavailable, onClick: g, children: o ?? l("common.run") })
  ] });
}
function NN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Rt(), d = l.entity_id.split(".")[1] ?? "", _ = Kk(c, d, a.key), m = D.useCallback(
    (g) => {
      c.callService("time", "set_value", {
        entity_id: _.entityId,
        time: g
      });
    },
    [c, _.entityId]
  );
  return _.disabled ? null : /* @__PURE__ */ h.jsxs("div", { className: `entity-item entity-item--time ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ h.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ h.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "time",
        className: "entity-item__time-input",
        value: _.timeValue,
        disabled: _.unavailable,
        onChange: (g) => m(g.target.value)
      }
    )
  ] });
}
function CN({ definition: a, isChild: i = !1 }) {
  const o = Bt(), l = Rt(), c = o.entity_id.split(".")[1] ?? "", d = lr();
  if (a.capability && !d.has(a.capability) || a.parentKey && !hh(l, c, a.parentKey).isOn)
    return null;
  const _ = i || !!a.parentKey;
  switch (a.platform) {
    case "switch":
      return /* @__PURE__ */ h.jsx(zN, { definition: a, isChild: _ });
    case "select":
      return /* @__PURE__ */ h.jsx(kN, { definition: a, isChild: _ });
    case "number":
      return /* @__PURE__ */ h.jsx(TN, { definition: a, isChild: _ });
    case "button":
      return /* @__PURE__ */ h.jsx(AN, { definition: a, isChild: _ });
    case "time":
      return /* @__PURE__ */ h.jsx(NN, { definition: a, isChild: _ });
    default:
      return null;
  }
}
function Qa({ section: a, className: i }) {
  const o = lr();
  if (a.capabilities && a.capabilities.length > 0 && !a.capabilities.some((_) => o.has(_)))
    return null;
  const l = a.entities.map((d) => /* @__PURE__ */ h.jsx(CN, { definition: d }, d.key));
  return l.some((d) => d !== null) ? /* @__PURE__ */ h.jsx("div", { className: `data-driven-section ${i ?? ""}`, children: l }) : null;
}
function xN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: Dg, className: "ai-detection-section" });
}
function MN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: Cg, className: "carpet-settings-section" });
}
const ON = [
  {
    key: "main_brush",
    labelKey: "settings.consumables.main_brush",
    percentKey: Te.MAIN_BRUSH_LEFT.key,
    hoursKey: Te.MAIN_BRUSH_TIME_LEFT.key,
    consumableKey: "main_brush"
  },
  {
    key: "side_brush",
    labelKey: "settings.consumables.side_brush",
    percentKey: Te.SIDE_BRUSH_LEFT.key,
    hoursKey: Te.SIDE_BRUSH_TIME_LEFT.key,
    consumableKey: "side_brush"
  },
  {
    key: "filter",
    labelKey: "settings.consumables.filter",
    percentKey: Te.FILTER_LEFT.key,
    hoursKey: Te.FILTER_TIME_LEFT.key,
    consumableKey: "filter"
  },
  {
    key: "sensor",
    labelKey: "settings.consumables.sensor",
    percentKey: Te.SENSOR_DIRTY_LEFT.key,
    hoursKey: Te.SENSOR_DIRTY_TIME_LEFT.key,
    consumableKey: "sensor"
  },
  {
    key: "mop_pad",
    labelKey: "settings.consumables.mop_pad",
    percentKey: Te.MOP_PAD_LEFT.key,
    hoursKey: Te.MOP_PAD_TIME_LEFT.key,
    consumableKey: "mop_pad"
  },
  {
    key: "silver_ion",
    labelKey: "settings.consumables.silver_ion",
    percentKey: Te.SILVER_ION_LEFT.key,
    hoursKey: Te.SILVER_ION_TIME_LEFT.key,
    consumableKey: "silver_ion"
  },
  {
    key: "detergent",
    labelKey: "settings.consumables.detergent",
    percentKey: Te.DETERGENT_LEFT.key,
    hoursKey: Te.DETERGENT_TIME_LEFT.key,
    consumableKey: "detergent"
  },
  {
    key: "squeegee",
    labelKey: "settings.consumables.squeegee",
    percentKey: Te.SQUEEGEE_LEFT.key,
    hoursKey: Te.SQUEEGEE_TIME_LEFT.key,
    consumableKey: "squeegee"
  },
  {
    key: "tank_filter",
    labelKey: "settings.consumables.tank_filter",
    percentKey: Te.TANK_FILTER_LEFT.key,
    hoursKey: Te.TANK_FILTER_TIME_LEFT.key,
    consumableKey: "tank_filter"
  },
  {
    key: "onboard_dirty_water_tank",
    labelKey: "settings.consumables.onboard_dirty_water_tank",
    percentKey: Te.ONBOARD_DIRTY_WATER_TANK_LEFT.key,
    hoursKey: Te.ONBOARD_DIRTY_WATER_TANK_TIME_LEFT.key,
    consumableKey: "onboard_dirty_water_tank"
  },
  {
    key: "dirty_water_channel",
    labelKey: "settings.consumables.dirty_water_channel",
    percentKey: Te.DIRTY_WATER_CHANNEL_DIRTY_LEFT.key,
    hoursKey: Te.DIRTY_WATER_CHANNEL_DIRTY_TIME_LEFT.key,
    consumableKey: "dirty_water_channel"
  },
  {
    key: "deodorizer",
    labelKey: "settings.consumables.deodorizer",
    percentKey: Te.DEODORIZER_LEFT.key,
    hoursKey: Te.DEODORIZER_TIME_LEFT.key,
    consumableKey: "deodorizer"
  },
  {
    key: "wheel",
    labelKey: "settings.consumables.wheel",
    percentKey: Te.WHEEL_DIRTY_LEFT.key,
    hoursKey: Te.WHEEL_DIRTY_TIME_LEFT.key,
    consumableKey: "wheel"
  },
  {
    key: "scale_inhibitor",
    labelKey: "settings.consumables.scale_inhibitor",
    percentKey: Te.SCALE_INHIBITOR_LEFT.key,
    hoursKey: Te.SCALE_INHIBITOR_TIME_LEFT.key,
    consumableKey: "scale_inhibitor"
  },
  {
    key: "fluffing_roller",
    labelKey: "settings.consumables.fluffing_roller",
    percentKey: Te.FLUFFING_ROLLER_DIRTY_LEFT.key,
    hoursKey: Te.FLUFFING_ROLLER_DIRTY_TIME_LEFT.key,
    consumableKey: "fluffing_roller"
  },
  {
    key: "roller_mop_filter",
    labelKey: "settings.consumables.roller_mop_filter",
    percentKey: Te.ROLLER_MOP_FILTER_DIRTY_LEFT.key,
    hoursKey: Te.ROLLER_MOP_FILTER_DIRTY_TIME_LEFT.key,
    consumableKey: "roller_mop_filter"
  },
  {
    key: "water_outlet_filter",
    labelKey: "settings.consumables.water_outlet_filter",
    percentKey: Te.WATER_OUTLET_FILTER_DIRTY_LEFT.key,
    hoursKey: Te.WATER_OUTLET_FILTER_DIRTY_TIME_LEFT.key,
    consumableKey: "water_outlet_filter"
  }
];
function RN() {
  const { t: a } = He(), i = Bt(), o = Rt(), l = i.attributes, c = D.useCallback(
    (m) => {
      o.callService(wp.VACUUM_RESET_CONSUMABLE.domain, wp.VACUUM_RESET_CONSUMABLE.key, {
        entity_id: i.entity_id,
        consumable: m
      });
    },
    [o, i.entity_id]
  ), d = (m) => m >= 50 ? "var(--consumable-good, #34c759)" : m >= 20 ? "var(--consumable-warning, #ff9500)" : "var(--consumable-critical, #ff3b30)", _ = ON.filter((m) => {
    const g = l[m.percentKey];
    return g != null;
  });
  return _.length === 0 ? null : /* @__PURE__ */ h.jsx("div", { className: "consumables-section", children: _.map((m) => {
    const g = je(l[m.percentKey], 0), f = je(l[m.hoursKey], 0), v = d(g);
    return /* @__PURE__ */ h.jsxs("div", { className: "consumables-section__item", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "consumables-section__info", children: [
        /* @__PURE__ */ h.jsx("span", { className: "consumables-section__label", children: a(m.labelKey) }),
        /* @__PURE__ */ h.jsxs("span", { className: "consumables-section__stats", children: [
          g,
          "% · ",
          f,
          "h ",
          a("settings.consumables.remaining")
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "consumables-section__progress", children: /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "consumables-section__progress-bar",
          style: {
            width: `${g}%`,
            backgroundColor: v
          }
        }
      ) }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: "consumables-section__reset",
          onClick: () => c(m.consumableKey),
          type: "button",
          children: a("settings.consumables.reset")
        }
      )
    ] }, m.key);
  }) });
}
function DN() {
  const { t: a } = He(), i = td(), l = Bt().attributes, c = l.firmware_version, d = Ek(c) || Nn(c) ? c : "-", _ = je(l.total_cleaned_area, 0), m = je(l.total_cleaning_time, 0), g = je(l.cleaning_count, 0), f = l.ap, v = f?.ssid ?? "-", y = f?.rssi ?? "-", w = f?.ip ?? "-", E = [
    { labelKey: "settings.device_info.firmware", value: d },
    { labelKey: "settings.device_info.total_area", value: _, unit: i },
    { labelKey: "settings.device_info.total_time", value: m, unit: a("units.minutes") },
    { labelKey: "settings.device_info.total_cleans", value: g },
    { labelKey: "settings.device_info.wifi_ssid", value: v },
    { labelKey: "settings.device_info.wifi_signal", value: y, unit: a("units.decibels") },
    { labelKey: "settings.device_info.ip_address", value: w }
  ];
  return /* @__PURE__ */ h.jsx("div", { className: "device-info-section", children: E.map((T) => /* @__PURE__ */ h.jsxs("div", { className: "device-info-section__item", children: [
    /* @__PURE__ */ h.jsx("span", { className: "device-info-section__label", children: a(T.labelKey) }),
    /* @__PURE__ */ h.jsxs("span", { className: "device-info-section__value", children: [
      T.value,
      T.unit && ` ${T.unit}`
    ] })
  ] }, T.labelKey)) });
}
function jN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: Rg, className: "dock-settings-section" });
}
function LN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: Mg, className: "edge-corner-section" });
}
function UN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: xg, className: "floor-settings-section" });
}
function qN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: jg, className: "map-settings-section" });
}
function GN() {
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(Qa, { section: Ag, className: "quick-settings-section" }),
    /* @__PURE__ */ h.jsx(
      Qa,
      {
        section: Ng,
        className: "quick-settings-section quick-settings-section--actions"
      }
    )
  ] });
}
function HN() {
  return /* @__PURE__ */ h.jsx(Qa, { section: Og, className: "volume-section" });
}
function IN({ opened: a, onClose: i }) {
  const { t: o } = He(), l = lr(), c = l.has(at.CARPET_RECOGNITION), d = l.has(at.AI_DETECTION), _ = l.hasAny(
    at.MOP_PAD_LIFTING,
    at.SIDE_REACH,
    at.MOP_PAD_SWING
  ), m = l.hasAny(
    at.AUTO_EMPTY_BASE,
    at.SELF_WASH_BASE,
    at.AUTO_ADD_DETERGENT,
    at.SMART_MOP_WASHING,
    at.WASHING_MODE,
    at.HOT_WASHING,
    at.OFF_PEAK_CHARGING,
    at.STATION_CLEANING,
    at.AUTO_REWASHING
  );
  return /* @__PURE__ */ h.jsx(cd, { opened: a, onClose: i, children: /* @__PURE__ */ h.jsxs("div", { className: "settings-panel", children: [
    /* @__PURE__ */ h.jsx("h2", { className: "settings-panel__title", children: o("settings.title") }),
    /* @__PURE__ */ h.jsx("div", { className: "settings-panel__scroll-wrapper", children: /* @__PURE__ */ h.jsxs("div", { className: "settings-panel__sections", children: [
      /* @__PURE__ */ h.jsx(wa, { title: o("settings.consumables.title"), icon: /* @__PURE__ */ h.jsx(ql, {}), children: /* @__PURE__ */ h.jsx(RN, {}) }),
      /* @__PURE__ */ h.jsx(wa, { title: o("settings.quick_settings.title"), icon: /* @__PURE__ */ h.jsx(j0, {}), children: /* @__PURE__ */ h.jsx(GN, {}) }),
      c && /* @__PURE__ */ h.jsx(wa, { title: o("settings.carpet.title"), icon: /* @__PURE__ */ h.jsx(u0, {}), children: /* @__PURE__ */ h.jsx(MN, {}) }),
      /* @__PURE__ */ h.jsx(wa, { title: o("settings.floor.title"), icon: /* @__PURE__ */ h.jsx(t0, {}), children: /* @__PURE__ */ h.jsx(UN, {}) }),
      _ && /* @__PURE__ */ h.jsx(wa, { title: o("settings.edge_corner.title"), icon: /* @__PURE__ */ h.jsx(Wb, {}), children: /* @__PURE__ */ h.jsx(LN, {}) }),
      /* @__PURE__ */ h.jsx(wa, { title: o("settings.volume.title"), icon: /* @__PURE__ */ h.jsx(aw, {}), children: /* @__PURE__ */ h.jsx(HN, {}) }),
      m && /* @__PURE__ */ h.jsx(wa, { title: o("settings.dock.title"), icon: /* @__PURE__ */ h.jsx(Qb, {}), children: /* @__PURE__ */ h.jsx(jN, {}) }),
      d && /* @__PURE__ */ h.jsx(wa, { title: o("settings.ai_detection.title"), icon: /* @__PURE__ */ h.jsx(Bb, {}), children: /* @__PURE__ */ h.jsx(xN, {}) }),
      /* @__PURE__ */ h.jsx(wa, { title: o("settings.map.title"), icon: /* @__PURE__ */ h.jsx(Uu, {}), children: /* @__PURE__ */ h.jsx(qN, {}) }),
      /* @__PURE__ */ h.jsx(wa, { title: o("settings.device_info.title"), icon: /* @__PURE__ */ h.jsx(s0, {}), children: /* @__PURE__ */ h.jsx(DN, {}) })
    ] }) })
  ] }) });
}
function PN({ selectedRooms: a }) {
  const { t: i } = He();
  if (a.size === 0)
    return null;
  const o = Array.from(a.values()).join(", ");
  return /* @__PURE__ */ h.jsxs("div", { className: "room-selection-display", children: [
    /* @__PURE__ */ h.jsx("span", { className: "room-selection-display__label", children: i("room_display.selected_label") }),
    /* @__PURE__ */ h.jsx("span", { className: "room-selection-display__rooms", children: o })
  ] });
}
function BN({ hass: a, config: i }) {
  const o = a.states[i.entity];
  te.debug("DreameVacuumCard", "Loaded entity", o);
  const l = i.theme || "light", c = i.language || "en", d = Pg(c), { t: _ } = He(c), m = D.useRef(null), g = Ik({
    themeType: l,
    customThemeConfig: i.custom_theme,
    containerRef: m
  }), [f, v] = D.useState(null), {
    selectedMode: y,
    selectedRooms: w,
    selectedZone: E,
    modalOpened: T,
    shortcutsModalOpened: N,
    settingsPanelOpened: L,
    repeatCount: R,
    setSelectedMode: U,
    setSelectedRooms: Y,
    setSelectedZone: P,
    setModalOpened: H,
    setShortcutsModalOpened: F,
    setSettingsPanelOpened: Z,
    handleModeChange: W,
    handleRoomToggle: ae,
    cycleRepeatCount: re,
    resetRepeatCount: fe
  } = Iw({ defaultMode: i.default_mode }), ie = _T(a, i.entity, i.map_entity), Ce = o ? o.state === "cleaning" || je(o.attributes.started, !1) : !1, we = o ? o.attributes.segment_cleaning === !0 : !1;
  D.useEffect(() => {
    if (!we) return;
    const bt = pT(a, i.entity, ie);
    if (bt.size > 0) {
      const At = Array.from(w.keys()).sort(), wt = Array.from(bt.keys()).sort();
      (At.length !== wt.length || At.some((Ja, Nt) => Ja !== wt[Nt])) && (te.debug("DreameVacuumCard", "Syncing room selection with active segments", wt), Y(bt), U("room"));
    }
  }, [we, a, i.entity, ie, w, Y, U]), D.useEffect(() => {
    Ce || fe();
  }, [Ce, fe]);
  const { toast: xe, showToast: M, hideToast: K } = Lk(), Q = D.useCallback(
    (bt) => {
      M(bt);
    },
    [M]
  ), { handlePause: _e, handleStop: pe, handleDock: z, handleClean: q } = jk({
    hass: a,
    entityId: i.entity,
    mapEntityId: ie,
    onSuccess: M,
    onError: Q
  }), X = D.useCallback(
    (bt, At) => {
      const wt = w.has(bt);
      ae(bt, At), M(
        wt ? _("toast.deselected_room", { name: At }) : _("toast.selected_room", { name: At })
      );
    },
    [w, ae, M, _]
  ), $ = D.useCallback(() => {
    q(
      y,
      w,
      E,
      f?.width,
      f?.height,
      R
    );
  }, [y, w, E, f, R, q]), ee = D.useCallback(() => {
    a.callService("vacuum", "start", { entity_id: i.entity }), M(_("toast.resuming"));
  }, [a, i.entity, M, _]), le = D.useCallback(() => Z(!0), [Z]), ve = D.useCallback(() => Z(!1), [Z]), Ze = D.useCallback(() => H(!0), [H]), Le = D.useCallback(() => H(!1), [H]), kt = D.useCallback(() => F(!0), [F]), ea = D.useCallback(() => F(!1), [F]), Dt = D.useCallback(
    (bt, At) => v({ width: bt, height: At }),
    []
  );
  if (!o)
    return /* @__PURE__ */ h.jsx("div", { className: "dreame-vacuum-card__error", children: _("errors.entity_not_found", { entity: i.entity }) });
  if (o.state === "unavailable" || o.state === "unknown")
    return /* @__PURE__ */ h.jsx("div", { className: "dreame-vacuum-card__error dreame-vacuum-card__error--unavailable", children: _("errors.entity_unavailable") });
  const ga = mT(o, i);
  if (!ga)
    return /* @__PURE__ */ h.jsx("div", { className: "dreame-vacuum-card__error", children: _("errors.failed_to_load") });
  const { deviceName: Tt, mapEntityId: jn } = ga, Ln = jn || ie, Un = fT(o, y), di = (o.attributes.capabilities ?? []).includes(at.SHORTCUTS);
  return /* @__PURE__ */ h.jsx(Pk, { hass: a, entity: o, config: i, language: c, children: /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: m,
      className: `dreame-vacuum-card dreame-vacuum-card--${g.name}`,
      dir: d ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "dreame-vacuum-card__container", children: [
          /* @__PURE__ */ h.jsx(vT, { deviceName: Tt, onSettingsClick: le }),
          /* @__PURE__ */ h.jsx(yT, {}),
          /* @__PURE__ */ h.jsx(
            Y2,
            {
              mapEntityId: Ln,
              selectedMode: y,
              selectedRooms: w,
              onRoomToggle: X,
              zone: E,
              onZoneChange: P,
              onImageDimensionsChange: Dt,
              defaultRoomView: i.default_room_view,
              cleaningMode: je(o.attributes.cleaning_mode, ""),
              hass: a,
              entityId: i.entity
            }
          ),
          /* @__PURE__ */ h.jsx(
            bT,
            {
              cleanGeniusMode: je(o.attributes.cleangenius_mode, ""),
              cleaningMode: je(o.attributes.cleaning_mode, "Sweeping and mopping"),
              cleangenius: je(o.attributes.cleangenius, "Off"),
              onClick: Ze,
              onShortcutsClick: di ? kt : void 0,
              onRepeatClick: re,
              repeatCount: R
            }
          ),
          /* @__PURE__ */ h.jsxs("div", { className: "dreame-vacuum-card__controls", children: [
            y === "room" && /* @__PURE__ */ h.jsx(PN, { selectedRooms: w }),
            /* @__PURE__ */ h.jsx(Z2, { selectedMode: Un, onModeChange: W }),
            /* @__PURE__ */ h.jsx(
              W2,
              {
                selectedMode: y,
                selectedRoomsCount: w.size,
                onClean: $,
                onPause: _e,
                onResume: ee,
                onStop: pe,
                onDock: z,
                hass: a,
                entityId: i.entity
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ h.jsx(SN, { opened: T, onClose: Le }),
        /* @__PURE__ */ h.jsx(EN, { opened: N, onClose: ea }),
        /* @__PURE__ */ h.jsx(IN, { opened: L, onClose: ve }),
        xe && /* @__PURE__ */ h.jsx($2, { message: xe, onClose: K })
      ]
    }
  ) });
}
const YN = `.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left}[dir=rtl] .accordion__header{text-align:right}.accordion__header{transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:1000px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem}[dir=rtl] .toggle__knob{left:auto;right:.125rem}.toggle__knob{bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}[dir=rtl] .toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(-1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover:not(.circular-button--disabled){transform:translateY(-.125rem)}.circular-button--disabled{opacity:.5;pointer-events:none}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}[dir=rtl] .circular-button__circle>:nth-child(2):not(:last-child){rotate:180deg}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:hidden;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control--disabled{opacity:.5;pointer-events:none}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:absolute;top:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-down .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-down{0%{transform:translate(-50%) translateY(-1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.error-boundary{display:flex;align-items:center;justify-content:center;min-height:200px;padding:1.5rem;background:var(--surface-bg, #f5f5f5);border-radius:.75rem}.error-boundary__content{text-align:center;max-width:300px}.error-boundary__icon{width:48px;height:48px;margin:0 auto 1rem;background:var(--error-color, #ff3b30);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700}.error-boundary__title{margin:0 0 .5rem;font-size:1.125rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.error-boundary__message{margin:0 0 1rem;font-size:.875rem;color:var(--text-secondary, #666);line-height:1.4}.error-boundary__retry{padding:.5rem 1rem;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background .2s ease}.error-boundary__retry:hover{background:var(--accent-color-hover, #0056b3)}.header{padding:1.25rem 1.25rem .625rem;text-align:center;padding-bottom:unset}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center;padding-left:2rem}[dir=rtl] .header__title-wrapper{padding-left:0;padding-right:2rem}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon{display:flex;color:var(--accent-color)}.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500;unicode-bidi:plaintext}.header__stat-value--cleaning-time{unicode-bidi:unset}.map-selector{position:relative;display:flex;justify-content:center}.map-selector__button{display:inline-flex;align-items:center;gap:.375rem;padding:.375rem .75rem;background:var(--surface-bg, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:1.25rem;color:var(--text-primary, #1a1a1a);font-size:.8125rem;font-weight:500;cursor:pointer;transition:all .2s ease}.map-selector__button:hover{background:var(--surface-bg-hover, #ebebeb)}.map-selector__button--open{background:var(--surface-bg-hover, #ebebeb);border-color:var(--accent-color, #007aff)}.map-selector__button--disabled,.map-selector__button:disabled{opacity:.5;cursor:not-allowed}.map-selector__icon{display:flex;align-items:center;color:var(--text-secondary, #666)}.map-selector__icon svg{width:1rem;height:1rem}.map-selector__label{max-width:8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.map-selector__chevron{width:1rem;height:1rem;color:var(--text-secondary, #666);transition:transform .2s ease}.map-selector__chevron--open{transform:rotate(180deg)}.map-selector__dropdown{position:absolute;top:calc(100% + .25rem);left:50%;transform:translate(-50%);min-width:10rem;max-width:14rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);border-radius:.75rem;box-shadow:var(--card-shadow, 0 4px 12px rgba(0, 0, 0, .1));overflow:hidden;z-index:100;animation:map-selector-dropdown-fade-in .15s ease}.map-selector__option{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.625rem .875rem;background:transparent;border:none;color:var(--text-primary, #1a1a1a);font-size:.875rem;text-align:start;cursor:pointer;transition:background .15s ease}.map-selector__option:hover{background:var(--surface-bg-hover, #f5f5f5)}.map-selector__option--selected{color:var(--accent-color, #007aff);font-weight:500}.map-selector__option:not(:last-child){border-bottom:1px solid var(--border-color, #e8e8e8)}.map-selector__option-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:.5rem}[dir=rtl] .map-selector__option-name{padding-right:0;padding-left:.5rem}.map-selector__option-check{width:1rem;height:1rem;color:var(--accent-color, #007aff);flex-shrink:0}@keyframes map-selector-dropdown-fade-in{0%{opacity:0;transform:translate(-50%) translateY(-.25rem)}to{opacity:1;transform:translate(-50%) translateY(0)}}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.575rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:#fff;background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem;margin-bottom:unset}.cleaning-mode-button-wrapper__repeats{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.9rem;font-weight:600;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__repeats:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__repeats:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__repeats:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem .75rem .5rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.vacuum-position-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.vacuum-position-marker__bg{fill:var(--vacuum-marker-bg, rgba(255, 255, 255, .9));stroke:var(--vacuum-marker-stroke, #4caf50);stroke-width:2;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}.vacuum-position-marker__icon{fill:var(--vacuum-marker-color, #4caf50)}.vacuum-position-marker--cleaning .vacuum-position-marker__bg{animation:vacuum-pulse 1.5s ease-in-out infinite}.charger-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:5}.charger-marker__bg{fill:var(--charger-marker-bg, rgba(255, 255, 255, .9));stroke:var(--charger-marker-stroke, #ffc107);stroke-width:2;filter:drop-shadow(0 1px 3px rgba(0,0,0,.25))}.charger-marker__icon{fill:var(--charger-marker-color, #ffc107)}@keyframes vacuum-pulse{0%{opacity:1}50%{opacity:.7}to{opacity:1}}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}@media(orientation:landscape){.vacuum-map{max-height:calc(100vh - 280px);max-height:calc(100dvh - 280px);min-height:min(18.75rem,100vh - 280px)}}.vacuum-map--locked .react-transform-wrapper{touch-action:pan-y}.vacuum-map__content{position:relative;display:inline-block;width:100%;height:100%}.vacuum-map__image{display:block;width:100%;height:auto;border-radius:.9375rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem}[dir=rtl] .vacuum-map__cycles{right:auto;left:1rem}.vacuum-map__cycles{bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__zone-handle{position:absolute;background:#007aff;border:.125rem solid white;border-radius:.25rem;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:background .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:"";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5}.vacuum-map__zone-handle:active{background:#003d99}.vacuum-map__zone-handle--top,.vacuum-map__zone-handle--bottom{width:2.5rem;height:.5rem;left:50%;cursor:ns-resize}.vacuum-map__zone-handle--top{top:-.25rem}.vacuum-map__zone-handle--bottom{bottom:-.25rem}.vacuum-map__zone-handle--left,.vacuum-map__zone-handle--right{width:.5rem;height:2.5rem;top:50%;cursor:ew-resize}.vacuum-map__zone-handle--left{left:-.25rem}[dir=rtl] .vacuum-map__zone-handle--left{left:auto;right:-.25rem}.vacuum-map__zone-handle--right{right:-.25rem}[dir=rtl] .vacuum-map__zone-handle--right{right:auto;left:-.25rem}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem}[dir=rtl] .vacuum-map__zone-clear{right:auto;left:-.75rem}.vacuum-map__zone-clear{width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:background .2s ease;line-height:1;padding:0;z-index:11}.vacuum-map__zone-clear:hover{background:#ff1f0f}.vacuum-map__zone-clear:active{background:#c00}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room-segments path{pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover:not(.vacuum-map__room-segment--selected){fill:#ffffff26;stroke:#ffffffe6;stroke-width:3;filter:drop-shadow(0 0 8px rgba(255,255,255,.6))}.vacuum-map__room-segment--selected{fill:var(--accent-bg, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-hover, rgba(212, 175, 55, .45));filter:drop-shadow(0 0 6px var(--accent-color-shadow-color, rgba(212, 175, 55, .5)))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem}[dir=rtl] .room-list-view__header{padding-right:0;padding-left:3.5rem}.room-list-view__header{padding-left:1rem}[dir=rtl] .room-list-view__header{padding-left:0;padding-right:1rem}.room-list-view__header{font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}[dir=rtl] .room-list-view__item{text-align:right}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.map-controls{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .map-controls{right:auto;left:.75rem}.map-controls{display:flex;flex-direction:column;gap:.25rem;z-index:10}.map-controls__button{width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.map-controls__button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.map-controls__button:active{transform:scale(.95)}.map-controls__button svg{transition:transform .2s ease}.map-controls__button--lock{margin-top:.25rem}.map-controls__button--locked{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.map-controls__button--locked:hover{background:var(--accent-hover, #0066d6);border-color:var(--accent-hover, #0066d6)}.room-labels{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:8}.room-labels__bg{fill:var(--room-label-bg, rgba(0, 0, 0, .7))}.room-labels__text{fill:var(--room-label-color, #fff);font-weight:500;font-family:inherit}.cleaning-mode-modal{height:100%}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{height:calc(100% - 4rem);overflow-y:auto;width:100%;overflow-x:hidden}.cleaning-mode-modal__content-wrapper::-webkit-scrollbar{display:none}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--disabled{cursor:not-allowed;opacity:.5}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}[dir=rtl] .cleaning-mode-modal__mode-icon--mop-after>:nth-child(2),[dir=rtl] .cleaning-mode-modal__mode-icon--vac-mop>:nth-child(2){rotate:180deg}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .cleaning-mode-modal__mode-checkmark{right:auto;left:.75rem}.cleaning-mode-modal__mode-checkmark{width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:flex;justify-content:flex-start;gap:2rem;overflow-x:auto;padding:.5rem 0}.cleaning-mode-modal__power-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__power-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-container--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}[dir=rtl] .cleaning-mode-modal__slider-tooltip{transform:translate(50%)}.cleaning-mode-modal__slider-tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__route-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__route-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.customize-mode{display:flex;flex-direction:column;gap:.5rem}.customize-mode__empty{display:flex;align-items:center;justify-content:center;padding:2rem;color:var(--text-secondary);font-size:.875rem}.customize-mode__empty p{margin:0}.customize-mode__room-accordions{display:flex;flex-direction:column;gap:.25rem}.customize-mode__badges{display:flex;gap:.25rem}.customize-mode__badge{display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;padding:.125rem .25rem;border-radius:.25rem;background:var(--accent-bg);font-size:.8rem;font-weight:600;color:var(--accent-color);text-transform:uppercase}.customize-mode__badge:nth-child(3){text-transform:unset}.customize-mode__room-settings-content{display:flex;flex-direction:column;gap:1rem}.customize-mode__setting-group{display:flex;flex-direction:column;gap:.5rem}.customize-mode__setting-label{font-size:.75rem;font-weight:500;color:var(--text-secondary)}.customize-mode__options{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.customize-mode__options--pills{gap:1rem}.customize-mode__option{display:flex;flex-direction:column;align-items:center;gap:2rem}.customize-mode__option-label{font-size:.8rem;color:var(--text-secondary);text-align:center}.customize-mode__pill{padding:.375rem .75rem;border:1.5px solid var(--surface-border);border-radius:1.25rem;background:var(--surface-bg);color:var(--text-secondary);font-size:1rem;font-weight:500;cursor:pointer;transition:all .15s ease;min-width:3.5rem}.customize-mode__pill:hover{border-color:var(--accent-color);background:var(--accent-bg-secondary)}.customize-mode__pill--selected{border-color:var(--accent-color);background:var(--accent-color);color:var(--accent-bg-secondary);color:#fff}.customize-mode__pill--cycle{font-weight:600}.customize-mode__wetness-slider{display:flex;flex-direction:column;gap:.25rem}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem}[dir=rtl] .room-selection-display__label{margin-right:0;margin-left:.5rem}.room-selection-display__label{color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.entity-item{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .1));gap:16px}.entity-item:last-child{border-bottom:none}.entity-item--child{padding-left:16px;opacity:.9}.entity-item__info{display:flex;flex-direction:column;flex:1;min-width:0}.entity-item__label{font-size:14px;font-weight:500;color:var(--text-primary, #000)}.entity-item__description{font-size:12px;color:var(--text-secondary, #666);margin-top:2px}.entity-item--select{flex-direction:column;align-items:stretch;gap:8px}.entity-item--select .entity-item__info{flex:none}.entity-item--segmented{flex-direction:column;align-items:stretch;gap:8px}.entity-item--segmented .entity-item__info{flex:none}.entity-item--slider{flex-direction:column;align-items:stretch;gap:8px}.entity-item--slider .entity-item__info{flex:none}.entity-item__select{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;cursor:pointer;min-width:120px}.entity-item__select:disabled{opacity:.5;cursor:not-allowed}.entity-item__button{padding:8px 16px;border-radius:8px;border:none;background:var(--accent-color, #007aff);color:#fff;font-size:14px;font-weight:500;cursor:pointer;transition:opacity .2s ease}.entity-item__button:hover:not(:disabled){opacity:.9}.entity-item__button:active:not(:disabled){opacity:.8}.entity-item__button:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider-container{display:flex;align-items:center;gap:12px}.entity-item__slider{flex:1;height:6px;border-radius:3px;appearance:none;background:var(--divider-color, rgba(0, 0, 0, .2));cursor:pointer}.entity-item__slider::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer}.entity-item__slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);border:none;cursor:pointer}.entity-item__slider:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider:disabled::-webkit-slider-thumb{cursor:not-allowed}.entity-item__slider:disabled::-moz-range-thumb{cursor:not-allowed}.entity-item__slider-value{font-size:14px;font-weight:500;color:var(--text-primary, #000);min-width:40px;text-align:right}.entity-item__slider--volume .entity-item__slider::-webkit-slider-thumb,.entity-item__slider--brightness .entity-item__slider::-webkit-slider-thumb{background:var(--accent-color, #007aff)}.entity-item__time-input{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;font-family:inherit;cursor:pointer;min-width:100px}.entity-item__time-input:disabled{opacity:.5;cursor:not-allowed}.entity-item__time-input::-webkit-calendar-picker-indicator{cursor:pointer;filter:var(--time-picker-filter, none)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__item--slider{flex-direction:column;align-items:stretch;gap:.5rem}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.ai-detection-section__slider-container{display:flex;align-items:center;gap:.75rem}.ai-detection-section__slider{flex:1;height:4px;appearance:none;background:var(--surface-secondary, #e0e0e0);border-radius:2px;cursor:pointer}.ai-detection-section__slider::-webkit-slider-thumb{appearance:none;width:16px;height:16px;background:var(--accent-color, #007aff);border-radius:50%;cursor:pointer}.ai-detection-section__slider:disabled{opacity:.5;cursor:not-allowed}.ai-detection-section__slider-value{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);min-width:36px;text-align:right}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__mode-selector{display:flex;flex-direction:column;gap:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--border-color, #e0e0e0);margin-bottom:.25rem}.carpet-settings-section__sub-options{display:flex;flex-direction:column;gap:.5rem;padding-left:.25rem}.carpet-settings-section__sub-label{font-size:.75rem;color:var(--text-secondary, #666);font-weight:500}.carpet-settings-section__sub-buttons{display:flex;gap:.5rem}.carpet-settings-section__sub-button{flex:1;padding:.5rem .75rem;font-size:.8125rem;font-weight:500;border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;background:var(--surface-secondary, #f5f5f5);color:var(--text-primary, #333);cursor:pointer;transition:all .2s ease}.carpet-settings-section__sub-button:hover:not(.carpet-settings-section__sub-button--active){background:var(--surface-tertiary, #eee)}.carpet-settings-section__sub-button--active{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.carpet-settings-section__sub-button:disabled{opacity:.5;cursor:not-allowed}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.carpet-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000);unicode-bidi:plaintext}.quick-settings-section{display:flex;flex-direction:column;gap:.75rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.quick-settings-section__item--child{margin-left:1rem;padding-left:.75rem;border-left:2px solid var(--accent-color, #007aff)}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.quick-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.quick-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.quick-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:.5rem}.quick-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.quick-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.quick-settings-section__action-button:active{transform:scale(.98)}.quick-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.quick-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.volume-section{display:flex;flex-direction:column;gap:.75rem}.volume-section__row{display:flex;flex-direction:row;gap:1rem}.volume-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.volume-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.volume-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.volume-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.volume-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section__select{width:100%;padding:.5rem 2.5rem .5rem .75rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:1rem}.volume-section__select:hover{border-color:var(--accent-color, #007aff)}.volume-section__select:focus{outline:none;border-color:var(--accent-color, #007aff);box-shadow:0 0 0 2px #007aff33}.volume-section__select:disabled{opacity:.5;cursor:not-allowed}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}[dir=rtl] .volume-section__tooltip{transform:translate(50%)}.volume-section__tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.floor-settings-section{display:flex;flex-direction:column;gap:.75rem}.floor-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.floor-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.floor-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.floor-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.floor-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.floor-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.floor-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.floor-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.floor-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.edge-corner-section{display:flex;flex-direction:column;gap:.75rem}.edge-corner-section__sub-settings{display:flex;flex-direction:column;gap:.5rem;margin-top:-.25rem}.edge-corner-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.edge-corner-section__item--indented{padding-left:1rem;border-left:2px solid var(--border-color, #e0e0e0);margin-left:.5rem}.edge-corner-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.edge-corner-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.edge-corner-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.edge-corner-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.edge-corner-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.edge-corner-section__select:focus{border-color:var(--accent-color, #007aff)}.edge-corner-section__select:hover{background:var(--surface-tertiary, #eee)}.edge-corner-section__select:disabled{opacity:.5;cursor:not-allowed}.dock-settings-section{display:flex;flex-direction:column;gap:.75rem}.dock-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.dock-settings-section__item--select,.dock-settings-section__item--segmented{flex-direction:column;align-items:stretch;gap:.5rem}.dock-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.dock-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.dock-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.dock-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.dock-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.dock-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.dock-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.dock-settings-section__button{padding:.5rem 1rem;font-size:.8125rem;font-weight:500;border:1px solid var(--accent-color, #007aff);border-radius:.5rem;background:var(--accent-color, #007aff);color:#fff;cursor:pointer;transition:all .2s ease;white-space:nowrap}.dock-settings-section__button:hover:not(:disabled){background:var(--accent-color-hover, #0056b3)}.dock-settings-section__button:disabled{opacity:.5;cursor:not-allowed}.map-settings-section{display:flex;flex-direction:column;gap:.75rem}.map-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.map-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.map-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.map-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.map-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.map-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.map-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.map-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.map-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.map-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.map-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:.5rem}.map-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.map-settings-section__action-button:active{transform:scale(.98)}.map-settings-section__action-button:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.map-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}[dir=rtl] .settings-panel__sections{padding-right:0;padding-left:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}`;
Dw();
class ZN extends HTMLElement {
  _root = null;
  _hass;
  _config;
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const i = document.createElement("style");
    i.textContent = YN, this.shadowRoot.appendChild(i);
  }
  setConfig(i) {
    const o = xk(i);
    if (!o.valid)
      throw new Error(`Invalid configuration: ${o.errors.join("; ")}`);
    o.warnings.length > 0 && te.warn("Configuration warnings:", o.warnings), this._config = i, this.render();
  }
  set hass(i) {
    this._hass = i, this.render();
  }
  render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;
    let i = this.shadowRoot.querySelector("#react-root");
    i || (i = document.createElement("div"), i.id = "react-root", this.shadowRoot.appendChild(i)), this._root || (this._root = Eb.createRoot(i)), this._root.render(
      /* @__PURE__ */ h.jsx(xn.StrictMode, { children: /* @__PURE__ */ h.jsx(Q2, { children: /* @__PURE__ */ h.jsx(BN, { hass: this._hass, config: this._config }) }) })
    );
  }
  getCardSize() {
    return 4;
  }
  static getStubConfig() {
    return {
      type: "custom:dreame-vacuum-map-card",
      entity: "vacuum.dreame_vacuum",
      title: "Dreame Vacuum"
    };
  }
}
customElements.define("dreame-vacuum-map-card", ZN);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "dreame-vacuum-map-card",
  name: "Dreame Vacuum Map Card",
  description: "Custom vacuum map card for Dreame vacuum cleaners"
});
te.info("Dreame Vacuum Map Card (React) loaded");
export {
  ZN as default
};
