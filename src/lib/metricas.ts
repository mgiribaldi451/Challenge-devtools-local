/**
 * Recibe todos los servidores que alertaron el ultimos y resuelve el top 3
 * @param obj Todos los servidores alertados el ultimo mes
 * @returns 
 */
function getServerLastMonth(obj: any) {
  var ordenar = obj
    .reduce((memo: any, curr: any) => {
      const itemIndex = memo.findIndex((e: any) => e.name === curr);
      if (itemIndex >= 0) memo[itemIndex].count++;
      else
        memo.push({
          name: curr,
          count: 1,
        });
      return memo;
    }, [])
    .sort((a: any, b: any) => (a.count < b.count ? 1 : -1))
    .slice(0, 3);

  return ordenar;
}

export default { getServerLastMonth };
