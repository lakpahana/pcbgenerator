export function calculateIc(gain,beta){
    return gain/beta;
}

export function calculateIb(ic,beta){
    return ic/beta;
}

export function calculateRC(vcc,ic){
    return vcc/ic;
}

export function calculateRB(vcc,vbe,ib){
    return (vcc-vbe)/ib;
}

export function calculateCin(rb, cutoff){
    const f_L = 1 / (2 * Math.PI * rb * cutoff);
    return 1 / (2 * Math.PI * f_L * rb);
}

export function calculateCout(rc, bandwidth){
    return 1 / (2 * Math.PI * bandwidth * rc);
}