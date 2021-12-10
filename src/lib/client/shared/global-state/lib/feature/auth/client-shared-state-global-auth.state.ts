import { assign, createMachine, Interpreter } from "xstate";

const key = "ClientSharedStateAuthMachine";

type AuthEvent =
   | { type: "LOGIN"; payload: { user: string } }
   | { type: "LOGOUT" };

interface AuthContext {
   user: string | null;
}

export type AuthService = Interpreter<
   AuthContext,
   any,
   AuthEvent,
   {
      value: any;
      context: AuthContext;
   }
>;

export const authMachine = createMachine<AuthContext, AuthEvent>({
   id: key,
   initial: "notAuthenticated",
   context: {
      user: ""
   },
   states: {
      notAuthenticated: {
         on: {
            LOGIN: {
               target: "authenticated",
               actions: [
                  assign({
                     user: (_context, event) => event.payload.user
                  })
               ]
            }
         }
      },
      authenticated: {
         on: {
            LOGOUT: {
               target: "notAuthenticated",
               actions: [
                  assign({
                     user: ""
                  })
               ]
            }
         }
      }
   }
});
