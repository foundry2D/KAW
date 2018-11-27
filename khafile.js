let project = new Project('KAW');
project.addAssets('Assets/**');
project.addShaders('Shaders/**');
project.addSources('Sources');
project.addLibrary('zui');
project.addLibrary('ae');
resolve(project);
