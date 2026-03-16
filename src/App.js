import React, { useState } from 'react';
import {
 Menu, X, Calendar,
 BrainCircuit, UserCheck, ArrowRight, CheckCircle2,
 TrendingUp, Star, Layout, Edit3, Smartphone, BarChart3, Award, ChevronDown
} from 'lucide-react';


const App = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [openFaq, setOpenFaq] = useState(null);


 const faqs = [
   {
     question: "Is it safe to use with my LinkedIn account?",
     answer: "Yes. Raaye does not use unauthorized bots or scrapers. You generate the content safely in our app and maintain full control over publishing, keeping your account 100% safe and compliant with LinkedIn's terms."
   },
   {
     question: "Will my posts sound like a generic AI robot?",
     answer: "No. That is the 'cringe barrier' we built Raaye to eliminate. When you connect your account, our Persona-Aligned Editor analyzes your past posts to match your exact professional vocabulary and tone."
   },
   {
     question: "Do I need a credit card to start the trial?",
     answer: "Not at all. You can start your 7-day free trial completely risk-free to see the results for yourself. No credit card is required until you decide to upgrade."
   },
   {
     question: "Can I schedule visual carousels too?",
     answer: "Yes! Visual formats generate the highest algorithmic reach. Raaye automatically converts your text insights into beautifully formatted, swipeable carousels that you can schedule with one click."
   }
 ];


 return (
   <div className="font-sans text-slate-900 bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
    
     {/* Navigation */}
     <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-20">
           <div className="flex-shrink-0 flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
               <span className="text-white font-bold text-xl leading-none">R</span>
             </div>
             <span className="font-bold text-2xl tracking-tight text-slate-900">Raaye</span>
           </div>
          
           <div className="hidden md:flex items-center space-x-8">
             <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">How it Works</a>
             <a href="#audience" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Who it's For</a>
             <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow flex items-center gap-2">
               Get the App <ArrowRight className="w-4 h-4" />
             </button>
           </div>


           <div className="md:hidden flex items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
           </div>
         </div>
       </div>


       {/* Mobile menu */}
       {isMenuOpen && (
         <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
           <a href="#features" className="block text-slate-600 font-medium py-2">How it Works</a>
           <a href="#audience" className="block text-slate-600 font-medium py-2">Who it's For</a>
           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 mt-4 transition-colors">
             Get the App <ArrowRight className="w-4 h-4" />
           </button>
         </div>
       )}
     </nav>


     {/* Hero Section (High-Converting Centered Layout) */}
     <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
      
       {/* Top Badge */}
       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm mb-8 shadow-sm">
         <span className="text-amber-500">★</span> Professional Branding Made Easy
       </div>


       {/* Main Headline */}
       <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
         Create authoritative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">LinkedIn posts</span> with AI
       </h1>
      
       {/* Sub-headline */}
       <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
         Get post ideas, craft engaging content and carousels, and effectively engage with your network to build your professional presence on LinkedIn—all in one simple platform.
       </p>


       {/* Pill Features (Visual Cues) */}
       <div className="flex flex-wrap justify-center gap-3 mb-10">
         <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase border border-blue-100 flex items-center gap-2">
           <CheckCircle2 className="w-4 h-4" /> Capture Ideas
         </span>
         <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase border border-blue-100 flex items-center gap-2">
           <CheckCircle2 className="w-4 h-4" /> Write & Schedule
         </span>
         <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase border border-blue-100 flex items-center gap-2">
           <CheckCircle2 className="w-4 h-4" /> Smart Engagement
         </span>
       </div>


       {/* Primary CTA */}
       <div className="flex flex-col items-center gap-5 mb-12">
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
           <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl border border-slate-700 group">
             <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
               <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
             </svg>
             <div className="text-left">
               <div className="text-[10px] font-semibold leading-none mb-1 opacity-80">Download on the</div>
               <div className="text-sm font-bold leading-none">App Store</div>
             </div>
           </button>
           <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl border border-slate-700 group">
             <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
               <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
             </svg>
             <div className="text-left">
               <div className="text-[10px] font-semibold leading-none mb-1 opacity-80">GET IT ON</div>
               <div className="text-sm font-bold leading-none">Google Play</div>
             </div>
           </button>
         </div>
         <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
           <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> No credit card required</span>
           <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 7-day free trial</span>
         </div>
       </div>


       {/* Social Proof Bar */}
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-100">
         <div className="flex -space-x-3">
           {[1,2,3,4,5].map((i) => (
             <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs bg-slate-${i+4}00`}>
               <UserCheck className="w-4 h-4 opacity-70" />
             </div>
           ))}
         </div>
         <div className="text-left flex flex-col items-center sm:items-start">
           <div className="flex gap-1 text-amber-400 mb-1">
             <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
           </div>
           <p className="text-sm font-medium text-slate-600">Loved by <span className="text-slate-900 font-bold">10,000+</span> professionals</p>
         </div>
       </div>
     </section>


     {/* Abstract App Mockup / Dashboard Preview */}
     <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24 relative">
       <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white rounded-3xl transform -skew-y-2 -z-10"></div>
       <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
         <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
           <div className="w-3 h-3 rounded-full bg-red-400"></div>
           <div className="w-3 h-3 rounded-full bg-amber-400"></div>
           <div className="w-3 h-3 rounded-full bg-green-400"></div>
           <div className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Raaye Content Engine</div>
         </div>
         <div className="p-8 sm:p-12 grid md:grid-cols-2 gap-12 bg-white">
           <div className="space-y-6">
             <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
               <p className="text-sm font-bold text-blue-800 mb-2">1. Input Raw Idea</p>
               <p className="text-sm text-blue-600 leading-relaxed">"Meetings are destroying productivity. We need more deep work blocks."</p>
             </div>
             <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90 md:rotate-0" /></div>
             <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm relative">
               <div className="absolute -top-3 -right-3 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Generated</div>
               <p className="text-sm font-bold text-slate-800 mb-2">2. Polished Authority Post</p>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Your team doesn't have a time management problem.<br/><br/>
                 They have a meeting problem. The companies winning today aren't working longer hours; they are ruthlessly protecting 'deep work' blocks.
               </p>
             </div>
           </div>
           <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-center">
             <div className="space-y-4">
                <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                <div className="h-10 bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                <div className="h-10 bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                <div className="h-10 bg-blue-100 border border-blue-200 rounded-lg shadow-sm"></div>
                <div className="flex justify-between items-center pt-4">
                  <div className="h-8 w-24 bg-blue-600 rounded-lg"></div>
                  <div className="h-4 w-16 bg-slate-200 rounded"></div>
                </div>
             </div>
           </div>
         </div>
       </div>
     </section>


     {/* Quick Start / 3-Step Process */}
     <section id="how-it-works" className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get started with Raaye</h2>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             Go from a blank screen to a fully scheduled content calendar in minutes.
           </p>
         </div>


         <div className="grid md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop Only) */}
           <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10"></div>


           {/* Step 1 */}
           <div className="relative text-center pt-4">
             <div className="w-16 h-16 mx-auto bg-blue-50 border-4 border-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm mb-6">
               1
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Dump your raw ideas</h3>
             <p className="text-slate-600 leading-relaxed">
               Connect your LinkedIn. We analyze your profile to learn your exact tone. Then, just drop a rough thought, voice note, or link. You provide the smarts, we handle the typing.
             </p>
           </div>


           {/* Step 2 */}
           <div className="relative text-center pt-4">
             <div className="w-16 h-16 mx-auto bg-blue-50 border-4 border-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm mb-6">
               2
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Review your polished post</h3>
             <p className="text-slate-600 leading-relaxed">
               Raaye instantly structures your insight into a high-performing text post or carousel, perfectly matched to your professional tone and vocabulary.
             </p>
           </div>


           {/* Step 3 */}
           <div className="relative text-center pt-4">
             <div className="w-16 h-16 mx-auto bg-blue-600 border-4 border-white text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md shadow-blue-600/20 mb-6">
               3
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Schedule and grow</h3>
             <p className="text-slate-600 leading-relaxed">
               Approve the post and drop it into your calendar. Set up your entire week of authority-building content in one sitting and get back to work.
             </p>
           </div>
         </div>
       </div>
     </section>


     {/* Deep Dive Features Section (The "How it Works") */}
     <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-slate-50/50">
       <div className="space-y-32">
        
         {/* Feature 1: AI Content Creation & Persona */}
         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           <div className="md:w-1/2 space-y-6">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
               Turn a simple prompt into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">personalized posts</span>
             </h2>
             <p className="text-lg text-slate-700 leading-relaxed font-medium">
               Provide a basic prompt or messy notes, and Raaye instantly generates three distinct LinkedIn posts aligned perfectly with your professional persona.
             </p>
             <ul className="space-y-4 pt-2">
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">AI evaluates your LinkedIn profile to learn your authentic voice</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Choose from 3 unique variations for every single idea</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Refine instantly: adjust length, tone (formal, casual, witty), or style</span>
               </li>
             </ul>
           </div>
           <div className="md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
                 <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Prompt</p>
                   <p className="text-sm font-medium text-slate-700">"Thoughts on the shift to asynchronous work in tech."</p>
                 </div>
                
                 <div className="flex gap-2 mb-4 border-b border-slate-100 pb-2 overflow-x-auto">
                   <button className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 px-2 pb-2 whitespace-nowrap">Variant 1</button>
                   <button className="text-sm font-medium text-slate-400 px-2 pb-2 whitespace-nowrap">Variant 2</button>
                   <button className="text-sm font-medium text-slate-400 px-2 pb-2 whitespace-nowrap">Variant 3</button>
                 </div>
                
                 <div className="border border-slate-200 rounded-xl p-5 shadow-sm mb-4 relative">
                   <p className="text-slate-800 font-semibold mb-2">We didn't need more meetings. We needed more trust.</p>
                   <p className="text-slate-600 text-sm leading-relaxed">The companies winning right now aren't working longer hours—they're communicating asynchronously. Treat deep work as a metric, not a luxury.</p>
                 </div>
                
                 <div className="flex gap-2 flex-wrap">
                   <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg">Tone: Witty</span>
                   <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg">Style: Storytelling</span>
                 </div>
              </div>
           </div>
         </div>


         {/* Feature 2: Content Strategy & Scheduling */}
         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           <div className="md:w-1/2 order-2 md:order-1 w-full">
              <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-800">
                 <div className="flex justify-between items-center mb-6">
                   <h4 className="text-white font-bold text-lg">Content Strategy</h4>
                   <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-lg text-xs font-bold">This Week</span>
                 </div>
                 <div className="space-y-3">
                   <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0"><Layout className="w-5 h-5"/></div>
                       <div>
                         <p className="text-sm font-bold text-white mb-0.5">Carousel: 3 Leadership Myths</p>
                         <p className="text-xs text-slate-400">Tue, 9:00 AM</p>
                       </div>
                     </div>
                     <span className="hidden sm:inline-block text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded">Scheduled</span>
                   </div>
                   <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0"><Edit3 className="w-5 h-5"/></div>
                       <div>
                         <p className="text-sm font-bold text-white mb-0.5">Insight: Deep Work Framework</p>
                         <p className="text-xs text-slate-400">Thu, 1:00 PM</p>
                       </div>
                     </div>
                     <span className="hidden sm:inline-block text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded">Scheduled</span>
                   </div>
                 </div>
              </div>
           </div>
           <div className="md:w-1/2 order-1 md:order-2 space-y-6">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
               Build a full <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">content calendar</span> in minutes
             </h2>
             <p className="text-lg text-slate-700 leading-relaxed font-medium">
               Set up your entire week or month of content in one sitting. Raaye generates a strategic mix of post types to maximize your algorithmic reach.
             </p>
             <ul className="space-y-4 pt-2">
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">AI schedules posts for optimal engagement times</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Auto-generate AI images and infographics to complement text</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Create swipeable carousels to increase audience dwell time</span>
               </li>
             </ul>
           </div>
         </div>


         {/* Feature 3: Trending News & Smart Feed */}
         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           <div className="md:w-1/2 space-y-6">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
               Stay visible with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">1-click engagement</span>
             </h2>
             <p className="text-lg text-slate-700 leading-relaxed font-medium">
               Maintain a highly visible presence without the endless scroll. We curate the feed so you only see what matters.
             </p>
             <ul className="space-y-4 pt-2">
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Daily global and industry-specific trending news tailored to you</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Summarized LinkedIn feed highlighting top creator posts</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">AI drafts contextual, intelligent comments for 1-click approval</span>
               </li>
             </ul>
           </div>
           <div className="md:w-1/2 w-full">
              <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-200">
                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                   <h4 className="font-bold text-slate-900 text-lg">Trending Industry News</h4>
                   <span className="bg-green-100 text-green-700 border border-green-200 px-2 py-1 rounded-md text-xs font-bold">Today</span>
                 </div>
                
                 <div className="space-y-4">
                   <div className="border border-slate-100 rounded-xl p-5 bg-slate-50">
                     <p className="text-sm font-bold text-slate-900 mb-2">Remote Work Regulations Update 2026</p>
                     <p className="text-sm text-slate-600 mb-5 leading-relaxed">Global compliance shifts are forcing mid-market tech firms to fundamentally rethink their hiring strategies and talent pools...</p>
                    
                     <div className="bg-white border border-green-100 rounded-xl p-4 relative shadow-sm">
                       <div className="absolute -top-3 left-4 bg-white border border-green-100 px-2 py-0.5 rounded-md flex items-center gap-1 text-xs font-bold text-green-600">
                         <BrainCircuit className="w-3 h-3" /> 1-Click Comment
                       </div>
                       <p className="text-sm text-slate-800 font-medium mt-1 leading-relaxed">Compliance shouldn't be the enemy of talent. The firms that adapt their asynchronous infrastructure now will win the top 1% of talent tomorrow.</p>
                       <div className="flex justify-end mt-4">
                         <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-green-700 transition-colors">
                           Approve & Post
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
           </div>
         </div>


         {/* Feature 4: Profile Optimization & Analytics */}
         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           <div className="md:w-1/2 order-2 md:order-1 w-full">
              <div className="bg-indigo-50 p-8 rounded-[2rem] shadow-inner border border-indigo-100">
                 <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 z-10">
                   <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                         <Award className="w-5 h-5" />
                       </div>
                       <h4 className="font-bold text-slate-900 text-lg">Profile Score</h4>
                     </div>
                     <span className="text-2xl font-extrabold text-indigo-600">85<span className="text-base text-slate-400 font-medium">/100</span></span>
                   </div>
                  
                   <div className="w-full bg-slate-100 h-3 rounded-full mb-8 overflow-hidden">
                     <div className="bg-indigo-600 h-full w-[85%] rounded-full relative">
                       <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                     </div>
                   </div>


                   <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                       <BarChart3 className="w-4 h-4 text-indigo-500" /> Actionable Insight
                     </p>
                     <p className="text-sm text-slate-700 font-medium leading-relaxed">Update your headline to focus on outcomes. Consider changing it to: "Helping SaaS founders scale through product-led growth."</p>
                   </div>
                 </div>
              </div>
           </div>
           <div className="md:w-1/2 order-1 md:order-2 space-y-6">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
               Track growth and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">optimize your profile</span>
             </h2>
             <p className="text-lg text-slate-700 leading-relaxed font-medium">
               Go beyond posting. Raaye evaluates your entire presence to ensure you're capturing the inbound leads and opportunities you deserve.
             </p>
             <ul className="space-y-4 pt-2">
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Get an actionable Profile Completion Score with tailored recommendations</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Track post performance metrics (reach, likes, comments, shares)</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0"></div>
                 <span className="text-slate-700 text-lg">Use data-driven insights to refine your future content strategy</span>
               </li>
             </ul>
           </div>
         </div>
        
       </div>
     </section>


     {/* JTBD / Audience Section */}
     <section id="audience" className="py-24 bg-slate-900 text-white border-t border-slate-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for experts, not full-time influencers</h2>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
             You shouldn't have to choose between doing your actual job and building your personal brand online.
           </p>
         </div>


         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
             <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
               <Smartphone className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-bold mb-4">The Founder & Consultant</h3>
             <p className="text-slate-400 mb-6 leading-relaxed">
               Establish your authority and generate a consistent stream of inbound leads, without spending your entire weekend writing content.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Attract high-value clients organically.</li>
               <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Turn your knowledge into engaging posts.</li>
             </ul>
           </div>


           <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
             <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
               <TrendingUp className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-bold mb-4">The Career Climber</h3>
             <p className="text-slate-400 mb-6 leading-relaxed">
               Unlock the hidden job market. Stay active and share your expertise consistently, so top recruiters and decision-makers reach out to you directly.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Let the best opportunities come to you.</li>
               <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Stand out without applying to job boards.</li>
             </ul>
           </div>
         </div>
       </div>
     </section>


     {/* Social Proof / Validation */}
     <section className="py-24 bg-white border-b border-slate-100">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900">Loved by professionals, not just influencers.</h2>
           <p className="text-lg text-slate-600 mt-2">See how real experts are taking back their time and owning their narrative.</p>
         </div>
        
         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           <div className="p-8 bg-white shadow-lg rounded-2xl border border-slate-100">
             <div className="flex text-amber-400 mb-4">
               <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
             </div>
             <p className="text-slate-800 font-medium text-lg leading-relaxed mb-6 italic">"I wish I had this system a long time ago. I finally have a presence that works while I'm stuck in back-to-back product meetings."</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">SM</div>
               <div>
                 <p className="font-bold text-slate-900 text-sm">Sarah Mitchell</p>
                 <p className="text-xs text-slate-500">Senior Product Manager</p>
               </div>
             </div>
           </div>
          
           <div className="p-8 bg-white shadow-lg rounded-2xl border border-slate-100">
             <div className="flex text-amber-400 mb-4">
               <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
             </div>
             <p className="text-slate-800 font-medium text-lg leading-relaxed mb-6 italic">"Landed 3 recruiter DMs in one week without applying. Raaye turned my messy technical notes into engaging insights."</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">DA</div>
               <div>
                 <p className="font-bold text-slate-900 text-sm">David Alarie</p>
                 <p className="text-xs text-slate-500">Lead Data Analyst</p>
               </div>
             </div>
           </div>


           <div className="p-8 bg-white shadow-lg rounded-2xl border border-slate-100">
             <div className="flex text-amber-400 mb-4">
               <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
             </div>
             <p className="text-slate-800 font-medium text-lg leading-relaxed mb-6 italic">"It's not a second job; it's a 15-minute habit. I set up my entire month of content on a Sunday morning."</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">MC</div>
               <div>
                 <p className="font-bold text-slate-900 text-sm">Marcus Chen</p>
                 <p className="text-xs text-slate-500">Agency Founder</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>


     {/* FAQ Section */}
     <section className="py-24 bg-slate-50 border-b border-slate-100">
       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
           <p className="text-lg text-slate-600">Everything you need to know about the Raaye platform.</p>
         </div>
        
         <div className="space-y-4">
           {faqs.map((faq, index) => (
             <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all hover:border-blue-200">
               <button
                 className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                 onClick={() => setOpenFaq(openFaq === index ? null : index)}
               >
                 <span className="font-bold text-slate-900">{faq.question}</span>
                 <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} />
               </button>
               {openFaq === index && (
                 <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                   {faq.answer}
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>
     </section>


     {/* Final CTA (App Download Focus) */}
     <section className="py-24 bg-blue-600 relative overflow-hidden">
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-700 opacity-50 blur-3xl"></div>
      
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-8 border border-white/20 backdrop-blur-sm">
           <Calendar className="w-4 h-4" /> The Monday Morning Sprint
         </div>
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
           Got 15 minutes?
         </h2>
         <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
           That's all you need to schedule your high-authority posts for the whole month. Stop overthinking. Start growing.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl border border-slate-700 group">
             <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
               <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
             </svg>
             <div className="text-left">
               <div className="text-[10px] font-semibold leading-none mb-1 opacity-80">Download on the</div>
               <div className="text-sm font-bold leading-none">App Store</div>
             </div>
           </button>
           <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl border border-slate-700 group">
             <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
               <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
             </svg>
             <div className="text-left">
               <div className="text-[10px] font-semibold leading-none mb-1 opacity-80">GET IT ON</div>
               <div className="text-sm font-bold leading-none">Google Play</div>
             </div>
           </button>
         </div>
         <div className="mt-8 flex flex-col items-center gap-2 text-sm text-blue-200">
           <span className="font-medium text-white">Join 10,000+ professionals capturing their expertise.</span>
           <div className="flex gap-4 mt-2">
             <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-300" /> Free 7-Day Trial</span>
             <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-300" /> Cancel Anytime</span>
           </div>
         </div>
       </div>
     </section>


     {/* Footer */}
     <footer className="bg-slate-50 py-12 border-t border-slate-200">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
             <span className="text-white font-bold text-xs">R</span>
           </div>
           <span className="font-bold text-xl tracking-tight text-slate-900">Raaye</span>
         </div>
        
         <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
           <a href="/" className="hover:text-blue-600 transition-colors">Product</a>
           <a href="/" className="hover:text-blue-600 transition-colors">Pricing</a>
           <a href="/" className="hover:text-blue-600 transition-colors">Wall of Love</a>
           <a href="/" className="hover:text-blue-600 transition-colors">LinkedIn Profile Roaster</a>
           <a href="/" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
           <a href="/" className="hover:text-blue-600 transition-colors">Terms of Service</a>
         </div>
        
         <p className="text-sm text-slate-500">
           © {new Date().getFullYear()} Raaye. All rights reserved.
         </p>
       </div>
     </footer>


   </div>
 );
};


export default App;

