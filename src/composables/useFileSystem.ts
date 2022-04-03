interface blockObject {
  comp: () => Promise<{ [key: string]: any }>;
  name: string;
}

export const readBlocks = () => {
  let result: blockObject[] = [];
  //@ts-ignore
  const requireComponent = import.meta.glob("../../blocks/*/index.vue");
  const BlockArr = Object.keys(requireComponent);

  for (let i = 0; i < BlockArr.length; i++) {
    let obj = {
      comp: requireComponent[BlockArr[i]],
      name: BlockArr[i].split("/")[3],
    };

    result.push(obj);
  }

  return result;
};

export const getBlockNavigations = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Navigations/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Navigations/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/Navigations/${pos}/image.png`))
          .default,
        index: pos,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockHeaders = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Headers/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Navigations/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/Navigations/${pos}/image.png`))
          .default,
        index: pos,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
