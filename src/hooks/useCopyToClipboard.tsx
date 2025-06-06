import { useRef, useState } from "react";

const useCopyToClipboard = (text: string, delay: number) => {
  const [copied, setCopied] = useState(false);

  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
      timeoutId.current = setTimeout(() => setCopied(false), delay);
    } catch (error) {
      console.log(error);
      setCopied(false);
    }
  };

  return { copied, copy };
};

export default useCopyToClipboard;
