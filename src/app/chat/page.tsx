'use client';
import { Input } from '@/components/ui/input';
import { useChat } from 'ai/react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <div className="flex flex-col w-full pt-24 pb-12 mx-auto stretch h-[calc(100vh-80px)] overflow-y-auto">
                <div className="max-w-xl mx-auto">
                    {messages.map(m => (
                        <div key={m.id} className="whitespace-pre-wrap">
                            {m.role === 'user' ? 'User: ' : 'AI: '}
                            {m.content}
                        </div>
                    ))}
                </div>

            <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 h-20 w-full p-2 border border-gray-300 rounded shadow-xl flex justify-center items-center">
                <Input
                    className="w-full p-2 rounded max-w-3xl h-12 text-base shadow-2xl border-1"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}