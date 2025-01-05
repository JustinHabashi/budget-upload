from setuptools import setup, find_packages

setup(
    name="budget-upload",
    version="0.1.0",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    install_requires=[
        "pandas",
        "google-auth",
        "google-auth-oauthlib",
        "google-auth-httplib2",
        "google-api-python-client",
        "google-auth-oauthlib",
        "google-auth-httplib2",
        "google-api-python-client",
    ],
    entry_points={
        'console_scripts': [
            'budget-upload=main:main',
        ],
    },
)