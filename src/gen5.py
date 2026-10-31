import numpy as np
exec(open('gen3.py').read().split("np.random.seed(11)")[0])
np.random.seed(31)
# КАЧАЙСЯ: 3 качания по 1.8 с; низ — 0.9k, верх — 0.45+0.9k
it=[]
for k in range(6):
    t=0.9*k
    it+=[(t,swish(0.7,0.28)),(t+0.45,note_marimba(N[['C4','G4','D4','A4','E4','C5'][k]],1.4,0.7))]
it+=[(t,note_metal(N[m],3.0,0.6)) for t,m in [(0.45,'E5'),(2.25,'G5'),(4.05,'A5')]]
save('snd/run_swing.wav',mix(7.6,it))
save('snd/fin_swing.wav',mix(3.4,[(0.09*i,note_marimba(N[m],1.4,0.7)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.4+0.1*i,note_metal(N[m],2.6,0.6)) for i,m in enumerate(['E5','G5'])]))
# СЯДЬ: садится за 0.6 с — три шага вниз, потом виляет хвостом
it=[(0.0,note_marimba(N['G4'],1.0,0.75)),(0.18,note_marimba(N['E4'],1.0,0.75)),(0.36,note_marimba(N['C4'],1.2,0.85)),(0.36,note_metal(N['C5'],2.4,0.6))]
it+=[(0.7+0.16*k,shaker(0.35)) for k in range(5)]
save('snd/run_sit.wav',mix(2.8,it))
save('snd/fin_sit.wav',mix(3.2,[(0.08*i,note_marimba(N[m],1.3,0.7)) for i,m in enumerate(['C4','E4','G4'])]+[(0.3+0.1*i,note_metal(N[m],2.6,0.6)) for i,m in enumerate(['G4','C5','E5'])]))
# ЛЯГ: разворот на месте (1.2 с, мелкие шажки) и ложится (до 2.4 с) — спускаемся вниз, мягко
it=[(0.15*k,shaker(0.3)) for k in range(8)]
it+=[(0.3*k,note_marimba(N[m],1.0,0.6)) for k,m in enumerate(['E4','G4','E4','G4'])]
it+=[(1.25+0.22*i,note_marimba(N[m],1.4,0.7)) for i,m in enumerate(['G4','E4','D4','C4'])]+[(2.1,note_metal(N['G4'],3.0,0.55))]
save('snd/run_lie.wav',mix(5.0,it))
save('snd/fin_lie.wav',mix(3.6,[(0.12*i,note_metal(N[m],3.0,0.6)) for i,m in enumerate(['C4','E4','G4'])]+[(0.0,note_marimba(N['C4'],1.6,0.5))]))
# ВСТАНЬ: поднимается за 1.0 с — гамма вверх, наверху металлофон
it=[(0.11*i,note_marimba(N[m],1.0,0.7)) for i,m in enumerate(['C4','D4','E4','G4','A4','C5'])]+[(0.66,note_metal(N['E5'],2.6,0.7)),(0.0,swish(0.7,0.25))]
save('snd/run_stand.wav',mix(3.6,it))
save('snd/fin_stand.wav',mix(3.4,[(0.08*i,note_marimba(N[m],1.4,0.75)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.35+0.09*i,note_metal(N[m],2.6,0.65)) for i,m in enumerate(['C5','E5','G5'])]))
