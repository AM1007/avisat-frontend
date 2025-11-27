declare module 'izitoast' {
  export interface IziToastSettings {
    title?: string;
    message?: string;
    position?: 'topRight' | 'topLeft' | 'topCenter' | 'bottomRight' | 'bottomLeft' | 'bottomCenter' | 'center';
    timeout?: number | false;
    transitionIn?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'bounceInUp' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' | 'flipInX';
    transitionOut?: 'fadeOutUp' | 'fadeOutDown' | 'fadeOutLeft' | 'fadeOutRight' | 'bounceOutUp' | 'bounceOutDown' | 'bounceOutLeft' | 'bounceOutRight' | 'flipOutX' | 'fadeOut';
    progressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    backgroundColor?: string;
    titleColor?: string;
    messageColor?: string;
    iconColor?: string;
    progressBarColor?: string;
  }

  export function success(settings: IziToastSettings): void;
  export function error(settings: IziToastSettings): void;
  export function warning(settings: IziToastSettings): void;
  export function info(settings: IziToastSettings): void;
  export function show(settings: IziToastSettings): void;
  export function destroy(): void;
}