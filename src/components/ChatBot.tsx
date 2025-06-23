
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou a assistente de IA da Lorenza. Como posso ajudar com suas dúvidas sobre inteligência artificial?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const aiResponses = [
    "Excelente pergunta! A IA pode transformar completamente a forma como você trabalha. Que área específica te interessa mais?",
    "Prompt engineering é uma das habilidades mais valiosas hoje. Você gostaria de saber mais sobre como começar?",
    "Automação inteligente pode economizar horas do seu dia. Quer entender como implementar na sua empresa?",
    "A Lorenza tem experiência única em traduzir necessidades humanas para linguagem de IA. Posso explicar mais!",
    "ChatGPT, Claude, Gemini... cada IA tem suas especialidades. Quer saber qual é melhor para seu caso?",
    "Implementar IA não precisa ser complicado. Podemos começar com pequenos passos. O que você faz no dia a dia?",
    "Interessante! A IA pode definitivamente ajudar com isso. Já tentou usar alguma ferramenta específica?",
    "Ótima observação! Para casos como o seu, recomendo agendar uma conversa com a Lorenza para uma estratégia personalizada."
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simula resposta da IA após 1 segundo
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-aix-gold to-yellow-500 rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(245, 158, 11, 0.5)',
            '0 0 40px rgba(245, 158, 11, 0.8)',
            '0 0 20px rgba(245, 158, 11, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageSquare className="w-8 h-8 text-black" />
      </motion.button>

      {/* Modal do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-aix-black border border-aix-gold/30 rounded-2xl w-full max-w-md h-[500px] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-aix-gold/20 to-aix-purple/20 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-aix-gold to-yellow-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Assistente IA</h3>
                    <p className="text-aix-gold text-xs">Lorenza Volponi</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-aix-purple/20 text-white'
                          : 'bg-aix-gold text-black'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && (
                          <Bot className="w-4 h-4 mt-0.5 text-aix-gold flex-shrink-0" />
                        )}
                        {!message.isBot && (
                          <User className="w-4 h-4 mt-0.5 text-black flex-shrink-0" />
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-aix-gold/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua pergunta sobre IA..."
                    className="flex-1 bg-aix-darkgray/50 border border-aix-purple/40 rounded-lg px-3 py-2 text-white placeholder:text-white/50 text-sm focus:border-aix-cyan focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-aix-gold text-black p-2 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
