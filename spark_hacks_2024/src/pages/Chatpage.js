import React, { useState, useEffect, useRef } from 'react';
import './Chatpage.css'; // Import CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // State variable to track chat box expansion
  const [inputMessage, setInputMessage] = useState(''); // State variable to store the input message
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // When component mounts, add a welcome message
    const welcomeMessage = "Hello, I'm Sparkbot. How may I assist you today?";
    setMessages([{ text: welcomeMessage, sender: 'bot', time: getCurrentTime() }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const addMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  

  const expandChat = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMessageSubmit = (userMessage) => {
    const message = inputMessage.trim();
  
    if (message) {
      // Define an array of keywords and their corresponding sections
      addMessage({ text: message, sender: 'user', time: getCurrentTime() });
      setInputMessage('');
      const keywordSections = [
        { keyword: 'discord', section: 'Contact Us' },
        { keyword: 'instagram', section: 'Contact Us' },
        {keyword: 'linkedin', section: 'Contact Us'},
        {keyword: 'socials', section: 'Contact Us'},
        { keyword: 'news', section: 'News' },
        { keyword: 'mentoring', section: 'Mentoring/Services' },
        { keyword: 'logixca', section: 'Student Organizations' },
        {keyword: 'black student union', section: 'Student Organizations'},
        {keyword: 'student orgs', section: 'Student Organizations'},
        {keyword: 'feedback', section: 'Contact Us'},
        {keyword: 'questions', section: 'SparkBot'},
        {keyword: 'contact', section: 'Contact Us'},
        {keyword: 'services', section: 'Services'},
        {keyword: 'about', section: 'About Us'},
        {keyword: 'info', section: 'About Us'}

        /* 
        Keywords Jesus:
        Comment, Feedback,Questions, Contact, 
        Keywords Sam:
        Services, Information, Resources, About,
        */

        // Add more keywords and their corresponding sections as needed
      ];
  
      // Check if the user's input message contains any of the keywords
      const matchedKeyword = keywordSections.find(({ keyword }) => userMessage.toLowerCase().includes(keyword));
  
      if (matchedKeyword) {
        // If a keyword is matched, provide information about the corresponding section
        setTimeout(() => {
          const sectionMessage = `You can find our ${matchedKeyword.keyword} in the '${matchedKeyword.section}' section.`;
          addMessage({ text: sectionMessage, sender: 'bot', time: getCurrentTime() });
        }, 1000); // Add a delay of 1000 milliseconds (1 second) before the bot responds
      } else if (userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hello')) {
        // If the user's message contains a greeting, respond after a delay
        setTimeout(() => {
          const greetings = [
            'Hello! What are you looking for today?',
            'Hi there! What can I do for you today?',
            'Howdy! What can I do for you today?'
          ];
          const randomIndex = Math.floor(Math.random() * greetings.length);
          const randomGreeting = greetings[randomIndex];
          addMessage({ text: randomGreeting, sender: 'bot', time: getCurrentTime() });
        }, 1000); // Add a delay of 1000 milliseconds (1 second) before the bot responds
      } else if (userMessage.toLowerCase().includes('signup') || userMessage.toLowerCase().includes('sign up')) {
        // If the user's message contains a greeting, respond after a delay
        setTimeout(() => {
          const signupMessage = "To sign up/learn more about UIC's 460+ student organizations, you can visit our Student Organizations section or visit https://involvement.uic.edu/student-organizations/find-an-organization/ ";
          addMessage({ text: signupMessage, sender: 'bot', time: getCurrentTime() });
        }, 1000); // Add a delay of 1000 milliseconds (1 second) before the bot responds
      } 

       else {
        // If no keyword or greeting is matched, handle other messages
        handleOtherMessages();
      }
    }
  };
  
  
  const handleUICInterviewLocation = (selectedLocation) => {
    const confirmationMessage = `You have chosen ${selectedLocation} for your interview. Please select a day:`;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const formattedDays = days.map(day => (
      <button key={day} onClick={() => handleDaySelection(day)}>{day}</button>
    ));
    
    setMessages([
      ...messages,
      { text: confirmationMessage, sender: 'bot', time: getCurrentTime() },
      { text: formattedDays, sender: 'bot', time: getCurrentTime() }
    ]);
  };
  
  
  const handleLiveInterviews = () => {
     handleUICInterviewLocation();
  }; 

  const handleInterviewSettingChoice = () => {
    const locationMessage = "Please select a place where you want to take the interview";
 
    const settings = ["Live", "Virtual"];
    const settingSelection = settings.map(setting => (
      <button key={setting} onClick={() => handleSettingSelection(setting)}>{setting}</button>
    ));

    setMessages([
      ...messages,
      { text: locationMessage, sender: 'bot', time: getCurrentTime() },
      { text: settingSelection, sender: 'bot', time: getCurrentTime() }

     
    ]);

  };

  const handleSettingSelection = (selectedSetting) => {
    if (selectedSetting === "Live") {
     handleUICInterviewLocation();
    } else if (selectedSetting === "Virtual") {
      handleLiveInterviews();
    }
  };

  const handleScheduleMeeting = () => {
    const meetingMessage = "Please select a day:";
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const formattedDays = days.map(day => (
      <button key={day} onClick={() => handleDaySelection(day)}>{day}</button>
    ));
    // Include the message asking to select a day along with the formatted days
    setMessages([
      ...messages,
      { text: meetingMessage,formattedDays, sender: 'bot', time: getCurrentTime() },
      { text: formattedDays, sender: 'bot', time: getCurrentTime() }
    ]);
  };
  

  const handleSiteNavClick = () => {
    const typeSomethingMessage = "Please enter what you are looking for.";
    setMessages([...messages, { text: typeSomethingMessage, sender: 'bot', time: getCurrentTime() }]);
  }; 

  const handleOtherMessages = () => {
    const errorMessage = "Sorry, I cannot do anything with that request. Please type in another request.";
    setMessages([...messages, { text: errorMessage, sender: 'bot', time: getCurrentTime() }]);

  };

  // const handleSiteNavigation = (query) => {
  //   const keywordActions = {
  //     discord: () => {
  //       const discordMessage = "You can find Discord in the 'Contact Us' section.";
  //       setMessages([...messages, { text: discordMessage, sender: 'bot', time: getCurrentTime() }]);
  //     },
  //     news: () => {
  //       const newsMessage = "You can find the latest news on the 'Student News' section.";
  //       setMessages([...messages, { text: newsMessage, sender: 'bot', time: getCurrentTime() }]);
  //     },
  //     // Add more keywords and their corresponding actions as needed
  //   };
  
  //   const lowercaseQuery = query.toLowerCase();
  //   if (typeof keywordActions[lowercaseQuery] === 'function') {
  //     keywordActions[lowercaseQuery]();
  //   } else {
  //     // Handle unknown keywords or no keyword provided
  //     const errorMessage = "Sorry, I couldn't understand that request.";
  //     setMessages([...messages, { text: errorMessage, sender: 'bot', time: getCurrentTime() }]);
  //   }
  // };
  

  const handleDaySelection = (selectedDay) => {
    const dayConfirmationMessage = `You have selected ${selectedDay}. Please select a time:`;
    const availableTimes = ["3:00 PM", "5:00 PM", "7:00 PM"]; // Available times for the selected day
    const formattedTimes = availableTimes.map(time => (
      <button key={time} onClick={() => handleTimeSelection(selectedDay, time)}>{time}</button>
    ));
    
    setMessages([
      ...messages, 
      { text: dayConfirmationMessage, sender: 'bot', time: getCurrentTime() },
      { text: formattedTimes, sender: 'bot', time: getCurrentTime() }
    ]);
  };
  

  const handleTimeSelection = (selectedDay, selectedTime) => {
    const confirmationMessage = `You have scheduled a Zoom meeting for ${selectedDay} at ${selectedTime}.`;
    setMessages([...messages, { text: confirmationMessage, sender: 'bot', time: getCurrentTime() }]);
    // Here you can further process the meeting scheduling, for example, sending the details to a backend service
    // After processing, you can provide additional options
    provideOptions();
  };

  const provideOptions = () => {
    const optionsMessage = "What would you like to do next?";
    const buttons = [
      <button key="schedule" onClick={handleScheduleMeeting}>Schedule Another Meeting</button>,
    ];
    setMessages([...messages, { text: optionsMessage, sender: 'bot', time: getCurrentTime() }]);
    setMessages([...messages, { text: buttons, sender: 'bot', time: getCurrentTime() }]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : 'closed'} ${isExpanded ? 'expanded' : ''}`}>
      <div className="chatbot-header" onClick={toggleChatbot}>
        <div>
          SparkBot
          <span className="online-indicator">
            <div className="dot"></div>
            <span>Online</span>
          </span>
        </div>
        <div>
          <span className="chatbot-minimize">{isOpen ? '-' : '+'}</span>
          <span className="chatbot-expand" onClick={expandChat}></span> {/* Expand button */}
        </div>
      </div>
      {isOpen && (
        <div className="chatbot-content">
          <div className="chatbot-messages" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === 'user' ? (
                  <div className="user-message">
                    {msg.text}
                    <div className="message-time">{msg.time}</div>
                  </div>
                ) : (
                  <div className="bot-message">
                    <div className="message-title">{msg.sender === 'bot' ? 'SparkBot' : 'Me'}</div>
                    <div className="message-text">{msg.text}</div>
                    <div className="message-time">{msg.time}</div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="button-container">
            <button onClick={handleSiteNavClick}>Site Navigation</button>
            <button onClick={handleInterviewSettingChoice}>I am an interviewee</button>
          </div>
          <form className="message-input-container" onSubmit={(e) => { e.preventDefault(); handleMessageSubmit(inputMessage); }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleMessageSubmit(inputMessage);
                }
              }}
            />
            <button onClick={() => handleMessageSubmit(inputMessage)}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;