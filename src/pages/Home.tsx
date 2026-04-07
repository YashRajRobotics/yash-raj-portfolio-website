import { motion } from 'motion/react';
import { Code2, Terminal, Cpu, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const PROJECTS_DATA = [
  { number: "01", title: "Transliteration of Signboard Text", description: "Built a multi-stage Object Detection + OCR + Transformer pipeline to extract and transliterate Hindi text from low-quality images, achieving 98.8% IoU score and 93.5% BLEU-4 score.", skills: ["YOLO", "OCR (CTC loss)", "Transformers", "MLOps"] },
  { number: "02", title: "Customer Behaviour Analysis to Improve Call Center Performance", description: "Developed survival analysis predictive models (using XGBoost) to increasing customer engagement by 30% and reduce losses by ~12% ($12M).", skills: ["XGBoost", "SARIMAX", "Survival Analysis", "SMOTE"] },
  { number: "03", title: "Customer Delinquency Analysis", description: "Built predictive and uplift models to identify high-impact customer segments, driving 20% increase in autopay adoption and generating $17.4M additional revenue.", skills: ["VotingClassifier", "Uplift Modeling", "A/B Testing", "Statistical Testing"] },
  { number: "04", title: "Forecasting Customer Needs Through Transcript & Call Analysis", description: "Designed an NLP pipeline for unsupervised topic modeling and clustering on large-scale call data, achieving 85% clustering accuracy and reducing resolution time by 30%.", skills: ["TF-IDF", "BERTopic", "LDA", "Clustering"] },
  { number: "05", title: "Lip Reading System", description: "Built a vision-based speech reconstruction system from audio-damaged or silent videos, achieving 93% BLEU-3 at 0° and 78% at 30° viewing angles.", skills: ["3D CNNs", "Transformers", "Sequence Modeling", "Visual Speech Recognition"] },
  { number: "06", title: "Music Recommendation System", description: "Developed a personalized recommendation engine using custom collaborative filtering with a full-stack web interface and real-time song retrieval.", skills: ["Collaborative Filtering", "Django", "SQLite", "SVD"] },
  { number: "07", title: "Medical Knowledge Graph for COVID-19", description: "Built an NLP-driven knowledge graph from medical documents to enable structured retrieval and Q&A system for healthcare insights.", skills: ["Knowledge Graphs", "Named Entity Extraction (NER)", "Semantic Search", "Graph Databases"] },
  { number: "08", title: "Automated Conformance Checking Using Python and Celonis", description: "Developed a full-stack process mining tool for conformance checking via PQL queries, with real-time compliance analysis using Celonis EMS and interactive dashboards.", skills: ["FastAPI", "Celonis EMS", "D3.js", "PQL"] }
];

const HACKATHONS_DATA = [
  { number: "01", title: "LTFS Data Science FinHack", date: "2019 Feb", location: "Online (Analytics Vidhya)", rank: <><span className="font-bold text-[#6255F1]">Worldwide 11th</span> out of 1,342 participants</>, description: "Developed a credit risk model to predict first-EMI vehicle loan defaults using borrower and loan-level features." },
  { number: "02", title: "India ML Hiring Hackathon 2019", date: "2019 Apr", location: "Online (Analytics Vidhya)", rank: <><span className="font-bold text-[#6255F1]">Worldwide 23rd</span> out of 3,970 participants</>, description: "Built a delinquency prediction model using time-series payment history and borrower profile data to forecast loan risk." },
  { number: "03", title: "PadhAI: Text - Non Text Classification", date: "2021 - 2023", location: "Online (Kaggle)", rank: <><span className="font-bold text-[#6255F1]">Worldwide 32nd</span></>, description: "Developed deep learning models to classify multilingual character presence in images across increasing data complexity levels." },
  { number: "04", title: "Titanic - Machine Learning from Disaster", date: "2024 Jan", location: "Online (Kaggle)", rank: <><span className="font-bold text-[#6255F1]">Worldwide 194th</span> out of 1.4M+ participants</>, description: "Built a classification model to predict passenger survival using feature engineering and ensemble learning on structured data." },
  { number: "05", title: "NASA Space Apps Challenge", date: "2020 Jan", location: "In-Person, Chandigarh", rank: <><span className="font-bold text-[#6255F1]">Represented college at state-level</span></>, description: "Applied machine learning on low-quality satellite imagery to analyze terrain and environmental conditions." },
  { number: "06", title: "American Express - Default Prediction", date: "2022 Aug", location: "Online (Kaggle)", rank: "", description: "Built large-scale credit default prediction models using time-series behavioral data and customer profiles." },
  { number: "07", title: "Traffic Volume Prediction", date: "2019 Nov", location: "Online (Analytics Vidhya)", rank: "", description: "Developed time-series forecasting models to predict traffic volume patterns across different time intervals." },
  { number: "08", title: "Janatahack NLP Hackathon", date: "2020 Aug", location: "Online (Analytics Vidhya)", rank: "", description: "Built NLP models to analyze and classify student-related textual data for structured insights." },
  { number: "09", title: "Google Hashcode", date: "2019 Jul", location: "In-Person, Chandigarh", rank: "", description: "Designed optimization algorithms to solve large-scale traffic light scheduling problems under constraints." }
];

const SEMINARS_DATA = [
  {
    title: "ALBERT and BERT",
    linkTitle: "",
    date: "14 Jan 2023",
    location: "In-person, Bangalore",
    link: "",
    description: "Presented a comparative analysis of ALBERT and BERT, focusing on parameter reduction and cross-layer weight sharing. Discussed efficiency improvements and how ALBERT achieves comparable performance with reduced memory and faster training."
  },
  {
    title: "Training Sigmoid Function from Scratch",
    linkTitle: "https://www.youtube.com/watch?v=0VFNejywRXI",
    date: "8 June 2020",
    location: "Online",
    link: "youtube.com/watch?v=0VFNejywRXI",
    description: "Delivered a technical seminar on the mathematical foundations of the sigmoid function in neural networks. Explained gradient behavior, saturation issues, and step-by-step training from first principles."
  }
];

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const visibleProjects = showAllProjects ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 4);
  const visibleHackathons = showAllHackathons ? HACKATHONS_DATA : HACKATHONS_DATA.slice(0, 3);
  const scriptFontStyle = { fontFamily: "'Playwrite Ireland', cursive" };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-32"
    >
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(48,197,255,0.1)_0%,_transparent_60%)] filter blur-[60px] opacity-50 pointer-events-none" />
        
        {/**
         * Right-aligned Hero Image
         * Commented out so the page renders without the photo.
         *
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-[60%] overflow-hidden hidden md:flex items-center justify-end opacity-20 md:opacity-100 pointer-events-auto group">
          <div className="relative w-full h-full max-h-[80vh]">
            <div className="absolute inset-0 bg-[#6255F1] mix-blend-multiply z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
              src="/hero-image.png" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale object-right"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                maskComposite: 'intersect'
              }}
            />
          </div>
        </div>
        */}

        <div className="z-10 space-y-6 md:space-y-8 relative pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-[#6255F1] tracking-widest text-xs md:text-sm"
            style={scriptFontStyle}
          >
            YASH RAJ - DATA SCIENTIST
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#6255F1] to-sky-600" style={scriptFontStyle}>
            Building<br />
            Solutions<br />
            USING AI
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-[#0C080A] font-light leading-relaxed pointer-events-auto" style={scriptFontStyle}>
            I design and deploy machine learning systems for real-world impact, specializing in NLP, computer vision, and time series modeling. Experienced in building scalable pipelines and data-driven solutions.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="border-t border-[#D8CDEE] pt-24 pb-24">
        <div className="mb-0 md:sticky md:top-56 z-0 py-0">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Work Experience</h2>
          <p className="text-[#0C080A] mt-4 text-sm max-w-[35ch]">My Professional Journey.</p>
        </div>
        
        <div className="space-y-12 relative md:-mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0C080A] hover:before:via-[#6255F1] before:to-transparent">
          
          <TimelineItem 
            year="2021 Nov - 2024 Aug"
            title="Data Scientist"
            organization="Applied Data Finance, India"
            description="Built SARIMAX models to predict monthly loan default and revenue, improving monthly loss forecasting by about 12%. Developed BERT & LDA models to analyse call transcripts, reducing resolution time and customer complaints by ~22%. Engineered customer-behaviour features and deployed predictive calling-time model increasing CSR efficiency by 15%."
          />

          <TimelineItem 
            year="2020 May - 2020 Aug"
            title="Data Scientist Intern"
            organization="TCS, India"
            description="Led the development and deployment of an OCR system to extract handwritten text from low-quality medical bills, achieving ~97% field-level accuracy."
          />
          
          <TimelineItem 
            year="2019 May - 2019 July"
            title="Data Scientist Intern"
            organization="Wingfotech, India"
            description="Deployed an end-to-end ML pipeline for loan defaulter prediction model."
          />

        </div>
      </section>

      {/* Skills / Stack */}
      <section className="border-t border-[#D8CDEE] pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:sticky md:top-56 self-start h-fit z-0 py-0">
            <h2 className="text-4xl font-black uppercase tracking-tighter">The Stack</h2>
            <p className="text-[#0C080A] mt-4 text-sm max-w-[35ch]">Tools and technologies I use to bring ideas to life.</p>
          </div>
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <SkillCard 
              icon={<Code2 className="font-bold text-[#6255F1]" size={32} />}
              title="Computer Vision"
              skills={['Object Detection (YOLO, FasterRCNN)', 'Multi-Modal Vision (CLIP, SigLIP)', 'OCR Systems (CTC Loss)', 'Self-Supervised Learning']}
            />
            <SkillCard 
              icon={<Terminal className="font-bold text-[#6255F1]" size={32} />}
              title="NLP"
              skills={['Transformer Architectures (BERT, LLMs)', 'Topic Modeling (LDA, BERTopic)', 'Named Entity Recognition (NER)', 'Text Representation (TF-IDF, Embeddings)']}
            />
            <SkillCard 
              icon={<Cpu className="font-bold text-[#6255F1]" size={32} />}
              title="Machine Learning"
              skills={['Time Series Forecasting (SARIMAX)', 'Ensemble Methods (Voting, Boosting)', 'Knowledge Distillation', 'Model Deployment & MLOps']}
            />
            <SkillCard 
              icon={<Brain className="font-bold text-[#6255F1]" size={32} />}
              title="Data Science & Tools"
              skills={['Feature Engineering', 'A/B Testing & Statistical Inference', 'TensorFlow & PyTorch', 'Python']}
            />
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="border-t border-[#D8CDEE] pt-24 pb-24">
        <div className="mb-0 md:sticky md:top-56 z-0 py-0">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-black uppercase tracking-tighter">Projects</h2>
          <a href="https://github.com/YashRajRobotics" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-bold text-[#6255F1] text-sm hover:underline underline-offset-4">
            VIEW ALL ON GITHUB [→]
          </a>
        </div>
        
        <div className="space-y-12 relative md:-mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0C080A] hover:before:via-[#6255F1] before:to-transparent">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.number}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          ))}
        </div>

        {PROJECTS_DATA.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group flex items-center space-x-2 border border-[#6255F1] font-bold text-[#6255F1] px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#6255F1] hover:text-black transition-colors"
            >
              <span>{showAllProjects ? 'Show Less' : 'Show More'}</span>
              {showAllProjects ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </section>

      {/* Research Papers Section */}
      <section className="border-t border-[#D8CDEE] pt-24 pb-24">
        <div className="mb-0 md:sticky md:top-56 z-0 py-0">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Research</h2>
          <p className="text-[#0C080A] mt-4 text-sm max-w-[35ch]">Published Research Papers and Publications.</p>
        </div>
        
        <div className="space-y-12 relative md:-mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0C080A] hover:before:via-[#6255F1] before:to-transparent">
          
          <ResearchPaperItem 
            year="2022 Nov"
            title="EPIK: Eliminating multi-model Pipelines with Knowledge-distillation"
            link="https://arxiv.org/abs/2211.14920"
            description="A novel knowledge distillation technique to compress multi-stage model pipelines into a single end-to-end model, eliminating intermediate steps and reducing dependency on large datasets. We distilled knowledge from chained teacher models into a unified student model that directly performs cross-lingual tasks. The model retains strong performance with ~92.1% phonetic accuracy, reduces inference time by ~54%, and achieves high similarity (~97.5%) with the teacher model."
            citations="12"
          />

          <ResearchPaperItem 
            year="2022 Aug"
            title="MATra: A Multilingual Attentive Transliteration System for Indian Scripts"
            link="https://arxiv.org/abs/2208.10801"
            description="A transformer-based multilingual transliteration system designed to convert text between multiple Indic languages using a shared model and English as an intermediate representation. It introduces a bi-directional architecture with language tokens to enable flexible many-to-many transliteration across languages. The results show a significant improvement over state-of-the-art models, achieving ~80.7% top-1 accuracy and 93.5% phonetic accuracy across language pairs."
            citations="6"
          />

        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-t border-[#D8CDEE] pt-24 pb-24">
        <div className="mb-0 md:sticky md:top-56 z-0 py-0">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Education</h2>
          <p className="text-[#0C080A] mt-4 text-sm max-w-[35ch]">My Academic Journey.</p>
        </div>
        
        <div className="space-y-12 relative md:-mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0C080A] hover:before:via-[#6255F1] before:to-transparent">
          
          <TimelineItem 
            year="2024 - Ongoing"
            title="M.Sc. Data Science"
            organization="RWTH Aachen University, Germany"
            description="Focusing on advanced AI methodologies and techniques."
          />

          <TimelineItem 
            year="2021 - 2023"
            title="Post Graduate Program in AIML"
            organization="University of Texas at Austin, USA"
            description={<><span className="font-bold text-[#6255F1]">GPA : 4.17/4.0</span> (academic distinction).</>}
          />
          
          <TimelineItem 
            year="2018 - 2022"
            title="B.Tech. CSE with AI"
            organization="Chandigarh University, India"
            description="Graduated with a Bachelor of Technology in Computer Science Engineering with Specialization in Artificial Intelligence and Machine Learning."
          />

        </div>
      </section>

      {/* Hackathons Section */}
      <section className="border-t border-[#D8CDEE] pt-24 pb-24">
        <div className="mb-0 md:sticky md:top-56 z-0 py-0">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Hackathons</h2>
          <p className="text-[#0C080A] mt-4 text-sm max-w-[35ch]">Competitions and hackathons I have participated in.</p>
        </div>

        <div className="space-y-12 relative md:-mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0C080A] hover:before:via-[#6255F1] before:to-transparent">
          {visibleHackathons.map((hackathon) => (
            <HackathonItem
              key={hackathon.number}
              date={hackathon.date}
              title={hackathon.title}
              location={hackathon.location}
              rank={hackathon.rank}
              description={hackathon.description}
            />
          ))}
        </div>

        {HACKATHONS_DATA.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllHackathons(!showAllHackathons)}
              className="group flex items-center space-x-2 border border-[#6255F1] font-bold text-[#6255F1] px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#6255F1] hover:text-black transition-colors"
            >
              <span>{showAllHackathons ? 'Show Less' : 'Show More'}</span>
              {showAllHackathons ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </section>

      {/* Seminars Presented Section */}
      <section className="border-t border-[#D8CDEE] pt-24 pb-24">
        <div className="mb-0 md:sticky md:top-56 z-0 py-0">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Seminars Presented</h2>
          <p className="text-[#0C080A] mt-4 text-sm max-w-[35ch]">Technical talks and seminar sessions I have presented.</p>
        </div>

        <div className="space-y-12 relative md:-mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0C080A] hover:before:via-[#6255F1] before:to-transparent">
          {SEMINARS_DATA.map((seminar) => (
            <SeminarItem
              key={seminar.title}
              title={seminar.title}
              linkTitle={seminar.linkTitle}
              date={seminar.date}
              location={seminar.location}
              link={seminar.link}
              description={seminar.description}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="p-8 border border-[#0C080A] bg-[#EBEBEB] hover:bg-[#E1E1E1] transition-colors">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-[#0C080A]">
        {skills.map(skill => (
          <li key={skill} className="flex items-center space-x-2">
            <span className="font-bold text-[#6255F1]">&gt;</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, skills }: { title: string, description: string, skills: string[] }) {
  return (
    <div className="relative flex items-center justify-between md:justify-end group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0C080A] bg-[#FFFFFF] group-hover:border-[#6255F1] group-hover:bg-[#6255F1]/10 transition-colors shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_0_8px_#FFFFFF] z-10">
        <div className="w-2 h-2 rounded-full bg-[#0C080A] group-hover:bg-[#6255F1] transition-colors" />
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:ml-auto p-6 rounded-none border border-[#0C080A] bg-[#EBEBEB] hover:border-[#0C080A] transition-colors">
        <div className="mb-2">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-[#0C080A]">{title}</h3>
        </div>
        <p className="text-[#0C080A] font-light mb-6 min-h-[3.5rem]">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span key={skill} className="text-xs px-2 py-1 border border-[#0C080A] bg-[#FFFFFF] text-[#0C080A]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, organization, description }: { year: string, title: string, organization: string, description: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-between md:justify-end group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0C080A] bg-[#FFFFFF] group-hover:border-[#6255F1] group-hover:bg-[#6255F1]/10 transition-colors shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_0_8px_#FFFFFF] z-10">
        <div className="w-2 h-2 rounded-full bg-[#0C080A] group-hover:bg-[#6255F1] transition-colors" />
      </div>
      
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:ml-auto p-6 rounded-none border border-[#0C080A] bg-[#EBEBEB] hover:border-[#0C080A] transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
          <h3 className="font-bold text-xl uppercase tracking-tight text-[#0C080A]">{title}</h3>
          <span className="font-bold text-[#6255F1] text-sm shrink-0">{year}</span>
        </div>
        <div className="text-[#0C080A] text-sm mb-4">{organization}</div>
        <p className="text-[#0C080A] font-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ResearchPaperItem({ year, title, link, description, citations }: { year: string, title: string, link: string, description: string, citations: string }) {
  return (
    <div className="relative flex items-center justify-between md:justify-end group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0C080A] bg-[#FFFFFF] group-hover:border-[#6255F1] group-hover:bg-[#6255F1]/10 transition-colors shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_0_8px_#FFFFFF] z-10">
        <div className="w-2 h-2 rounded-full bg-[#0C080A] group-hover:bg-[#6255F1] transition-colors" />
      </div>
      
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:ml-auto p-6 rounded-none border border-[#0C080A] bg-[#EBEBEB] hover:border-[#0C080A] transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="block max-w-[25ch] font-bold text-xl uppercase tracking-tight text-[#0C080A] hover:text-[#6255F1] transition-colors whitespace-normal break-normal">
            {title}
          </a>
          <span className="font-bold text-[#6255F1] text-sm shrink-0">{year}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#0C080A] text-sm hover:text-[#6255F1] transition-colors">
            Link: {link}
          </a>
          <span className="font-black text-[#6255F1] text-sm shrink-0">Citations: {citations}</span>
        </div>
        <p className="text-[#0C080A] font-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function HackathonItem({ date, title, location, rank, description }: { date: string, title: string, location: string, rank: React.ReactNode, description: string }) {
  return (
    <div className="relative flex items-center justify-between md:justify-end group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0C080A] bg-[#FFFFFF] group-hover:border-[#6255F1] group-hover:bg-[#6255F1]/10 transition-colors shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_0_8px_#FFFFFF] z-10">
        <div className="w-2 h-2 rounded-full bg-[#0C080A] group-hover:bg-[#6255F1] transition-colors" />
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:ml-auto p-6 rounded-none border border-[#0C080A] bg-[#EBEBEB] hover:border-[#0C080A] transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
          <h3 className="block max-w-[25ch] font-bold text-xl uppercase tracking-tight text-[#0C080A] hover:text-[#6255F1] transition-colors whitespace-normal break-normal">
            {title}
          </h3>
          <span className="font-bold text-[#6255F1] text-sm shrink-0">{date}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <span className="text-[#0C080A] text-sm">Location : {location}</span>
          <span className="max-w-[25ch] text-right text-[#0C080A] text-sm whitespace-normal break-words shrink-0">{rank ? <>Rank : {rank}</> : '\u00A0'}</span>
        </div>
        <p className="text-[#0C080A] font-light text-sm leading-relaxed min-h-[3rem]">{description}</p>
      </div>
    </div>
  );
}

function SeminarItem({ title, linkTitle, date, location, link, description }: { title: string, linkTitle: string, date: string, location: string, link: string, description: string }) {
  return (
    <div className="relative flex items-center justify-between md:justify-end group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0C080A] bg-[#FFFFFF] group-hover:border-[#6255F1] group-hover:bg-[#6255F1]/10 transition-colors shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_0_8px_#FFFFFF] z-10">
        <div className="w-2 h-2 rounded-full bg-[#0C080A] group-hover:bg-[#6255F1] transition-colors" />
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:ml-auto p-6 rounded-none border border-[#0C080A] bg-[#EBEBEB] hover:border-[#0C080A] transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
          {linkTitle ? (
            <a href={linkTitle} target="_blank" rel="noopener noreferrer" className="block max-w-[25ch] font-bold text-xl uppercase tracking-tight text-[#0C080A] hover:text-[#6255F1] transition-colors whitespace-normal break-normal">
              {title}
            </a>
          ) : (
            <h3 className="block max-w-[25ch] font-bold text-xl uppercase tracking-tight text-[#0C080A] whitespace-normal break-normal">{title}</h3>
          )}
          {link ? (
            <a href={linkTitle || `https://${link}`} target="_blank" rel="noopener noreferrer" className="text-right text-[#0C080A] text-sm hover:text-[#6255F1] transition-colors">
              Link : {link}
            </a>
          ) : (
            <span className="text-right text-[#0C080A] text-sm">&nbsp;</span>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <span className="text-[#0C080A] text-sm">Location : {location}</span>
          <span className="font-bold text-[#6255F1] text-sm shrink-0">{date}</span>
        </div>
        <p className="text-[#0C080A] font-light text-sm leading-relaxed min-h-[3rem]">{description}</p>
      </div>
    </div>
  );
}
