import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { Camera, Layers, Zap, Info, ArrowRight, MousePointer2 } from 'lucide-react';

export default function App() {
  const [isLabHovered, setIsLabHovered] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slateBg bg-grid-slate bg-grid-40 selection:bg-neonCyan/30 font-sans text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-7xl font-mono font-bold text-neonCyan mb-6 tracking-tight">
            Classical Stereo Vision:<br />
            <span className="text-white">From Pixels to Depth</span>
          </h1>
          <p className="text-xl md:text-2xl font-mono text-slate-500">
            <span className="text-neonCyan pr-2">&gt;</span>
            Executing math-driven depth estimation without deep learning...
          </p>
        </motion.header>

        {/* Section 01 // Stereo Setup Parameters */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-12 bg-neonCyan" />
            <h2 className="text-2xl font-mono font-bold text-neonCyan uppercase tracking-widest flex items-center gap-2">
              <Camera className="w-5 h-5" /> Section 01 // Stereo Setup Parameters
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="lab-slate-card overflow-hidden relative group">
                <div className="absolute inset-0 bg-neonCyan/0 group-hover:bg-neonCyan/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img src="/images/kitti_left_raw.png" alt="Left Camera Raw"
                  className="w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                  referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm font-mono text-slate-500">Left View: Camera 2 (Grayscale)</p>
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="lab-slate-card overflow-hidden relative group">
                <div className="absolute inset-0 bg-neonCyan/0 group-hover:bg-neonCyan/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img src="/images/kitti_right_raw.png" alt="Right Camera Raw"
                  className="w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                  referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm font-mono text-slate-500">Right View: Camera 3 (Grayscale)</p>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="lab-slate-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonCyan/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg font-mono text-neonCyan mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Calibrated Matrix Configuration
                </h3>
                <div className="space-y-6 text-slate-300 font-mono">
                  <div className="group">
                    <p className="text-xs text-slate-500 uppercase mb-1 transition-colors group-hover:text-neonCyan">Horizontal Displacement</p>
                    <p className="text-2xl font-semibold">Baseline (B) = 0.54m</p>
                  </div>
                  <div className="group">
                    <p className="text-xs text-slate-500 uppercase mb-1 transition-colors group-hover:text-neonCyan">Optic Center to Sensor</p>
                    <p className="text-2xl font-semibold">Focal Length (f) = 718.856px</p>
                  </div>
                </div>
              </div>
              <div className="bg-slateBg/50 p-6 rounded border border-slateBorder backdrop-blur-sm relative">
                <div className="absolute -left-px top-4 bottom-4 w-0.5 bg-neonCyan/50"></div>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "In the KITTI benchmark, the two monochrome cameras are mounted on the roof of the vehicle.
                  Knowing these physical constants is the first step in converting binary intensity signals
                  into a metric coordinate system."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 02 // Epipolar Geometry */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-12 bg-neonCyan" />
            <h2 className="text-2xl font-mono font-bold text-neonCyan uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-5 h-5" /> Section 02 // Epipolar Geometry
            </h2>
          </motion.div>

          <motion.div variants={fadeIn} className="lab-slate-card p-8 md:p-12 max-w-4xl mx-auto shadow-neonCyan/5 hover:shadow-neonCyan/10 transition-shadow duration-500">
            <div className="mb-12 text-2xl text-neonCyan bg-slateBg/40 p-6 rounded border border-slateBorder/50 flex justify-center shadow-inner">
              <BlockMath math={String.raw`E = [t]_{\times} R`} />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-slate-300 space-y-6">
                <p className="leading-relaxed">
                  Where <span className="text-neonCyan font-mono"><InlineMath math="E" /></span> is the Essential Matrix, <span className="text-neonCyan font-mono"><InlineMath math={String.raw`[t]_{\times}`} /></span> is the skew-symmetric matrix of translation,
                  and <span className="text-neonCyan font-mono"><InlineMath math="R" /></span> is the rotation matrix.
                </p>
                <div className="bg-slateBg/50 border border-slateBorder p-4 rounded text-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-neonCyan transition-all group-hover:w-2"></div>
                  <p className="pl-2">
                    Because the KITTI cameras are perfectly parallel, <span className="text-neonCyan font-mono"><InlineMath math="R" /></span> is the Identity matrix,
                    and translation is purely along the X-axis (0.54m).
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center p-6 bg-slateBg/80 rounded-lg border border-slateBorder/50 font-mono text-lg text-white">
                <BlockMath math={String.raw`E = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & -0.54 \\ 0 & 0.54 & 0 \end{bmatrix}`} />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 03 // Interactive Epipolar Lab */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-12 bg-neonCyan" />
            <h2 className="text-2xl font-mono font-bold text-neonCyan uppercase tracking-widest flex items-center gap-2">
              <Info className="w-5 h-5" /> Section 03 // Interactive Epipolar Lab
            </h2>
          </motion.div>

          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 mb-12 relative">
            {/* Connection Line behind images */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-neonCyan/20 -z-10 hidden md:block">
              <motion.div 
                className="h-full bg-neonCyan w-1/2 rounded"
                initial={{ x: "0%" }}
                animate={{ x: isLabHovered ? "100%" : "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            <div 
              className="space-y-4 cursor-crosshair"
              onMouseEnter={() => setIsLabHovered(true)}
              onMouseLeave={() => setIsLabHovered(false)}
            >
              <div className={`lab-slate-card overflow-hidden relative transition-all duration-500 ${isLabHovered ? 'ring-2 ring-neonCyan shadow-[0_0_30px_rgba(34,211,238,0.2)]' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slateBg/80 to-transparent z-10 flex items-end p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex items-center gap-2 text-neonCyan font-mono text-xs"><MousePointer2 className="w-3 h-3" /> INTERACT</span>
                </div>
                <img src="/images/kitti_left_markers.png" alt="Left Image with Markers"
                  className="w-full opacity-90 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                
                {/* Overlay highlight logic based on hover */}
                <motion.div 
                  className="absolute inset-0 bg-neonCyan/10 mix-blend-overlay pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLabHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm font-mono text-slate-500 flex justify-between">
                <span>Step A: Identifying Feature Correspondences</span>
                <span className="text-neonCyan animate-pulse flex items-center gap-1"><MousePointer2 className="w-3 h-3"/> Hover to scan</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="lab-slate-card overflow-hidden relative">
                {/* This image is desaturated normally, and saturates/highlights when left is hovered */}
                <motion.div
                  className="absolute inset-0 z-10 bg-slateBg/40 mix-blend-color pointer-events-none"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isLabHovered ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img 
                  src="/images/kitti_right_epipolar_lines.png" 
                  alt="Right Image with Epipolar Lines"
                  className="w-full" 
                  referrerPolicy="no-referrer"
                  initial={{ filter: "brightness(0.7) contrast(1.2)" }}
                  animate={{ 
                    filter: isLabHovered ? "brightness(1.1) contrast(1.3)" : "brightness(0.7) contrast(1.2)",
                    scale: isLabHovered ? 1.02 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Scanning line effect */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-neonCyan/80 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
                  initial={{ y: -10, opacity: 0 }}
                  animate={isLabHovered ? { y: ["0%", "100%", "0%"], opacity: [0, 1, 1, 0] } : { y: -10, opacity: 0 }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
              </div>
              <p className="text-sm font-mono text-slate-500">Step B: Projecting Epipolar Constraints</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center max-w-2xl mx-auto bg-slateBg/30 p-6 rounded-lg border border-slateBorder/30 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed">
              Because the cameras are <span className="text-white font-semibold">rectified</span>,
              a feature found in the left image guarantees its matching feature will lie on the
              <span className="text-neonCyan font-semibold mx-1">exact same horizontal line</span> in the right image,
              reducing the search from 2D to 1D.
            </p>
          </motion.div>
        </motion.section>

        {/* Section 04 // Rectification & Depth */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 pb-24"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-12">
            <div className="h-0.5 w-12 bg-neonCyan" />
            <h2 className="text-2xl font-mono font-bold text-neonCyan uppercase tracking-widest flex items-center gap-2">
              <ArrowRight className="w-5 h-5" /> Section 04 // Rectification & Depth
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8 sticky top-12">
              <motion.div variants={fadeIn} className="lab-slate-card p-8 relative overflow-hidden group">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-neonCyan/5 rounded-full blur-2xl transition-all duration-700 group-hover:bg-neonCyan/10 group-hover:scale-150"></div>
                <p className="text-slate-400 mb-6 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neonCyan animate-pulse"></span>
                  The Depth Invariant
                </p>
                <div className="text-center py-6 bg-slateBg/40 rounded border border-slateBorder/50 shadow-inner">
                  <BlockMath math={String.raw`Z = \frac{f \cdot B}{d}`} />
                </div>
                <p className="text-slate-300 mt-6 leading-relaxed">
                  Depth (<span className="text-neonCyan font-mono"><InlineMath math="Z" /></span>) is inversely proportional to disparity (<span className="text-neonCyan font-mono"><InlineMath math="d" /></span>).
                  Using our KITTI constants:
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="lab-slate-card p-8 border-l-neonCyan border-l-4 bg-gradient-to-r from-slateBg to-slateSurface">
                <p className="text-slate-500 font-mono text-xs mb-3 flex items-center gap-2">
                  FINAL COMPUTATION <ArrowRight className="w-3 h-3" />
                </p>
                <div className="text-2xl font-mono text-white tracking-wider">
                  <BlockMath math={String.raw`Z = \frac{388.18}{d}`} />
                </div>
              </motion.div>
            </div>

            <div className="space-y-12">
              <motion.div variants={fadeIn} className="space-y-4 group">
                <div className="lab-slate-card overflow-hidden relative">
                  <div className="absolute inset-0 bg-neonCyan/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src="/images/kitti_disparity_heatmap.png" alt="Disparity Map" className="w-full transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-end border-b border-slateBorder/50 pb-2">
                  <p className="text-sm font-mono text-slate-400 group-hover:text-neonCyan transition-colors">Disparity Map (Pixel Shift)</p>
                  <span className="text-[10px] text-slate-600 font-mono px-2 py-1 border border-slateBorder rounded bg-slateBg">MAP_01</span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-4 group">
                <div className="lab-slate-card overflow-hidden relative">
                  <div className="absolute inset-0 bg-neonCyan/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src="/images/kitti_depth_heatmap.png" alt="Depth Map" className="w-full transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-end border-b border-slateBorder/50 pb-2">
                  <p className="text-sm font-mono text-slate-400 group-hover:text-neonCyan transition-colors">Final Computed Depth Map (Meters)</p>
                  <span className="text-[10px] text-slate-600 font-mono px-2 py-1 border border-slateBorder rounded bg-slateBg">MAP_02</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slateBorder pt-12 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-600 font-mono text-xs tracking-tighter uppercase">
            Computer Vision Series // Portfolio Version 1.0.0
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full border border-slateBorder flex items-center justify-center text-slate-500 text-xs font-mono hover:bg-slateSurface transition-colors">01</div>
            <div className="w-8 h-8 rounded-full border border-neonCyan flex items-center justify-center text-neonCyan text-xs font-mono shadow-[0_0_10px_rgba(34,211,238,0.3)] bg-neonCyan/5">02</div>
            <div className="w-8 h-8 rounded-full border border-slateBorder flex items-center justify-center text-slate-500 text-xs font-mono hover:bg-slateSurface transition-colors">03</div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
