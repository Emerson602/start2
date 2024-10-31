declare module 'qrcode' {
    export function toCanvas(
      canvas: HTMLCanvasElement,
      text: string,
      callback: (error: Error | null) => void
    ): void;
  }
  