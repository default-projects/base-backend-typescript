export const Now = () => Math.round(new Date().getTime() / 1000);

const copyObject = (object: any) => {
	return JSON.parse(JSON.stringify(object))
}

export { copyObject };