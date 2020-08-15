---
slug: sars-neural-network
title: SARS-CoV-2 Lung CT Neural Network Classifier
featured: false
image: ../../img/sars.jpg
label: IFL Science
templateKey: project
link:
linkTitle:
linkTarget:
---
Computed tomography (CT) scans of SARS-CoV-2 patients have revealed key hallmarks of the disease, including ground-glass opacities, consolidation, and septal thickening in the lungs. However, due to the range of pathology severity a patient may demonstrate, current forms of lung CT scan analysis (performed by a physician) may produce ambiguous findings. Our project proposes the generation of a neural network capable of classifying COVID-19 and non-COVID-19 lung CT scans using a database formed by a team of researchers at UCSD. We will develop this in Python using the TensorFlow and/or Keras libraries. Such an algorithm would potentially help determine the number of early undetected coronavirus cases and assist with the diagnosis of patients moving forward. Shortcomings of our project include inability to distinguish between lung CT scans of patients with SARS-CoV-2 and other diseases/viruses that exhibit similar pathologies. Correcting for this would involve a more comprehensive analysis (i.e. considering the shape and distribution of ground-glass opacities as opposed to their presence or absence) which may serve as a secondary objective to our project.