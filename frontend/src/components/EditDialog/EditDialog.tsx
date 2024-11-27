import { Typography } from 'antd';
import { FC, useMemo } from 'react';
import ChatBot, { ChatBotProvider, Flow, Settings } from 'react-chatbotify';
import { Link } from 'react-router-dom';
import { Editor } from './components/Editor/Editor';

const { Title } = Typography;

export const EditDialog: FC = () => {
  const themes = [
    { id: 'solid_purple_haze', version: '0.1.0' },
    { id: 'simple_blue', version: '0.1.0' },
  ];

  const flow: Flow = {
    start: {
      message: 'Привет, кто ты?',
      path: 'end',
    },
    end: {
      message: (params) => `Привет, ${params.userInput}!`,
    },
  };

  const settings: Settings = useMemo(
    () => ({
      // device:{
      //   // mobileEnabled:true,
      //   // desktopEnabled:true,
      // },
      botBubble: {
        showAvatar: true,
      },
      audio: {
        voiceNames: ['Google русский (ru-RU)'],
        disabled: false,

        language: 'ru-RU',
      },
      voice: {
        language: 'ru-RU',

        disabled: false,
      },
      general: {
        embedded: false,
        // showFooter:false
      },
      header: {
        title: <div style={{ cursor: 'pointer', margin: 0, fontSize: 20, fontWeight: 'bold' }}>Мой title</div>,
        avatar: '/logo.svg',
      },
      chatHistory: {
        storageKey: 'conversations_summary',
      },
    }),
    [],
  );

  return (
    <section>
      <div className="my-container pt-14">
        <Link to={'/'}>
          <img className="w-14 h-9" src="/logo.svg" />
        </Link>
        <div className="bg-white rounded-[30px] pb-44 pt-8 px-6">
          <Title className="text-2xl mx-auto leading-5 max-w-[139px] sm:max-w-full text-center">
            Настройка ассистента
          </Title>
          <ChatBotProvider>
            <Editor />
            <ChatBot settings={settings} flow={flow} />
          </ChatBotProvider>
        </div>
      </div>
    </section>
  );
};
