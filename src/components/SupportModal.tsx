import React, { useState } from 'react';
import { X, Send, Bot, User, CheckCircle2 } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Olá! Bem-vindo ao Suporte Oficial 24/7. Como podemos lhe ajudar com sua conta, apostas ou depósitos via Pix?',
      time: 'Agora',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'Agora' },
    ]);

    setTimeout(() => {
      let botResponse = 'Um de nossos atendentes especializados já está analisando sua solicitação.';
      const lower = userText.toLowerCase();
      if (lower.includes('pix') || lower.includes('deposito') || lower.includes('depositar')) {
        botResponse = 'Os depósitos via Pix são instantâneos e creditados em menos de 10 segundos. Você pode clicar no botão "Depositar" no topo da página.';
      } else if (lower.includes('saque') || lower.includes('sacar')) {
        botResponse = 'Os saques via chave Pix CPF são processados 24 horas por dia com liberação imediata após verificação de segurança.';
      } else if (lower.includes('bonus') || lower.includes('bônus')) {
        botResponse = 'O bônus de múltiplas aumenta automaticamente conforme você adiciona mais partidas ao seu cupom (até 100% de ganho extra!).';
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, time: 'Agora' },
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-md bg-[#111723] border border-[#202c42] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px] animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151d2c] border-b border-[#212c40]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#00e700]/20 text-[#00e700] flex items-center justify-center font-bold">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Atendimento ao Vivo 24/7</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e700] animate-pulse"></span>
              </div>
              <div className="text-[10px] text-zinc-400">Tempo médio de resposta: &lt; 1 min</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-[#1a2438] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-[#162132] border border-[#223046] flex items-center justify-center text-[#00e700] shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl p-3 leading-relaxed shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-[#00e700] text-black font-medium rounded-tr-none'
                    : 'bg-[#182233] text-zinc-200 border border-[#222e44] rounded-tl-none'
                }`}
              >
                <div>{m.text}</div>
                <div
                  className={`text-[9px] mt-1 text-right ${
                    m.sender === 'user' ? 'text-black/60' : 'text-zinc-500'
                  }`}
                >
                  {m.time}
                </div>
              </div>
              {m.sender === 'user' && (
                <div className="w-6 h-6 rounded-full bg-[#00e700]/30 flex items-center justify-center text-[#00e700] shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 bg-[#131a27] border-t border-[#202b3f] flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite sua dúvida aqui..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-[#0c111a] border border-[#202c40] rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e700]"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
