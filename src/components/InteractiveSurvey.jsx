import React, { useState } from 'react';

export default function InteractiveSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's your organization's primary focus area?",
      type: "select",
      options: [
        "Education",
        "Healthcare",
        "Environment",
        "Social Services",
        "Arts & Culture",
        "Community Development",
        "Other"
      ]
    },
    {
      id: 2,
      question: "How many employees does your organization have?",
      type: "select",
      options: [
        "1-5 employees",
        "6-20 employees",
        "21-50 employees",
        "51-100 employees",
        "100+ employees"
      ]
    },
    {
      id: 3,
      question: "What's your annual operating budget?",
      type: "select",
      options: [
        "Under $100,000",
        "$100,000 - $500,000",
        "$500,000 - $1,000,000",
        "$1,000,000 - $5,000,000",
        "Over $5,000,000"
      ]
    },
    {
      id: 4,
      question: "How do you currently manage grant applications?",
      type: "select",
      options: [
        "Manual process with spreadsheets",
        "Basic grant management software",
        "Outsourced to consultants",
        "No formal process",
        "Advanced grant management system"
      ]
    },
    {
      id: 5,
      question: "What's your biggest challenge with operations?",
      type: "select",
      options: [
        "Manual data entry and reporting",
        "Limited staff resources",
        "Outdated systems",
        "Lack of automation",
        "Difficulty tracking metrics"
      ]
    },
    {
      id: 6,
      question: "How do you currently handle donor and supporter communications?",
      type: "select",
      options: [
        "Email marketing tools",
        "Social media platforms",
        "Phone calls and letters",
        "No formal system",
        "Integrated CRM system"
      ]
    },
    {
      id: 7,
      question: "What percentage of your time is spent on administrative tasks?",
      type: "select",
      options: [
        "Less than 25%",
        "25-50%",
        "50-75%",
        "75-90%",
        "More than 90%"
      ]
    },
    {
      id: 8,
      question: "How important is AI automation to your organization's future?",
      type: "select",
      options: [
        "Critical - we need it now",
        "Important - within the next year",
        "Somewhat important - within 2-3 years",
        "Not a priority",
        "Unsure"
      ]
    },
    {
      id: 9,
      question: "What's your biggest concern about implementing AI tools?",
      type: "select",
      options: [
        "Cost and budget constraints",
        "Staff training and adoption",
        "Data security and privacy",
        "Integration with existing systems",
        "Proving ROI and effectiveness"
      ]
    },
    {
      id: 10,
      question: "What would be most valuable to your organization right now?",
      type: "select",
      options: [
        "Automated grant application process",
        "Streamlined operations and reporting",
        "Enhanced donor communication",
        "Better data analytics and insights",
        "All of the above"
      ]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div style={{
        background: '#fff',
        padding: '48px 24px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎉</div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px', color: '#111' }}>
          Thank You!
        </h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: '1.6' }}>
          Based on your responses, we can help you transform your nonprofit operations with AI.
        </p>
        
        <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#111' }}>
            Your Personalized Recommendations
          </h3>
          <div style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#10B981', fontSize: '20px' }}>✓</span>
              <span>Custom AI implementation plan</span>
            </div>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#10B981', fontSize: '20px' }}>✓</span>
              <span>ROI projection for your organization</span>
            </div>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#10B981', fontSize: '20px' }}>✓</span>
              <span>Priority tool recommendations</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => window.location.href = '/book-demo'}
            style={{
              background: '#FFD600',
              color: '#111',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Book Your Demo
          </button>
          <button
            onClick={resetSurvey}
            style={{
              background: '#f3f4f6',
              color: '#111',
              border: '1px solid #d1d5db',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Take Survey Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#fff',
      padding: '48px 24px',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      {/* Progress Bar */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          background: '#e5e7eb',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: '#FFD600',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>

      {/* Question */}
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        marginBottom: '32px', 
        color: '#111',
        lineHeight: '1.4'
      }}>
        {currentQ.question}
      </h2>

      {/* Options */}
      <div style={{ marginBottom: '32px' }}>
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              width: '100%',
              padding: '16px 20px',
              marginBottom: '12px',
              border: answers[currentQuestion] === option ? '2px solid #FFD600' : '1px solid #e5e7eb',
              borderRadius: '8px',
              background: answers[currentQuestion] === option ? '#FFD600' : '#fff',
              color: answers[currentQuestion] === option ? '#111' : '#374151',
              fontSize: '16px',
              fontWeight: answers[currentQuestion] === option ? '600' : '500',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease'
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          style={{
            padding: '12px 24px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            background: '#f3f4f6',
            color: currentQuestion === 0 ? '#9ca3af' : '#111',
            fontSize: '16px',
            fontWeight: '600',
            cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
            opacity: currentQuestion === 0 ? 0.5 : 1
          }}
        >
          Previous
        </button>
        
        <button
          onClick={nextQuestion}
          disabled={!answers[currentQuestion]}
          style={{
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            background: answers[currentQuestion] ? '#FFD600' : '#e5e7eb',
            color: answers[currentQuestion] ? '#111' : '#9ca3af',
            fontSize: '16px',
            fontWeight: '600',
            cursor: answers[currentQuestion] ? 'pointer' : 'not-allowed'
          }}
        >
          {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
        </button>
      </div>

      {/* Skip option */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button
          onClick={() => window.location.href = '/book-demo'}
          style={{
            background: 'none',
            border: 'none',
            color: '#666',
            fontSize: '14px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Skip survey and book demo directly
        </button>
      </div>
    </div>
  );
} 