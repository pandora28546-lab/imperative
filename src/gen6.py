import numpy as np
exec(open('gen3.py').read().split("np.random.seed(11)")[0])
np.random.seed(41)
# ТАНЦУЙ: 8 долей по 0.4 с (3.2 с) — весёлый мотив
B=0.4
mel=['C5','E5','G5','E5','A5','G5','E5','C5']
bass=['C4','G3','C4','G3','A3','E4','G3','C4']
it=[]
for k in range(8):
    t=k*B
    it+=[(t,note_marimba(N[bass[k]],0.8,0.7)),(t+0.2,note_marimba(N[mel[k]],0.7,0.6)),(t,shaker(0.3)),(t+0.2,shaker(0.45))]
    if k%2==1: it+=[(t,woodblock(680,0.45))]
it+=[(t,note_metal(N[m],2.0,0.55)) for t,m in [(0,'E5'),(1.6,'G5')]]
save('snd/run_dance.wav',mix(5.2,it))
save('snd/fin_dance.wav',mix(3.4,[(0.08*i,note_marimba(N[m],1.4,0.75)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.35+0.09*i,note_metal(N[m],2.6,0.65)) for i,m in enumerate(['E5','G5','C6'])]))
