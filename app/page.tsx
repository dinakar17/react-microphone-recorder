import HookDemoSection from "./HookDemoSection";
import RecordAudioDemo from "./RecordAudioDemo";

export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
        `RecordAudio` Component Demo
      </h1>
      <RecordAudioDemo />
      <h1 className="my-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
        `useRecorder` Hook Demo
      </h1>
      <HookDemoSection />
    </div>
  );
}
