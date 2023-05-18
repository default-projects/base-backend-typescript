export const Now = () => Math.round(new Date().getTime() / 1000);

export const copyObject = (object: any) => {
	return JSON.parse(JSON.stringify(object))
}