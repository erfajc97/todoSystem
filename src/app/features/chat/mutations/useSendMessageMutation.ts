import { useMutation } from '@tanstack/react-query';
import { apiErrorToast } from '@/app/helpers/apiErrorToast';
import { queryClient } from '@/app/lib/queryClient';
import { t } from '@/app/i18n';
import { MESSAGES_KEY } from '@/app/tanstack-queries/chatQuery';
import { sendMessage } from '../services/chatService';

export function useSendMessageMutation() {
  return useMutation({
    mutationFn: (text: string) => sendMessage(text),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: MESSAGES_KEY });
    },
    onError: (err) => apiErrorToast(err, t('common.error')),
  });
}
