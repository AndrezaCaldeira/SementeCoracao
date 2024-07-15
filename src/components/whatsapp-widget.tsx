import { SvgWhatsapp } from "@/icons/svg-whatsapp";

export function WhatsappWidget() {
  return (
    <>
      <a
        className="fixed bottom-4 right-4 z-50 p-3 bg-green-500 hover:bg-green-500/90 transition rounded-full shadow-lg"
        href="https://call.whatsapp.com/voice/UjfHhtAYAiKFEFqs9EXuSK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgWhatsapp className="size-7" />
      </a>
    </>
  );
}
