import { useState } from 'react';
import { useMessagesQuery } from '@/app/tanstack-queries/chatQuery';
import { useSendMessageMutation } from '@/app/features/chat/mutations/useSendMessageMutation';
import { useT } from '@/app/i18n/useT';
import { sonnerResponse } from '@/app/helpers/sonnerResponse';

export function useChatHook() {
  const t = useT();
  const [draft, setDraft] = useState('');
  const messagesQuery = useMessagesQuery();
  const send = useSendMessageMutation();

  const submit = () => {
    const text = draft.trim();
    if (!text) return;
    send.mutate(text, { onSuccess: () => setDraft('') });
  };

  const voice = () => {
    sonnerResponse(t('chat.voice'), 'loading');
  };

  return {
    t,
    draft,
    setDraft,
    submit,
    voice,
    messages: messagesQuery.data ?? [],
    isSending: send.isPending,
  };
}
