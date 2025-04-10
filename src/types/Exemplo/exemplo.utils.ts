export interface GetGreetingProps {
  name: string;
}

export const getGreeting = ({ name }: GetGreetingProps): string => {
  if (!name.trim()) {
    throw new Error("Nome não pode estar vazio");
  }
  return `Testando com ${name}!`;
};
