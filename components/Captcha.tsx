'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, Shield } from 'lucide-react';

interface CaptchaProps {
  onValidation: (isValid: boolean) => void;
  className?: string;
}

const Captcha: React.FC<CaptchaProps> = ({ onValidation, className = '' }) => {
  const [question, setQuestion] = useState<{ num1: number; num2: number; operator: string; answer: number }>({ num1: 0, num2: 0, operator: '+', answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  // Générer une nouvelle question
  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let answer: number;
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        // S'assurer que le résultat est positif
        const maxNum = Math.max(num1, num2);
        const minNum = Math.min(num1, num2);
        answer = maxNum - minNum;
        setQuestion({ num1: maxNum, num2: minNum, operator, answer });
        return;
      case '×':
        answer = num1 * num2;
        break;
      default:
        answer = num1 + num2;
    }
    
    setQuestion({ num1, num2, operator, answer });
  };

  // Générer la première question au montage
  useEffect(() => {
    generateQuestion();
  }, []);

  // Valider la réponse
  const validateAnswer = (answer: string) => {
    const numericAnswer = parseInt(answer);
    const correct = numericAnswer === question.answer;
    setIsValid(correct);
    onValidation(correct);
    setShowError(!correct && answer !== '');
  };

  // Gérer le changement de réponse
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAnswer(value);
    setShowError(false);
    
    if (value !== '') {
      validateAnswer(value);
    } else {
      setIsValid(false);
      onValidation(false);
    }
  };

  // Régénérer une nouvelle question
  const handleRefresh = () => {
    generateQuestion();
    setUserAnswer('');
    setIsValid(false);
    setShowError(false);
    onValidation(false);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Shield className="w-4 h-4 text-brand" />
        <label className="block text-sm font-medium text-gray-700">
          Vérification de sécurité *
        </label>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg border">
          <span className="text-lg font-semibold text-gray-800">
            {question.num1} {question.operator} {question.num2} = ?
          </span>
          <button
            type="button"
            onClick={handleRefresh}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
            title="Nouvelle question"
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        <input
          type="number"
          value={userAnswer}
          onChange={handleAnswerChange}
          className={`w-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand ${
            showError 
              ? 'border-red-500 bg-red-50' 
              : isValid 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-300'
          }`}
          placeholder="?"
          required
        />
      </div>
      
      {showError && (
        <p className="text-red-500 text-sm">
          Réponse incorrecte. Veuillez réessayer.
        </p>
      )}
      
      {isValid && (
        <p className="text-green-600 text-sm flex items-center gap-1">
          <Shield className="w-3 h-3" />
          Vérification réussie
        </p>
      )}
      
      <p className="text-xs text-gray-500">
        Cette vérification nous aide à protéger nos formulaires contre les envois automatiques.
      </p>
    </div>
  );
};

export default Captcha;
