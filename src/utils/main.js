export function fileTypeToTag(files){
		let tags = []
		files.forEach(fileType => {
			tags.push(fileType.split("/")[1])
		})
		return tags
}