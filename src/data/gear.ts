/* Gear data — the studio inventory, grouped by category */

export interface GearItem {
  name: string;
  tag: string;
  qty?: string;
}

export interface GearCategory {
  label: string;
  items: GearItem[];
}

export const GEAR_DATA: Record<string, GearCategory> = {
  microphones: {
    label: 'Microphones',
    items: [
      { name: 'Neumann U 87 Ai', tag: 'Large Diaphragm' },
      { name: 'JTS JS-1 Tube', tag: 'Tube Condenser' },
      { name: 'Aston Origin', tag: 'Cardioid Condenser' },
      { name: 'Shure Beta 58A', tag: 'Vocal Dynamic' },
      { name: 'Shure Super 55', tag: 'Vocal Dynamic' },
      { name: 'Shure PGA52', tag: 'Kick Drum' },
      { name: 'Shure PGA56', tag: 'Snare / Tom', qty: 'x2' },
      { name: 'Shure PGA57', tag: 'Instrument' },
      { name: 'Shure PGA81', tag: 'Overhead' },
      { name: 'TC Helicon MP-75', tag: 'Live Vocal' },
    ],
  },
  software: {
    label: 'Recording',
    items: [
      { name: 'Logic Pro', tag: 'Apple DAW' },
      { name: 'Cubase', tag: 'Steinberg DAW' },
    ],
  },
  monitoring: {
    label: 'Monitoring',
    items: [
      { name: 'Genelec 8050B', tag: 'Far-Field' },
      { name: 'Adam Audio T7V', tag: 'Near-Field' },
    ],
  },
  outboard: {
    label: 'Outboard & Mixing',
    items: [
      { name: 'StudioLive 32.4.2AI', tag: 'PreSonus Mixer' },
      { name: 'Steinberg UR824', tag: 'Audio Interface', qty: 'x2' },
      { name: 'Manley Core Reference', tag: 'Tube Channel Strip' },
      { name: 'Behringer HA8000 V2', tag: 'Headphone Amp' },
      { name: 'Fractal Audio Axe-Fx II', tag: 'Mark II Modeler' },
      { name: 'Quad Cortex', tag: 'Neural DSP' },
    ],
  },
  guitars: {
    label: 'Guitars & Bass',
    items: [
      { name: 'Gibson Les Paul Classic', tag: '2015' },
      { name: 'Fender American Stratocaster', tag: '1988' },
      { name: 'PRS SE Paul Allender', tag: 'Signature' },
      { name: 'Godin LGXT', tag: 'MIDI Guitar' },
      { name: 'Martin & Co. DCPA5', tag: 'Acoustic — Black' },
      { name: 'Fender Jazz Bass', tag: '4-String Bass' },
      { name: 'Taylor 354ce', tag: '12 String Acoustic' },
      { name: 'Duesenberg Fairytale', tag: 'Lap Steel' },
    ],
  },
  keys: {
    label: 'Keys & Synths',
    items: [
      { name: 'Korg Nautilus', tag: 'Workstation' },
      { name: 'Nord Electro 6', tag: 'Stage Keyboard' },
      { name: 'Behringer DeepMind 6', tag: 'Analog Synth' },
    ],
  },
  drums: {
    label: 'Drums',
    items: [{ name: 'Mapex MA529SF Mars', tag: 'Rock Shell Kit' }],
  },
  amps: {
    label: 'Amplifiers',
    items: [
      { name: 'Fender Rumble 40', tag: 'Bass Combo' },
      { name: 'Line 6 Powercab 212 Plus', tag: 'FRFR Cab' },
      { name: 'Ampeg GVT52-112', tag: 'Tube Combo' },
      { name: 'Marshall DSL40CR', tag: 'Tube Combo' },
    ],
  },
};
