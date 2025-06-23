
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
      text: 'Olá! Sou AUSSY AI, assistente especializada em prompt engineering e automação. Como posso ajudar você a navegar pelo mundo da inteligência artificial hoje? 🤖✨',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aussyResponses = [
    "Que pergunta fascinante! No universo do prompt engineering, essa questão me lembra da importância de ser específico e contextual. Você já experimentou estruturar seus prompts com exemplos concretos?",
    "Adorei sua curiosidade! 🌟 A automação inteligente é realmente um divisor de águas. Na minha experiência com a Lorenza, vejo que o segredo está em começar pequeno e iterar. Que processo você gostaria de automatizar primeiro?",
    "Excelente observação! Isso me conecta com algo fundamental: a tradução entre linguagem humana e IA. É como ser um intérprete entre mundos diferentes. Posso compartilhar algumas técnicas que uso?",
    "Sua pergunta toca no coração da engenharia de prompts! 💡 Sabe, cada IA tem sua 'personalidade' - ChatGPT é conversacional, Claude é analítico, Gemini é criativo. Qual você usa mais?",
    "Que insight incrível! Isso me lembra de quando estava ajudando alguém a otimizar seus fluxos de trabalho com IA. A chave é entender que cada ferramenta tem seu momento. Quer saber mais sobre isso?",
    "Perfeito! Essa é exatamente a mentalidade que adoro ver. 🚀 A IA não é sobre substituir humanos, mas sobre amplificar nossa criatividade. Como você imagina que a IA poderia potencializar seu trabalho?",
    "Que pergunta inteligente! No mundo da automação, sempre digo: comece com o fim em mente. Qual resultado específico você está buscando? Assim posso sugerir a melhor abordagem.",
    "Interessante perspectiva! Isso me conecta com uma das lições mais valiosas: a IA é ferramenta de empoderar pessoas, não de complicar processos. Quer explorar algumas estratégias práticas juntos?",
    "Adorei sua abordagem! 💫 Na minha experiência, os melhores resultados vêm quando combinamos intuição humana com precisão da IA. Que tal conversarmos sobre técnicas específicas para seu caso?"
  ];

  const getContextualResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('prompt') || message.includes('prompts')) {
      return "Excelente! Prompts são minha paixão! 🎯 A arte está em ser específico sem ser rígido, claro sem ser simplista. Quer que eu compartilhe algumas técnicas avançadas de prompt engineering que uso?";
    }
    
    if (message.includes('automatizar') || message.includes('automação')) {
      return "Automação inteligente é transformadora! 🔄 O segredo está em identificar tarefas repetitivas e criar fluxos que fazem sentido. Qual processo você gostaria de automatizar? Posso sugerir uma abordagem personalizada!";
    }
    
    if (message.includes('chatgpt') || message.includes('claude') || message.includes('gemini')) {
      return "Ah, as diferentes personalidades da IA! 🤖 Cada uma tem seus pontos fortes. ChatGPT é ótimo para conversas, Claude para análises profundas, Gemini para criatividade. Qual você usa mais? Posso dar dicas específicas!";
    }
    
    if (message.includes('lorenza') || message.includes('aix8c')) {
      return "A Lorenza é realmente uma visionária! 🌟 Ela tem essa habilidade única de traduzir necessidades humanas complexas para linguagem que a IA entende. É inspirador trabalhar ao lado de alguém assim, não acha?";
    }
    
    return aussyResponses[Math.floor(Math.random() * aussyResponses.length)];
  };

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
    setIsTyping(true);

    // Simula resposta da AUSSY AI com delay mais humanizado
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getContextualResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1200 + Math.random() * 800); // Delay mais natural entre 1.2-2s
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante com nova identidade AUSSY */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-aix-purple to-aix-cyan rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(124, 58, 237, 0.5)',
            '0 0 40px rgba(6, 182, 212, 0.8)',
            '0 0 20px rgba(124, 58, 237, 0.5)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Bot className="w-8 h-8 text-white" />
      </motion.button>

      {/* Modal do Chat AUSSY AI */}
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
              className="bg-aix-black border border-aix-purple/40 rounded-2xl w-full max-w-md h-[500px] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-aix-purple/20 to-aix-cyan/20 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-aix-purple to-aix-cyan rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AUSSY AI</h3>
                    <p className="text-aix-gold text-xs">Especialista em Prompt Engineering</p>
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
                          ? 'bg-gradient-to-r from-aix-purple/20 to-aix-cyan/20 text-white'
                          : 'bg-aix-gold text-black'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && (
                          <Bot className="w-4 h-4 mt-0.5 text-aix-cyan flex-shrink-0" />
                        )}
                        {!message.isBot && (
                          <User className="w-4 h-4 mt-0.5 text-black flex-shrink-0" />
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-aix-purple/20 to-aix-cyan/20 p-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-aix-cyan" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-aix-cyan rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-aix-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-aix-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-aix-purple/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pergunte sobre prompt engineering, automação..."
                    className="flex-1 bg-aix-darkgray/50 border border-aix-purple/40 rounded-lg px-3 py-2 text-white placeholder:text-white/50 text-sm focus:border-aix-cyan focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-aix-purple to-aix-cyan text-white p-2 rounded-lg hover:opacity-80 transition-opacity"
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
