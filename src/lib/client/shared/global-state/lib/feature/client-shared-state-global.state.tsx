import { createContext, useContext } from "react";
import { useActor, useInterpret } from "@xstate/react";

import {
   authMachine,
   AuthService
} from "./auth/client-shared-state-global-auth.state";

interface StateMachinesContextKeys {
   auth: AuthService;
}

export const StateMachinesContext =
   createContext<StateMachinesContextKeys>(null);

export const StateMachinesRoot: React.FunctionComponent = ({ children }) => {
   const auth: AuthService = useInterpret(authMachine);

   return (
      <StateMachinesContext.Provider value={{ auth }}>
         {children}
      </StateMachinesContext.Provider>
   );
};

export function useStateMachine(key: keyof StateMachinesContextKeys) {
   const globalStateMachineServices = useContext(StateMachinesContext);
   return useActor(globalStateMachineServices[key]);
}
