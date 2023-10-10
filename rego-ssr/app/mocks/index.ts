const initMockAPI = async (): Promise<void> => {
  if (typeof window === 'undefined') {
    const { server } = await import('@/app/mocks/server');
    server.listen();
  } else {
    const { worker } = await import('@/app/mocks/browser');
    worker.start();
  }
};

export default initMockAPI;
