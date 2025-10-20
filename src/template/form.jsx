import { useState } from 'react';
import { Mail, Lock, User, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState('form'); // 'form' | 'verification' | 'verified'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const defaultAccounts = {
    'client@test.com': { password: '123456', type: 'client', name: 'Client Test' },
    'artisan@test.com': { password: '123456', type: 'prestataire', name: 'Artisan Test' }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  // ---------------- LOGIN ----------------
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const defaultAccount = defaultAccounts[formData.email.toLowerCase()];

      if (defaultAccount && defaultAccount.password === formData.password) {
        const userData = {
          id: 'user_' + Date.now(),
          name: defaultAccount.name,
          email: formData.email,
          type: defaultAccount.type
        };
        localStorage.setItem('user', JSON.stringify(userData));

        // 🔹 Redirection selon type
        if (defaultAccount.type === 'client') navigate('/home', { replace: true });
        else navigate('/artisan/dashboard', { replace: true });
      } else {
        setError('Email ou mot de passe incorrect');
      }

      setLoading(false);
    }, 1000);
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError('Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      setLoading(false);
      return;
    }
    if (defaultAccounts[formData.email.toLowerCase()]) {
      setError('Cet email est déjà utilisé');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const code = generateVerificationCode();
      setGeneratedCode(code);

      console.log('═══════════════════════════════════════');
      console.log('📧 CODE DE VÉRIFICATION');
      console.log('À:', formData.email);
      console.log('Code:', code);
      console.log('═══════════════════════════════════════');

      alert(`Code de vérification envoyé à ${formData.email}\n\nCode (dev): ${code}`);

      setStep('verification');
      setLoading(false);
    }, 1000);
  };

  // ---------------- VERIFY ----------------
  const handleVerifyCode = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (verificationCode === generatedCode) {
        setStep('verified');

        const userData = {
          id: 'user_' + Date.now(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: null // onboarding
        };
        localStorage.setItem('user', JSON.stringify(userData));

        setTimeout(() => {
          navigate('/onboarding', { replace: true });
        }, 1500);
      } else {
        setError('Code de vérification incorrect');
      }

      setLoading(false);
    }, 500);
  };

  const handleResendCode = () => {
    const code = generateVerificationCode();
    setGeneratedCode(code);
    setVerificationCode('');
    setError('');

    console.log('═══════════════════════════════════════');
    console.log('📧 CODE RENVOYÉ:', code);
    console.log('═══════════════════════════════════════');

    alert(`Nouveau code envoyé!\nCode: ${code}`);
  };

  // ---------------- RENDER ----------------
  if (step === 'verification') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          <button 
            onClick={() => setStep('form')}
            className="mb-4 text-cyan-600 hover:text-cyan-700 flex items-center gap-2 font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Vérifiez votre email</h2>
              <p className="text-gray-600 text-sm">
                Nous avons envoyé un code de vérification à<br />
                <span className="font-semibold text-gray-900">{formData.email}</span>
              </p>
            </div>
            {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">{error}</div>}
            <form onSubmit={handleVerifyCode} className="space-y-6">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                placeholder="000000"
                className="w-full px-4 py-4 text-2xl text-center font-bold bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all tracking-widest"
                required
              />
              <button 
                type="submit"
                disabled={loading || verificationCode.length !== 6}
                className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Vérification...' : 'Vérifier'}
              </button>
              <div className="text-center">
                <button type="button" onClick={handleResendCode} className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">Renvoyer le code</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'verified') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Email vérifié !</h2>
            <p className="text-gray-600 mb-6">Votre compte a été créé avec succès.<br />Redirection en cours...</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- FORMULAIRE PRINCIPAL ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <button 
          onClick={() => navigate('/', { replace: true })}
          className="mb-4 text-cyan-600 hover:text-cyan-700 flex items-center gap-2 font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Retour à l'accueil</span>
          <span className="sm:hidden">Retour</span>
        </button>

        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">BM</span>
            </div>
            <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              BaaraMath
            </span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border-0">
          <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1 mb-6 sm:mb-8">
            <button
              onClick={() => { setIsLogin(true); setError(''); }}
              className={`py-2 sm:py-3 px-4 text-sm font-medium rounded-md transition-all ${isLogin ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Connexion
            </button>
            <button
              onClick={() => { setIsLogin(false); setError(''); }}
              className={`py-2 sm:py-3 px-4 text-sm font-medium rounded-md transition-all ${!isLogin ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Inscription
            </button>
          </div>

          {/* Comptes de test */}
          {isLogin && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
              <p className="font-semibold text-blue-900 mb-1">🔐 Comptes de test :</p>
              <div>📧 <strong>client@test.com</strong> / 123456</div>
              <div>📧 <strong>artisan@test.com</strong> / 123456</div>
            </div>
          )}

          {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">{error}</div>}

          {isLogin ? (
            <form onSubmit={handleLogin} className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full py-3 sm:py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+225 XX XX XX XX XX" className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full py-3 sm:py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Création...' : 'Créer un compte'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
