import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [CommonModule, QRCodeModule, FormsModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css',
})
export class QRCodeComponent {
  qrData: string = '';
  generatedQRData: string = '';
  generateQRCode() {
    this.generatedQRData = this.qrData;
  }
}
