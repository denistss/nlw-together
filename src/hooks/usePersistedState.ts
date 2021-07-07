import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Theme = { theme: Object }

export function usePersistedState(key: string, inicialState: any) {
    const [state, setState] = useState(() => {
        const storagedValue = localStorage.getItem(key)

        if (storagedValue){
          console.log("aqui")
            return JSON.parse(storagedValue)
        } else {
          console.log("aqui2")
            return inicialState;
        }
    });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState]
}