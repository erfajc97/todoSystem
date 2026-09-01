import { Button } from '@heroui/react';
import { MicIcon } from '@/assets/svg/MicIcon';
import { SendIcon } from '@/assets/svg/SendIcon';
import { FormField } from '@/app/components/UI/FormField';
import { useChatHook } from './hooks/useChatHook';
import AppProviders from '@/app/providers/AppProviders';

export default function Chat() {
  return (
    <AppProviders>
      <ChatContent />
    </AppProviders>
  );
}

function ChatContent() {
  const { t, draft, setDraft, submit, voice, messages, isSending } = useChatHook();

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-56px)] w-full max-w-3xl flex-col">
      <div className="border-b border-border px-4 py-3">
        <h1 className="font-heading text-lg font-extrabold">{t('chat.title')}</h1>
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
              message.from === 'me'
                ? 'ml-auto bg-chat-out text-on-brand'
                : 'bg-surface-raised text-text'
            }`}
          >
            {message.text}
            <span className={`mt-1 block text-[10px] ${message.from === 'me' ? 'text-on-brand/70' : 'text-text-subtle'}`}>
              {message.at}
            </span>
          </div>
        ))}
      </div>
      <form
        noValidate
        className="flex items-center gap-2 border-t border-border px-3 py-3"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <div className="flex-1">
          <FormField
            value={draft}
            onChange={setDraft}
            placeholder={t('chat.placeholder')}
            ariaLabel={t('chat.placeholder')}
            maxLength={500}
          />
        </div>
        <Button variant="ghost" aria-label={t('chat.voice')} onPress={voice} className="min-h-11 min-w-11 rounded-full p-0">
          <MicIcon />
        </Button>
        <Button
          variant="primary"
          aria-label={t('chat.send')}
          isDisabled={isSending}
          onPress={submit}
          className="min-h-11 min-w-11 rounded-full bg-brand p-0 text-on-brand"
        >
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}
