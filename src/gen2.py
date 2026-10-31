import numpy as np, wave
exec(open('gen.py').read().split("N={")[0])   # reuse synth helpers
def note_marimba(f,dur=1.0,amp=1.0):
    n=int(dur*SR); t=np.arange(n)/SR
    s=np.sin(2*np.pi*f*t)*env_exp(n,0.32)+0.25*np.sin(2*np.pi*f*3.93*t)*env_exp(n,0.05)+0.08*np.sin(2*np.pi*f*9.9*t)*env_exp(n,0.015)
    return s*np.minimum(1,t/0.002)*amp
def shaker(amp=1.0):
    n=int(0.09*SR); t=np.arange(n)/SR; nz=np.random.randn(n)
    hp=nz-np.convolve(nz,np.ones(8)/8,'same')
    e=np.minimum(1,t/0.015)*np.exp(-t/0.03)
    return hp*e*amp
def woodblock(f=620,amp=1.0):
    n=int(0.2*SR); t=np.arange(n)/SR
    s=np.sin(2*np.pi*f*t)*env_exp(n,0.035)+0.4*np.sin(2*np.pi*f*2.7*t)*env_exp(n,0.012)
    return (s+np.random.randn(n)*env_exp(n,0.003)*0.2)*amp
N={'G3':196.0,'A3':220.0,'C4':261.63,'D4':293.66,'E4':329.63,'G4':392.0,'A4':440.0,'C5':523.25,'D5':587.33,'E5':659.25,'G5':783.99,'A5':880.0,'C6':1046.5}
B=0.3; L=[B*k for k in range(10)]
mel=['C5','E5','G5','E5','C5','E5','G5','A5','G5','A5']
np.random.seed(5)
# A: metallophone + kalimba (kalimba answers between steps, lower)
off=['G4','C5','G4','C5','G4','C5','E5','C5','E5','C5']
it=[(t,note_metal(N[m],amp=0.8 if i%2 else 1)) for i,(t,m) in enumerate(zip(L,mel))]
it+=[(t+0.15,note_kalimba(N[m],amp=0.42)) for t,m in zip(L,off)]
save('snd/run_mk.wav',mix(5.0,it))
fin=[(0.09*i,note_metal(N[m],2.8,0.85)) for i,m in enumerate(['C4','E4','G4','C5'])]
fin+=[(0.42+0.07*i,note_kalimba(N[m],2.2,0.5)) for i,m in enumerate(['C5','E5','G5'])]
save('snd/fin_mk.wav',mix(3.4,fin))
# B: metallophone + marimba + shaker
bass=['C4','G3','C4','G3','A3','E4','C4','G3','A3','C4']
it=[(t,note_metal(N[m],amp=0.75 if i%2 else 0.95)) for i,(t,m) in enumerate(zip(L,mel))]
it+=[(t,note_marimba(N[m],amp=0.85)) for t,m in zip(L,bass)]
it+=[(0.15*k,shaker(0.35 if k%2 else 0.55)) for k in range(0,20)]
save('snd/run_mm.wav',mix(5.0,it))
fin=[(0.07*i,note_marimba(N[m],1.4,0.8)) for i,m in enumerate(['C4','E4','G4','C5'])]
fin+=[(0.35+0.08*i,note_metal(N[m],2.8,0.75)) for i,m in enumerate(['C5','E5','G5','C6'])]
save('snd/fin_mm.wav',mix(3.6,fin))
# C: metallophone + wood block (block = paws, metallophone every other step)
it=[(t,woodblock(620 if i%2 else 540,0.9)) for i,t in enumerate(L)]
it+=[(t,note_metal(N[m],amp=0.9)) for i,(t,m) in enumerate(zip(L,mel)) if i%2==0 or i==9]
save('snd/run_mw.wav',mix(5.0,it))
fin=[(0.09*i,note_metal(N[m],2.8,0.85)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.4,woodblock(700,0.6)),(0.55,woodblock(760,0.5))]
save('snd/fin_mw.wav',mix(3.4,fin))
