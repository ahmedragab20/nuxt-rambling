export const useApp = () => {
  const version = useState('ap.version', () => '1.0.0');

  return {
    version,
  };
};
