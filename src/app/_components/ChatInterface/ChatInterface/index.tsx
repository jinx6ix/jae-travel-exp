import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import DatePicker from '../Datepicker'
import DestinationOptions from '../DestinationOptions'
import useConversationStorage from '../ConversationMessage'
import { LuRefreshCcw } from 'react-icons/lu'
import { MdCloseFullscreen } from 'react-icons/md'
import { debounce } from 'lodash'
import { FaEdit } from 'react-icons/fa'

export interface Message {
  sender: 'bot' | 'user'
  text: string
}

enum ConversationStep {
  Welcome,
  OfferHelp,
  AskHelp,
  ShowDestinationOptions,
  EndConversation,
}

interface ChatInterfaceProps {
  onClose: () => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('messages')
    return savedMessages ? JSON.parse(savedMessages) : []
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [conversationStep, setConversationStep] = useState<ConversationStep>(() => {
    const savedStep = localStorage.getItem('conversationStep')
    return savedStep ? JSON.parse(savedStep) : ConversationStep.AskHelp
  })
  const [showDestinationOptions, setShowDestinationOptions] = useState<boolean>(() => {
    const savedState = localStorage.getItem('showDestinationOptions')
    return savedState ? JSON.parse(savedState) : false
  })
  const bottomMessageRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedDestination, setSelectedDestination] = useState<string>(() => {
    return localStorage.getItem('selectedDestination') || ''
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const savedDate = localStorage.getItem('selectedDate')
    return savedDate ? new Date(savedDate) : null
  })

  const [initialMessagesDisplayed, setInitialMessagesDisplayed] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('initialMessagesDisplayed') || 'false')
  })

  const [dateSelected, setDateSelected] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('dateSelected') || 'false')
  })

  const [selectedPeople, setSelectedPeople] = useState<number | null>(() => {
    const savedPeople = localStorage.getItem('selectedPeople')
    return savedPeople ? JSON.parse(savedPeople) : null
  })
  const [showRangeSlider, setShowRangeSlider] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('showRangeSlider') || 'false')
  })
  const [budget, setBudget] = useState<number | null>(() => {
    const savedBudget = localStorage.getItem('budget')
    return savedBudget ? JSON.parse(savedBudget) : null
  })
  const [showBudgetInput, setShowBudgetInput] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('showBudgetInput') || 'false')
  })

  const [travelerName, setTravelerName] = useState<string>(() => {
    return localStorage.getItem('travelerName') || ''
  })
  const [showNameInput, setShowNameInput] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('showNameInput') || 'false')
  })
  const [phoneNumber, setPhoneNumber] = useState<string>(() => {
    return localStorage.getItem('phoneNumber') || ''
  })
  const [emailAddress, setEmailAddress] = useState<string>(() => {
    return localStorage.getItem('emailAddress') || ''
  })
  const [showEmailAddressInput, setShowEmailAddressInput] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('showEmailAddressInput') || 'false')
  })
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('showPhoneNumberInput') || 'false')
  })

  const { clearConversation } = useConversationStorage(messages, setMessages)

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages))
    localStorage.setItem('conversationStep', JSON.stringify(conversationStep))
    localStorage.setItem('showDestinationOptions', JSON.stringify(showDestinationOptions))
    localStorage.setItem('selectedDestination', selectedDestination)
    localStorage.setItem('selectedDate', selectedDate ? selectedDate.toISOString() : '')
    localStorage.setItem('initialMessagesDisplayed', JSON.stringify(initialMessagesDisplayed))
    localStorage.setItem('dateSelected', JSON.stringify(dateSelected))
    localStorage.setItem('selectedPeople', JSON.stringify(selectedPeople))
    localStorage.setItem('showRangeSlider', JSON.stringify(showRangeSlider))
    localStorage.setItem('budget', JSON.stringify(budget))
    localStorage.setItem('showBudgetInput', JSON.stringify(showBudgetInput))
    localStorage.setItem('travelerName', travelerName)
    localStorage.setItem('phoneNumber', phoneNumber)
    localStorage.setItem('emailAddress', emailAddress)
    localStorage.setItem('showEmailAddressInput', JSON.stringify(showEmailAddressInput))
    localStorage.setItem('showPhoneNumberInput', JSON.stringify(showPhoneNumberInput))
  }, [
    messages,
    conversationStep,
    showDestinationOptions,
    selectedDestination,
    selectedDate,
    initialMessagesDisplayed,
    dateSelected,
    selectedPeople,
    showRangeSlider,
    budget,
    showBudgetInput,
    travelerName,
    phoneNumber,
    emailAddress,
    showEmailAddressInput,
    showPhoneNumberInput,
  ])

  useEffect(() => {
    clearChatAfterTimeout()
    if (messages.length === 0) {
      const timer = setTimeout(() => {
        const initialMessages: Message[] = [
          { sender: 'bot', text: 'Hi there! Welcome to Jae Travel Expedition!' },
          { sender: 'bot', text: 'I can help you book your next trip.' },
          { sender: 'bot', text: 'Would you like me to do that?' },
        ]

        initialMessages.forEach((message, index) => {
          setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, message])
          }, (index + 1) * 2000)
        })

        setTimeout(() => {
          setInitialMessagesDisplayed(true)
        }, initialMessages.length * 3000)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [])

  const addMessage = (message: Message) => {
    setConversationStep(ConversationStep.OfferHelp)

    setMessages((prevMessages) => [...prevMessages, message])
  }

  const handleUserResponse = (response: boolean) => {
    if (response) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: 'Yes' },
        { sender: 'bot', text: 'Where would you like to go?' },
      ])
      setConversationStep(ConversationStep.ShowDestinationOptions)
      setShowDestinationOptions(true)
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: 'No' },
        { sender: 'bot', text: 'Okay, thank you. Continue navigating the Website.' },
      ])
      setConversationStep(ConversationStep.EndConversation)
      setTimeout(() => {
        scrollToBottom()
      }, 2000)
      setTimeout(() => {
        onClose()
        clearChat()
      }, 5000)
      const clearChat = () => {
        clearConversation()
        setMessages([])
        localStorage.clear()
        setDateSelected(false)
        setShowRangeSlider(false)
        setShowBudgetInput(false)
        setShowNameInput(false)
        setShowEmailAddressInput(false)
        setShowPhoneNumberInput(false)
        setShowDestinationOptions(false)
      }
    }
  }

  const handleDestinationSelection = (destination: string) => {
    setSelectedDestination(destination)
    addMessage({ sender: 'user', text: `I would like to go to ${destination}` })
    addMessage({ sender: 'bot', text: 'Great pick! When would you like to travel?' })
    scrollToBottom()
    setConversationStep(ConversationStep.OfferHelp)
  }

  const handleDateSelection = (startDate: Date, endDate: Date) => {
    setSelectedDate(startDate)
    setDateSelected(true)
    addMessage({
      sender: 'user',
      text: `I would like to travel from ${startDate.toDateString()} to ${endDate.toDateString()}`,
    })
    addMessage({ sender: 'bot', text: 'How many people are traveling?' })
    setShowRangeSlider(true) // Moved this here to show the input box before messages
    scrollToBottom()
  }

  const debouncedHandlePeopleSelection = debounce((people: number) => {
    setSelectedPeople(people)
    addMessage({ sender: 'user', text: `There will be ${people} people traveling` })
    addMessage({ sender: 'bot', text: 'What is your budget?' })
    setShowRangeSlider(false)
    setShowBudgetInput(true)
    scrollToBottom()
  }, 3000)

  const handleBudgetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value) // Parse input value to number
    setBudget(value) // Update budget state immediately
  }

  const handleBudgetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowBudgetInput(false)
    addMessage({ sender: 'user', text: `My budget is $${budget}` })
    addMessage({ sender: 'bot', text: 'Can I have your name?' })
    setShowNameInput(true)
    scrollToBottom()
  }

  const debouncedHandleNameInput = debounce((value: string) => {
    setTravelerName(value) // Update travelerName state directly here
  }, 300) // Adjust the debounce delay here (in milliseconds)

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    debouncedHandleNameInput(value)
    // Update travelerName state immediately without waiting for debounce
    setTravelerName(value)
    scrollToBottom()
  }

  const handleNameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addMessage({ sender: 'user', text: `My name is ${travelerName}` })
    addMessage({ sender: 'bot', text: 'Can I have your email address?' })
    setShowEmailAddressInput(true)
    setShowNameInput(false)
    scrollToBottom()
  }

  const handleEmailAddressInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setEmailAddress(value) // Update emailAddress state with the correct value
  }
  const handleEmailAddressSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addMessage({ sender: 'user', text: `My email address is ${emailAddress}` })
    addMessage({ sender: 'bot', text: 'Can I have your phone number?' })
    setShowPhoneNumberInput(true)
    setShowEmailAddressInput(false)
    scrollToBottom()
  }

  const handlePhoneNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPhoneNumber(value) // Update phoneNumber state with the correct value
  }

  const handlePhoneNumberSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addMessage({ sender: 'user', text: `My phone number is ${phoneNumber}` })
    addMessage({
      sender: 'bot',
      text: 'Thank you! We will contact you soon with the best travel options for your trip.',
    })
    setConversationStep(ConversationStep.EndConversation)
    setShowPhoneNumberInput(false)

    scrollToBottom()
  }

  const scrollToBottom = () => {
    if (bottomMessageRef.current) {
      bottomMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const clearChat = () => {
    // Clear local storage
    localStorage.clear();
  
    // Reset all states
    clearConversation();
    setMessages([]);
    setDateSelected(false);
    setShowRangeSlider(false);
    setShowBudgetInput(false);
    setShowNameInput(false);
    setShowEmailAddressInput(false);
    setShowPhoneNumberInput(false);
    setShowDestinationOptions(false);
    setSelectedDestination('');
    setSelectedDate(null);
    setInitialMessagesDisplayed(false);
    setSelectedPeople(null);
    setBudget(null);
    setTravelerName('');
    setPhoneNumber('');
    setEmailAddress('');
    setConversationStep(ConversationStep.Welcome);
    setInitialMessagesDisplayed(false)
  };
  
  const clearChatAfterTimeout = () => {
    setTimeout(() => {
      const savedMessages = localStorage.getItem('messages');
      if (savedMessages && JSON.parse(savedMessages).length > 0) {
        clearChat()
      }
    }, 10 * 60 * 1000); // 10 minutes in milliseconds
  };
  

  const handleEditMessage = (messageText: string) => {
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
    const phoneNumberRegex = /\+?[0-9]+/
    const nameRegex = /[A-Za-z]+/
    const numberRegex = /\d+/

    if (emailRegex.test(messageText)) {
      // Handle email editing
      addMessage({
        sender: 'bot',
        text: 'Edit Email address and submit',
      })
      setShowEmailAddressInput(true)
      scrollToBottom()
    } else if (phoneNumberRegex.test(messageText)) {
      // Handle phone number editing
      addMessage({
        sender: 'bot',
        text: 'Edit phone number and submit',
      })
      setShowPhoneNumberInput(true)
      scrollToBottom()
    } else if (phoneNumberRegex.test(messageText)) {
      // Handle phone number editing
      addMessage({
        sender: 'bot',
        text: 'Edit phone number and submit',
      })
      setShowRangeSlider(true)
      setShowBudgetInput(true)
      scrollToBottom()
    } else if (nameRegex.test(messageText)) {
      // Handle name editing
      addMessage({
        sender: 'bot',
        text: 'Edit text and submit',
      })
      setShowNameInput(true)
      scrollToBottom()
    } else if (numberRegex.test(messageText)) {
      // Handle number editing
      addMessage({
        sender: 'bot',
        text: 'Edit Number of travellers and submit',
      })
      setShowBudgetInput(true)
      setShowRangeSlider(true)
      scrollToBottom()
    } else {
      // Default case for text input
      addMessage({
        sender: 'bot',
        text: 'Edit text and submit',
      })
      setDateSelected(true)
      setShowDestinationOptions(true)
      scrollToBottom()
    }
  }

  const onSubmit = async () => {
    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: '665294a033ff7fa56f278617', // Replace with your form ID
          submissionData: {
            selectedDestination,
            selectedDate,
            selectedPeople,
            budget,
            travelerName,
            phoneNumber,
            emailAddress,
          },
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit data');
      }
  
      console.log('Data submitted successfully:', data);
      // Handle success, reset form, etc.
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error, display error message, etc.
    }
  };
  


  useEffect(() => {
    if (conversationStep === ConversationStep.EndConversation) {
      onSubmit()
    }
  }, [conversationStep])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatarColumn}>
          <div className={styles.avatar} />
          <div>
            <h5>JaeBot</h5>
          </div>
        </div>
        <div className={styles.avatarFlex}>
          <div className={styles.RefreshBtn}>
            <LuRefreshCcw onClick={clearChat} />
          </div>
          <div className={styles.CloseBtn}>
            <MdCloseFullscreen onClick={onClose} />
          </div>
        </div>
      </div>
      <div className={styles.messageContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            ref={index === messages.length - 1 ? bottomMessageRef : null}
            className={message.sender === 'user' ? styles.userMessage : styles.botMessage}
          >
            {message.text}
            {message.sender === 'user' && (
              <FaEdit className={styles.editIcon} onClick={() => handleEditMessage(message.text)} />
            )}
          </div>
        ))}
        {initialMessagesDisplayed && conversationStep === ConversationStep.AskHelp && (
          <div className={styles.Button}>
            <button onClick={() => handleUserResponse(true)}>Yes</button>
            <button onClick={() => handleUserResponse(false)}>No</button>
          </div>
        )}
        {showDestinationOptions && conversationStep === ConversationStep.ShowDestinationOptions && (
          <DestinationOptions onSelectDestination={handleDestinationSelection} />
        )}
        {!dateSelected && conversationStep === ConversationStep.OfferHelp && (
          <DatePicker onDateSelected={handleDateSelection} />
        )}
        {showRangeSlider && (
          <div className={styles.NumberContainer}>
            <input
              className={styles.numberInput}
              type="number"
              placeholder="Enter number of travelers"
              onChange={(e) => debouncedHandlePeopleSelection(Number(e.target.value))}
            />
          </div>
        )}

        {showBudgetInput && (
          <form onSubmit={handleBudgetSubmit}>
            <div className={styles.NumberContainer}>
              <input
                className={styles.numberInput}
                type="number"
                placeholder="Enter travel budget (USD)"
                onChange={handleBudgetInput} // Updated function
                value={budget || ''} // Set value to budget or an empty string if budget is null
              />
            </div>
          </form>
        )}

        {showNameInput && (
          <form onSubmit={handleNameSubmit}>
            <div className={styles.NumberContainer}>
              <input
                className={styles.numberInput}
                type="text"
                placeholder="Enter traveler's name"
                onChange={handleNameInput}
                value={travelerName}
              />
            </div>
          </form>
        )}
        {showEmailAddressInput && (
          <form onSubmit={handleEmailAddressSubmit}>
            <div className={styles.NumberContainer}>
              <input
                className={styles.numberInput}
                type="email"
                placeholder="Enter email address"
                onChange={handleEmailAddressInput}
                value={emailAddress}
              />
            </div>
          </form>
        )}
        {showPhoneNumberInput && (
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className={styles.NumberContainer}>
              <input
                className={styles.numberInput}
                type="tel"
                placeholder="Enter phone number"
                onChange={handlePhoneNumberInput}
                value={phoneNumber}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ChatInterface
