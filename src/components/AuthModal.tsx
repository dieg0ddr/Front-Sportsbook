import React, { useState } from 'react';
import { UserAccount } from '../types/sportsbook';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'register';
  onLoginSuccess: (user: UserAccount) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode,
  onLoginSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  if (!isOpen) return null;

  const handleQuickDemoLogin = () => {
    onLoginSuccess({
      isLoggedIn: true,
      name: 'Diego Ribeiro',
      email: 'diego.ddr007@gmail.com',
      balance: 250.0,
    });
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess({
      isLoggedIn: true,
      name: name || (email.split('@')[0] || 'Apostador'),
      email: email || 'usuario@apostas.com.br',
      balance: 150.0,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-md bg-[#111723] border border-[#202c42] rounded-2xl p-6 shadow-2xl space-y-5 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-[#1a2438] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand header */}
        <div className="text-center space-y-1">
          <div className="text-2xl font-black text-[#00e700] tracking-tight">
            BRAND
          </div>
          <div className="text-xs text-zinc-400">
            {mode === 'login'
              ? 'Acesse sua conta para continuar'
              : 'Cadastre-se e ganhe até 100% de bônus no 1º depósito'}
          </div>
        </div>

        {/* Mode switcher tabs */}
        <div className="grid grid-cols-2 bg-[#0c111a] p-1 rounded-xl border border-[#1b2538] text-xs font-semibold">
          <button
            onClick={() => setMode('login')}
            className={`py-2 rounded-lg transition-colors ${
              mode === 'login'
                ? 'bg-[#182338] text-white shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setMode('register')}
            className={`py-2 rounded-lg transition-colors ${
              mode === 'register'
                ? 'bg-[#182338] text-white shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Quick Demo Option for instant testing */}
        <div className="bg-[#12221b] border border-[#1b3d2b] p-3 rounded-xl flex items-center justify-between gap-3">
          <div className="text-xs">
            <div className="font-bold text-[#00e700]">Acesso Rápido Demo</div>
            <div className="text-[11px] text-zinc-400">Entrar com saldo de teste R$ 250,00</div>
          </div>
          <button
            onClick={handleQuickDemoLogin}
            className="px-3 py-1.5 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black font-extrabold text-xs whitespace-nowrap active:scale-95 transition-transform"
          >
            Entrar Já
          </button>
        </div>

        {/* Traditional Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0c121c] border border-[#202b3f] rounded-lg pl-9 pr-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e700]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  CPF (Conforme exigido pelo Ministério da Fazenda)
                </label>
                <div className="relative">
                  <ShieldCheck className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="w-full bg-[#0c121c] border border-[#202b3f] rounded-lg pl-9 pr-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e700]"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-[11px] font-medium text-zinc-300 mb-1">
              E-mail
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
              <input
                type="email"
                required
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0c121c] border border-[#202b3f] rounded-lg pl-9 pr-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e700]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-zinc-300 mb-1">
              Senha
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0c121c] border border-[#202b3f] rounded-lg pl-9 pr-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e700]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black font-extrabold text-xs uppercase tracking-wider transition-all active:scale-[0.98] shadow-lg mt-2"
          >
            {mode === 'login' ? 'Entrar na Conta' : 'Concluir Cadastro'}
          </button>
        </form>
      </div>
    </div>
  );
};
