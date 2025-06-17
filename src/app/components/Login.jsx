import { NeonButton } from "./Neon-Button";

export function Login() {
  return (
    <div className="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5">
      <div className="min-h-screen flex items-center justify-center bg-purple-950 p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-block p-4 bg-transparent rounded-full mb-4 shadow-lg shadow-pink-500/20">
              <img src="/imgs/spoti-logo.svg" alt="Spotify Logo" className="w-28 h-28" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 text-shadow-neon">
              Spotidados
            </h2>
            <p className="text-pink-400">asd</p>
          </div>

          <div className="bg-purple-700 border border-white rounded-xl shadow-2xl shadow-pink-500/10 overflow-hidden">
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                    placeholder="Bom dia flor"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <NeonButton
                    borderStartColor="#a21caf"
                    borderEndColor="#f472b6"
                    textColor="#fff"
                    backgroundColor="transparent"
                    className="h-5 py-2 px-4 text-base flex justify-center items-center bg-purple-950"
                  >
                    <span className="text-center">Login</span>
                  </NeonButton>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-700 rounded bg-gray-800"
                    ></input>
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-400"
                    >
                      Lembrar minha password
                    </label>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    >
                      Esqueci minha password
                    </a>
                  </div>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-6 bg-purple-950 text-white rounded-2xl">
                      Ou entre com
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button className="flex justify-center items-center py-2 px-4 bg-purple-950 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors duration-300">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="flex justify-center items-center py-2 px-4 bg-purple-950 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors duration-300">
                    <svg
                      className="h-5 w-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </button>
                  <button className="flex justify-center items-center py-2 px-4 bg-purple-950 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors duration-300">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.18.69.8.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-400">
                Não tens uma conta?
                <a
                  href="#"
                  className="font-medium text-pink-400 hover:text-pink-300 transition-colors duration-300"
                >
                  {" "}
                  Cadastre-se agora
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
