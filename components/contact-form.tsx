'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = fields.get('name')?.toString().trim() || 'Não informado';
    const subject = fields.get('subject')?.toString().trim() || 'Não informado';
    const message = fields.get('message')?.toString().trim() || 'Não informado';
    const text = `Olá, meu nome é ${name}.\nAssunto: ${subject}.\nMensagem: ${message}`;
    setSent(true);
    window.open(`https://wa.me/5534999157824?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return <form className="contact-form" onSubmit={submit}>
    <label>Nome<input name="name" required placeholder="Como podemos chamar você?" /></label>
    <label>Assunto<input name="subject" required placeholder="Em que podemos ajudar?" /></label>
    <label>Mensagem<textarea name="message" required placeholder="Conte-nos brevemente sobre sua necessidade" rows={4} /></label>
    <button className="button button-gold" type="submit">Enviar pelo WhatsApp <ArrowUpRight size={17} /></button>
    {sent && <p className="form-success">Abrimos o WhatsApp com a sua mensagem preenchida.</p>}
  </form>;
}
