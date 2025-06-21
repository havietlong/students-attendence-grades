import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import axios from 'axios';

@Injectable()
export class MailService {
  private readonly RESEND_API_URL = 'https://api.resend.com/emails';
  
  // Use ConfigService to load the API key from environment
  constructor(private configService: ConfigService) {}

  async sendEmail(to: string, subject: string, html: string) {
    const RESEND_API_KEY = this.configService.get<string>('RESEND_API_KEY'); // Get API key

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not found in environment variables');
    }

    try {
      const response = await axios.post(
        this.RESEND_API_URL,
        {
          from: 'admin@anoc.tech',
          to: [to],
          subject: subject,
          html: html,
        },
        {
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("sent mail");
      
      return response.data;
    } catch (error) {
      console.error('Error sending email:', error.response?.data || error.message);
      throw new Error('Failed to send email');
    }
  }
}
