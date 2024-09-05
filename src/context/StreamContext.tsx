import React, {createContext, useContext, useState, ReactNode} from 'react';

interface StreamContextProps {
    stream: MediaStream | null;
    setStream: (stream: MediaStream) => void;
}

const StreamContext = createContext<StreamContextProps | undefined>(undefined);

export const useStream = () => {
    const context = useContext(StreamContext);
    if (!context) {
        throw new Error("useStream must be used within a StreamProvider");
    }
    return context;
};

interface StreamProviderProps {
    children: ReactNode;
}

export const StreamProvider: React.FC<StreamProviderProps> = ({children}) => {
    const [stream, setStream] = useState<MediaStream | null>(null);

    return (
        <StreamContext.Provider value={{stream, setStream}}>
            {children}
        </StreamContext.Provider>
    );
};
