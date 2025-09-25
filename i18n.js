// Internationalization system for SARRA
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('sarra-lang') || 'en';
        this.translations = {
            en: {
                // Common
                'title': 'SARRA',
                'tagline': 'Feedback-Driven LLM Adaptation',
                'about': 'About',
                'contact': 'Contact',
                'back_to_home': '← Back to Home',
                
                // Index page
                'ask_placeholder': 'Ask a question...',
                'about_description': 'AI adaptation through feedback',
                'contact_description': 'Ready to collaborate',
                
                // About page
                'about_text': 'We propose a feedback-driven improvement loop for retrieval-augmented generation (RAG)-based chatbots. This framework enables the chatbot to learn and evolve by integrating real-time user corrections and feedback. By incorporating user input, the chatbot can enhance its accuracy and relevance, leading to better understanding of user intent and improved interactions over time.',
                
                // Chat page
                'new_chat': 'New Chat',
                'search_chats': 'Search chats...',
                'history': 'History',
                'user': 'User',
                'welcome_message': 'Welcome to SARRA!',
                'welcome_description': 'I\'m ready to help you with any questions. Start a new conversation below.',
                'message_placeholder': 'Write your question...',
                'disclaimer': 'SARRA can make mistakes. Check important information.',
                'rate_answer': 'Rate Answer',
                'rating': 'Rating:',
                'your_feedback': 'Your feedback',
                'submit': 'Submit',
                'generating_response': 'Generating response...',
                'please_leave_feedback': 'Please leave feedback',
                'please_rate': 'Please rate',
                'accepted_validation': 'Accepted (validation passed)',
                'rejected_validation': 'Rejected (validation failed)',
                'delete_chat_confirm': 'Are you sure you want to delete the chat',
                'sarra_assistant': 'SARRA Assistant',
                
                // Validation reasons
                'validation_profanity': 'Feedback contains profanity',
                'validation_too_short': 'Feedback too short',
                'validation_spam': 'Spam content detected',
                'validation_more_detail': 'More detailed feedback required',
                
                // Bot response
                'bot_response_documents': 'For this, you will need to provide the necessary documents in person at JSC "Government for Citizens" or a territorial subdivision of the Ministry of Internal Affairs of the Republic of Kazakhstan. The service is available both in regular and expedited procedures, depending on the situation.'
            },
            kk: {
                // Common
                'title': 'SARRA',
                'tagline': 'Кері байланыс арқылы LLM бейімдеу',
                'about': 'Туралы',
                'contact': 'Байланыс',
                'back_to_home': '← Басты бетке оралу',
                
                // Index page
                'ask_placeholder': 'Сұрақ қойыңыз...',
                'about_description': 'Кері байланыс арқылы AI бейімдеу',
                'contact_description': 'Ынтымақтастыққа дайын',
                
                // About page
                'about_text': 'Біз RAG-негізделген чат-боттар үшін кері байланыс арқылы жақсарту циклін ұсынамыз. Бұл шеңбер чат-ботқа нақты уақыттағы пайдаланушы түзетулері мен кері байланысын интеграциялау арқылы үйренуге және дамуға мүмкіндік береді. Пайдаланушы енгізулерін қосу арқылы чат-бот өзінің дәлдігі мен өзектілігін арттыра алады, пайдаланушы ниетін жақсырақ түсінуге және уақыт өте келе өзара әрекеттесуді жақсартуға әкеледі.',
                
                // Chat page
                'new_chat': 'Жаңа чат',
                'search_chats': 'Чаттарды іздеу...',
                'history': 'Тарих',
                'user': 'Пайдаланушы',
                'welcome_message': 'SARRA-ға қош келдіңіз!',
                'welcome_description': 'Мен кез келген сұрақтарға көмектесуге дайынмын. Төменде жаңа сөйлесу бастаңыз.',
                'message_placeholder': 'Сұрағыңызды жазыңыз...',
                'disclaimer': 'SARRA қателер жасауы мүмкін. Маңызды ақпаратты тексеріңіз.',
                'rate_answer': 'Жауапты бағалау',
                'rating': 'Рейтинг:',
                'your_feedback': 'Сіздің пікіріңіз',
                'submit': 'Жіберу',
                'generating_response': 'Жауап генерацияланып жатыр...',
                'please_leave_feedback': 'Пікір қалдырыңыз',
                'please_rate': 'Баға беріңіз',
                'accepted_validation': 'Қабылданды (тексеру өтті)',
                'rejected_validation': 'Қабылданбады (тексеру өтпеді)',
                'delete_chat_confirm': 'Чатты жойғыңыз келе ме',
                'sarra_assistant': 'SARRA Көмекшісі',
                
                // Validation reasons
                'validation_profanity': 'Кері байланыста дөрекі сөздер бар',
                'validation_too_short': 'Кері байланыс тым қысқа',
                'validation_spam': 'Спам мазмұн анықталды',
                'validation_more_detail': 'Көбірек толық кері байланыс қажет',
                
                // Bot response
                'bot_response_documents': 'Ол үшін сізге қажетті құжаттарды "Азаматтарға арналған үкімет" МКК немесе ҚР ІІМ-нің аумақтық бөлімшесіне дербес ұсыну қажет болады. Қызмет жағдайға байланысты қалыпты және жеделдетілген тәртіпте қол жетімді.'
            },
            ru: {
                // Common
                'title': 'SARRA',
                'tagline': 'Адаптация LLM через обратную связь',
                'about': 'О проекте',
                'contact': 'Контакты',
                'back_to_home': '← Вернуться домой',
                
                // Index page
                'ask_placeholder': 'Задайте вопрос...',
                'about_description': 'AI адаптация через обратную связь',
                'contact_description': 'Готовы к сотрудничеству',
                
                // About page
                'about_text': 'Мы предлагаем цикл улучшения с обратной связью для чат-ботов на основе RAG (retrieval-augmented generation). Эта платформа позволяет чат-боту учиться и развиваться, интегрируя исправления и отзывы пользователей в реальном времени. Включая пользовательские данные, чат-бот может повысить свою точность и релевантность, что приводит к лучшему пониманию намерений пользователя и улучшению взаимодействия со временем.',
                
                // Chat page
                'new_chat': 'Новый чат',
                'search_chats': 'Поиск чатов...',
                'history': 'История',
                'user': 'Пользователь',
                'welcome_message': 'Добро пожаловать в SARRA!',
                'welcome_description': 'Я готов помочь вам с любыми вопросами. Начните новый разговор ниже.',
                'message_placeholder': 'Напишите ваш вопрос...',
                'disclaimer': 'SARRA может делать ошибки. Проверяйте важную информацию.',
                'rate_answer': 'Оценить ответ',
                'rating': 'Рейтинг:',
                'your_feedback': 'Ваш отзыв',
                'submit': 'Отправить',
                'generating_response': 'Генерируется ответ...',
                'please_leave_feedback': 'Пожалуйста, оставьте отзыв',
                'please_rate': 'Пожалуйста, поставьте оценку',
                'accepted_validation': 'Принято (валидация пройдена)',
                'rejected_validation': 'Отклонено (валидация не пройдена)',
                'delete_chat_confirm': 'Вы уверены, что хотите удалить чат',
                'sarra_assistant': 'SARRA Ассистент',
                
                // Validation reasons
                'validation_profanity': 'Фидбэк содержит ненормативную лексику',
                'validation_too_short': 'Отзыв слишком короткий',
                'validation_spam': 'Обнаружен спам-контент',
                'validation_more_detail': 'Требуется более детальная обратная связь',
                
                // Bot response
                'bot_response_documents': 'Для этого потребуется предоставить необходимые документы лично в НАО «Государственная корпорация «Правительство для граждан» или территориальное подразделение МВД РК. Услуга доступна как в обычном, так и в ускоренном порядке, в зависимости от ситуации.'
            }
        };
        
        this.validationReasons = {
            en: [
                'validation_profanity',
                'validation_too_short', 
                'validation_spam',
                'validation_more_detail'
            ],
            kk: [
                'validation_profanity',
                'validation_too_short',
                'validation_spam', 
                'validation_more_detail'
            ],
            ru: [
                'validation_profanity',
                'validation_too_short',
                'validation_spam',
                'validation_more_detail'
            ]
        };
    }
    
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }
    
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('sarra-lang', lang);
            this.updatePageTexts();
            this.updateLangAttribute();
        }
    }
    
    getCurrentLang() {
        return this.currentLang;
    }
    
    updateLangAttribute() {
        document.documentElement.setAttribute('lang', this.currentLang);
    }
    
    updatePageTexts() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update placeholders specifically
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        // Update title attribute for tooltips
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });
    }
    
    getRandomValidationReason() {
        const reasons = this.validationReasons[this.currentLang];
        const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
        return this.t(randomReason);
    }
    
    init() {
        this.updateLangAttribute();
        this.updatePageTexts();
        this.createLanguageSwitcher();
    }
    
    createLanguageSwitcher() {
        // Remove existing switcher if present
        const existingSwitcher = document.getElementById('language-switcher');
        if (existingSwitcher) {
            existingSwitcher.remove();
        }
        
        const switcher = document.createElement('div');
        switcher.id = 'language-switcher';
        switcher.className = 'fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-2';
        switcher.innerHTML = `
            <div class="flex gap-1">
                <button class="lang-btn px-3 py-1 rounded text-sm font-medium transition-colors ${this.currentLang === 'en' ? 'bg-[#8f6451] text-white' : 'text-[#8f6451] hover:bg-[#f5f5f5]'}" data-lang="en">EN</button>
                <button class="lang-btn px-3 py-1 rounded text-sm font-medium transition-colors ${this.currentLang === 'kk' ? 'bg-[#8f6451] text-white' : 'text-[#8f6451] hover:bg-[#f5f5f5]'}" data-lang="kk">ҚАЗ</button>
                <button class="lang-btn px-3 py-1 rounded text-sm font-medium transition-colors ${this.currentLang === 'ru' ? 'bg-[#8f6451] text-white' : 'text-[#8f6451] hover:bg-[#f5f5f5]'}" data-lang="ru">РУС</button>
            </div>
        `;
        
        document.body.appendChild(switcher);
        
        // Add event listeners
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedLang = e.target.getAttribute('data-lang');
                this.setLang(selectedLang);
                
                // Update button states
                switcher.querySelectorAll('.lang-btn').forEach(b => {
                    b.className = 'lang-btn px-3 py-1 rounded text-sm font-medium transition-colors text-[#8f6451] hover:bg-[#f5f5f5]';
                });
                e.target.className = 'lang-btn px-3 py-1 rounded text-sm font-medium transition-colors bg-[#8f6451] text-white';
            });
        });
    }
}

// Global i18n instance
window.i18n = new I18n();