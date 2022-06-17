import { PositionStrategy } from '@angular/cdk/overlay';

export class CustomStrategy implements PositionStrategy {
    apply(): void {}

    attach(overlayRef: OverlayReference): void {} // OverlayReference cannot be imported

    dispose(): void {}
}
