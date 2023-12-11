export type projectType = {
	slug: string
	path: string
	component: module
	metadata: projectMetadataType
}

export type projectMetadataType = {
	title: string
	categories: categoryType[]
	tags: tagType[]
	dateCreated: Date
	dateUpdated: Date | undefined
}

export type categoryType = { name: string; icon: string }
export type tagType = { name: string; colorHex: string }

export const getSlugFromPath = (path: string) => {
	const arr = path.split('/')
	return arr[arr.length - 1].split('.')[0]
}

export const getProjects = () => {
	const glob_import = import.meta.glob('/src/components/_examples/*.html', {
		eager: true
	})
	const projects_entries = Object.entries(glob_import)
	const projects = projects_entries.map(([path, module]: any): projectType => {
		return {
			slug: getSlugFromPath(path),
			path,
			component: module.default,
			metadata: module.metadata
		}
	})

	return projects
}

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project.path) === slug
	})
}

const orderProjects = (projects: projectType[]) => {
	projects = projects.sort((a, b) => {
		if (a.metadata.dateUpdated !== undefined && b.metadata.dateUpdated === undefined) {
			return b.metadata.dateCreated.getTime() - a.metadata.dateUpdated.getTime()
		} else if (a.metadata.dateUpdated === undefined && b.metadata.dateUpdated !== undefined) {
			return b.metadata.dateUpdated.getTime() - a.metadata.dateCreated.getTime()
		} else if (a.metadata.dateUpdated !== undefined && b.metadata.dateUpdated !== undefined) {
			return b.metadata.dateUpdated.getTime() - a.metadata.dateUpdated.getTime()
		} else {
			return b.metadata.dateCreated.getTime() - a.metadata.dateCreated.getTime()
		}
	})
	return projects
}

const orderTags = (tags: tagType[]) => {
	return tags.sort((a, b) => {
		return a.name.localeCompare(b.name)
	})
}
