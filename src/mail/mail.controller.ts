import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMailDto } from './dto/create-mail.dto';


@ApiTags('Mail') // <-- This groups it under "Mail" in Swagger UI
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  @ApiOperation({ summary: 'Send an email using Resend' })  // <-- This adds a request body schema in Swagger
  async sendEmail(@Body() SendMailDto: CreateMailDto) {
    console.log(SendMailDto);
    
    return this.mailService.sendEmail(SendMailDto.to, SendMailDto.subject, SendMailDto.html);
  }
}
