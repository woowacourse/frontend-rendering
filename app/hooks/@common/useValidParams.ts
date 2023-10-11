import { useSearchParams } from 'next/navigation';

type Params<Key extends string = string> = {
  readonly [key in Key]: string;
};

export const useValidParams = <T extends string>(
  paramKeys: T[]
): Readonly<Params<T>> => {
  const searchParams = useSearchParams();

  const validParams = paramKeys.reduce((acc, key) => {
    const paramValue = searchParams.get(key) as string | undefined;

    if (!paramValue) throw new Error(`Param '${key}' not found`);
    if (!paramValue.trim()) throw new Error('Invalid Params');

    return { ...acc, [key]: paramValue };
  }, {} as Readonly<Params<T>>);

  return validParams;
};
