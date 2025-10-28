// Função para detectar se é dispositivo móvel
export const isMobile = () => {
  if (typeof window === 'undefined') return false;

  // Verificar user agent
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Verificar se é mobile
  const mobileRegex = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

  // Verificar largura da tela
  const screenWidth = window.innerWidth;

  return mobileRegex.test(userAgent.toLowerCase()) || screenWidth < 768;
};

// Hook para detectar mudanças de tamanho da tela
export const useIsMobile = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileDevice;
};
